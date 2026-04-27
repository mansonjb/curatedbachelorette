#!/usr/bin/env tsx
/**
 * Viator product sync — run before `next build`.
 *
 *   npm run sync-viator
 *
 * Reads VIATOR_API_KEY from env (.env.local locally, Vercel env in prod),
 * fetches the top products for every destination in VIATOR_DESTINATION_IDS,
 * and writes data/viator/<slug>.json (committed to git so production
 * builds don't depend on the API being reachable).
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { VIATOR_DESTINATION_IDS, type ViatorProduct, type ViatorCache } from "../lib/affiliates/viator";

const API_KEY = process.env.VIATOR_API_KEY;
const API_BASE = "https://api.viator.com/partner";
const OUT_DIR = join(process.cwd(), "data", "viator");
const PRODUCTS_PER_DESTINATION = 6;

if (!API_KEY) {
  console.error("[sync-viator] VIATOR_API_KEY is not set; aborting.");
  process.exit(1);
}

type SearchResponse = {
  products?: Array<{
    productCode: string;
    title?: string;
    shortDescription?: string;
    images?: Array<{ variants?: Array<{ url: string; width?: number; height?: number }> }>;
    reviews?: { combinedAverageRating?: number; totalReviews?: number };
    pricing?: { summary?: { fromPrice?: number }; currency?: string };
    productUrl?: string;
  }>;
};

async function fetchProducts(destinationId: number): Promise<ViatorProduct[]> {
  const res = await fetch(`${API_BASE}/products/search`, {
    method: "POST",
    headers: {
      "exp-api-key": API_KEY!,
      "Content-Type": "application/json;version=2.0",
      Accept: "application/json;version=2.0",
      "Accept-Language": "en-US",
    },
    body: JSON.stringify({
      filtering: { destination: String(destinationId) },
      sorting: { sort: "TRAVELER_RATING", order: "DESCENDING" },
      pagination: { start: 1, count: PRODUCTS_PER_DESTINATION },
      currency: "USD",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`viator ${res.status} for destination ${destinationId}: ${body.slice(0, 300)}`);
  }

  const data = (await res.json()) as SearchResponse;
  return (data.products ?? []).map((p) => {
    const thumb =
      p.images?.[0]?.variants?.find((v) => (v.width ?? 0) >= 480 && (v.width ?? 0) <= 720)?.url ??
      p.images?.[0]?.variants?.[0]?.url;
    return {
      productCode: p.productCode,
      title: p.title ?? "Untitled experience",
      shortDescription: p.shortDescription,
      thumbnail: thumb,
      rating: p.reviews?.combinedAverageRating,
      reviewCount: p.reviews?.totalReviews,
      fromPrice: p.pricing?.summary?.fromPrice
        ? { value: p.pricing.summary.fromPrice, currency: p.pricing.currency ?? "USD" }
        : undefined,
      productUrl: p.productUrl ?? `https://www.viator.com/tours/${p.productCode}`,
    };
  });
}

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  let ok = 0;
  let fail = 0;
  for (const [slug, destinationId] of Object.entries(VIATOR_DESTINATION_IDS)) {
    process.stdout.write(`  ${slug.padEnd(14)} (${destinationId}) … `);
    try {
      const products = await fetchProducts(destinationId);
      const cache: ViatorCache = {
        destinationId,
        destinationName: slug,
        fetchedAt: new Date().toISOString(),
        products,
      };
      writeFileSync(join(OUT_DIR, `${slug}.json`), JSON.stringify(cache, null, 2));
      console.log(`✓ ${products.length} products`);
      ok += 1;
    } catch (err) {
      console.log(`✗ ${(err as Error).message}`);
      fail += 1;
    }
  }
  console.log(`\n[sync-viator] ${ok} ok, ${fail} failed.`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
