# CUDA Website Deployment Guide

## Recommended Stack

- Frontend: Vite static build from `dist/`
- Hosting: Vercel, Netlify, Cloudflare Pages, or cPanel static hosting
- Domain: `www.cudasls.co.ke`
- SSL: Force HTTPS with automatic certificate renewal

## Before Going Live

1. Point the domain or subdomain to the hosting provider.
2. Upload the production build from `dist/`.
3. Set the primary domain to `https://www.cudasls.co.ke`.
4. Redirect `http://` traffic to `https://`.
5. Redirect non-primary variants to the main domain.

## Security Checklist

- Enable HTTPS only.
- Add security headers at the host level:
  - `Content-Security-Policy`
  - `Strict-Transport-Security`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: SAMEORIGIN`
- If a backend quote form is added later, protect it with:
  - server-side validation
  - rate limiting
  - bot protection or CAPTCHA
  - spam filtering
  - audit logging
- Keep contact email addresses on the official domain if possible.

## Form Recommendation

The current quote flow uses `mailto:` and WhatsApp for simplicity and low risk. For a stronger production setup, the next upgrade should be:

1. A secure backend form endpoint
2. Email notifications to CUDA staff
3. Optional CRM or spreadsheet capture
4. Spam protection and validation

## Suggested Go-Live Improvements

- Replace lower-resolution brochure crops with original HD photos where available:
  - VIP protection
  - event security
  - alarm response
  - courier services
- Add a custom favicon from the CUDA logo
- Add Open Graph metadata for social sharing
- Add Google Maps embed or linked location card
- Add privacy policy and terms page

## Build Commands

```bash
npm install
npm run build
```

## Preview Command

```bash
npm run dev
```

## Deployment Output

Deploy the contents of:

```text
dist/
```
