# ReviewPoint — MVP starter

ReviewPoint is a review-platform starter for a UK/European launch. It includes a responsive homepage, company directory, company detail pages, Supabase-ready authentication/database integration, and a Stripe Checkout route for paid business claims.

## Important status

This is the **first development build**, not a live production service. It includes the website source and integration points. Real customer accounts, stored reviews, paid claims, email delivery, and deployment become active only after you connect your own Supabase and Stripe accounts and configure their keys.

## Requirements

- Node.js 20.9 or newer
- A Supabase project
- A Stripe account (use test mode first)

## Run locally

1. Extract the ZIP.
2. Open a terminal in the `reviewpoint` folder.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Add your Supabase project URL and anon key.
6. Add Stripe test keys when ready.
7. Run `npm run dev`.
8. Open `http://localhost:3000`.

## Supabase setup

1. Create a Supabase project.
2. Open its SQL Editor.
3. Run the contents of `supabase/schema.sql`.
4. In Authentication settings, enable email/password sign-up and configure your site URL.
5. Copy the project URL and anon key into `.env.local`.

The schema creates profiles, companies, reviews, and paid business claims. Row-level security prevents users from editing other users' reviews and prevents businesses from claiming profiles without going through the intended payment flow. For a production launch, add a Stripe webhook that confirms successful payment before changing a claim to `approved`; never trust a browser redirect as proof of payment.

## Stripe setup

1. Create a product such as **ReviewPoint Business Profile Claim**.
2. Create a one-time price (initially set your own price).
3. Put the Stripe secret key and price ID in `.env.local`.
4. Use Stripe test mode before accepting real payments.

The checkout route creates a Stripe Checkout Session. Production payment activation must be completed with a verified Stripe webhook and a business-claim review workflow.

## Before public launch

- Add verified Stripe webhook handling and refund/cancellation procedures.
- Add email verification, password reset and abuse rate-limits.
- Add a robust moderation/reporting queue and an appeal process.
- Add evidence-handling rules, malware scanning and private storage if uploads are introduced.
- Add GDPR privacy notices, cookie controls where required, data export/deletion workflows, and a lawful basis/retention schedule.
- Publish Terms of Use, Review Policy, Business Terms and Privacy Policy reviewed by a UK/EU-qualified lawyer.
- Do not sell ranking positions or remove genuine negative reviews in exchange for payment.
- Add backups, monitoring, security testing and accessibility testing.
- Check the ReviewPoint name and relevant domains/trademarks before committing to the brand.

## Initial demo content

The company cards shown on the homepage are clearly marked as sample/demo listings. Replace them with real business data only when you have a reliable sourcing and correction process.
