# Portfolio V5 — Dark Case Studies + Language Entry

This is an experimental branch-ready copy based on the approved **V4.1 Black Editorial** version. No production repository or deployment was modified.

## What's new

- Rebuilt `/work/tokyo`, `/work/ecommerce`, and `/work/niwa` using a single dark editorial visual language: Montserrat Black, near-black base, high-contrast headings, spacious body copy and project-specific accents.
- Reorganized each project to a compact story: hero → challenge → featured work → three decisions → takeaway → next project. Content is shorter without introducing unverified impact metrics.
- Kept the Tokyo interactive dashboard demo, the three actual Shopify screenshots, the Identidad.CO interactive card deck and its research infographic (expandable to avoid excessive page length).
- Added localized project narratives in English, Spanish and French. The Tokyo demo interface itself still shows representative English sample UI.
- Reintroduced the first-visit language-selection screen, now black and typography-led, with EN / FR / ES choices and an angled dual-color curtain.
- Existing visitors with a previously stored language skip the introduction. The language selector remains available in both Home and case studies.
- Preserved the V4.1 Home sections, visual layout, and original transition timing (roughly 1.55–1.62 seconds). Page scrolling remains natural and reduced-motion preferences are respected.

## Start locally (Windows PowerShell)

1. Extract the complete archive and open the folder containing `package.json`.
2. Run `npm ci`.
3. Run `npm run dev`.
4. Open http://localhost:3000 and test Home + all three project pages.
5. In a new terminal, run `npm run build` before publishing.

To see the new language-entry screen again after a previous selection, open Browser DevTools → Console on the portfolio page and run:

```js
localStorage.removeItem("sebastian-portfolio-language");
location.reload();
```

## Technical validation

- TypeScript: PASS (`tsc --noEmit`)
- ESLint on edited TSX files: PASS
- CSS parsing (new styles): PASS
- Next.js production build: NOT VERIFIED on this Linux workspace because its native SWC dependency is unavailable. Please run `npm run build` on Windows before release.
- Dependency security: review `npm audit` output and address production-relevant issues prior to deployment. Do not run `npm audit fix --force` indiscriminately.

## Edited/created files

- `components/CaseStudy.tsx` (new, reusable case-study presentation)
- `components/CaseStudy.module.css` (new, isolated dark system)
- `app/work/tokyo/page.tsx`
- `app/work/ecommerce/page.tsx`
- `app/work/niwa/page.tsx`
- `components/IntroExperience.tsx`
- `components/IntroExperience.module.css`
- `components/ExperimentalHome.tsx` (mounts first-visit intro)
- `components/IdentidadCardDeck.tsx` (translated interaction labels)

The legacy `app/globals.css` and older project CSS are retained intentionally to protect the existing Home and interactive components; their old case-page selectors are no longer used by the new page structure.
