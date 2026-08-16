# F&BALANCE Control Hub — Scaffolded Starter

This repository is a minimal, deployable scaffold implementing the core foundation for the F&BALANCE Control Hub as requested.

What this commit includes:

- Next.js App Router + TypeScript (strict) scaffold
- Tailwind CSS setup
- Supabase client integration (auth + basic queries)
- Login page (email/password)
- Brands list page (protected)
- Basic DB migration (profiles, brands, files, activity_logs)
- .env.example and setup instructions

What remains to implement (prioritized):

1. Full RBAC and Row Level Security policies (brand_members table and strict RLS policies)
2. File storage integration (Supabase Storage upload/download, signed URLs)
3. All cost-control record types and imports/exports
4. PDF generation and .fnbalance package export/import
5. Tests and seed data script
6. Full UI (shadcn/ui components) and charts (Recharts)

Quickstart (local):

1. Create a Supabase project and a PostgreSQL database.
2. Run the SQL migrations in `db/migrations/001_init.sql` (via Supabase SQL editor or psql).
3. Copy `.env.example` to `.env.local` and fill the values.
4. Install dependencies: `npm install`
5. Run locally: `npm run dev`
6. Open http://localhost:3000

Vercel deployment:

- Add the environment variables from `.env.example` in your Vercel project settings.
- Deploy the repository. Ensure build environment has the env vars.

Supabase setup notes:

- Create a Supabase project at https://app.supabase.com
- Create the tables and RLS policies using the SQL migration file.
- Configure Supabase Auth (enable email/password).
- Create storage buckets (e.g., `brands`) and configure public/private rules.

Next steps I can implement for you on request:

- Full brand CRUD UI and backend, with logo upload to Supabase Storage
- Brand membership and RLS enforcement for every table
- File repository with previews, thumbnails, drag-and-drop upload, and multi-download ZIP
- Cost-control modules, import workflow, and export generators
- PDF report generation and `.fnbalance` ZIP export/import
- Tests, seed data, and CI checks for type/lint/build

If you want me to continue, tell me which feature to implement next (e.g., "Implement brand membership and strict RLS policies" or "Add file uploads and previews for brand repositories").
