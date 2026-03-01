# Common Defense
## Purpose
Civic resistance platform against democratic capture. Built to inform, organize, and mobilize citizens.
## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Maps:** Leaflet.js (self-contained HTML)
- **Animations:** Framer Motion
- **Charts:** Recharts
## Project Structure
```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── citizens-united/page.tsx    # Citizens United page
│   ├── resist/page.tsx             # Resist page
│   ├── ice-operations/page.tsx     # ICE Operations page
│   └── map/
│       ├── page.tsx                # Map page
│       ├── layout.tsx              # Map layout
│       └── map.css                 # Map styles
├── components/
│   ├── NavBar.tsx                  # Main navigation
│   ├── Hero.tsx                    # Hero section
│   ├── Footer.tsx                  # Footer
│   ├── PillarCard.tsx              # Pillar cards
│   ├── CitizensUnitedChart.tsx     # CU chart (recharts)
│   ├── ResistanceOpCard.tsx        # Resistance operations
│   ├── AidMarketplace.tsx          # Mutual aid marketplace
│   ├── PledgeForm.tsx              # Pledge form
│   ├── CommsCard.tsx               # Communications card
│   ├── CreditsDashboard.tsx        # Credits dashboard
│   ├── Modal.tsx                   # Modal component
│   ├── OrganizerElection.tsx       # Organizer election
│   ├── PrivacyWizard.tsx           # Privacy wizard
│   ├── QuoteBreak.tsx              # Quote break
│   ├── SectionHeader.tsx           # Section headers
│   ├── StatsBar.tsx                # Stats bar
│   └── VideoEmbed.tsx              # Video embed
├── data/
│   ├── aid-listings.json
│   ├── citizens-united.json
│   ├── infrastructure.ts
│   └── resistance-ops.json
└── hooks/
    ├── useIntersectionObserver.ts
    └── useScrollBorder.ts
public/
├── infrastructure-map.html         # Self-contained Leaflet map (loaded via iframe)
└── methodology.html
```
## Key Files
- `src/components/NavBar.tsx` — Main navigation bar
- `src/app/page.tsx` — Home page
- `src/app/resist/page.tsx` — Resist page
- `src/app/citizens-united/page.tsx` — Citizens United page
- `src/app/ice-operations/page.tsx` — ICE Operations page
- `src/app/map/page.tsx` — Infrastructure map page
- `public/infrastructure-map.html` — Self-contained Leaflet map loaded via iframe
## Design System
- **Background:** #0a0a0a (dark theme)
- **Accent:** #c53030 (red)
- **Body font:** Georgia
- **Heading font:** Arial
- **Custom colors defined in:** tailwind.config.ts
## Development Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run linter
## Deployment
- **GitHub:** github.com/michaelstefanko-coder/common-defense
- **Hosting:** Vercel (auto-deploys on push to main)
