## FamilyVet Clinic (Next.js + Tailwind)

Landing page for a family vet clinic (blue/white), with:
- anchored navigation (scroll to sections)
- hero appointment form (sends email via Resend)
- map embed for: Strada Maria Rosetti 26A, București 020487
- sticky bottom call bar: `0720.123.123`

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resend configuration

Copy env template and fill values:

```bash
copy .env.example .env.local
```

Required variables:
- `RESEND_API_KEY`
- `APPOINTMENT_TO_EMAIL`

The form sends to `POST /api/appointment`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

When deploying, remember to set the env vars in Vercel project settings.
