import { AffiliateLink } from "@/components/AffiliateLink";
import { stay22Url } from "@/lib/affiliates/stay22";

/** "Check rates" button rendered inside each hotel card. */
export function Stay22Cta({
  hotelName,
  city,
  context,
}: {
  hotelName: string;
  city: string;
  context: string;
}) {
  return (
    <AffiliateLink
      network="stay22"
      context={context}
      href={stay22Url({ address: `${hotelName}, ${city}` })}
      className="ulink"
      style={{ fontSize: 14 }}
    >
      Check rates
    </AffiliateLink>
  );
}

type Provider = { name: string; href: (city: string) => string; bg: string };

const PROVIDERS: Provider[] = [
  {
    name: "Booking.com",
    bg: "#003580",
    href: (city) =>
      `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`,
  },
  {
    name: "Airbnb",
    bg: "#ff385c",
    href: (city) =>
      `https://www.airbnb.com/s/${encodeURIComponent(city)}/homes`,
  },
  {
    name: "Hotels.com",
    bg: "#d32f2f",
    href: (city) =>
      `https://www.hotels.com/Hotel-Search?destination=${encodeURIComponent(city)}`,
  },
  {
    name: "Expedia",
    bg: "#fdd835",
    href: (city) =>
      `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(city)}`,
  },
];

/**
 * Stay22 compare-rates block.
 *
 * Renders four direct OTA search links (Booking, Airbnb, Hotels.com,
 * Expedia). LetMeAllez (loaded site-wide in layout.tsx) auto-rewrites
 * each link into an affiliate-tagged Stay22 deeplink at runtime, so the
 * commission is attributed without us managing per-OTA partner IDs.
 */
export function Stay22Map({ address }: { address: string }) {
  return (
    <div
      style={{
        marginTop: 36,
        background: "var(--bg-alt)",
        borderRadius: "var(--radius-xl)",
        padding: "clamp(24px, 3vw, 36px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>Compare rates</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>
            Every hotel in {address}, across the major sites.
          </div>
        </div>
        <span className="meta">via Stay22 · sponsored</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 12,
        }}
        className="ota-grid"
      >
        {PROVIDERS.map((p) => (
          <AffiliateLink
            key={p.name}
            network="stay22"
            context={`${address.toLowerCase()}-stay22-${p.name.toLowerCase()}`}
            href={p.href(address)}
            className="btn"
            style={{
              background: p.bg,
              color: p.name === "Expedia" ? "var(--ink)" : "#fff",
              borderColor: p.bg,
              fontWeight: 700,
              padding: "14px 20px",
            }}
          >
            Search on {p.name}
          </AffiliateLink>
        ))}
      </div>

      <p style={{ margin: "16px 0 0", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>
        Same prices, same hotels — Stay22 just redirects you to whichever
        site has the lowest rate today, and we earn a small commission if
        you book.
      </p>

      <style>
        {`@media (max-width: 900px) { .ota-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .ota-grid { grid-template-columns: 1fr !important; } }`}
      </style>
    </div>
  );
}
