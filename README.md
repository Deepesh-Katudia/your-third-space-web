# Your Third Space - marketing site

Marketing site for Your Third Space, an NYC events app. Not home, not work: find
real events near you, join in one tap, and land in the group chat with everyone
else going.

Built as a static, single-page Next.js site ported from the Claude Design comp
in [`design/Third Space Marketing.dc.html`](design/Third%20Space%20Marketing.dc.html).

## Stack

- Next.js 16 (App Router, Turbopack) with React 19
- TypeScript in strict mode
- Tailwind CSS v4, configured CSS-first via `@theme`
- `next/font` for Bebas Neue, Inter and IBM Plex Mono

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script          | Purpose                                    |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Dev server with hot reload                 |
| `npm run build` | Production build                           |
| `npm start`     | Serve the production build                 |
| `npm run lint`  | ESLint                                     |

## Project structure

```
app/
  layout.tsx        Fonts, metadata and the document shell
  page.tsx          Composes the page sections in order
  globals.css       Design tokens, keyframes and shared utilities
components/
  site-header.tsx   Header with the mobile nav (the only client component)
  site-footer.tsx
  sections/         One component per band of the page
  phones/           The in-hero app mockups
  ui/               Logo and app-store buttons
lib/
  site-config.ts    All copy and product data
design/             Read-only source comp exported from Claude Design
```

## Design system

Tailwind v4 is configured in CSS, so there is no `tailwind.config.js`. Every
colour, font and animation is declared in the `@theme` block at the top of
[`app/globals.css`](app/globals.css) and consumed as a normal utility, so
`bg-peach` or `text-rust` resolve to the app's real palette.

| Token                              | Value                | Used for                    |
| ---------------------------------- | -------------------- | --------------------------- |
| `cream`                            | `#fbf3e9`            | Page background             |
| `peach`                            | `#fce3c0`            | Cards and the host band     |
| `apricot`                          | `#f3b27a`            | Features band, hero gradient|
| `ink`                              | `#2b2015`            | Body text, footer, buttons  |
| `taupe`                            | `#584c3c`            | Secondary text              |
| `rust`                             | `#853615`            | Accent, eyebrows, numerals  |
| `olive`                            | `#49513e`            | Category tags               |
| `parchment` / `sand` / `gold`      | `#fff3e0` … `#ffd98a`| The dark rewards band       |

Four helper utilities keep the repetition down: `shell` (the 1280px centred
container), `card`, `eyebrow` (the small mono labels), and the `bg-dusk` /
`bg-sunrise` / `bg-sunset` gradients.

Display type uses `clamp()` so the comp's fixed sizes (a 104px hero, for
instance) scale down cleanly on small screens, and every ambient animation is
disabled under `prefers-reduced-motion`.

## Editing content

Copy and product data live in [`lib/site-config.ts`](lib/site-config.ts) rather
than in the markup. Two values from the original comp are exposed there as
switches:

- `pointsPerEvent` (default `50`) feeds the stats bar, the features grid, the
  rewards copy and the badge mockup at once.
- `showHostBand` (default `true`) toggles the "For venues & organisers" section.
