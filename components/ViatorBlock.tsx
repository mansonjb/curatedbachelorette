import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { AffiliateLink } from "@/components/AffiliateLink";
import { Img } from "@/components/Img";
import { withAffiliateParams, type ViatorCache } from "@/lib/affiliates/viator";

function loadCache(slug: string): ViatorCache | null {
  const path = join(process.cwd(), "data", "viator", `${slug}.json`);
  if (!existsSync(path)) return null;
  try {
    const raw = readFileSync(path, "utf8");
    return JSON.parse(raw) as ViatorCache;
  } catch {
    return null;
  }
}

/**
 * Renders the top Viator products for a destination as a horizontal card row.
 * Renders nothing if the cache file is missing — sync via `npm run sync-viator`.
 *
 * Server Component: reads the JSON synchronously at request time. With
 * `generateStaticParams` the destination pages are built once and served
 * static, so this hits the filesystem at build time only.
 */
export function ViatorBlock({ slug }: { slug: string }) {
  const cache = loadCache(slug);
  if (!cache || cache.products.length === 0) return null;

  return (
    <section
      className="section"
      style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Bookable experiences</div>
            <h2 className="h-display h-2" style={{ margin: 0 }}>
              Tours we&apos;d actually take.
            </h2>
          </div>
          <span className="meta">via Viator · sponsored</span>
        </div>

        <div
          className="viator-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {cache.products.slice(0, 6).map((p) => (
            <AffiliateLink
              key={p.productCode}
              network="viator"
              context={`${slug}-do-${p.productCode}`}
              href={withAffiliateParams(p.productUrl)}
              className="card"
              style={{ display: "block", background: "var(--bg)" }}
            >
              {p.thumbnail ? (
                <Img src={p.thumbnail} alt={p.title} ratio="4 / 3" rounded={0} />
              ) : (
                <div style={{ aspectRatio: "4 / 3", background: "var(--bg-alt)" }} />
              )}
              <div style={{ padding: "18px 22px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 8 }}>
                  {p.rating !== undefined && (
                    <span className="tag tag-teal">
                      ★ {p.rating.toFixed(1)}
                      {p.reviewCount ? ` · ${p.reviewCount.toLocaleString()}` : ""}
                    </span>
                  )}
                  {p.fromPrice && (
                    <span className="meta">
                      from {p.fromPrice.currency === "USD" ? "$" : ""}
                      {Math.round(p.fromPrice.value)}
                      {p.fromPrice.currency !== "USD" ? ` ${p.fromPrice.currency}` : ""}
                    </span>
                  )}
                </div>
                <h3 className="h-display h-3" style={{ margin: "0 0 8px", fontSize: 18, lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                {p.shortDescription && (
                  <p style={{ margin: 0, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                    {p.shortDescription.slice(0, 140)}
                    {p.shortDescription.length > 140 ? "…" : ""}
                  </p>
                )}
                <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="ulink" style={{ fontSize: 14 }}>Check availability</span>
                  <span style={{ color: "var(--teal-deep)", fontSize: 18 }}>→</span>
                </div>
              </div>
            </AffiliateLink>
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .viator-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .viator-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}
