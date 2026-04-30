/**
 * Stay22 affiliate helpers.
 *
 * Stay22 is a hotel meta-search affiliate; one partner ID covers all major
 * OTAs (Booking, Hotels.com, Airbnb, Expedia, Vrbo). Every URL just needs
 * `aid=<partner-id>` and an `address=` (city or hotel name) to attribute.
 *
 * We resolve the `aid` in this order:
 *   1. STAY22_PARTNER_ID — explicit Allez/embed widget partner ID.
 *   2. NEXT_PUBLIC_STAY22_LMA_ID — falls back to the LetMeAllez ID (which
 *      is issued from the same Stay22 partner account, so the widgets
 *      attribute under the same partner record).
 *
 * Set either in .env.local (and on Vercel). If neither is set the widget
 * still renders, just without commission attribution.
 */

const PARTNER_ID =
  process.env.STAY22_PARTNER_ID || process.env.NEXT_PUBLIC_STAY22_LMA_ID || "";

const ALLEZ_URL = "https://www.stay22.com/allez/finder";
const EMBED_GM_URL = "https://www.stay22.com/embed/gm";

export type Stay22Params = {
  /** Free-text address — "Miami, USA" or "Hotel Esme, Miami". */
  address: string;
  checkin?: string;
  checkout?: string;
  adults?: number;
  rooms?: number;
};

/** Outbound URL for a "Book your stay" CTA on a single hotel card. */
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
  return `${ALLEZ_URL}?${params.toString()}`;
}

/**
 * Iframe src for the Stay22 Allez Google-Maps-style embed.
 * Renders an interactive map with hotels overlaid as pins; clicking a pin
 * opens the OTA comparison drawer. Tracks under our partner ID.
 */
export function stay22MapSrc(address: string): string {
  const params = new URLSearchParams();
  if (PARTNER_ID) params.set("aid", PARTNER_ID);
  params.set("address", address);
  // Brand the pins/UI to our pink accent.
  params.set("maincolor", "e8708a");
  return `${EMBED_GM_URL}?${params.toString()}`;
}

export const STAY22_ENABLED = Boolean(PARTNER_ID);
