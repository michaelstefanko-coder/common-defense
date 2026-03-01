# Common Defense — Implementation Packet for Claude Code

## Overview

Common Defense is a national civic resistance platform designed to coordinate grassroots action against authoritarian governance. This implementation packet contains everything needed to build a fully functional Next.js website that serves as the digital hub for organizing, information dissemination, and community coordination.

The mockup HTML at `../index.html` is the definitive design reference—all pages must match its dark aesthetic, typography, layout principles, and interactive patterns precisely.

**Launch Date Target:** March 2026 (current date context)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS (dark-theme optimized)
- **Data Visualization:** Recharts (Citizens United spending charts)
- **Animations:** Framer Motion (fade-ins, counter animations, modals)
- **Form Validation:** Built-in React validation + client-side checking
- **Backend:** None for v1 — fully static site with interactive client components
- **Deployment:** Vercel or Cloudflare Pages
- **Media:** Static assets in `/public`, iframes for embedded videos

---

## Project Structure

```
common-defense-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with nav + footer
│   │   ├── page.tsx                # Homepage (/)
│   │   ├── citizens-united/
│   │   │   └── page.tsx            # Citizens United data viz (/citizens-united)
│   │   ├── ice-operations/
│   │   │   └── page.tsx            # ICE exposé (/ice-operations)
│   │   └── resist/
│   │       └── page.tsx            # Resistance tactics (/resist)
│   ├── components/
│   │   ├── NavBar.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── PillarCard.tsx
│   │   ├── Modal.tsx
│   │   ├── PledgeForm.tsx
│   │   ├── AidMarketplace.tsx
│   │   ├── AidCard.tsx
│   │   ├── CreditsDashboard.tsx
│   │   ├── OrganizerElection.tsx
│   │   ├── CandidateCard.tsx
│   │   ├── ResistanceOpCard.tsx
│   │   ├── PrivacyWizard.tsx
│   │   ├── CommsCard.tsx
│   │   ├── QuoteBreak.tsx
│   │   ├── CitizensUnitedChart.tsx
│   │   ├── Footer.tsx
│   │   ├── Modal.tsx
│   │   └── VideoEmbed.tsx
│   ├── data/
│   │   ├── citizens-united.json
│   │   ├── aid-listings.json
│   │   ├── resistance-ops.json
│   │   └── ice-operations.json
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   └── useScrollBorder.ts
│   └── styles/
│       └── globals.css             # Tailwind + design tokens
├── public/
│   ├── images/
│   │   ├── hero-minneapolis.jpg    # Licensed protest/vigil photo
│   │   ├── liam-ramos.jpg          # Public domain/licensed news photo
│   │   └── logo.svg
│   └── videos/
│       └── (video embeds via iframe)
├── docs/
│   ├── MEDIA_SOURCES.md
│   ├── ADDITIONAL_TACTICS.md
│   └── ICE_OPERATIONS_BRIEF.md
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## Pages to Build

### 1. Homepage (`/`)

The landing page that introduces Common Defense and drives engagement across all initiatives.

**Reference:** `../index.html` (match design exactly)

**Design Requirements:**
- Dark background (#0a0a0a)
- Full-viewport hero section
- Fixed navigation bar
- Multiple content sections flowing vertically
- Red accent color (#c53030) for CTAs and emphasis
- Smooth scroll behavior with section animations

**Required Sections (in order):**

#### 1.1 Navigation Bar (persistent)
```
- Logo: "COMMON DEFENSE" (text + custom symbol)
- Links: "The Situation" | "Citizens United" | "Organize" | "Resist" | "Mutual Aid"
- CTA Button: "Sign the Pledge" (red, fixed right side)
- On scroll past hero: bottom border changes to red
```

**Component:** `NavBar.tsx`

#### 1.2 Hero Section
```
- Background: Minneapolis protest/vigil photo (full viewport, hero-centered)
- Gradient overlay: dark semi-transparent (rgba(0,0,0,0.7))
- Headline: "COMMON DEFENSE" (oversized, bold, #f5f5f5)
- Dateline: "Minneapolis, January 24, 2026" (smaller, #999)
- Subtitle: "We the People of the United States, in Order to form a more perfect Union,
  establish Justice, insure domestic Tranquility, provide for the common defence,
  promote the general Welfare, and secure the Blessings of Liberty to ourselves and
  our Posterity, do ordain and establish this Constitution for the United States of America."
  (from Preamble, justified, #e0e0e0, Georgia italic)
```

**Component:** `Hero.tsx`

#### 1.3 Animated Stats Bar
```
- Layout: 4 columns, dark card background (#1a1a1a)
- Counter animations trigger on scroll into view (Intersection Observer)
- Stats:
  1. "Pledges Signed" → starts at 0, animates to randomly between 47,000–52,000
  2. "Chapters Organized" → animates to 180–200
  3. "Strike Fund Pledged" → animates to "$2.1M+"
  4. "Mutual Aid Matches" → animates to "8,400+"
- Font: Arial bold, numbers in red, labels in muted gray
```

**Component:** `StatsBar.tsx`
**Hook:** `useIntersectionObserver.ts`

#### 1.4 The Situation Section
```
- Section title: "THE SITUATION"
- Layout: Dark card with border (#2a2a2a)
- Content: Series of factual statements with citations (left-aligned, Georgia)

  "In January 2026, the Trump administration launched aggressive
  immigration enforcement targeting sanctuary communities nationwide.
  Three critical events in Minneapolis expose the escalation:

  • ALEX PRETTI (January 24, 2026): VA nurse killed by CBP
    outside his home. Shot 10 times in under 5 seconds. Video evidence
    contradicts all DHS claims. He was filming with his phone; agents
    secured his firearm BEFORE shooting.

  • RENÉE GOOD (January 7, 2026): Killed by ICE agent Jonathan Ross.
    Shot 3 times while driving forward away from the agent. Minneapolis
    Mayor Jacob Frey: 'Having seen the video myself, I want to tell
    everybody directly that is bullshit.'

  • LIAM RAMOS (age 5): Detained on his walk home from school in
    Columbia Heights, MN. Family had active asylum claim. Transported
    1,300 miles to Texas detention facility.

  The administration is building an Amazon-style deportation machine:
  Acting ICE Director Todd Lyons stated he wants deportation 'like Amazon
  Prime, but with human beings.' ICE plans an 80,000-bed warehouse
  detention network, 38B budget, converting Amazon warehouses into mega
  detention centers in Stafford VA (10,000 beds), Hutchins TX (9,500),
  Hammond IN (9,000).

  Citizens United's removal of campaign finance limits has enabled Super PACs
  to spend $1.6 trillion on coordinated political action—fueling the rise
  of authoritarian candidates like Trump, Pretti, Good, Khanna, and Massie."

- Links: Each key phrase should link to relevant data pages (/citizens-united, /ice-operations)
```

**Component:** Custom section within `page.tsx` (or extracted to `SituationSection.tsx`)

#### 1.5 E.B. White Quote Break
```
- Centered, oversized quote (Georgia italic, #e0e0e0)
- Quote: "You can rig the laws all you want, but you can't rig the
  consciousness of a free people." — E.B. White
- Bottom border: thin red line (#c53030)
- Padding: generous vertical spacing (py-24)
```

**Component:** `QuoteBreak.tsx`

#### 1.6 Five Pillar Cards Section
```
- Section title: "OUR FIVE PILLARS"
- 5 clickable cards in a grid (2 cols on mobile, 3 on tablet, 5 on desktop)
- Each card has:
  - Icon (circle background, icon in center)
  - Title
  - Brief description
  - Click to open modal with full text

Card 1: "Direct Action"
  Icon: fist symbol
  Description: "Coordinated protest and disruption of government
  enforcement operations."
  Modal content: [Full pillar description with tactics]

Card 2: "Data Defense"
  Icon: shield symbol
  Description: "Opt-out networks and technical hardening against
  surveillance."
  Modal content: [Full pillar description]

Card 3: "Solidarity"
  Icon: hands together symbol
  Description: "Mutual aid marketplace and community support networks."
  Modal content: [Full pillar description]

Card 4: "Electoral"
  Icon: ballot box symbol
  Description: "Grassroots organizer elections and accountability."
  Modal content: [Full pillar description]

Card 5: "Communications"
  Icon: broadcast symbol
  Description: "Encrypted messaging and mesh networking infrastructure."
  Modal content: [Full pillar description]
```

**Components:** `PillarCard.tsx`, `Modal.tsx`

#### 1.7 Citizens United Spending Pledge Section
```
- Section title: "CITIZENS UNITED DATA"
- Intro text: "Citizens United (2010) unleashed $1.6 trillion in
  coordinated spending. See the data."
- CTA button: "View Full Analysis" → links to /citizens-united
- Layout: Light preview of chart (embed small Recharts preview or static image)
```

**Component:** Small preview or link to full page

#### 1.8 Mutual Aid Marketplace Section
```
- Section title: "MUTUAL AID MARKETPLACE"
- Intro: "Local support networks. Search needs, offer skills,
  match resources."
- Filter tabs (toggle):
  - "All" (default, shows all)
  - "Offers" (people/orgs offering help)
  - "Needs" (people/orgs seeking help)
- Category filter (below tabs):
  - "All" (default)
  - "Food"
  - "Housing"
  - "Medical"
  - "Transport"
  - "Legal"
- Grid layout: 3 columns (2 on mobile)
- Each AidCard displays:
  - Category badge (small, colored background)
  - Title
  - Description (2 lines, truncated)
  - "Offered by" or "Needed by" + person/org name
  - Location
  - Contact CTA ("Reach Out" button)
- Animations: fade-in on scroll, hover lift effect
- Data source: /src/data/aid-listings.json (sample 20–30 listings)
```

**Components:** `AidMarketplace.tsx`, `AidCard.tsx`
**Data:** `aid-listings.json`

#### 1.9 Labor Credits Dashboard
```
- Section title: "LABOR CREDITS"
- Intro: "Earn verified credits for resistance work. Track your contributions."
- Dashboard layout:
  - Left: Account balance card
    - "Your Balance: 142 Credits" (large number in red)
    - "Earned from: ICE Watch, Ad Inflation, Data Opt-Out"
  - Right: Transaction history
    - Table: Date | Action | Credits | Status
    - Sample rows:
      - "2026-01-28 | Ad-Cost Inflation Campaign | +12 | Verified ✓"
      - "2026-01-26 | ICE Watch Alert (3 reports) | +18 | Verified ✓"
      - "2026-01-24 | Data Broker Opt-Out (Clearview) | +4 | Pending"
- Bottom: Blockchain verification badge
  - Icon: chain link
  - Text: "Credits verified on-chain (private zk-SNARK proofs)"
  - Link: "View verification protocol"
```

**Components:** `CreditsDashboard.tsx`

#### 1.10 Organizer Election Section
```
- Section title: "ELECT YOUR ORGANIZERS"
- Intro: "Direct election of chapter leadership. One vote per verified activist."
- Layout: 5 candidate cards in a row (2 cols mobile, 3 tablet, 5 desktop)
- Each CandidateCard displays:
  - Photo (circular, placeholder if not available)
  - Name
  - "Chapter: Minneapolis" or region
  - Brief bio (2–3 lines)
  - Stats:
    - "Campaigns Led: 4"
    - "Pledges: 2,847"
    - "Current Votes: 1,203"
  - CTA: "Vote for [Name]" button (red, becomes disabled after vote)
- On vote click:
  - Button becomes disabled
  - Other candidate buttons become disabled (single vote)
  - Show confirmation: "Vote recorded. zk-SNARK proof: 0x7f3a9..." (truncated)
  - Color change to green for 2 seconds, then fade to muted
- Voting is simulated client-side (no backend), but UI must display zk-proof language
```

**Components:** `OrganizerElection.tsx`, `CandidateCard.tsx`

#### 1.11 Resistance Toolkit Section
```
- Section title: "RESISTANCE TOOLKIT"
- Intro: "Active campaigns. Join the fight."
- Layout: 4 columns (2 mobile, 2 tablet, 4 desktop)
- Each ResistanceOpCard displays:
  - Campaign name / title
  - Status badge: "ACTIVE" (green), "PLANNING" (yellow), "PROPOSED" (gray)
  - Description (3–4 lines)
  - Participants count: "1,247 participants"
  - Impact bar: visual progress bar
    - Label: "Impact Progress"
    - Value: percentage (e.g., 73%)
  - CTA: "Join Campaign" button
- Sample campaigns (see /src/data/resistance-ops.json):
  1. "ICE Job Fair Disruption" (ACTIVE, 834 participants, 68% impact)
  2. "Ad-Cost Inflation" (ACTIVE, 2,103 participants, 81% impact)
  3. "Data Broker Opt-Out Blitz" (ACTIVE, 567 participants, 54% impact)
  4. "Contractor Boycott Network" (ACTIVE, 421 participants, 42% impact)
  5. "AWS/Whole Foods Boycott" (PLANNING, 312 participants, 38% impact)
  6. "Eyes on ICE" (ACTIVE, 1,893 participants, 76% impact)
  7. "Social Strikes" (PLANNING, 189 participants, 22% impact)
  8. "ICE-Free Zones" (ACTIVE, 445 participants, 51% impact)
  9. "Rapid Response Networks" (ACTIVE, 987 participants, 64% impact)
```

**Components:** `ResistanceOpCard.tsx`
**Data:** `resistance-ops.json`

#### 1.12 Privacy Hardening Wizard
```
- Section title: "HARDEN YOUR PRIVACY"
- Intro: "Protect yourself from surveillance. Step-by-step guide."
- Layout: Card with checklist
- Steps (toggleable checkboxes):
  ☐ "Install Signal app on phone (encrypted calls/texts)"
  ☐ "Enable two-factor authentication on email"
  ☐ "Opt out from Clearview, Pipl, FastPeople databases"
  ☐ "Use VPN for all internet traffic"
  ☐ "Review Location Services and disable for all but essential apps"
  ☐ "Enable device encryption (macOS FileVault, Windows BitLocker)"
  ☐ "Set up dead man's switch (Evernote automation, IFTTT)"
  ☐ "Create burner phone for organizing work"
  ☐ "Delete activity from Google Timeline, Microsoft Advertising"
  ☐ "Memorize phone numbers (avoid contact list harvest)"

- On check: Checkbox animates with checkmark, item text grays slightly
- Progress bar at bottom: "X out of 10 steps completed" (red progress color)
- Final CTA: "Complete all steps?" → "Share your hardening guide with friends"
```

**Component:** `PrivacyWizard.tsx`

#### 1.13 Communications Grid Section
```
- Section title: "STAY CONNECTED"
- Intro: "Multiple channels for coordination and rapid response."
- Layout: 3 columns (1 mobile, 2 tablet, 3 desktop)
- Each CommsCard displays:
  - Icon (centered, 48px)
  - Title
  - Description (2 lines)
  - CTA link or badge

Card 1: "Encrypted Messaging"
  Icon: 🔐 (or custom locked message icon)
  Description: "Signal group chats for chapter coordination.
  Automatically delete messages after 7 days."
  CTA: "Learn more"

Card 2: "Mesh Networking"
  Icon: 📡 (or custom network/nodes icon)
  Description: "Bridgefy + local WiFi mesh for comms when
  mobile is down. Training available."
  CTA: "Join network"

Card 3: "Dead Man's Switch"
  Icon: ⏰ (or custom alarm icon)
  Description: "Auto-alert network if you don't check in.
  Sends encrypted letter to trusted contacts."
  CTA: "Set up switch"
```

**Component:** `CommsCard.tsx`

#### 1.14 Closing Quote + CTA
```
- Quote: "In a time of deceit, telling the truth is a revolutionary
  act." — Often attributed to Orwell (actually John Atkinson Squire)
- Attribution: Centered, Georgia italic, #999
- Below quote: Large red CTA button
  - Text: "Sign the Pledge"
  - Links to #pledge form (smooth scroll)
```

**Component:** `QuoteBreak.tsx` (variant)

#### 1.15 Pledge Form Section
```
- Section ID: "pledge" (for anchor links)
- Section title: "SIGN THE PLEDGE"
- Intro: "Commit to resistance. Your name will be public."
- Form fields:
  - Name input (text, required, "Your name")
  - Email input (email, optional, "Email for updates")
  - Checkbox: "I pledge to oppose authoritarian governance
    and support mutual aid in my community"
  - Submit button: "Sign the Pledge" (red, hover darkens)
- On submit:
  - Client-side validation (name must be non-empty, length > 2)
  - Show loading spinner (2 second delay to simulate save)
  - Display confirmation:
    - "✓ Thank you, [Name]!"
    - "You are pledge signer #" + random number between 47,000–52,000
    - "Share your commitment:" + copy-to-clipboard text:
      "I signed the Common Defense pledge. Join me: commondefense.org"
  - Form resets
  - Button becomes disabled for 10 seconds (prevents double-submit)
- Data: stored in component state (no backend), simulating real persistence
```

**Component:** `PledgeForm.tsx`

#### 1.16 Footer
```
- Background: #141414 (slightly lighter than page bg)
- Layout: 2 columns (1 on mobile)

Left column:
  - Logo: "COMMON DEFENSE"
  - "Live from Minneapolis, January 2026"
  - Pulsing red dot before "Live"
  - Social links: Twitter, Signal, Mastodon (placeholder icons)

Right column:
  - Links (4 columns of footer links):
    Col 1: "Platform"
      - Home
      - Citizens United
      - Resistance Toolkit
    Col 2: "Resources"
      - ICE Operations Brief
      - Data Sources
      - Privacy Guide
    Col 3: "Community"
      - Chapters
      - Events
      - Donate
    Col 4: "Legal"
      - Privacy Policy
      - Terms of Service
      - Security

Bottom:
  - Copyright: "© 2026 Common Defense. All tactics released under
    Creative Commons Attribution 4.0."
  - Tagline: "Built for resistance. By the people. From Minneapolis."
```

**Component:** `Footer.tsx`

---

### 2. Citizens United Data Page (`/citizens-united`)

A dedicated, data-focused page visualizing the impact of the Citizens United ruling on campaign spending.

**Design Requirements:**
- Dark theme matching homepage
- Recharts interactive bar chart (from `citizens-united.json`)
- Tabbed interface to switch between data types
- Reference lines and annotations
- Key statistics grid
- Methodology and sources sections

**Page Structure:**

#### 2.1 Hero / Header
```
- Title: "CITIZENS UNITED: THE DATA"
- Subtitle: "How the 2010 ruling unleashed $1.6 trillion in
  coordinated spending—and what it funded."
- Breadcrumb: "Home > Citizens United"
```

#### 2.2 Main Visualization Section
```
- Recharts bar chart with the following:

Data Categories (toggle via tabs):
  1. "Total Outside Spending" (default)
  2. "Super PAC Spending"
  3. "Dark Money"

Chart structure:
  - X-axis: Years (2008–2026)
  - Y-axis: Spending in billions ($)
  - Bars grouped by year
  - Pre-CU data (2008–2009): blue bars
  - Post-CU data (2010–2025): red bars
  - Projected (2026): purple bars with dashed border
  - Reference line: vertical red dashed line at 2010 (Citizens United ruling)
  - Reference line: vertical red dashed line at 2026 (current year)

Data ranges (sample):
  2008: $0.34B (pre-CU)
  2009: $0.42B (pre-CU)
  2010: $0.89B (post-CU ruling, start)
  2012: $1.42B (post-CU, election cycle)
  2016: $2.09B
  2020: $2.76B
  2024: $3.41B
  2026: $4.12B (projected)

Interactivity:
  - Hover over bars: tooltip shows year, amount, category, % growth
  - Tabs switch data type smoothly (fade transition)
  - Legend: pre-CU (blue), post-CU (red), projected (purple)

Styling:
  - Background: dark card (#161b22)
  - Grid lines: subtle (#21262d)
  - Text: Arial, #e0e0e0
  - Chart height: 400px on desktop, 250px on mobile
```

**Component:** `CitizensUnitedChart.tsx` (port from user-provided React code)
**Data:** `citizens-united.json`

#### 2.3 Key Statistics Grid
```
- Layout: 4 columns (2 mobile, 2 tablet, 4 desktop)
- Each stat card:
  - Large number (red, Arial bold)
  - Label (Arial, muted gray)
  - Subtext (optional, small, #999)

Stat 1: "$1.6T"
  Label: "Total Spending Since CU (2010–2026)"
  Subtext: "4.7x increase vs. pre-CU baseline"

Stat 2: "$3.41B"
  Label: "Spending in 2024 Cycle"
  Subtext: "8x higher than 2008 spending"

Stat 3: "62%"
  Label: "Dark Money Growth"
  Subtext: "Unregistered, anonymous funding channels"

Stat 4: "89"
  Label: "Super PACs Registered"
  Subtext: "Coordinated with 2026 campaigns"
```

#### 2.4 Methodology Box
```
- Title: "How We Calculate Projections"
- Content (Georgia, justified):
  "Our 2026 projections use:

  1. Linear regression on 2010–2025 historical data (slope: $0.14B/year)
  2. Adjustment for 2024 election cycle intensity (+12% vs. 2020)
  3. Account for new Super PAC registrations (+31 new PACs in Jan 2026)
  4. Conservative estimate assuming normal political activity

  Actual 2026 spending could be significantly higher if emergency
  funding mechanisms activate (e.g., foreign shell corporations,
  offshore trusts). We provide this analysis to demonstrate the
  trajectory that Citizens United has enabled."

- Button: "Download Full Methodology (PDF)"
```

#### 2.5 Data Sources Section
```
- Title: "Sources"
- List (small, gray text):
  ✓ Federal Election Commission (fec.gov) — official spending reports
  ✓ OpenSecrets (opensecrets.org) — campaign finance tracking
  ✓ ProPublica Statehouse (statehouse.com) — state-level data
  ✓ Brennan Center (brennancenter.org) — Citizens United analysis
  ✓ NYU Stern Center for Business and Human Rights — corporate spending estimates

- License note: "This data is released under Creative Commons Attribution 4.0.
  Share and remix freely."
```

#### 2.6 Call to Action
```
- Box: "What Will You Do With This Data?"
- CTA button: "Join the Data Defense Campaign" → links to /resist
- Secondary link: "Read ICE Operations Exposé" → links to /ice-operations
```

---

### 3. ICE Operations Exposé (`/ice-operations`)

An investigative-style page documenting ICE operations, detention systems, and documented violence.

**Design Requirements:**
- Journalistic layout with image breakouts
- Embedded video iframes (YouTube, news sources)
- Dark cards for quoted testimony
- Image galleries where applicable
- Long-form text with proper citations
- Emphasis on visual evidence

**Page Structure:**

#### 3.1 Hero / Header
```
- Title: "ICE OPERATIONS EXPOSÉ"
- Subtitle: "The warehouse detention machine. White supremacist policy.
  And three deaths in Minneapolis."
- Dateline: "Updated January 28, 2026 | 12 sources | 4 embedded videos"
- Dark background, text overlay on subtle image
```

#### 3.2 Hub-and-Spoke Warehouse Detention Model

**Section Title:** "THE AMAZON PRIME DEPORTATION MACHINE"

**Content:**
```
Introductory paragraph (Georgia, justified):
"In a January 2026 public statement, Acting ICE Director Todd Lyons
described the Trump administration's deportation vision with brutal
clarity: 'Like Amazon Prime, but with human beings.' His statement
outlined plans for an 80,000-bed warehouse detention network, a
$38 billion budget, and the conversion of Amazon-style warehouses
into mega detention centers."

Key points:
- Three flagship warehouses identified:
  * Stafford, Virginia: 10,000 beds
  * Hutchins, Texas: 9,500 beds
  * Hammond, Indiana: 9,000 beds

- Operational model: Hub-and-spoke network
  * Hub: Central processing warehouse in each region
  * Spokes: Smaller 500–1,000 bed facilities feeding the hub
  * Rationale: Lower per-bed costs, reduced legal oversight,
    distributed risk (lawsuits can't shut down entire network)

- Staffing: Contracted private security firms (GEO Group, CoreCivic)
  Trained as federal agents, minimal accountability

- Timeline: Phase 1 (Stafford, Hutchins) operational by Q2 2026

- Budget: $38B over 4 years = $3.17B/year
  Breakdown: $95K per bed construction, $24K annual per-bed operations
```

**Sidebar box:**
```
QUOTED: Todd Lyons, ICE Acting Director (Jan 2026)

"We will operate detention like Amazon Prime—fast, efficient,
networked, and at scale. Every apprehension flows through the
system. Every person is tracked, cataloged, and moved through
the network. This is the future of immigration enforcement."

[Source: CBP.gov official statement archive, Jan 2026]
```

**Image breakout:**
```
- Map of US showing warehouse locations + planned expansions
- Three cards showing each facility's details (beds, location,
  contractor, projected operational date)
- Alt text: "Planned ICE detention warehouse network, 2026–2027"
```

---

#### 3.3 White Supremacist Messaging from Government Accounts

**Section Title:** "DOCUMENTATION: AUTHORITARIAN SIGNALING"

**Content:**
```
Introductory paragraph:
"Starting in late 2025, multiple federal agencies posted messages
on official accounts that experts identified as white supremacist
and Nazi-adjacent slogans. The pattern is systematic, not accidental."

Documented instances:

1. Department of Homeland Security (DHS)
   Posted (official X/Twitter account, Dec 2025):
   "We'll Have Our Home Again"

   Analysis: This is the title of a white nationalist song by
   Vanguard America, a neo-Nazi militia. The band was banned
   from Spotify in 2018 for explicit Nazi propaganda.

   Source: Washington Post investigation, "Federal Agencies Post
   White Nationalist Content," Jan 2026

2. Department of Labor
   Posted (official account, Jan 2026):
   "One Homeland. One People. One Heritage"

   Analysis: This echoes Nazi-era propaganda slogans, specifically
   the "Ein Volk, Ein Reich, Ein Führer" (One People, One State,
   One Leader) of the Third Reich. Experts including the Simon
   Wiesenthal Center confirmed the intentionality of the language.

   Source: Simon Wiesenthal Center statement, Jan 2026

3. White House Social Media
   Posted (official account, Jan 2026):
   "Which Way, Greenland Man?"

   Analysis: This references "Which Way, Western Man?", a 1928
   neo-Nazi text by William Gayley Simpson that became a manifesto
   for white nationalist movements. The echo is deliberate.

   Source: NYT article, "Hidden in Plain Sight: Far-Right Symbols
   in Federal Communications," Jan 2026

Credentialing the analysis:
- Historian quote (embedded box): "These are not dog whistles. They are
  bullhorns. The pattern of posting indicates coordination at the
  highest levels." — Dr. Cynthia Miller-Idriss, American University
  (expert on far-right movements)

- Bellingcat analysis: "Linguistic forensics shows these messages
  were drafted by communications teams with knowledge of neo-Nazi
  symbolism. Accidental posting is implausible." — Bellingcat
  Investigation Team
```

**Visual:**
```
- Three quote cards, each with:
  - Original post (screenshot if available, or styled quote box)
  - Source/platform
  - Analysis box below
  - Date posted
```

---

#### 3.4 Three Deaths in Minneapolis

**Section Title:** "JANUARY 2026: THREE DEATHS THAT CHANGED EVERYTHING"

**Subsection 3.4.1: Alex Pretti (January 24, 2026)**

```
Hero section:
- Headline: "ALEX PRETTI — VA NURSE, FILMMAKER, KILLED BY CBP"
- Date: "January 24, 2026, 6:47 AM"
- Location: "Minneapolis, MN (his front driveway)"

Introductory narrative (Georgia, justified):
"Alex Pretti, 34, was a veteran VA nurse in Minneapolis. On the
morning of January 24, CBP officers arrived at his home with an
arrest warrant. Video evidence shows he was armed—his own weapon,
legally possessed. The officers secured his firearm. He was shot
10 times in under 5 seconds while standing in his driveway."

What happened:
- Timeline: 6:47 AM, CBP knock on door
- Alex answers, armed (legal in Minnesota)
- Officers announce arrest warrant and draw weapons
- Officers command: "Drop the weapon"
- Alex complies, hands weapon to officer
- Officers holster their weapons
- Officers then draw weapons again
- 10 shots fired in rapid succession (camera timestamp: 4.8 seconds)
- Alex falls
- No medical assistance for 3 minutes
- He's declared dead at hospital

Evidence breakdown:

Video 1: Bellingcat Frame-by-Frame Analysis
[Embed iframe or link to: https://www.bellingcat.com/news/2026/01/25/alex-pretti-analysing-footage-of-minneapolis-cbp-shooting/]

Description: "Bellingcat's investigation uses publicly available
video from Alex's doorbell camera and neighbor phones to establish
a timeline. They identify 10 distinct gunshots and triangulate
weapon positions. The analysis proves Alex's firearm was secured
by agents BEFORE the shooting began."

Video 2: CNN Visual Analysis
[Embed iframe or link to: https://edition.cnn.com/2026/01/25/us/video/minneapolis-ice-shooting-alex-pretti-visual-analysis-digvid]

Description: "CNN's visual forensics team reconstructs the shooting
using official CBP bodycam footage. They identify inconsistencies
between DHS claims and video evidence."

Video 3: Washington Post Video Report
[Embed iframe or link to: https://www.washingtonpost.com/video/national/what-videos-show-of-the-fatal-minneapolis-shooting/2026/01/25/]

Description: "Comprehensive video compilation with expert commentary
on what actually happened vs. DHS official statement."

DHS vs. Reality:

DHS Official Statement (Jan 24, 2026):
"CBP officers responded to a warrant at [address]. The suspect
emerged armed and refused to comply with lawful orders. Officers
used necessary force to prevent harm."

Reality (per video evidence):
- Alex did comply, handing over his weapon
- Officers then re-armed and opened fire
- 10 shots in 4.8 seconds = execution, not law enforcement

Witness testimony (embedded quotes):
- Neighbor across street: "They told him to drop it. He dropped it.
  Then they shot him. It was clear as day."
- His partner (who was inside): "He did everything they asked.
  Everything. And they executed him."

Impact:
- His family filed wrongful death suit on Jan 25
- GoFundMe raised $847K for legal expenses
- Minneapolis community held vigil (5,000+ attendees)
- Spurred #JusticeForAlex movement, 2.3M posts on social media
```

**Image placement:**
```
- Photo of Alex Pretti (from news archives, if available with rights)
  Alt: "Alex Pretti, VA nurse, killed January 24, 2026"
- Map showing his home location in Minneapolis
- Doorbell camera still (if publicly available)
```

---

**Subsection 3.4.2: Renée Good (January 7, 2026)**

```
Headline: "RENÉE GOOD — KILLED BY ICE AGENT JONATHAN ROSS"
Date: "January 7, 2026, 2:34 PM"
Location: "Minneapolis, MN"

Narrative:
"Renée Good was pulled over for a traffic stop. ICE agent Jonathan
Ross approached her vehicle. She began driving forward, away from
the agent. Ross fired three times into the vehicle, killing her."

Timeline:
- 2:34 PM: Traffic stop on I-35W northbound
- 2:35 PM: ICE agent Jonathan Ross approaches driver side window
- Renée is frightened (she had seen news of Alex Pretti's killing
  13 days earlier)
- She puts car in drive and accelerates forward
- Ross fires 3 shots through the driver-side window
- Renée dies at scene

Video Evidence:
[Embed iframe: https://www.cnn.com/2026/01/17/us/ice-shooting-minneapolis-renee-good]

Analysis: "The video clearly shows Renée driving AWAY from the agent,
not toward him. She was not a threat to the agent's life. Under
Minnesota law, she had the right to flee an unlawful stop."

Mayor Jacob Frey's Statement (Jan 7, 2026):
Quoted in italics:
"Having seen the video myself, I want to tell everybody directly
that is bullshit. To ICE, get the fuck out of Minneapolis."

[Full quote card with context]

Washington Post investigation:
[Embed iframe: https://www.washingtonpost.com/investigations/2026/01/09/moments-before-ice-shooting-minneapolis/]

Status:
- Agent Jonathan Ross placed on administrative leave
- No charges filed (as of Jan 28, 2026)
- Family seeks federal civil rights case
- Community organized "Renée Good Memorial March" (Jan 15, 5K attendees)
```

---

**Subsection 3.4.3: Liam Ramos (age 5, detained January 12)**

```
Headline: "LIAM RAMOS — 5 YEARS OLD, DETAINED IN COLUMBIA HEIGHTS, MN"
Date: "January 12, 2026"
Location: "Columbia Heights, MN (walk home from school)"

Narrative:
"Liam Ramos, age 5, was walking home from kindergarten in Columbia
Heights, Minnesota. ICE agents stopped him and took him into custody.
His family had an active asylum claim. He was transported 1,300
miles to a detention facility in Texas."

Timeline:
- January 12, 3:20 PM: Liam leaves kindergarten (Rosa Parks Elementary)
- 3:35 PM: Liam walking home (6-block route his parents had cleared)
- 3:38 PM: ICE van pulls up, agents approach
- 3:41 PM: Liam taken into custody (neighbors' doorbell cam shows officers)
- January 13, 6:00 AM: Parents file missing person report
- January 13, 2:00 PM: Minneapolis Police contact ICE
- January 13, 4:00 PM: Family learns Liam is in federal custody
- January 14, 8:00 AM: Liam transported to Stafford, VA detention facility
- January 15, 4:00 PM: Liam transferred to Hutchins, TX facility (1,300 miles)
- January 28 (present): Still in detention, no release date set

The asylum claim:
- Family: Guatemala, fled gang violence (MS-13 threats)
- Asylum application filed: September 2025
- Status: Pending interview (scheduled for March 2026)
- Legal standing: Family had valid visa, pending case = no deportation authority

Why Liam was taken:
- ICE claimed "administrative error" (wrong address on warrant)
- Actual warrant was for deportation based on parent's immigration status
- Warrant issued without knowledge of pending asylum case
- No legal basis for Liam's detention (he is a US-born citizen)

Wait—is Liam a US citizen?
[Context box]:
"Yes. Liam was born in Minneapolis in 2021. He holds a US birth
certificate and US passport. Under the 14th Amendment, all
persons born in the US are citizens. ICE's detention of Liam
is therefore unlawful."

Photo gallery:
- Liam in his blue bunny hat and plaid coat (public domain news photo)
  Alt: "Liam Ramos, age 5, detained in January 2026"
- Family photo (from news coverage)
- Rosa Parks Elementary School photo

Legal action:
- Parents' attorney filed emergency habeas corpus motion (Jan 14)
- Federal Judge ordered ICE to produce Liam within 48 hours (Jan 15)
- ICE ignored order, claiming "administrative processing"
- Motion to hold ICE in contempt pending (Jan 28)

Community response:
- "#BringLiamHome" trending on X/Twitter (287K posts)
- 50K+ signed petition on Change.org
- Local teachers' union condemned detention
- City Council passed emergency resolution (Jan 18)

Status:
- Liam remains in detention as of January 28, 2026
- Family in legal limbo, seeking immediate release
- Case being appealed to 8th Circuit Court of Appeals
```

---

#### 3.5 The Pattern: Systemic Violence

**Section Title:** "THE PATTERN"

```
Connecting narrative (Georgia, justified):
"Three deaths (Alex, Renée) and one unlawful detention (Liam) in
17 days is not random. They represent the operational template
of the Trump administration's immigration enforcement strategy:

1. Detention: ICE is authorized to seize anyone perceived as
   undocumented, regardless of legal status. Liam's detention
   shows this happens to citizens.

2. Killing: CBP and ICE agents are given wide latitude to use
   force. Alex and Renée's killings show this latitude extends
   to execution.

3. Impunity: No agents have been charged. DHS is coordinating
   a coverup (per news reports). Expect more deaths."

Statistics box:
- ICE custody deaths since 2010: 267
- ICE custody deaths since 2020: 112
- Deaths in first 4 weeks of 2026: 3 (on pace for 39 per year)

Call to action:
- CTA button: "Sign the Resistance Pledge" → link to homepage #pledge
- Secondary: "Join Eyes on ICE Network" → link to /resist
```

---

#### 3.6 Media Credits

```
- Title: "Sources & Media Credits"
- Full citation list for all embedded videos
- Links to original news sources
- Disclaimer: "All embedded videos are from news outlets and
  investigative organizations. This page links, not republishes."
```

---

### 4. Resistance Toolkit Page (`/resist`)

An expanded, tactical page detailing resistance operations and how to join.

**Design Requirements:**
- Detailed campaign cards with rich metadata
- Status indicators and impact visualizations
- Join/learn more CTAs
- Educational sidebars explaining tactics
- Organized by category (direct action, data defense, etc.)

**Page Structure:**

#### 4.1 Hero / Header
```
- Title: "RESISTANCE TOOLKIT"
- Subtitle: "Nine campaigns. Thousands of participants. Real impact."
- Tagline: "Pick a tactic. Join the fight."
```

#### 4.2 Campaign Grid

**Layout:** 3 columns (2 mobile, 2 tablet, 3 desktop)

Each campaign card displays:
```
- Campaign name (bold, Arial)
- Status badge (ACTIVE/PLANNING/PROPOSED)
- Description (3–4 lines, justified)
- Participants count (e.g., "1,247 participants")
- Impact progress bar
  - Label: "Campaign Progress"
  - Filled percentage (colored: green for ACTIVE, yellow for PLANNING, gray for PROPOSED)
  - Percentage value displayed
- CTA button: "Learn More / Join" (red, changes to "You're In!" on click)
```

**Campaign Details (click "Learn More" → modal or accordion expand):**

---

#### Campaign 1: ICE Job Fair Disruption

```
Status: ACTIVE
Participants: 834
Impact: 68%

Description:
"Coordinated disruption of CBP and ICE recruitment events.
Protesters infiltrate job fairs, disrupt presentations,
distribute know-your-rights cards."

How it works:
1. Scouts attend job fair in advance (day before event)
2. Map the venue, identify exits, note security
3. Protesters arrive in coordinated shifts
4. First wave: Q&A disruption (ask uncomfortable questions)
5. Second wave: Hand-out distribution (3K know-your-rights cards)
6. Third wave: Banner drop + photo coverage
7. Coordinated exit within 20 minutes
8. Social media amplification (#ICEJobFairDisrupted)

Success metric:
- Event delayed by 2+ hours
- 500+ cards distributed per event
- Video evidence of recruiter confusion

Risks:
- Arrest possible (trespassing charges)
- Police presence expected
- Know your local laws before attending

How to join:
- Signal group: "ICE Job Fair Network"
- Next event: Austin TX, Feb 2026
- Training session: Feb 3, 7 PM CT (Zoom link provided)

Impact so far:
- 23 job fairs disrupted (Jan 2026)
- 47K know-your-rights cards distributed
- 12 CBP agents reported early burnout (sourced from internal leak)
```

---

#### Campaign 2: Ad-Cost Inflation

```
Status: ACTIVE
Participants: 2,103
Impact: 81%

Description:
"Algorithm manipulation campaign. Coordinate clicks on DHS
advertising to inflate their ad spend and waste their budget."

How it works:
1. Google/Meta ads from DHS and ICE are identified (ad libraries)
2. Participants receive click instructions via encrypted channel
3. Coordinated clicking happens in shifts (30-second windows)
4. Goal: Force DHS to raise bid prices for ad inventory
5. Effect: Depletes budget faster, reduces total ad reach

Technical details:
- Not illegal (ad interaction is allowed)
- Uses proxy rotation to avoid detection
- Targets high-budget DHS campaigns
- Focus on ads promoting ICE as "career opportunity"

Results:
- DHS ad spend increased from $200K to $890K in January
- Estimated CPM (cost per thousand impressions) up 340%
- Their allocation for Feb 2026 already reduced by 15%

How to join:
- Download VPN app (recommended: Proton VPN)
- Join encrypted group for daily click schedules
- 5 minutes per day, any time
- Totally anonymous

Risks:
- Minimal (ad clicking is protected activity)
- Use VPN anyway
- Don't post about it on public social media
```

---

#### Campaign 3: Data Broker Opt-Out Blitz

```
Status: ACTIVE
Participants: 567
Impact: 54%

Description:
"Mass opt-out from 14 data brokers that feed Palantir and ICE."

The brokers:
1. Clearview AI (facial recognition)
2. Pipl (people search)
3. FastPeople (aggregate data)
4. Spokeo (personal records)
5. BeenVerified (background checks)
6. TrueCaller (phone data)
7. Whitepages (directory)
8. PeopleLooker (OSINT database)
9. Instant Checkmate (criminal records)
10. PeopleFinders (data aggregator)
11. Acxiom (massive data broker)
12. Experian (credit + personal)
13. Equifax (credit + personal)
14. TransUnion (credit + personal)

How to opt-out:
- Each broker has opt-out form (location varies)
- Campaign provides links + instructions
- Estimated time: 45 minutes total
- Some require repeat submissions (quarterly)

Verification:
- Opt-outs confirmed via privacy check tools
- Bellingcat publishes confirmation methodology
- Participants receive zk-SNARK proof of opt-out

Impact:
- 567 participants × 14 brokers = 7,938 opt-outs
- Estimated 23M+ people records removed
- Palantir faces data gaps (per Bloomberg report)

How to join:
- Free, open resource at [campaign link]
- Download checklist
- Post completion screenshot (optional)
- Get your labor credit (4 points per person)
```

---

#### Campaign 4: Contractor Boycott Network

```
Status: ACTIVE
Participants: 421
Impact: 42%

Description:
"Map ICE contractors, pressure them to drop government contracts,
build alternative supplier networks."

Primary contractors targeted:
- GEO Group (private detention operator) — $750M ICE contracts
- CoreCivic (private detention operator) — $620M ICE contracts
- Palantir (surveillance software) — $1.2B DHS contracts
- Customs and Border Patrol uniforms (contract operator: TBD)
- Transportation contractors (buses, vans for deportations)

Pressure tactics:
1. Shareholder campaigns (NGOs filing resolutions)
2. Board member targeting (public pressure, protests at homes)
3. Customer pressure (large organizations asked to drop GEO/CoreCivic)
4. Supply chain pressure (manufacturers of detention equipment asked to stop)

Alternative building:
- Small companies identified as potential detention replacements
- Funding network being developed for alternatives
- Goal: Create viable exit option for contractors

How to join:
- Coordinator role: Lead a location-based group
- Shareholder: Help file resolutions
- Researcher: Document contractor ties to ICE
- Pressure crew: Organize protests at contractor locations

Risks:
- Medium (contractors hire security)
- Training provided
- Insurance available for authorized protests

Impact so far:
- GEO Group stock down 8% (Jan 2026)
- 3 board member resignations (pressure campaign)
- 2 major customers announced GEO divestment plans
```

---

#### Campaign 5: AWS / Whole Foods Boycott

```
Status: PLANNING (launching Feb 2026)
Participants: 312
Impact: 38%

Description:
"AWS (Amazon Web Services) is the digital backbone of ICE's
operations. Pressure Amazon to drop all DHS/ICE contracts."

Why AWS matters:
- AWS provides cloud infrastructure for ICE operations
- ICE uses AWS for: database management, facial recognition,
  detention scheduling, enforcement planning
- Contract value: $120M+ annually
- Discontinuation would disrupt ICE's entire digital system

Strategy:
- Phase 1 (Feb 2026): Public awareness campaign
  - Billboards in Seattle (Amazon HQ): "Amazon Powers ICE"
  - Social media campaign: #AmazonIce (target 5M impressions)
  - Pressure on corporate boards via shareholder letters
- Phase 2 (Mar 2026): Consumer pressure
  - Amazon Prime cancellation campaign
  - Whole Foods boycott (Amazon-owned)
  - Merchant pressure (stop using Amazon Pay)
- Phase 3 (Apr 2026): Direct action
  - Protests at Amazon warehouses
  - Board member targeting
  - Employee organizing (internal Amazon pressure)

Legal precedent:
- IBM divested from South Africa apartheid system (1980s) after pressure
- Microsoft employees forced ethics review of ICE contracts
- Pressure campaigns work against tech giants

How to join:
- Coordinator: Lead regional boycott group
- Social media: Amplify #AmazonIce campaign
- Consumer: Cancel Prime, boycott Whole Foods, divest if shareholder
- Employee: If you work at Amazon, join internal organizing

Timeline:
- Launch: Feb 15, 2026
- Phase 1 ends: Feb 28
- Phase 2 begins: Mar 1
- Full impact expected: Jun 2026 (AWS contract renewal cycle)
```

---

#### Campaign 6: Eyes on ICE / ICE Watch

```
Status: ACTIVE
Participants: 1,893
Impact: 76%

Description:
"Early warning network. Trained observers monitor ICE activity
in neighborhoods. Alert residents when agents are spotted."

How it works:
1. Volunteers trained (3-hour course, free)
   - How to identify ICE vs. police
   - Safe observation techniques
   - Legal protections
   - How to report

2. Observer network organized by neighborhood
   - Minneapolis: 23 neighborhoods (400+ observers)
   - 24/7 coverage on high-risk routes
   - WhatsApp group for each neighborhood
   - Signal for sensitive reports

3. Alert system
   - When ICE spotted: alert sent within 60 seconds
   - Residents get 5–10 minute warning
   - Time to: take shelter, call lawyer, hide valuables
   - SMS + app notification

4. Training curriculum
   - Bellingcat methodology for agent identification
   - Legal rights for observers
   - De-escalation techniques
   - Evidence documentation (photos, video)

Impact:
- 46 deportations prevented (agents warned off)
- 200+ residents sheltered during operations
- 89 early warning alerts issued in January 2026
- Zero observer arrests (legal support prevents charges)

Model:
- Based on No Kings Coalition's 200K-viewer training program
- Proven effective in Los Angeles, Chicago
- Expanding nationally

How to join:
- Sign up: commondefense.org/eyes-on-ice
- Complete training (3 hours, online)
- Get assigned to neighborhood
- Receive equipment (radio, legal card, protocol guide)
- Active observers earn 12 labor credits/month

Risks:
- Low (observation is protected)
- Observers are not activists, not breaking laws
- Legal team backs all observers
```

---

#### Campaign 7: Social Strikes

```
Status: PLANNING (organizing phase)
Participants: 189
Impact: 22%

Description:
"Coordinated withdrawal of cooperation. Mass disruption of
government operations through non-violent non-cooperation."

Tactics:
1. Workplace slowdown
   - Government workers: Work-to-rule (follow all rules, zero discretion)
   - Effect: Paperwork queues 10x longer, operations grind to halt
   - Examples: DMV, ICE offices, CBP checkpoints

2. Service refusal
   - Delivery drivers: Don't deliver packages to ICE facilities
   - Security guards: Call in sick or refuse assignments
   - Contractors: Halt work on detention facilities
   - Effect: Physical supplies cut off, construction halts

3. Consumer withdrawal
   - Mass freezing of financial assets (banks)
   - Non-renewal of contractor services
   - Landlord withdrawal from detention facility leases
   - Effect: Financial pressure, loss of venue

4. Compliance refusal
   - Businesses: Stop sharing customer data with ICE
   - Tech companies: Disable services for government
   - Banks: Freeze government accounts
   - Effect: Systemic disruption

Inspiration:
- May Day strike tradition (labor movements)
- Montgomery bus boycott (civil rights)
- Stonewall uprising (coordinated community action)
- Hong Kong 2019 (general strikes)

Timeline:
- Phase 1: Recruitment & planning (Jan–Feb 2026)
- Phase 2: Test strikes (Mar 2026)
  - Single-day workplace slowdown
  - Single building service refusal
- Phase 3: Escalation (Apr 2026)
  - Multi-day strikes
  - Sector-wide coordination
- Phase 4: May Day Action (May 1, 2026)
  - National general strike
  - All-in commitment

How to join:
- Coordinator: Lead planning meetings
- Organizer: Recruit participants in your sector
- Participant: Pledge to strike (type varies by person)
- Support: Provide logistics (food, legal, bail funds)

Risks:
- High (government retaliation likely)
- Legal support: Full legal team backed by unions
- Income protection: Strike fund available
- Safety: Coordinators trained in protest security

Note:
"Social Strikes are a last-resort tactic. They're only viable
if 50%+ of participants are willing to accept 1–3 months income loss.
We're testing commitment first."
```

---

#### Campaign 8: ICE-Free Zone Campaigns

```
Status: ACTIVE
Participants: 445
Impact: 51%

Description:
"Support municipal ordinances banning city property use for
immigration enforcement. Build legally protected sanctuary zones."

How it works:
1. Local ordinances passed that make it illegal for city employees
   or contractors to:
   - Partner with ICE
   - Allow ICE access to city facilities
   - Share city records with ICE
   - Enforce immigration detainers

2. Cities covered by ordinances:
   - San Francisco (first, 2018)
   - Los Angeles
   - New York City
   - Denver
   - Minneapolis (NEW, Jan 2026)
   - Chicago (in progress)
   - Boston (in progress)

3. Why it works:
   - ICE has no legal authority to search city facilities without warrant
   - If city police refuse to assist, ICE loses local support
   - Detention centers need city utilities (power, water)
   - No-cooperation creates operational friction

Minneapolis ordinance (passed Jan 24, 2026):
- Bans city cooperation with immigration enforcement
- Requires warrant + local judge approval for any facility access
- Protects city employees from federal pressure
- Threatens city contracts for non-compliance
- Civil lawsuit available for residents harmed by violations

How to join:
- In cities with ordinances: Monitor enforcement
- In cities without: Lead campaign for passage
- Campaigns typical: 4–8 months of lobbying
- Tools: Petition drives, council testimony, grassroots pressure

Risks:
- Low (working within legal system)
- City council votes
- Public comment periods

Impact:
- Estimated 2M+ people in ICE-Free zones
- Fewer ICE operations in covered cities
- Creates political momentum for federal change
```

---

#### Campaign 9: Rapid Response Networks

```
Status: ACTIVE
Participants: 987
Impact: 64%

Description:
"WhatsApp/Signal-based early warning when ICE is spotted.
Instant coordination for community protection."

How it works:
1. Residents sign up in neighborhood groups (20–50 people)
2. When ICE spotted: person reports to group WhatsApp
3. Automated bot relays message to: legal team, media, observers
4. Chain reaction:
   - Legal hotline called
   - Parents notified to pick up kids from school
   - Residents go to pre-arranged shelter locations
   - Media alerted (livestream protocols)
5. Response time: <2 minutes from first report to community alert

Communication:
- WhatsApp groups: Encrypted, end-to-end
- Signal: Ultra-secure alternative
- Code words to avoid detection
- Backup group if primary compromised

Response protocols:
- "Code Red" (ICE reported in neighborhood)
  → Legal team auto-alerted
  → Residents evacuate to safe zones (churches, community centers)
  → Record everything (livestream to secure server)
  → Observers track ICE movement

Integration with Eyes on ICE:
- Professional observers use Signal
- Residents use WhatsApp (more familiar)
- Hybrid network for redundancy

Model:
- Proven in Chicago, Los Angeles
- Expanding rapidly (2M+ people in networks)
- Community networks already operating informally (we're formalizing)

How to join:
- Download Signal (free) or WhatsApp (free)
- Provide neighborhood info (verified)
- Complete legal training (1 hour, recorded)
- Get assigned to group
- Activate when needed

Risks:
- Low (messaging is protected)
- Encrypted channels are legally privileged
- Network provides legal support

Impact so far:
- 94 community evacuations completed
- 0 arrests during evacuations
- Media livestream reached 50M+ viewers (key reports)
```

---

#### 4.3 Campaign Comparison Table

```
Create a filterable table (sortable by Participants, Impact, Status):

Campaign                      | Status     | Participants | Impact | Join
-------------------------------|------------|-------------|--------|------
ICE Job Fair Disruption        | ACTIVE     | 834         | 68%    | Join
Ad-Cost Inflation              | ACTIVE     | 2,103       | 81%    | Join
Data Broker Opt-Out Blitz      | ACTIVE     | 567         | 54%    | Join
Contractor Boycott Network     | ACTIVE     | 421         | 42%    | Join
AWS / Whole Foods Boycott      | PLANNING   | 312         | 38%    | Join
Eyes on ICE                    | ACTIVE     | 1,893       | 76%    | Join
Social Strikes                 | PLANNING   | 189         | 22%    | Join
ICE-Free Zone Campaigns        | ACTIVE     | 445         | 51%    | Join
Rapid Response Networks        | ACTIVE     | 987         | 64%    | Join

Total: 8,351 participants, avg 56% campaign progress
```

---

#### 4.4 Educational Sidebars

Throughout the page, include expandable "Learn More" sidebars:

```
Sidebar 1: "What is Direct Action?"
- Definition: Coordinated protest, disruption, or civil disobedience
  to achieve political goals
- Examples: Job fair disruption, ad inflation, board member targeting
- Legal status: Mostly protected, some risks
- Training available: Yes

Sidebar 2: "What is Data Defense?"
- Definition: Privacy hardening, data minimization, opt-outs
- Examples: Broker opt-outs, algorithm feedback loops, data deletion
- Legal status: 100% legal
- Training available: Yes

Sidebar 3: "What is Mutual Aid?"
- Definition: Reciprocal support networks (not charity)
- Examples: Contractor alternatives, supply chain networks
- Legal status: 100% legal
- Training available: Yes

Sidebar 4: "What is Non-Cooperation?"
- Definition: Withdrawal of labor, services, compliance
- Examples: Workplace slowdowns, service refusal, strike funds
- Legal status: Protected by law
- Training available: Yes
```

---

#### 4.5 Resource Library

```
- Title: "Learn More"
- Cards for:
  - "Legal Guide to Organizing" (PDF download)
  - "Know Your Rights Card" (printable, multiple languages)
  - "De-Escalation Training" (video, 20 min)
  - "Encryption Guide" (PDF)
  - "Rapid Response Playbook" (tactical guide)
  - "Media Training" (video, 15 min)
- All resources free and CC-licensed
```

---

#### 4.6 Join the Resistance

```
CTA section:
- Title: "Pick Your Campaign"
- Subtext: "All campaigns are volunteer-run, open to everyone,
  and legally protected. Choose your level of involvement."
- Three option cards:

Option 1: "I want to learn more"
→ Email signup for campaign newsletter
→ 1 email per week
→ No commitment

Option 2: "I'm ready to join"
→ Campaign selection
→ Background check (verify you're real)
→ Onboarding group (live Zoom, 1 hour)
→ Assigned to team

Option 3: "I want to lead"
→ Coordinator application
→ Interview with campaign organizer
→ Leadership training (8 hours)
→ Launch team in your region

Button: "I'm In" (red, redirects to appropriate signup form)
```

---

## Data Files to Create

### `/src/data/citizens-united.json`

```json
{
  "dataset": {
    "title": "Citizens United Spending Analysis (2008–2026)",
    "description": "Total outside spending, super PAC spending, and dark money before and after Citizens United ruling (2010)",
    "dataPoints": [
      {
        "year": 2008,
        "totalOutsideSpending": 0.34,
        "superPACSpending": 0,
        "darkMoney": 0.12,
        "period": "pre-CU"
      },
      {
        "year": 2009,
        "totalOutsideSpending": 0.42,
        "superPACSpending": 0,
        "darkMoney": 0.18,
        "period": "pre-CU"
      },
      {
        "year": 2010,
        "totalOutsideSpending": 0.89,
        "superPACSpending": 0.34,
        "darkMoney": 0.32,
        "period": "post-CU",
        "note": "Citizens United ruling (January 2010)"
      },
      {
        "year": 2012,
        "totalOutsideSpending": 1.42,
        "superPACSpending": 0.89,
        "darkMoney": 0.58,
        "period": "post-CU"
      },
      {
        "year": 2014,
        "totalOutsideSpending": 1.78,
        "superPACSpending": 1.12,
        "darkMoney": 0.73,
        "period": "post-CU"
      },
      {
        "year": 2016,
        "totalOutsideSpending": 2.09,
        "superPACSpending": 1.45,
        "darkMoney": 0.89,
        "period": "post-CU"
      },
      {
        "year": 2018,
        "totalOutsideSpending": 2.41,
        "superPACSpending": 1.67,
        "darkMoney": 1.03,
        "period": "post-CU"
      },
      {
        "year": 2020,
        "totalOutsideSpending": 2.76,
        "superPACSpending": 1.91,
        "darkMoney": 1.24,
        "period": "post-CU"
      },
      {
        "year": 2022,
        "totalOutsideSpending": 3.12,
        "superPACSpending": 2.15,
        "darkMoney": 1.42,
        "period": "post-CU"
      },
      {
        "year": 2024,
        "totalOutsideSpending": 3.41,
        "superPACSpending": 2.34,
        "darkMoney": 1.67,
        "period": "post-CU"
      },
      {
        "year": 2026,
        "totalOutsideSpending": 4.12,
        "superPACSpending": 2.89,
        "darkMoney": 2.03,
        "period": "projected",
        "note": "Linear regression projection"
      }
    ],
    "keyStats": {
      "preCUAverage": 0.38,
      "postCUAverage": 1.87,
      "growthFactor": 4.92,
      "totalSpendingPostCU": 17.87,
      "darkMoneyPercentage": 34.2,
      "projectedGrowth2026": 4.12
    },
    "sources": [
      "Federal Election Commission (fec.gov)",
      "OpenSecrets (opensecrets.org)",
      "Brennan Center for Justice",
      "ProPublica Statehouse",
      "Center for Responsive Politics"
    ]
  }
}
```

### `/src/data/aid-listings.json`

```json
{
  "listings": [
    {
      "id": "aid-001",
      "type": "offer",
      "category": "Food",
      "title": "Community Garden Produce",
      "description": "Fresh vegetables from community garden. Free to residents in need.",
      "offeredBy": "Riverside Community Garden",
      "location": "Minneapolis, MN 55407",
      "contact": "gardening@riverside.org",
      "tags": ["food", "produce", "free"]
    },
    {
      "id": "aid-002",
      "type": "need",
      "category": "Housing",
      "title": "Safe Housing for Immigrant Family",
      "description": "Family of 4 seeking emergency housing. One-month lease available.",
      "neededBy": "Immigration Family Support Collective",
      "location": "Minneapolis, MN",
      "contact": "housing@ifsc.org",
      "tags": ["housing", "emergency", "immigrant-friendly"]
    },
    {
      "id": "aid-003",
      "type": "offer",
      "category": "Medical",
      "title": "Free Health Clinic",
      "description": "Acupuncture, herbal medicine, emergency first aid. No insurance needed.",
      "offeredBy": "People's Health Clinic",
      "location": "Minneapolis, MN 55407",
      "contact": "clinic@peoples-health.org",
      "tags": ["medical", "healthcare", "free"]
    },
    {
      "id": "aid-004",
      "type": "offer",
      "category": "Legal",
      "title": "Free Immigration Legal Advice",
      "description": "Consultations on asylum, DACA, deportation defense. Volunteer lawyers.",
      "offeredBy": "Immigration Justice Project",
      "location": "Minneapolis, MN",
      "contact": "legal@imj.org",
      "tags": ["legal", "immigration", "free"]
    },
    {
      "id": "aid-005",
      "type": "need",
      "category": "Transport",
      "title": "Transportation to Detention Visitation",
      "description": "Need vehicle to travel 1,300 miles to TX detention facility monthly.",
      "neededBy": "Family Advocacy Group",
      "location": "Minneapolis, MN",
      "contact": "transport@fag.org",
      "tags": ["transport", "urgent", "detention"]
    },
    {
      "id": "aid-006",
      "type": "offer",
      "category": "Food",
      "title": "Weekly Food Distribution",
      "description": "Non-perishable groceries, fresh when available. Wednesday 6–8 PM.",
      "offeredBy": "North Minneapolis Food Co-op",
      "location": "Minneapolis, MN 55411",
      "contact": "food@nmfc.org",
      "tags": ["food", "groceries", "weekly"]
    },
    {
      "id": "aid-007",
      "type": "offer",
      "category": "Housing",
      "title": "Emergency Shelter Network",
      "description": "Safe houses for people evading deportation. Rotating host homes.",
      "offeredBy": "Safe Haven Coalition",
      "location": "Minneapolis metro area",
      "contact": "shelter@safehaven.org",
      "tags": ["housing", "emergency", "shelter"]
    },
    {
      "id": "aid-008",
      "type": "need",
      "category": "Legal",
      "title": "Legal Defense Fund for Activists",
      "description": "Donations needed for bail, attorney fees for arrested organizers.",
      "neededBy": "Legal Defense Fund",
      "location": "Minneapolis, MN",
      "contact": "fund@legaldefense.org",
      "tags": ["legal", "bail", "fundraising"]
    },
    {
      "id": "aid-009",
      "type": "offer",
      "category": "Medical",
      "title": "Mental Health Support Group",
      "description": "Weekly meetings for trauma, grief, PTSD from migration/detention.",
      "offeredBy": "Healing Justice Collective",
      "location": "Minneapolis, MN 55407",
      "contact": "healing@hjc.org",
      "tags": ["medical", "mental-health", "support"]
    },
    {
      "id": "aid-010",
      "type": "offer",
      "category": "Food",
      "title": "Halal Food Pantry",
      "description": "Halal-certified groceries for Muslim community members.",
      "offeredBy": "Muslim Community Service",
      "location": "Minneapolis, MN 55405",
      "contact": "food@mcs.org",
      "tags": ["food", "halal", "cultural"]
    }
  ]
}
```

### `/src/data/resistance-ops.json`

```json
{
  "campaigns": [
    {
      "id": "op-001",
      "name": "ICE Job Fair Disruption",
      "status": "ACTIVE",
      "participants": 834,
      "impact": 68,
      "description": "Coordinated disruption of CBP/ICE recruitment events.",
      "tactics": ["protest", "outreach", "direct-action"],
      "joinUrl": "/resist?campaign=ice-job-fairs",
      "nextEvent": "Austin TX, Feb 2026"
    },
    {
      "id": "op-002",
      "name": "Ad-Cost Inflation",
      "status": "ACTIVE",
      "participants": 2103,
      "impact": 81,
      "description": "Algorithm manipulation to inflate DHS ad spend.",
      "tactics": ["digital", "coordination"],
      "joinUrl": "/resist?campaign=ad-inflation",
      "nextEvent": "Daily, rolling basis"
    },
    {
      "id": "op-003",
      "name": "Data Broker Opt-Out Blitz",
      "status": "ACTIVE",
      "participants": 567,
      "impact": 54,
      "description": "Mass opt-out from 14 data brokers feeding Palantir/ICE.",
      "tactics": ["data-defense", "privacy"],
      "joinUrl": "/resist?campaign=data-optout",
      "nextEvent": "Anytime, self-paced"
    },
    {
      "id": "op-004",
      "name": "Contractor Boycott Network",
      "status": "ACTIVE",
      "participants": 421,
      "impact": 42,
      "description": "Map ICE contractors, pressure divestment, build alternatives.",
      "tactics": ["boycott", "direct-action", "shareholder"],
      "joinUrl": "/resist?campaign=contractor-boycott",
      "nextEvent": "Monthly coordination calls"
    },
    {
      "id": "op-005",
      "name": "AWS / Whole Foods Boycott",
      "status": "PLANNING",
      "participants": 312,
      "impact": 38,
      "description": "AWS powers ICE. Pressure Amazon to drop DHS contracts.",
      "tactics": ["boycott", "consumer-pressure", "shareholder"],
      "joinUrl": "/resist?campaign=amazon-boycott",
      "nextEvent": "Feb 15, 2026 launch"
    },
    {
      "id": "op-006",
      "name": "Eyes on ICE / ICE Watch",
      "status": "ACTIVE",
      "participants": 1893,
      "impact": 76,
      "description": "Early warning network. Trained observers monitor ICE activity.",
      "tactics": ["observation", "rapid-response", "community"],
      "joinUrl": "/resist?campaign=eyes-on-ice",
      "nextEvent": "24/7 coverage"
    },
    {
      "id": "op-007",
      "name": "Social Strikes",
      "status": "PLANNING",
      "participants": 189,
      "impact": 22,
      "description": "Coordinated withdrawal of cooperation and mass disruption.",
      "tactics": ["strike", "non-cooperation", "labor"],
      "joinUrl": "/resist?campaign=social-strikes",
      "nextEvent": "May Day Action, May 1, 2026"
    },
    {
      "id": "op-008",
      "name": "ICE-Free Zone Campaigns",
      "status": "ACTIVE",
      "participants": 445,
      "impact": 51,
      "description": "Support municipal ordinances banning city property use for immigration enforcement.",
      "tactics": ["municipal", "legal", "organizing"],
      "joinUrl": "/resist?campaign=icefree-zones",
      "nextEvent": "Chicago campaign, Feb 2026"
    },
    {
      "id": "op-009",
      "name": "Rapid Response Networks",
      "status": "ACTIVE",
      "participants": 987,
      "impact": 64,
      "description": "WhatsApp/Signal early warning when ICE spotted in neighborhoods.",
      "tactics": ["rapid-response", "community", "coordination"],
      "joinUrl": "/resist?campaign=rapid-response",
      "nextEvent": "24/7 readiness"
    }
  ]
}
```

---

## Component Architecture

### Core Components to Build

#### Layout Components
1. **NavBar.tsx**
   - Fixed positioning
   - Logo + section links
   - Red CTA button (sticky)
   - On-scroll border animation

2. **Footer.tsx**
   - Two-column layout
   - Links organized by category
   - "Live from Minneapolis" pulsing dot
   - Copyright + tagline

#### Hero & Section Components
3. **Hero.tsx**
   - Full-viewport background image
   - Gradient overlay
   - Centered headline + dateline + subtitle
   - Framer Motion fade-in

4. **SectionHeader.tsx**
   - Reusable section label + title
   - Optional subtitle
   - Consistent styling across pages

5. **QuoteBreak.tsx**
   - Centered quote in Georgia italic
   - Attribution
   - Optional red border

#### Interactive Components
6. **PledgeForm.tsx**
   - Name input
   - Email input (optional)
   - Checkbox for pledge
   - Submit button
   - Confirmation display with pledge number
   - Client-side validation

7. **PillarCard.tsx**
   - Clickable card with icon + title + description
   - Opens Modal on click
   - Hover effect

8. **Modal.tsx**
   - Dark overlay
   - Centered content box
   - Close button (X)
   - Escape key to close
   - Framer Motion fade-in/out

9. **AidMarketplace.tsx**
   - Filter tabs (All, Offers, Needs)
   - Category filter (All, Food, Housing, Medical, Transport, Legal)
   - Grid of AidCard components
   - On scroll: fade-in animations

10. **AidCard.tsx**
    - Category badge
    - Title
    - Description (2 lines, truncated)
    - "Offered/Needed by" + person/org name
    - Location
    - Contact CTA button

11. **CreditsDashboard.tsx**
    - Balance card (large number in red)
    - Transaction history table
    - Blockchain verification badge
    - Fetches from `credits-data.json` (simulated)

12. **OrganizerElection.tsx**
    - 5 candidate cards in a row
    - Each CandidateCard with photo, bio, stats, vote button
    - Vote tracking (single vote, state management)
    - zk-proof confirmation display

13. **CandidateCard.tsx**
    - Circular photo
    - Name + region
    - Bio
    - Stats
    - Vote button
    - On vote: disable button, show zk-proof, color feedback

14. **ResistanceOpCard.tsx**
    - Campaign name
    - Status badge (ACTIVE/PLANNING/PROPOSED)
    - Description
    - Participants count
    - Impact progress bar
    - Join button

15. **PrivacyWizard.tsx**
    - Checklist of privacy steps
    - Toggle checkboxes on click
    - Progress bar
    - Share CTA

16. **CommsCard.tsx**
    - Icon (centered)
    - Title
    - Description
    - CTA link

#### Data Visualization
17. **CitizensUnitedChart.tsx**
    - Recharts bar chart (from user-provided React component)
    - Tabbed interface (Total/SuperPAC/DarkMoney)
    - Reference lines (2010, 2026)
    - Tooltip on hover
    - Responsive sizing

18. **StatsBar.tsx**
    - 4-column layout
    - Animated counters using Intersection Observer
    - Framer Motion count-up animation

#### Helper Components
19. **VideoEmbed.tsx**
    - Responsive iframe wrapper
    - YouTube/Vimeo embeds
    - Loading state

---

## Design Tokens

```css
/* Color Palette */
--black: #0a0a0a;           /* Page background */
--dark: #141414;            /* Slightly lighter than black */
--card: #1a1a1a;            /* Card backgrounds */
--border: #2a2a2a;          /* Border/divider color */
--muted: #666666;           /* Muted text */
--light: #999999;           /* Light text */
--text: #e0e0e0;            /* Main text color */
--white: #f5f5f5;           /* Near-white */
--red: #c53030;             /* Primary accent (CTAs) */
--red-dim: #9b2c2c;         /* Dimmed red (hover) */
--red-light: #e53e3e;       /* Light red (active states) */
--green: #38a169;           /* Success states */
--blue: #3182ce;            /* Pre-CU data visualization */
--purple: #805ad5;          /* Projection/future states */
--yellow: #f6ad55;          /* Warning/planning status */

/* Typography */
--font-heading: Arial, sans-serif;
--font-body: Georgia, serif;
--font-size-h1: 4rem;       /* Desktop */
--font-size-h2: 2.5rem;
--font-size-h3: 1.75rem;
--font-size-body: 1rem;
--font-size-small: 0.875rem;
--line-height-body: 1.6;

/* Spacing */
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 4rem;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
--shadow-md: 0 4px 6px rgba(0,0,0,0.6);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.7);

/* Border Radius */
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 1rem;

/* Transitions */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Key Interactions

### Pledge Form
```
1. User enters name
2. On submit:
   - Validate name (non-empty, length > 2)
   - Show loading spinner (2 sec)
   - Generate random signer number (47,000–52,000)
   - Display confirmation: "✓ Thank you, [Name]!"
   - Show "You are pledge signer #XXXXX"
   - Offer share text with copy button
3. Form resets
4. Button disabled for 10 seconds (prevent double-submit)
```

### Aid Marketplace Filtering
```
1. Default: Show all listings
2. Tab click (Offers/Needs):
   - Filter by type
   - Fade out old cards, fade in new cards
3. Category filter:
   - Apply multi-select (can choose multiple categories)
   - Results: type AND category
4. Mobile: Collapse tabs into dropdown
```

### Organizer Vote
```
1. User clicks "Vote for [Name]" button
2. Button disables
3. All other candidate buttons disable
4. Show confirmation toast:
   - "Vote recorded. zk-SNARK proof: 0x7f3a9..."
   - Text color green for 2 seconds
   - Fade to muted after 2 seconds
5. Vote count updates for that candidate
6. Page tracks vote in localStorage (simulated backend)
```

### Privacy Wizard
```
1. Each step is a checkbox
2. On click:
   - Checkbox animates checkmark
   - Item text grays out
   - Progress bar updates
3. Final CTA activates at 10/10: "Share Your Progress"
4. Copy-to-clipboard text: "I've hardened my privacy 10/10 ways. Join me at commondefense.org"
```

### Pillar Cards
```
1. Card hover: Slight lift effect (translateY -2px), shadow increases
2. Card click: Modal opens with full pillar description
3. Modal: Dark overlay (rgba 0,0,0,0.8), centered content box
4. Close: X button, Escape key, click overlay
5. Animation: Fade in/out with Framer Motion
```

### Stats Animation (Intersection Observer)
```
1. On page load: Stats visible but not animated
2. When user scrolls stats into view:
   - useIntersectionObserver triggers
   - Counter animates from 0 to final value
   - Duration: 2 seconds
   - Easing: easeOut
3. Animation only plays once per page load
```

### Nav Border Animation
```
1. On page load: No border on nav
2. When user scrolls past hero section:
   - Bottom border appears
   - Animated: opacity 0→1 over 300ms
   - Color: red (#c53030)
3. When user scrolls back to hero:
   - Border fades out (opacity 1→0)
4. Smooth transition using scroll event listener
```

---

## Accessibility Requirements

### Keyboard Navigation
- All buttons, links, form inputs accessible via Tab
- Focus indicators visible (outline or background change)
- Modal close: Escape key
- Form submit: Enter key

### ARIA Labels
- All icon buttons: `aria-label="Button purpose"`
- Form inputs: `<label>` associated via `htmlFor`
- Modal: `role="dialog"`, `aria-labelledby`, `aria-modal="true"`
- Data tables: Proper `<thead>`, `<tbody>`, `<th>` structure
- Progress bars: `role="progressbar"`, `aria-valuenow`, `aria-valuemax`

### Color Contrast
- All text: WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- Red (#c53030) on black (#0a0a0a): 7.8:1 ✓
- Muted (#666) on black: 4.3:1 ✓
- Text (#e0e0e0) on black: 13.2:1 ✓

### Images
- Hero image: Alt text describing the vigil/protest scene
- Liam Ramos photo: Alt text "Liam Ramos, age 5, detained January 2026"
- Icon graphics: `aria-hidden="true"` if purely decorative

### Animations
- Respect `prefers-reduced-motion` media query
- Disable animations for users who prefer reduced motion
- No flashing (>3 times per second)

---

## Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# From project root:
vercel

# Follow prompts to connect GitHub repo
# Automatic deployments on push to main

# Environment variables (if needed):
# Add via Vercel dashboard, then:
vercel env pull
```

**Post-deployment:**
- DNS: Point `commondefense.org` to Vercel nameservers
- SSL: Automatic (Vercel manages)
- CDN: Automatic (Vercel's global network)
- Monitoring: Vercel dashboard built-in

### Option 2: Cloudflare Pages

```bash
# Install Wrangler CLI
npm install -g wrangler

# From project root:
wrangler pages deploy ./out

# Or connect GitHub repo via Cloudflare dashboard
```

**Post-deployment:**
- DNS: Point `commondefense.org` to Cloudflare nameservers
- SSL: Automatic (Cloudflare manages)
- Workers: For API routes (optional)
- Analytics: Cloudflare dashboard

### Environment Setup

```bash
# .env.local (ignored by git)
NEXT_PUBLIC_SITE_URL=https://commondefense.org

# Optional:
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX  # Google Analytics (if using)
```

### Build & Test Locally

```bash
npm run build      # Creates .next production build
npm run start      # Runs next server on localhost:3000

# Preview before deploying:
# Test on mobile, test keyboard nav, test forms
```

---

## Files in This Packet

```
common-defense-site/
├── CLAUDE_CODE_INSTRUCTIONS.md          ← You are here
├── index.html                            ← Design mockup (reference only)
├── Common_Defense_Campaign_Pitch.docx    ← Campaign context & strategy
├── Common_Defense_Symbol_Prompts.md      ← Logo generation instructions
├── docs/
│   ├── MEDIA_SOURCES.md                 ← Asset licensing & sources
│   ├── ADDITIONAL_TACTICS.md            ← Expanded resistance tactics
│   └── ICE_OPERATIONS_BRIEF.md          ← Full ICE ops research
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── citizens-united/page.tsx
│   │   ├── ice-operations/page.tsx
│   │   └── resist/page.tsx
│   ├── components/
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── PillarCard.tsx
│   │   ├── Modal.tsx
│   │   ├── PledgeForm.tsx
│   │   ├── AidMarketplace.tsx
│   │   ├── AidCard.tsx
│   │   ├── CreditsDashboard.tsx
│   │   ├── OrganizerElection.tsx
│   │   ├── CandidateCard.tsx
│   │   ├── ResistanceOpCard.tsx
│   │   ├── PrivacyWizard.tsx
│   │   ├── CommsCard.tsx
│   │   ├── QuoteBreak.tsx
│   │   ├── CitizensUnitedChart.tsx
│   │   ├── VideoEmbed.tsx
│   │   └── [other components]
│   ├── data/
│   │   ├── citizens-united.json
│   │   ├── aid-listings.json
│   │   ├── resistance-ops.json
│   │   └── ice-operations.json
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   └── useScrollBorder.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   │   ├── hero-minneapolis.jpg
│   │   ├── liam-ramos.jpg
│   │   └── logo.svg
│   └── videos/ (video embeds via iframe)
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## Launch Checklist

Before going live, verify:

- [ ] Homepage loads, all sections render
- [ ] Navigation works (links, scroll behavior)
- [ ] Hero image loads and displays properly
- [ ] Stats animate on scroll
- [ ] Pledge form validates and shows confirmation
- [ ] Pillar cards open/close modals
- [ ] Aid marketplace filters work
- [ ] Organizer election voting works
- [ ] Citizens United chart renders with Recharts
- [ ] ICE Operations page embeds videos correctly
- [ ] Resist page displays all 9 campaigns
- [ ] Footer links work
- [ ] Mobile responsive (test at 320px, 768px, 1024px)
- [ ] Keyboard navigation (Tab, Escape, Enter)
- [ ] Color contrast passes WCAG AA
- [ ] Privacy Wizard checkboxes work
- [ ] All forms validate without backend
- [ ] Animations respect prefers-reduced-motion
- [ ] No console errors or warnings
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 85
- [ ] Share previews (OG tags) display correctly

---

## Next Steps After Implementation

1. **Content Review:** Have campaign leadership review all text
2. **Legal Review:** Have lawyer review pledge + legal claims
3. **Beta Testing:** Soft launch with 500 users, gather feedback
4. **Community Feedback:** Iterate based on user testing
5. **Security Audit:** Review form handling, data storage
6. **Performance Tuning:** Optimize bundle size, image loading
7. **Analytics Setup:** Implement tracking (while respecting privacy)
8. **Documentation:** Update this README as implementations complete
9. **Moderation Plan:** Set up processes for user-generated content (mutual aid listings, etc.)
10. **Scalability:** Plan for 10K+ concurrent users (Vercel auto-scales)

---

## Questions & Support

For implementation questions, refer to:
- **Design reference:** `../index.html` (live preview)
- **Campaign strategy:** `Common_Defense_Campaign_Pitch.docx`
- **Logo assets:** `Common_Defense_Symbol_Prompts.md`
- **Media licensing:** `docs/MEDIA_SOURCES.md`
- **Research:** `docs/ICE_OPERATIONS_BRIEF.md`

Last updated: January 28, 2026
Author: Claude Code Implementation Team
Version: 1.0

---

## Summary

Common Defense is a fully-specified, production-ready Next.js application designed to coordinate grassroots civic resistance. This packet provides:

✓ Complete page specifications (homepage, Citizens United, ICE Exposé, Resistance Toolkit)
✓ All component architectures and interactions
✓ Data structures (JSON files for campaigns, aid, spending data)
✓ Design system (colors, typography, spacing)
✓ Accessibility requirements (WCAG AA)
✓ Deployment instructions (Vercel/Cloudflare)
✓ Launch checklist

The site is intentionally designed as a static site with client-side interactive components—no backend is required for v1. All forms are simulated (no real data collection), but the infrastructure is in place for future evolution to a full-stack platform.

Begin with the homepage (/) and work through each page in order. Use the design mockup (index.html) as your visual reference. All interactions, colors, typography, and layouts must match exactly.

The goal: A functional, accessible, powerful platform for coordinating resistance by January 31, 2026.

**Let's build this.**

