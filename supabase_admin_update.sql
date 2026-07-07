-- ==============================================================================
-- Run this in your Supabase SQL Editor to update your admin capabilities
-- ==============================================================================

-- 1. Update the get_all_users function to also return the user's plan and their registered IPs
drop function if exists public.get_all_users(text);

create or replace function public.get_all_users(gatephrase text)
returns table(id uuid, name text, email text, phone text, role text, plan_type text, allowed_ips text[], created_at timestamp with time zone)
language plpgsql
security definer
as $$
begin
  if gatephrase != 'NEET@2026#123' then
    raise exception 'Unauthorized';
  end if;
  return query select u.id, u.name, u.email, u.phone, u.role, u.plan_type, u.allowed_ips, u.created_at 
  from public.neet_users u 
  order by u.created_at desc;
end;
$$;


-- 2. Create a new function to completely clear/reset a user's registered devices (IPs)
create or replace function public.clear_user_ips(gatephrase text, target_user_id uuid)
returns void
language plpgsql
security definer
as $$
begin
  if gatephrase != 'NEET@2026#123' then
    raise exception 'Unauthorized';
  end if;
  update public.neet_users 
  set allowed_ips = array[]::text[]
  where public.neet_users.id = target_user_id;
end;
$$;
