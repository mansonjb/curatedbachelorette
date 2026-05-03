import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

/**
 * Sticky bottom-of-screen CTA shown only on mobile destination pages.
 *
 * - Hidden above 720px (.mobile-only handles the breakpoint).
 * - Sits above the fold's bottom edge with a soft drop shadow.
 * - The pink pill links to the Stay22 Allez page for the destination,
 *   which the LetMeAllez script (loaded site-wide) auto-tags on outbound
 *   click; commission attributes under our partner ID.
 */
export function MobileBookCta({
  city,
  contextSlug,
}: {
  city: string;
  contextSlug: string;
}) {
  return (
    <>
      <div
        className="mobile-cta-bar"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 70,
          padding: "12px clamp(12px, 4vw, 20px) max(12px, env(safe-area-inset-bottom))",
          background: "rgba(245, 239, 229, 0.94)",
          backdropFilter: "saturate(140%) blur(10px)",
          WebkitBackdropFilter: "saturate(140%) blur(10px)",
          borderTop: "1.5px solid var(--ink)",
          display: "none",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ flex: 1, lineHeight: 1.2, minWidth: 0 }}>
            <div className="eyebrow" style={{ marginBottom: 2, color: "var(--ink-soft)" }}>
              Bachelorette in {city}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              From the editor&apos;s shortlist
            </div>
          </div>
          <AffiliateLink
            network="stay22"
            context={`${contextSlug}-mobile-cta`}
            href={stay22Url({ address: city })}
            className="btn btn-pink"
            style={{ padding: "12px 18px", fontSize: 14, whiteSpace: "nowrap" }}
          >
            Book your stay →
          </AffiliateLink>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 720px) {
            .mobile-cta-bar { display: block !important; }
            body { padding-bottom: 88px; }
          }
        `}
      </style>
    </>
  );
}
