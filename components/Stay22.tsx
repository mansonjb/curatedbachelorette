import { AffiliateLink } from "@/components/AffiliateLink";
import { stay22MapSrc, stay22Url } from "@/lib/affiliates/stay22";

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

/**
 * Stay22 Allez map widget — embeds at the bottom of each Stay section so
 * readers can compare every hotel in the city across OTAs.
 */
export function Stay22Map({ address }: { address: string }) {
  return (
    <div
      style={{
        marginTop: 32,
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--bg-alt)",
      }}
    >
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid var(--rule)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 2 }}>Compare rates</div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>
            Every hotel in {address}, across Booking, Airbnb, Expedia & Vrbo.
          </div>
        </div>
        <span className="meta">via Stay22 · sponsored</span>
      </div>
      <iframe
        src={stay22MapSrc(address)}
        title={`Stay22 hotel map for ${address}`}
        style={{
          display: "block",
          width: "100%",
          height: 480,
          border: 0,
          background: "var(--bg)",
        }}
        loading="lazy"
      />
    </div>
  );
}
