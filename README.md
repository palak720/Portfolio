# Palak Kasaudhan — Developer Portfolio

A responsive, single-page portfolio for a full-stack developer, built with **React 18, TypeScript and Tailwind CSS** on **Vite**. Warm editorial design, smooth interactions, no backend required.

## Sections

| Section | What it does |
|---|---|
| **Hero** | Name set in large type on either side of a centred photo. Font size is measured at runtime so the longest name always fits its column and never touches the photo. Separate stacked layout on mobile. |
| **Tech marquee** | Auto-scrolling strip of technologies. Swipe, drag, trackpad, arrow buttons or ← → keys all work. Pauses on hover and keyboard focus, loops endlessly in both directions, and starts paused for users who prefer reduced motion. |
| **About** | Editorial headline and short bio. |
| **Work** | Seven project cards with filter tabs (All, AI & Full-Stack, Web & Motion), browser-style mockups and a full-screen screenshot viewer (close with Esc or click outside). |
| **Stats** | Live GitHub numbers (public repos, followers, stars, top language), language bars and a contribution graph. Shows a friendly fallback if the API is unreachable. |
| **Contact** | Message form delivered to your inbox, plus email, LinkedIn and GitHub links. |
| **Navbar / Footer** | Active-section highlight, mobile menu, resume link, back-to-top. |

## Tech stack

- **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS 3** for all styling
- **Vite 5** for dev server and build
- Fonts via Fontsource (self-hosted): Bricolage Grotesque, Instrument Serif, DM Sans
- No UI library, no state library; custom hooks only

## Projects featured

| Project | Stack |
|---|---|
| GrowEasy — AI CSV importer | Next.js, Node.js, TypeScript, Claude AI, Docker |
| MedConnect — AI CRM for pharma reps | React, Redux, FastAPI, LangGraph, Groq |
| CyberShield — threat detection | React, Flask, MongoDB, n8n |
| AuditPilot — API security auditor (team project) | React, LangGraph, Kong AI Gateway, Redis VectorDB, Flask |
| K72 — animated landing page | React, GSAP, Tailwind CSS, Vite |
| BioGraphX — bagasse-to-graphene simulator | React, simulation, data viz |
| Recipe App | React, Context API, CSS |

## Getting started

Requires **Node.js 18+** and npm.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check, then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | TypeScript check only |

## Project structure

```
├── public/
│   ├── favicon.svg
│   └── images/projects/      # optional project screenshots
├── src/
│   ├── data/
│   │   ├── site.ts           # name, links, hero/about text, tech list
│   │   └── projects.ts       # all project cards
│   ├── components/           # Navbar, Hero, Marquee, About, Work, ProjectCard,
│   │                         # Stats, Contact, Footer, Reveal, Icons, HeroPhoto
│   ├── hooks/                # useFitFont, useInView, useActiveSection, useImageCascade
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.ts        # colours, fonts, animations
├── postcss.config.js
└── vite.config.ts
```

## Customising

**Hero photo** — put any image (`png`, `jpg`, `jpeg`, `webp`, `avif`) directly in `public/` or `public/images/`. The file name does not matter; names containing *palak, profile, photo, portrait* are preferred. **Restart `npm run dev` after adding it.** A transparent-background PNG looks best because the photo sits between your names.

**Text and links** — edit `src/data/site.ts` (name, email, GitHub, LinkedIn, resume, hero and about copy, tech marquee).

**Projects** — edit `src/data/projects.ts`. Each entry takes a name, tagline, description, stack, optional `live` and `repo` links, a colour `variant`, and `featured: true` for a full-width card. Order in the file is the order on the page.

**Screenshots** — projects with a `live` link get an automatic screenshot. To use your own (or for projects without a live link), save `public/images/projects/<id>.png` using the project's `id`: `groweasy`, `medconnect`, `cybershield`, `auditpilot`, `k72`, `biographx`, `recipes`.

**Colours and fonts** — theme tokens live in `tailwind.config.ts`; fonts are imported in `src/index.css`.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) using the email in `src/data/site.ts`. No server or API key is needed, but FormSubmit requires a **one-time activation**: send one test message from the live site, open the "Activate Form" email it sends you, and click the link. After that, messages arrive normally.

## Deployment

Works on any static host. For Vercel: push the repo, import it, keep the **Vite** preset (build `npm run build`, output `dist`).

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

## External services used at runtime

Technology icons (jsDelivr / Devicon), project screenshots (WordPress mShots), GitHub REST API and contribution graph (ghchart.rshah.org), and FormSubmit. These need an internet connection; each one degrades gracefully if unavailable.

## Troubleshooting

| Problem | Fix |
|---|---|
| Photo not showing | Make sure the image is directly inside `public/` or `public/images/` and **restart** `npm run dev`. Check the extension is real (Windows can hide `.jpg.jpg`). |
| Buttons appear empty, or error `bg-sand-300 class does not exist` | Tailwind reads `tailwind.config.js` before `.ts`. Delete any `tailwind.config.js` created by `npx tailwindcss init`, then restart the dev server. |
| Form says "sent" but no email arrives | Complete the one-time FormSubmit activation described above. |
| Tech icons or screenshots missing | Check your internet connection; they load from external CDNs. |
| `npm` not recognised | Install Node.js LTS from nodejs.org, then reopen the terminal. |

## Not included

Dark mode, a CMS or blog, analytics, automated tests, and any server-side code.

