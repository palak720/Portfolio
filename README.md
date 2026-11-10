# Palak Kasaudhan — Portfolio

React 18 + TypeScript + Tailwind CSS (Vite).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to /dist
```

## 1. Add your photo (important)

Put it in `public/images/` as **`palak.png`** (or `.jpg` / `.jpeg` / `.webp`).
A transparent cut-out PNG looks best (the hero photo sits between your first and last name).
Until then a placeholder silhouette is shown.

## 2. Add project screenshots (optional)

Projects with a live link try an auto-screenshot first. For better control (and for projects
without a live link) save images as `public/images/projects/<id>.png`, where `<id>` is one of:
`groweasy`, `medconnect`, `cybershield`, `auditpilot`, `k72`, `biographx`, `recipes`.

## 3. Edit content

Everything is in two files — no need to touch components:

- `src/data/site.ts` — name, email, links, hero/about text, tech marquee
- `src/data/projects.ts` — projects (add/remove/reorder; `featured: true` = full-width card)

## How the hero avoids overlap

`src/hooks/useFitFont.ts` measures the longest name and picks ONE font-size so both names fit
inside their own column; the photo has its own reserved middle column. Change the name and it
re-fits automatically.

## Contact form

Uses [FormSubmit](https://formsubmit.co). The first message you ever receive triggers a one-time
activation email to `site.email` — click the link in it once, after that messages arrive normally.

## Deploy (Vercel)

Push this folder to GitHub → import in Vercel. Framework preset: **Vite**
(build `npm run build`, output `dist`). Netlify works the same way.
