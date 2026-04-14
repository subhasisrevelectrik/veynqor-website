# Veynqor Website

The marketing website for [Veynqor, Inc.](https://veynqor.com) — fleet intelligence infrastructure for commercial EV operators.

Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, and **TypeScript**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — B2B hero ("See Deeper. Act Sooner.") + Kickstarter email capture |
| `/kickstarter` | Kickstarter pre-launch landing page with email capture |
| `/products` | Product overview (V-DRIVE + SIGNAL) |
| `/products/v-drive` | V-DRIVE edge telemetry device details |
| `/products/signal` | SIGNAL cloud analytics platform details |
| `/use-cases` | Use cases (Turo Hosts, Fleet Operators, Transit, Rental) |
| `/contact` | Contact / demo request form |
| `/privacy` | Privacy policy |

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SLACK_WEBHOOK_URL` | No | Slack webhook for lead notifications (contact form + Kickstarter subscribes) |
| `KICKSTARTER_LIVE_URL` | No | When set to a non-empty URL (e.g. `https://www.kickstarter.com/projects/veynqor/v-drive`), the `/kickstarter` route issues a **301 redirect** to that URL, preserving UTM query params. When unset or empty, the pre-launch landing page renders normally. This is the launch-day switch. |

## `/kickstarter` Route Behavior

- **Pre-launch (default):** Renders a full landing page with hero, proof stats, how-it-works, Turo comparison, founder quote, FAQ, and two email capture forms.
- **Post-launch:** When `KICKSTARTER_LIVE_URL` is set, Next.js middleware redirects all `/kickstarter` traffic (including UTM params) to the live Kickstarter campaign URL with a 301.
- **Email capture:** Forms POST to `/api/kickstarter-subscribe`, which currently logs to the server console. The endpoint is a stub awaiting email provider integration.
- **UTM support:** `utm_source`, `utm_medium`, and `utm_campaign` query params are read server-side, passed to the form as hidden fields, and included in the subscribe payload.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Deploy on Vercel

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
