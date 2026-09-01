# TripHulu Marketing Website

Static B2B SaaS marketing website for TripHulu, a sales, booking, payment and operations platform for tour operators.

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Next.js generates a fully static site in `out/`. Deploy that directory to any static hosting provider with clean URL and custom 404 support.

## Tests

```bash
npx playwright install chromium
npm run test:e2e
```

The suite validates desktop and mobile navigation, representative feature pages, CTA links, demo-form validation, metadata, console errors and 404 behavior. Screenshots are written to the ignored `screenshots/` directory.

## Content and configuration

- Product feature content: `src/content.ts`
- Shared metadata and canonical domain: `src/app/layout.tsx`
- Sitemap domain: `src/app/sitemap.ts`
- Robots configuration: `src/app/robots.ts`
- Product claim and launch notes: `.codex/marketing-site.md`

Before production launch, confirm the canonical domain, feature-status matrix, form submission endpoint, and final legal copy.
