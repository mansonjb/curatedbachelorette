# curatedbachelorette.com

Editorial SEO + affiliation site on the bachelorette / EVJF vertical.
Promise: *Bachelorette weekends, curated around your group.*

## Status

**v1** — proper Next.js 15 port of the **v5 Bold Feminine** direction
handed off from Claude Design (palette "Solaire" — bright cream, peach,
terracotta over a deep wine ink). Server-rendered, SEO-wired, ready for
programmatic scale.

## Stack

- Next.js 15 App Router · React 19 · TypeScript
- Fonts via `next/font/google`: Bricolage Grotesque, Fraunces, Caveat,
  Space Mono, Archivo
- No CSS framework — palette + utilities live in `app/globals.css`,
  components ship inline styles for fidelity to the prototype

## Layout

```
app/
  layout.tsx                # next/font wiring + metadata
  page.tsx                  # Home (Hero, Index grid, Quote, House rules,
                            #       Vibes, Field notes, CTA, Marquee)
  destinations/[slug]/      # Destination template (Hero, Intro, Stay, Do,
    page.tsx                # Eat, Pull quote, Itinerary, FAQ, Related)
  sitemap.ts · robots.ts
components/                 # Header, Footer, MobileNav, Img, Faq, etc.
data/                       # destinations, vibes, manifesto, /destinations/miami
lib/                        # site, images
```

Only `miami` has a published cover (`data/destinations/miami.ts`); the
seven other destinations show as cards on the home grid but their slug
pages 404 until content lands. `generateStaticParams` only emits slugs
that have a cover, keeping the build clean.

## SEO

- `generateMetadata` per page (canonical, OG)
- `app/sitemap.ts` reads `COVERS` + `VIBES` to emit URLs as the data grows
- JSON-LD on every destination: `TouristDestination`, `BreadcrumbList`,
  `FAQPage`, `Article`

## Roadmap

1. ✅ **v1 (now)** — Next.js port, design system locked, Miami live.
2. **v2** — flesh out 4 more destinations (Charleston, CDMX, Lisbon, Ojai)
   on the same template. Add `/destinations` index page.
3. **v3** — vibe templates, budget templates, MDX guides, affiliate stack
   (Stay22, Viator, GYG, Fever, Tiqets, Manawa, DiscoverCars, Amazon),
   FTC disclosure, lead magnet.

## Reference

`public/design-assets/v5.html` keeps the original Claude Design handoff
prototype as the visual source of truth — diff against it when iterating.

## Develop

```
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run build        # static export-friendly
```

## Deploy

Push to `main`; Vercel auto-detects Next.js.
