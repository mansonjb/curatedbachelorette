#!/usr/bin/env tsx
/**
 * Google Places API v1 → destination photos.
 *
 *   npm run sync-places-photos
 *
 * For every destination slug in DESTINATIONS, queries Places searchText
 * with the city name + country, picks the most relevant place, then
 * downloads its top photos via the photo media endpoint.
 *
 * Photos land in public/destinations/<slug>/hero.jpg, photo-2.jpg, etc.
 * Run once at content time, commit the resulting JPEGs, point images.ts
 * at the local paths.
 *
 * Set GOOGLE_PLACES_API_KEY in .env.local. Never shipped to the browser.
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("[places] GOOGLE_PLACES_API_KEY missing from .env.local");
  process.exit(1);
}

const SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const MEDIA_BASE = "https://places.googleapis.com/v1";
const PHOTOS_PER_DESTINATION = 4;
const OUT_ROOT = join(process.cwd(), "public", "destinations");

/**
 * Search query per slug — kept descriptive so the API returns the
 * tourist-photo place rather than e.g. an airport or a generic city
 * pin. Country qualifier disambiguates Hvar (Croatia) from Hvar (other),
 * Capri (Italy) from Capri (Caprice), etc.
 */
/**
 * Queries are tuned for visual appeal, not raw popularity. Cathedrals and
 * busy plazas (the typical Places top-result for a city name) lose to
 * coves, viewpoints, sunset spots, gardens, and rooftop pools. The first
 * photo of these spots is almost always travel-magazine-worthy.
 */
const QUERIES: Record<string, string> = {
  ibiza: "Cala Comte beach Ibiza",
  mykonos: "Mykonos windmills Kato Mili",
  santorini: "Oia caldera sunset Santorini",
  capri: "Faraglioni rocks Capri",
  "saint-tropez": "Pampelonne beach Saint-Tropez",
  hvar: "Hvar Town Old Town panorama Croatia",
  mallorca: "Cala Mondragó Mallorca",
  lisbon: "Miradouro da Senhora do Monte Lisbon",
  comporta: "Praia do Pego Comporta",
  marrakech: "Jardin Majorelle Marrakech",
  miami: "Ocean Drive Miami Beach Art Deco",
  cdmx: "Palacio de Bellas Artes Mexico City",
  tulum: "Gran Cenote Tulum",
  cartagena: "Walled City Cartagena Colombia old town",
  "lake-como": "Bellagio Lake Como Italy",
};

type Place = {
  id: string;
  displayName?: { text: string };
  photos?: Array<{ name: string; widthPx?: number; heightPx?: number }>;
};

async function searchPlace(query: string): Promise<Place | null> {
  const res = await fetch(SEARCH_URL, {
    method: "POST",
    headers: {
      "X-Goog-Api-Key": API_KEY!,
      "X-Goog-FieldMask": "places.id,places.displayName,places.photos",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ textQuery: query, pageSize: 1 }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`searchText ${res.status}: ${txt.slice(0, 240)}`);
  }
  const data = (await res.json()) as { places?: Place[] };
  return data.places?.[0] ?? null;
}

async function downloadPhoto(photoName: string, dest: string): Promise<void> {
  // Photo media endpoint resolves to a redirect to the actual JPEG bytes.
  // Setting `skipHttpRedirect=false` (the default) lets fetch follow it.
  const url = `${MEDIA_BASE}/${photoName}/media?key=${API_KEY}&maxHeightPx=1200&maxWidthPx=1600`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`media ${res.status} for ${photoName}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
}

async function syncOne(slug: string, query: string): Promise<number> {
  const place = await searchPlace(query);
  if (!place) {
    console.log(`  ${slug.padEnd(14)} — no place found for "${query}"`);
    return 0;
  }

  const photos = (place.photos ?? []).slice(0, PHOTOS_PER_DESTINATION);
  if (photos.length === 0) {
    console.log(`  ${slug.padEnd(14)} — place "${place.displayName?.text}" has no photos`);
    return 0;
  }

  const dir = join(OUT_ROOT, slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  let saved = 0;
  for (let i = 0; i < photos.length; i += 1) {
    const filename = i === 0 ? "hero.jpg" : `photo-${i + 1}.jpg`;
    const out = join(dir, filename);
    try {
      await downloadPhoto(photos[i].name, out);
      saved += 1;
    } catch (err) {
      console.warn(`    ! ${filename}: ${(err as Error).message}`);
    }
  }
  console.log(`  ${slug.padEnd(14)} ✓ ${saved} photo(s) — ${place.displayName?.text}`);
  return saved;
}

async function main(): Promise<void> {
  if (!existsSync(OUT_ROOT)) mkdirSync(OUT_ROOT, { recursive: true });

  let totalOk = 0;
  let totalFail = 0;
  for (const [slug, query] of Object.entries(QUERIES)) {
    try {
      const n = await syncOne(slug, query);
      if (n > 0) totalOk += 1;
      else totalFail += 1;
    } catch (err) {
      console.log(`  ${slug.padEnd(14)} ✗ ${(err as Error).message}`);
      totalFail += 1;
    }
  }
  console.log(`\n[places] ${totalOk} ok, ${totalFail} fail`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
