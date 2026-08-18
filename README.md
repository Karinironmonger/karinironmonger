# Karin Barak Ironmonger, profile site

Next.js (App Router) + TypeScript. Deploys to Vercel with no extra configuration.

## Pages

| Route | Content |
| --- | --- |
| `/` | Profile: opening screen, about, field selector, numbers, experience |
| `/social` | LinkedIn posts, comments, Instagram galleries |
| `/contact` | Direct contact details (email, LinkedIn, phone) |
| `/cv` | Printable CV, four versions at `/cv?v=general|operations|branding|events` |

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Checks

```bash
npm run typecheck
npm run build
```

## Deploy

1. Push to GitHub.
2. In Vercel, import the repository. Framework preset: Next.js. No environment variables needed.
3. Every push to the default branch redeploys.

## Content

Copy lives in `lib/content.ts` (site) and `lib/cv.ts` (CV). Images are in `public/assets`.
The CV download button on `/` links to `/cv/Karin-Barak-Ironmonger-<field>.pdf`; drop those
PDFs into `public/cv/` to activate it.

## Note on the design files

The `*.dc.html` files at the repository root are the original design sources. They are not
part of the Next.js build and can be deleted once the app is the single source of truth.
