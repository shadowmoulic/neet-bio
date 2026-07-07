-- ==============================================================================
-- Run this in your Supabase SQL Editor to set up the users and roles table
-- ==============================================================================

-- 1. Create the neet_users table to store user roles and personal details
create table if not exists public.neet_users (
  id uuid references auth.users not null primary key,
  name text,
  email text,
  phone text,
  role text not null default 'free' check (role in ('free', 'paid')),
  plan_type text check (plan_type in ('class11', 'class12', 'both')),
  subscription_id text,
  allowed_ips text[] default array[]::text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS) on neet_users
alter table public.neet_users enable row level security;

-- 3. Create a policy allowing a user to read ONLY their own row
drop policy if exists "Users can view their own data" on public.neet_users;
create policy "Users can view their own data"
  on public.neet_users for select
  using ( auth.uid() = id );

-- 4. Create a function to automatically insert a 'free' row when a new user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.neet_users (id, name, email, phone, role)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name',
    new.email,
    new.raw_user_meta_data->>'phone',
    'free'
  );
  return new;
end;
$$;

-- 5. Drop the trigger if it already exists, then create the trigger on auth.users
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ==============================================================================
-- ADMIN PORTAL FUNCTIONS
-- ==============================================================================

-- 6. Secure function to fetch all users (requires gatephrase)
create or replace function public.get_all_users(gatephrase text)
returns table(id uuid, name text, email text, phone text, role text, created_at timestamp with time zone)
language plpgsql
security definer
as $$
begin
  if gatephrase != 'NEET@2026#123' then
    raise exception 'Unauthorized';
  end if;
  return query select u.id, u.name, u.email, u.phone, u.role, u.created_at from public.neet_users u order by u.created_at desc;
end;
$$;

-- 7. Secure function to update a user's subscription (requires gatephrase)
create or replace function public.update_user_subscription(gatephrase text, target_user_id uuid, new_role text, new_plan_type text, new_sub_id text)
returns void
language plpgsql
security definer
as $$
begin
  if gatephrase != 'NEET@2026#123' then
    raise exception 'Unauthorized';
  end if;
  update public.neet_users 
  set role = new_role, plan_type = new_plan_type, subscription_id = new_sub_id
  where public.neet_users.id = target_user_id;
end;
$$;

-- 8. Secure function to add an allowed IP
create or replace function public.add_user_ip(gatephrase text, target_user_id uuid, new_ip text)
returns void
language plpgsql
security definer
as $$
begin
  if gatephrase != 'NEET@2026#123' then
    raise exception 'Unauthorized';
  end if;
  update public.neet_users 
  set allowed_ips = array_append(allowed_ips, new_ip)
  where public.neet_users.id = target_user_id;
end;
$$;

-- ==============================================================================
-- PURCHASES LOGGING
-- ==============================================================================

-- 9. Create the neet_purchases table to store payment transaction details
create table if not exists public.neet_purchases (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.neet_users(id) on delete cascade not null,
  razorpay_subscription_id text,
  razorpay_payment_id text not null,
  razorpay_signature text not null,
  amount numeric,
  plan text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) on neet_purchases
alter table public.neet_purchases enable row level security;

-- Create policy to allow users to view only their own purchase history
drop policy if exists "Users can view their own purchases" on public.neet_purchases;
create policy "Users can view their own purchases"
  on public.neet_purchases for select
  using ( auth.uid() = user_id );

-- Create policy to allow users to insert their own purchases
drop policy if exists "Users can insert their own purchases" on public.neet_purchases;
create policy "Users can insert their own purchases"
  on public.neet_purchases for insert
  with check ( auth.uid() = user_id );

