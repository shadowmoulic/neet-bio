-- ==============================================================================
-- Run this in your Supabase SQL Editor to set up the users and roles table
-- ==============================================================================

-- 1. Create the neet_users table to store user roles and personal details
create table public.neet_users (
  id uuid references auth.users not null primary key,
  name text,
  email text,
  phone text,
  role text not null default 'free' check (role in ('free', 'paid')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS) on neet_users
alter table public.neet_users enable row level security;

-- 3. Create a policy allowing a user to read ONLY their own row
create policy "Users can view their own data"
  on public.neet_users for select
  using ( auth.uid() = id );

-- 4. Create a policy allowing a user to update ONLY their own row (Optional)
-- Only allowing SELECT is safer for manual upgrades. Admins can update it via dashboard.

-- 5. Create a function to automatically insert a 'free' row when a new user signs up
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

-- 6. Drop the trigger if it already exists, then create the trigger on auth.users
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
