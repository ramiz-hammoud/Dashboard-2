-- 001_init.sql
-- Basic schema for F&BALANCE minimal scaffold

create extension if not exists "pgcrypto";

-- profiles
create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  role text not null default 'viewer',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- brands
create table if not exists brands (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  brand_code text unique not null,
  city text,
  country text,
  currency text,
  status text default 'active',
  notes text,
  created_by uuid references profiles(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- example file table
create table if not exists files (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid references brands(id) on delete cascade,
  path text not null,
  filename text not null,
  size bigint,
  mime text,
  metadata jsonb,
  uploaded_by uuid references profiles(id) on delete set null,
  created_at timestamptz default now()
);

-- activity log
create table if not exists activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor uuid references profiles(id) on delete set null,
  action text not null,
  entity_type text,
  entity_id uuid,
  brand_id uuid references brands(id) on delete set null,
  metadata jsonb,
  created_at timestamptz default now()
);

-- Policies: keep minimal and instruct user to extend

-- Make sure anon role cannot read sensitive tables by default. Example RLS for brands:
-- Enable row level security and add a simple policy allowing only members (this requires you to create a brand_members table and policies)

-- For now we enable RLS placeholders to be filled by operator

ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- Policy allowing read for all authenticated users (replace with proper membership policy later)
CREATE POLICY "authenticated_read" ON brands
  FOR SELECT USING (auth.role() IS NOT NULL);
