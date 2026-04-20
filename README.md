# FamilyVet Clinic — Landing Page

This repository contains a **Next.js + Tailwind** landing page for a family vet clinic.

## Project structure

- `web/` — Next.js app
- `vet-images/` — source clinic images (originals)
- `reviews/` — source testimonial images (originals)
- `docs/prd.md` — product requirements doc

## Run locally

```bash
cd web
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Email (Resend) setup

1. Copy env template:

```bash
cd web
copy .env.example .env.local
```

2. Set:
   - `RESEND_API_KEY`
   - `APPOINTMENT_TO_EMAIL`

## Deploy (later)

- **GitHub (source control)**: push this repository to GitHub.
- **Vercel (recommended, full functionality)**:
  - Import the GitHub repo in Vercel
  - Add environment variables:
    - `RESEND_API_KEY`
    - `APPOINTMENT_TO_EMAIL`
- **GitHub Pages (static preview)**:
  - This repo includes a workflow that exports a static site from `web/` and deploys it to GitHub Pages.
  - Note: GitHub Pages cannot run the server API (`POST /api/appointment`), so the appointment form is disabled on the Pages build.

