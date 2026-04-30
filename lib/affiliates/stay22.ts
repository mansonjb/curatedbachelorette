/**
 * Stay22 affiliate helpers.
 *
 * Stay22 is a hotel meta-search affiliate; one partner ID covers all major
 * OTAs (Booking, Hotels.com, Airbnb, Expedia, Vrbo). Every URL just needs
 * `aid=<partner-id>` and an `address=` (city or hotel name) to attribute.
 *
 * Set STAY22_PARTNER_ID in .env.local (and on Vercel) to activate.
 * If unset, helpers fall back to a non-affiliate Stay22 search URL — links
 * still work, but no commission.
 */

const PARTNER_ID = process.env.STAY22_PARTNER_ID || "";
const ALLEZ_BASE = "https://www.stay22.com/allez/finder";
const MAP_BASE = "https://www.stay22.com/embed/map";

export type Stay22Params = {
  /** Free-text address — "Miami, USA" or "Hotel Esme, Miami". */
  address: string;
  checkin?: string;
  checkout?: string;
  adults?: number;
  rooms?: number;
};

export function stay22Url({
  address,
  checkin,
  checkout,
  adults = 2,
  rooms = 1,
}: Stay22Params): string {
  const params = new URLSearchParams();
  if (PARTNER_ID) params.set("aid", PARTNER_ID);
  params.set("address", address);
  if (checkin) params.set("checkin", checkin);
  if (checkout) params.set("checkout", checkout);
  params.set("adults", String(adults));
  params.set("rooms", String(rooms));
  return `${ALLEZ_BASE}?${params.toString()}`;
}

/** Iframe src for the public Stay22 Allez page centred on a city. */
export function stay22MapSrc(address: string): string {
  const params = new URLSearchParams();
  if (PARTNER_ID) params.set("aid", PARTNER_ID);
  params.set("address", address);
  // Allez page renders an interactive map + sortable hotel list. Clicks
  // are auto-tagged on egress by the site-wide LetMeAllez script.
  return `https://www.stay22.com/allez?${params.toString()}`;
}

export const STAY22_ENABLED = Boolean(PARTNER_ID);
