# HustleIQ Ultra — $10B Blueprint

A production-ready Next.js 14 web application presenting the full HustleIQ system architecture, AI intelligence stack, core modules, API design, revenue engine, competitive moat, and execution roadmap.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy

### Vercel (recommended — one click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push repo to GitHub
2. Import into Vercel — zero config required (`vercel.json` handles everything)

### Manual build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Entry point — tab state management
│   └── globals.css       # Design tokens + all shared styles
├── components/
│   ├── Header.tsx        # Brand header + valuation badge
│   ├── TabNav.tsx        # Sticky tab navigation
│   ├── Footer.tsx        # Footer bar
│   ├── panels/           # One component per tab panel
│   │   ├── Overview.tsx
│   │   ├── Architecture.tsx
│   │   ├── AIStack.tsx
│   │   ├── Modules.tsx
│   │   ├── APIPanel.tsx
│   │   ├── Revenue.tsx
│   │   ├── Moat.tsx
│   │   └── Roadmap.tsx
│   └── ui/               # Shared primitive components
│       ├── Card.tsx
│       ├── StatBlock.tsx
│       ├── Callout.tsx
│       ├── ArchLayer.tsx
│       └── ApiItem.tsx
└── lib/
    └── data.ts           # All content data — architecture, modules, moat, roadmap
```

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | CSS custom properties (globals.css) |
| Fonts | Syne + JetBrains Mono via `next/font/google` |
| Deployment | Vercel |

---

## Environment Variables

No environment variables are required for the current version (static presentation). Add a `.env.local` when wiring up live API endpoints.

```env
# Future: connect to live HustleIQ backend
NEXT_PUBLIC_API_URL=https://api.hustleiq.com
```
