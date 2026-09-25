# Ardafis Partners — Website

The marketing site for Ardafis Partners, built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
cp .env.example .env.local   # already done in this repo; edit values as needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example` for the full list. None are required to run the site locally —
the contact form works without them (it just logs submissions instead of emailing them).

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Used for metadata/canonical links. Defaults to `https://ardafispartners.com` if unset. |
| `RESEND_API_KEY` | No | Enables the contact form to actually send email via [Resend](https://resend.com). |
| `CONTACT_EMAIL_TO` | No | Destination inbox for contact form submissions. |
| `GOOGLE_SITE_VERIFICATION` | No | Verifies domain ownership in Google Search Console (Settings → Ownership verification → HTML tag → paste just the `content` value). |
| `BING_SITE_VERIFICATION` | No | Same idea for Bing Webmaster Tools. |

## Deploying — GitHub + Vercel (hobby project)

1. **Push this repo to GitHub:**
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. **Import into Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
   - Select this repository. Vercel auto-detects Next.js — no build settings need to change.
3. **Add environment variables in Vercel** (Project Settings → Environment Variables), if you want the contact form to send real emails:
   - `NEXT_PUBLIC_SITE_URL` → your production domain (e.g. `https://ardafispartners.com`)
   - `RESEND_API_KEY` → your Resend API key
   - `CONTACT_EMAIL_TO` → the inbox that should receive inquiries
4. **Deploy.** Vercel builds and gives you a `*.vercel.app` URL immediately.
5. **Connect your own domain** (optional): Project Settings → Domains → add `ardafispartners.com`, then update your domain's DNS records as Vercel instructs.

Every push to `main` redeploys automatically once connected.
