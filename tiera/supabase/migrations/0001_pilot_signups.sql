-- Pilot sign-ups from the website. Minimum data: name, WhatsApp number, business type, consent.
-- Personal data under the Nigeria Data Protection Act 2023. Delete rows on request and after the pilot.

create table if not exists public.pilot_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  whatsapp text not null unique check (whatsapp ~ '^\+234[789][01][0-9]{8}$'),
  business_type text not null check (char_length(business_type) <= 60),
  consent boolean not null check (consent),
  created_at timestamptz not null default now()
);

alter table public.pilot_signups enable row level security;

-- The website (anon key) may insert. Nobody with the anon key can read, update or delete.
drop policy if exists "anon can sign up" on public.pilot_signups;
create policy "anon can sign up" on public.pilot_signups
  for insert to anon with check (consent);
