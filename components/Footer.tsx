import Link from "next/link";
import { DESTINATIONS } from "@/data/destinations";
import { COVERS } from "@/data/destinations/covers";

const FOOTER_COLS: [string, [string, string][]][] = [
  ["About us", [["About us", "/about"], ["Contact", "/contact"], ["Press", "/press"]]],
  ["Editors", [["Standards", "/standards"], ["Disclosure", "/disclosure"]]],
  ["Practical", [["Plan a weekend", "/matchmaker"], ["Newsletter", "/letters"]]],
];

export function Footer() {
  const cities = DESTINATIONS.filter((d) => COVERS[d.slug]);

  return (
    <footer style={{ marginTop: 64 }}>
      {/* Pink band — explore destinations as a 4-column city list */}
      <div
        style={{
          background: "var(--pink-band)",
          color: "var(--ink)",
          padding: "clamp(56px, 7vw, 88px) clamp(20px, 4vw, 40px)",
        }}
      >
        <div style={{ maxWidth: 1480, margin: "0 auto" }}>
          <h2 className="h-display h-2" style={{ margin: "0 0 32px" }}>
            Explore Curated Bachelorette weekends
          </h2>
          <ul
            className="city-grid"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "14px 32px",
            }}
          >
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/destinations/${c.slug}`}
                  style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)" }}
                  className="ulink-h"
                >
                  Bachelorette in {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <style>
            {`@media (max-width: 900px) { .city-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .city-grid { grid-template-columns: 1fr !important; } }`}
          </style>
        </div>
      </div>

      {/* Cream band — wordmark, footer columns, social */}
      <div
        style={{
          background: "var(--bg)",
          padding: "clamp(48px, 6vw, 72px) clamp(20px, 4vw, 40px)",
        }}
      >
        <div
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
          }}
          className="footer-grid"
        >
          <div>
            <Link href="/" style={{ display: "inline-flex", flexDirection: "column", gap: 4 }}>
              <span
                className="h-display"
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                curated<span style={{ color: "var(--pink-deep)" }}>bach</span>
              </span>
              <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>
                bachelorette weekends, curated around your group
              </span>
            </Link>
            <p style={{ marginTop: 22, color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6, maxWidth: 380 }}>
              One destination, one hotel, one restaurant — twice a month, in your inbox.
            </p>
            <form action="/api/subscribe" method="post" style={{ marginTop: 16, display: "flex", gap: 8, maxWidth: 380 }}>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                style={{
                  flex: 1,
                  padding: "13px 18px",
                  borderRadius: 999,
                  border: "1.5px solid var(--ink)",
                  background: "var(--bg-alt)",
                  color: "var(--ink)",
                  font: "inherit",
                  fontSize: 14,
                  outline: "none",
                }}
              />
              <button type="submit" className="btn btn-pink btn-sm">
                Sign up
              </button>
            </form>
          </div>

          {FOOTER_COLS.map(([title, items]) => (
            <div key={title}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>{title}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {items.map(([l, href]) => (
                  <li key={l}>
                    <Link href={href} className="ulink" style={{ fontSize: 15 }}>{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="meta"
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            paddingTop: 40,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            color: "var(--muted)",
          }}
        >
          <span>© Curated Bachelorette {new Date().getFullYear()}</span>
          <span>Editorial · affiliate-supported · <Link href="/disclosure" className="ulink">Disclosure</Link></span>
        </div>

        <style>
          {`@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </footer>
  );
}
