# Claude Code Instructions — Curated Bachelorette

## Project
Editorial SEO + affiliation site for bachelorette weekends. Visual direction
locked in (v5 Bold Feminine, palette "Solaire"). See README.md for status.

## Current state
- `index.html` at repo root = v5 prototype shipped as static site.
- Real Next.js port hasn't started yet — that's v1.

## Stack target (v1)
Next.js 15 App Router, TypeScript, Tailwind, MDX, Vercel.

## Conventions (when porting starts)
- Server Components by default, "use client" only when needed.
- Programmatic data in `/data/*.ts` (typed).
- Editorial content in `/content/*.mdx`.
- Affiliate links go through a single `<AffiliateLink>` component.
- Always implement `generateMetadata` on pages.
- Always render an appropriate `<JsonLd>` (TouristDestination / Article /
  FAQPage / BreadcrumbList / ItemList).
- Slugs: kebab-case. User-facing copy: English. Code comments: French OK.

## Design tokens (locked)
Solaire palette, defined as CSS vars in the prototype:
- `--cream: #FFF6E8` (background)
- `--cream-2: #FFE9D2`
- `--ink: #3E1B22` (deep wine, primary text)
- `--blush: #FFB3A0` / `--blush-deep: #E8704F` (accent)
- `--rose: #FFD3C8` / `--peach: #FFC98A` / `--butter: #FFE27A`

Typography:
- Display: **Bricolage Grotesque** (chubby, lowercase, weight 800)
- Editorial italic: **Fraunces** (italic, weight 500)
- Handwritten accents: **Caveat** (in `--blush-deep`)
- Mono micro-caps: **Space Mono** (uppercase, tracked)
- Body: Archivo / system sans

## Anti-patterns to avoid
No pink-glitter / champagne-flute clichés. No script "she said yes" fonts.
No generic shadcn cards in 3-col grids. No emoji. The aesthetic is bold
editorial-feminine, not bridal-cute.

## Tests
None at v0. Lighthouse + Search Console as guardrails once content is up.
