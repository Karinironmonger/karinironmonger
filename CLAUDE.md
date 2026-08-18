# Project brief for Claude Code

Personal profile site for Karin Barak Ironmonger. It replaces sending a PDF CV: one link
she can send to recruiters, hiring managers and founders, alongside the matching CV file.

## Stack and commands

Next.js 15 App Router, React 19, TypeScript. No CSS framework: `app/globals.css` holds
primitives and generated hover classes, everything else is inline styles on the elements.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

Target host is Vercel. Import the repo, framework preset Next.js, no environment variables.

## Routes

| Route | Content |
| --- | --- |
| `/` | Opening screen, about, field selector, numbers, experience, closing block |
| `/social` | LinkedIn posts with highlighted comments, Instagram galleries, client productions |
| `/contact` | Contact form, posts to formsubmit.co |
| `/thanks` | Redirect target after the form is sent |
| `/cv` | Printable CV. Four versions via `?v=general|operations|branding|events` |

## Where things live

- `lib/content.ts` — all site copy. `T` is the string table, `TRACKS` are the four fields,
  `NUMBERS` is the metrics list, `ROLES` is the experience timeline, `COMPANIES` is the logo row.
- `lib/cv.ts` — CV copy. `VARIANTS` keyed by the four versions, `cv(key)` returns one.
- `components/SiteChrome.tsx` — `TopBar` and footer. `components/useSiteMotion.ts` — reveal on scroll.
- `components/CvToolbar.tsx` — print and version controls on `/cv`.
- `public/assets/` — 30 images, `img-01.jpg` to `img-30.jpg`.
- `public/cv/` — empty. The CV download button expects
  `Karin-Barak-Ironmonger-<field>.pdf` files here.

## Design tokens

Dark ground, not light. Bottle green base with a lilac accent.

```
ground        #0B2A21
deep green    #123A2E
paper (text)  #F6F4F0
lilac accent  #B9A3D9
cv sheet      #FFFFFF on #EDEBE6 desk
```

Fonts, all Google Fonts, loaded in `app/layout.tsx`:
Fraunces for display, Instrument Sans for body, Martian Mono for small uppercase labels,
Frank Ruhl Libre and Assistant for Hebrew.

Motion: slow and quiet. Staged entrance on load, reveal on scroll once per element,
a drifting light inside the glass panels, `prefers-reduced-motion` respected.

## Content rules, these matter

1. **Never invent content.** Every line of copy, every project, every credit came from
   Karin's CVs, her LinkedIn and Facebook screenshots, or her own words. If something is
   missing, ask her for it rather than filling the gap.
2. **No em dashes anywhere,** in code comments or copy.
3. **Avoid the word "vibe".**
4. English is the primary language. Hebrew strings exist alongside it in `lib/content.ts`.
5. Real people are quoted on `/social` by name and role. Do not add, reword or attribute
   quotes without her approval.
6. The October 7th remembrance project on `/social` is deliberately quiet: no engagement
   numbers, no comments, no names of the people it commemorates, plain background. Keep it that way.

## Known gaps

1. **The language toggle is not wired.** `lib/content.ts` holds `[english, hebrew]` pairs,
   but the pages read index `[0]` directly, so Hebrew never renders. Needs a language state,
   a toggle in `TopBar`, `dir="rtl"` and the Hebrew font stack when Hebrew is active.
2. **`public/cv/` is empty,** so the CV download links 404.
3. **The contact form needs a one-time activation.** After the first live submission,
   FormSubmit emails a confirmation link. Until it is clicked, nothing is delivered.
   Karin's address sits in plain text in `app/contact/page.tsx`; swap it for the hashed
   FormSubmit endpoint once she has it, to keep it away from scrapers.
4. **No social preview.** No Open Graph image or description, so the link shares as bare text.
   Needs `openGraph` metadata and an image, most likely her portrait.
5. **No favicon.**
6. **The Instagram galleries have empty slots** waiting on more images from her.

## Open decisions for Karin, do not decide these alone

- Whether her personal Instagram and Facebook belong in the top bar. The accounts supplied
  so far, `primis_life` and `zippertlv`, are company accounts, presented as work she ran.
- Exact spelling of her name. The site uses Karin Barak Ironmonger. The four CV PDFs say
  Karin Ironmonger, so those files need updating to match.
- Whether the credits on `/social` should list DJs and performers consistently across all
  four client productions, or only where a well known name adds context.
