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
 * IDs verified against /v1/taxonomy/destinations on 2026-04-27.
 */
export const VIATOR_DESTINATION_IDS: Record<string, number> = {
  miami: 662,
  charleston: 5266,
  cdmx: 5466,
  lisbon: 791,
  ojai: 32488,
  ibiza: 974,
  mykonos: 36,
  capri: 681,
  marrakech: 802,
  "saint-tropez": 5302,
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
