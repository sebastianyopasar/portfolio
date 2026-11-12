# Portfolio V4 — Black Editorial / Home refinement

This is a complete **experimental Next.js portfolio** based on Portfolio V3. It does not modify the deployed website or any Git branch automatically.

## What's new

- **Experience & background:** three editorial columns, with work history, two degrees and six training/certification entries grounded in the supplied résumé.
- **What I bring:** a large interactive typographic index. Select UX/UI, Development, E-Commerce or Digital Strategy; the companion content changes in place. Keyboard navigation works with arrow keys, Home and End.
- **About:** replaced the borrowed "So, who's Sebastián?" bio + giant monogram with a more original narrative connecting languages, communication, design and product implementation.
- **How I work:** replaced the two-line "ideal vs. real-world" wave diagram with a six-stage interactive iteration orbit. On small screens it becomes a touch-friendly grid.
- **Motion:** buttons 220ms; project hover 550ms; scroll reveals 750ms; two-curtain coral-to-blue navigation 1.55s; no mandatory scroll-snap; reduced-motion support.
- Maintains the **continuous black homepage**, Montserrat Black type system, multilingual EN/FR/ES switcher, three existing case-study routes and project imagery.

## Run locally

Open PowerShell inside the folder containing `package.json`:

```powershell
npm ci
npm run dev
```

Visit `http://localhost:3000`. Test the project links and controls, including the mobile layout. Stop the server using Ctrl+C.

## Validate before deploying

```powershell
npm run lint
npm run build
npm audit
```

Review dependency security findings before publishing. Do **not** automatically use `npm audit fix --force` without reviewing breaking changes.

If your existing portfolio is published from `main`, test this version on a new branch and merge into `main` only when approved.

## Implementation notes

The main changes are in:
- `components/ExperimentalHome.tsx`
- `components/ExperimentalHome.module.css`

The case-study content under `app/work/` has not been redesigned in this update, by design: this pass focuses on finishing the homepage first.

## Validation performed for this package

- TypeScript noEmit: passed
- ESLint for the modified homepage: passed
- CSS syntax parser: passed
- Homepage CSS module class reference check: passed
- Existing case-study route file check: passed
- Full Next.js build: could **not** be completed in the packaging environment because the Linux `@next/swc` native binary was unavailable. Validate with `npm run build` locally before deployment.

No paid font binaries are included. Montserrat is loaded through Next.js `next/font/google` as in the V3 prototype.
