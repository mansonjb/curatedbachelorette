#!/usr/bin/env tsx
/**
 * Google Places API v1 → per-restaurant photos for the eat[] sections.
 *
 *   npm run sync-restaurant-photos
 *
 * Walks every cover's eat[] array, queries Places searchText with
 * "{restaurant name}, {city}" and writes the matched property's first
 * photo to:
 *   public/destinations/<slug>/eat-<n>.jpg
 *
 * Same idempotent behaviour as the hotel sync — overwrites in place.
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { COVERS } from "../data/destinations/covers";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("[eats] GOOGLE_PLACES_API_KEY missing from .env.local");
  process.exit(1);
}

const SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const MEDIA_BASE = "https://places.googleapis.com/v1";
const OUT_ROOT = join(process.cwd(), "public", "destinations");

type Place = {
  id: string;
  displayName?: { text: string };
  photos?: Array<{ name: string }>;
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
    throw new Error(`searchText ${res.status}: ${txt.slice(0, 200)}`);
  }
  const data = (await res.json()) as { places?: Place[] };
  return data.places?.[0] ?? null;
}

async function downloadPhoto(photoName: string, dest: string): Promise<void> {
  const url = `${MEDIA_BASE}/${photoName}/media?key=${API_KEY}&maxHeightPx=1200&maxWidthPx=1600`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`media ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
}

async function syncRestaurant(
  slug: string,
  city: string,
  name: string,
  area: string,
  index: number,
): Promise<boolean> {
  // Restaurant names are usually distinctive; "Boia De, Miami" finds it.
  // We append the area too in case two cities share a name.
  const query = `${name}, ${area}, ${city}`;
  const place = await searchPlace(query);
  if (!place) {
    console.log(`    ${index}. ${name.padEnd(36)} — no place`);
    return false;
  }
  const photo = place.photos?.[0];
  if (!photo) {
    console.log(`    ${index}. ${name.padEnd(36)} — no photo`);
    return false;
  }
  const dir = join(OUT_ROOT, slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  await downloadPhoto(photo.name, join(dir, `eat-${index}.jpg`));
  console.log(`    ${index}. ${name.padEnd(36)} ✓ (${place.displayName?.text ?? "(unnamed)"})`);
  return true;
}

async function main(): Promise<void> {
  let totalOk = 0;
  let totalFail = 0;

  for (const [slug, cover] of Object.entries(COVERS)) {
    console.log(`  ${slug} (${cover.title})`);
    for (const e of cover.eat) {
      try {
        const ok = await syncRestaurant(slug, cover.title, e.name, e.area, e.no);
        if (ok) totalOk += 1;
        else totalFail += 1;
      } catch (err) {
        console.log(`    ${e.no}. ${e.name} ✗ ${(err as Error).message}`);
        totalFail += 1;
      }
    }
  }

  console.log(`\n[eats] ${totalOk} ok, ${totalFail} fail`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
