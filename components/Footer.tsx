import Link from "next/link";

const FOOTER_COLS: [string, [string, string][]][] = [
  ["Destinations", [["Miami", "/destinations/miami"], ["Charleston", "/destinations/charleston"], ["Mexico City", "/destinations/cdmx"], ["Lisbon", "/destinations/lisbon"], ["Ibiza", "/destinations/ibiza"], ["See all", "/destinations"]]],
  ["Vibes", [["Wellness", "/vibes/wellness"], ["Low-key", "/vibes/low-key"], ["Luxury", "/vibes/luxury"], ["Beach", "/vibes/beach"], ["See all", "/vibes"]]],
  ["Editors", [["About", "/about"], ["Standards", "/standards"], ["Press", "/press"], ["Contact", "/contact"]]],
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-alt)",
        color: "var(--ink)",
        marginTop: 64,
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(48px, 6vw, 72px) clamp(20px, 4vw, 40px) 32px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
          gap: "clamp(28px, 5vw, 56px)",
        }}
      >
        <div>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: "var(--teal)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              CB
            </span>
            <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.015em" }}>
              Curated Bachelorette
            </span>
          </Link>
          <p
            style={{
              margin: "0 0 20px",
              color: "var(--ink-soft)",
              maxWidth: 380,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            Bachelorette weekends, curated around your group. One destination, one
            hotel, one restaurant — twice a month, in your inbox. No emojis.
          </p>
          <form action="/api/subscribe" method="post" style={{ display: "flex", gap: 8, maxWidth: 380 }}>
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 999,
                border: "1px solid var(--rule-strong)",
                background: "var(--bg)",
                color: "var(--ink)",
                font: "inherit",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button type="submit" className="btn btn-primary btn-sm">
              Sign up
            </button>
          </form>
        </div>

        {FOOTER_COLS.map(([title, items]) => (
          <div key={title}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>{title}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {items.map(([l, href]) => (
                <li key={l}>
                  <Link href={href} style={{ fontSize: 14, color: "var(--ink-soft)" }} className="ulink">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="divider" style={{ borderTopColor: "var(--rule)" }} />

      <div
        className="meta"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px clamp(20px, 4vw, 40px) 28px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span>© Curated Bachelorette {new Date().getFullYear()}</span>
        <span>Editorial. Affiliate-supported. <Link href="/disclosure" className="ulink">Disclosure</Link>.</span>
        <span>Made deliberately, not algorithmically.</span>
      </div>

      <style>
        {`@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr !important; } }`}
      </style>
    </footer>
  );
}
