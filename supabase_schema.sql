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


-- ==============================================================================
-- CHAPTERS & LEARNING CONTENT
-- ==============================================================================

-- 10. Create the neet_chapters table to store dynamically loaded learning data
create table if not exists public.neet_chapters (
  id text primary key,
  num text not null,
  title text not null,
  subtitle text,
  color text,
  color_d text,
  glyph text,
  notes jsonb default '[]'::jsonb,
  mnemonics jsonb default '[]'::jsonb,
  flashcards jsonb default '[]'::jsonb,
  recall jsonb default '[]'::jsonb,
  mcqs jsonb default '[]'::jsonb,
  match jsonb default '[]'::jsonb,
  pathways jsonb default '[]'::jsonb,
  boss jsonb default '[]'::jsonb,
  count_flashcards integer default 0,
  count_mcqs integer default 0,
  count_mnemonics integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) on neet_chapters
alter table public.neet_chapters enable row level security;

-- Create policy allowing anyone to read preview chapters (e.g. biotech, plant, animal, division) 
-- and allow paid users to view all chapters.
drop policy if exists "Chapters are viewable by paid users or free previews" on public.neet_chapters;
create policy "Chapters are viewable by paid users or free previews"
  on public.neet_chapters for select
  using (
    id in ('biotech_principles', 'ch9', 'animal', 'brain_divisionlab01cellcyclehtml')
    or exists (
      select 1 from public.neet_users
      where public.neet_users.id = auth.uid()
      and public.neet_users.role = 'paid'
    )
  );

-- ==============================================================================
-- PROGRAMMATIC SEO ARTICLES & BLOGS
-- ==============================================================================

-- 11. Create the neet_posts table to store article details for programmatic SEO
create table if not exists public.neet_posts (
  id uuid default gen_random_uuid() primary key,
  slug text not null unique,
  title text not null,
  content text not null,
  seo_title text,
  seo_description text,
  seo_keywords text,
  tags text,
  hero_image text,
  is_published boolean default false not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on neet_posts
alter table public.neet_posts enable row level security;

-- Policy to allow public reading of published posts
drop policy if exists "Anyone can read published posts" on public.neet_posts;
create policy "Anyone can read published posts"
  on public.neet_posts for select
  using ( is_published = true );

-- Policy to allow authenticated select (for admin preview)
drop policy if exists "Authenticated users can read all posts" on public.neet_posts;
create policy "Authenticated users can read all posts"
  on public.neet_posts for select
  using ( auth.role() = 'authenticated' );

-- RPC to upsert blog posts (requires gatephrase)
create or replace function public.save_post(
  gatephrase text,
  post_id uuid,
  post_slug text,
  post_title text,
  post_content text,
  post_seo_title text,
  post_seo_desc text,
  post_seo_keywords text,
  post_tags text,
  post_hero_image text,
  post_is_published boolean
)
returns uuid
language plpgsql
security definer
as $$
declare
  resolved_id uuid;
begin
  if gatephrase != 'NEET@2026#123' then
    raise exception 'Unauthorized';
  end if;

  resolved_id := post_id;
  if resolved_id is null then
    resolved_id := gen_random_uuid();
  end if;

  insert into public.neet_posts (
    id, slug, title, content, seo_title, seo_description, seo_keywords, tags, hero_image, is_published, updated_at
  ) values (
    resolved_id, post_slug, post_title, post_content, post_seo_title, post_seo_desc, post_seo_keywords, post_tags, post_hero_image, post_is_published, now()
  )
  on conflict (id) do update set
    slug = excluded.slug,
    title = excluded.title,
    content = excluded.content,
    seo_title = excluded.seo_title,
    seo_description = excluded.seo_description,
    seo_keywords = excluded.seo_keywords,
    tags = excluded.tags,
    hero_image = excluded.hero_image,
    is_published = excluded.is_published,
    updated_at = now();

  return resolved_id;
end;
$$;

-- RPC to delete blog posts (requires gatephrase)
create or replace function public.delete_post(gatephrase text, post_id uuid)
returns void
language plpgsql
security definer
as $$
begin
  if gatephrase != 'NEET@2026#123' then
    raise exception 'Unauthorized';
  end if;
  
  delete from public.neet_posts where id = post_id;
end;
$$;

-- ==============================================================================
-- PUBLIC METADATA FUNCTION
-- ==============================================================================

-- 12. Secure function to fetch chapter skeleton metadata bypassing RLS
create or replace function public.get_chapter_metadata()
returns table(
  id text, 
  num text, 
  title text, 
  subtitle text, 
  color text, 
  color_d text, 
  glyph text, 
  count_flashcards int, 
  count_mcqs int, 
  count_mnemonics int
)
language sql
security definer
as $$
  select 
    id, 
    num, 
    title, 
    subtitle, 
    color, 
    color_d, 
    glyph, 
    count_flashcards, 
    count_mcqs, 
    count_mnemonics 
  from public.neet_chapters;
$$;
