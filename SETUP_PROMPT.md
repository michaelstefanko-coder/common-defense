# Prompt for Claude (Browser) — GitHub + Vercel Setup

Copy everything below this line and paste it into Claude at claude.ai:

---

I need you to walk me through setting up GitHub and Vercel deployment for my Next.js project step by step. I'm on a Mac. The project is at `~/Desktop/common-defense-site`.

Here's what I need you to help me do, one step at a time. Wait for me to confirm each step before moving to the next.

## Project Context

- It's a Next.js 14 app (App Router, TypeScript, Tailwind CSS)
- The project is called "Common Defense" — a civic resistance platform
- It includes an interactive Leaflet.js infrastructure map at `/map` (loaded from `public/infrastructure-map.html`)
- It has pages: home, /citizens-united, /resist, /ice-operations, /map
- Package manager: npm
- No environment variables needed right now
- I want the repo to be PUBLIC on GitHub

## Step 1: Initialize Git

Walk me through initializing git in the project, creating a proper .gitignore (for Next.js), and making the first commit. Give me the exact terminal commands to run.

Make sure .gitignore includes: node_modules, .next, out, .DS_Store, *.tsbuildinfo, next-env.d.ts, .env*.local

## Step 2: Create GitHub Repo

Walk me through creating a new GitHub repository. I want to use the GitHub CLI (`gh`) if I have it installed, or the web interface if I don't. The repo should be:
- Name: `common-defense`
- Public
- No template
- No README (we already have one)

Give me the exact commands to push my local repo to GitHub.

## Step 3: Deploy to Vercel

Walk me through connecting the GitHub repo to Vercel for automatic deployments:
1. How to sign up / log in to Vercel (use GitHub auth)
2. How to import the repo
3. What settings to use (Framework: Next.js, Root: ./, Build: `next build`)
4. How to set up a custom domain later if I want one

## Step 4: Set Up the Claude Code Tab

After GitHub is set up, walk me through opening my project in the Claude Code tab of the Claude Desktop app:
1. How to switch the working directory from whatever project is currently open to `~/Desktop/common-defense-site`
2. How to create a CLAUDE.md file that gives Claude Code context about the project. The CLAUDE.md should include:
   - Project name and purpose (Common Defense — civic resistance platform against democratic capture)
   - Tech stack (Next.js 14, TypeScript, Tailwind, Leaflet.js)
   - Project structure (list the key directories and pages)
   - Key files: NavBar.tsx, page.tsx (home), /resist/page.tsx, /citizens-united/page.tsx, /ice-operations/page.tsx, /map/page.tsx
   - The map is loaded via iframe from public/infrastructure-map.html (self-contained Leaflet map)
   - Design system: dark theme (#0a0a0a bg), red accent (#c53030), Georgia body font, Arial headings
   - Important: Tailwind config has custom colors (see tailwind.config.ts)
   - Development commands: `npm run dev`, `npm run build`, `npm run lint`
   - The project uses framer-motion for animations and recharts for charts
3. How to verify it's working by asking Claude Code to do something simple

## Step 5: Workflow

Explain the ideal workflow now that everything is connected:
- Make changes locally (via Claude Code tab or manually)
- Git commit and push
- Vercel auto-deploys
- How to preview deployment before merging (Vercel preview deployments)
- How to use branches for features

Give me one step at a time and wait for me to confirm before proceeding.
