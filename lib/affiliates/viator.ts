/**
 * Viator affiliate helpers.
 *
 * - Sync script (scripts/sync-viator.ts) hits the Partner API at build time
 *   and writes data/viator/<slug>.json. The slug → destinationId map below
 *   is the single source of truth for which Viator destination each cover
 *   maps to.
 * - At render time we read the JSON synchronously from disk in a Server
 *   Component. No client-side calls, no API key in the browser.
 */

export type ViatorProduct = {
  productCode: string;
  title: string;
  shortDescription?: string;
  thumbnail?: string;
  rating?: number;
  reviewCount?: number;
  fromPrice?: { value: number; currency: string };
  productUrl: string;
};

export type ViatorCache = {
  destinationId: number;
  destinationName: string;
  fetchedAt: string;
  products: ViatorProduct[];
};

/**
 * Map our destination slugs to Viator destinationId.
 * Source of truth; updated when a new cover ships.
 *
 * IDs resolved via /partner/search/freetext on 2026-04-28.
 * Saint-Tropez has no dedicated Viator destination → falls back to the
 * French Riviera parent (179), which carries Tropez tours alongside Nice
 * and Cannes; close enough for the bachelorette demand.
 */
export const VIATOR_DESTINATION_IDS: Record<string, number> = {
  ibiza: 4217,
  mykonos: 958,
  santorini: 959,
  capri: 4223,
  "saint-tropez": 179,
  hvar: 22146,
  mallorca: 955,
  lisbon: 538,
  comporta: 51025,
  marrakech: 5408,
  miami: 662,
  cdmx: 628,
  tulum: 23012,
  cartagena: 4498,
  "lake-como": 26113,
  sevilla: 556,
  tuscany: 206,
  // Cap Ferret has no own Viator destination — Arcachon (same bay, oyster
  // tours and Pilat dune cross-listed) is the closest match.
  "cap-ferret": 26516,
};

const PARTNER_PID = process.env.VIATOR_PARTNER_PID || "P00250395"; // mcid placeholder
const MCID = "42383";

/**
 * Wraps a Viator product URL with affiliate tracking parameters so the
 * 30-day cookie is set and commission is attributed. Safe to apply to any
 * Viator URL we already have from /products/search.
 */
export function withAffiliateParams(url: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set("pid", PARTNER_PID);
    u.searchParams.set("mcid", MCID);
    u.searchParams.set("medium", "link");
    u.searchParams.set("medium_version", "selector");
    return u.toString();
  } catch {
    return url;
  }
}

export const VIATOR_API_KEY = process.env.VIATOR_API_KEY || "";
