#!/usr/bin/env tsx
/**
 * Google Places API v1 → per-hotel photos for the stay[] sections.
 *
 *   npm run sync-hotel-photos
 *
 * Reads every cover in data/destinations/, pulls the names of each hotel
 * in stay[], queries Places searchText with "{hotel name}, {city}",
 * downloads the first photo, and writes it to:
 *   public/destinations/<slug>/hotel-<n>.jpg
 *
 * Run after editing stay[] entries. Idempotent — overwrites in place.
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { COVERS } from "../data/destinations/covers";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("[hotels] GOOGLE_PLACES_API_KEY missing from .env.local");
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

async function syncHotel(
  slug: string,
  city: string,
  hotelName: string,
  index: number,
): Promise<boolean> {
  // "A finca, San Juan" / "A rented house, Hudson" → not a real place we can search
  const isGeneric = /^(A finca|A rented|A house)/i.test(hotelName);
  const query = isGeneric ? `villa rental ${city}` : `${hotelName}, ${city}`;

  const place = await searchPlace(query);
  if (!place) {
    console.log(`    ${index}. ${hotelName.padEnd(36)} — no place`);
    return false;
  }
  const photo = place.photos?.[0];
  if (!photo) {
    console.log(`    ${index}. ${hotelName.padEnd(36)} — no photo`);
    return false;
  }
  const dir = join(OUT_ROOT, slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  await downloadPhoto(photo.name, join(dir, `hotel-${index}.jpg`));
  const matched = place.displayName?.text ?? "(unnamed)";
  console.log(`    ${index}. ${hotelName.padEnd(36)} ✓ (${matched})`);
  return true;
}

async function main(): Promise<void> {
  let totalOk = 0;
  let totalFail = 0;

  for (const [slug, cover] of Object.entries(COVERS)) {
    const city = cover.title;
    console.log(`  ${slug} (${city})`);
    for (let i = 0; i < cover.stay.length; i += 1) {
      const hotel = cover.stay[i];
      try {
        const ok = await syncHotel(slug, city, hotel.name, i + 1);
        if (ok) totalOk += 1;
        else totalFail += 1;
      } catch (err) {
        console.log(`    ${i + 1}. ${hotel.name} ✗ ${(err as Error).message}`);
        totalFail += 1;
      }
    }
  }

  console.log(`\n[hotels] ${totalOk} ok, ${totalFail} fail`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
