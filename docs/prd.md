# PRD — FamilyVet Clinic Landing Page

## Goal
Build a **blue/white**, professional, elegant landing page for a family vet clinic that:
- Showcases **services** and **prices**
- Has a **hero appointment form** that sends an email via **Resend**
- Includes a **map** for: Strada Maria Rosetti 26A, București 020487
- Includes a **sticky bottom call bar** with `0720.123.123` and the message **"call to make an appointment"**
- Uses the provided images from the project folders
- Is ready to deploy later via **GitHub + Vercel**

## Target audience
- Pet owners (dogs/cats) in București who want quick, trustworthy veterinary care

## Requirements (Functional)
- **Top bar** shows:
  - social media links (Facebook/Instagram)
  - phone number
  - address
- **Main menu** scrolls to sections:
  - Home, Services, Prices, Testimonials, Contact
- **Hero appointment form** fields:
  - name, phone, email, message, send button
  - on submit → POST to API route → email sent via Resend
  - show success/error feedback
- **Services section** with 3–6 service cards
- **Prices section** with service/price list
- **Testimonials section** with reviewer photos from `reviews/`
- **Contact section**:
  - embedded map to the given address
  - repeated address + phone
- **Sticky bottom bar**:
  - visible on all pages
  - includes phone number and “call to make an appointment”
  - click to call (`tel:`)

## Requirements (Non-functional)
- **Next.js App Router + Tailwind**
- Good Lighthouse baseline: responsive, accessible labels, optimized images
- No secrets committed; Resend configuration via environment variables

## Content/Design guidelines
- Primary palette: **blue + white** (clean, clinical)
- Typography: modern sans (default Next font ok)
- Professional layout: lots of whitespace, soft shadows, rounded corners
- Text logo: **FamilyVet Clinic**

## Data / Assets
- Clinic images: `vet-images/*.jpg`
- Review images: `reviews/*.jpg`

## Email workflow (Resend)
- Environment variables:
  - `RESEND_API_KEY`
  - `APPOINTMENT_TO_EMAIL` (destination inbox)
- API:
  - `POST /api/appointment`
  - JSON body: `{ name, phone, email, message }`
  - Sends email to `APPOINTMENT_TO_EMAIL`, reply-to is user email

## Acceptance criteria
- All nav links scroll to correct sections
- Form validates required fields; successful submission shows success message
- Email arrives in destination inbox via Resend
- Map renders and points to the specified address
- Sticky call bar visible and dialable on mobile
- Uses the provided local images (no placeholders)

## Deployment notes (later)
- Push to GitHub
- Vercel import and set env vars (`RESEND_API_KEY`, `APPOINTMENT_TO_EMAIL`)

