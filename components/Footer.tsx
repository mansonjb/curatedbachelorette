import Link from "next/link";

const FOOTER_COLS: [string, [string, string][]][] = [
  ["Index", [["Miami", "/destinations/miami"], ["Charleston", "/destinations/charleston"], ["Mexico City", "/destinations/cdmx"], ["Lisbon", "/destinations/lisbon"], ["See all", "/destinations"]]],
  ["Vibes", [["Wellness", "/vibes/wellness"], ["Low-key", "/vibes/low-key"], ["Luxury", "/vibes/luxury"], ["Beach", "/vibes/beach"], ["See all", "/vibes"]]],
  ["The Editors", [["About", "/about"], ["Standards", "/standards"], ["Press", "/press"], ["Contact", "/contact"]]],
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        marginTop: 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* huge wordmark */}
      <div
        style={{
          borderBottom: "1.5px solid #2a2a26",
          padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 56px)",
        }}
      >
        <div
          className="display"
          style={{
            fontSize: "clamp(80px, 18vw, 280px)",
            lineHeight: 0.82,
            color: "var(--blush)",
            letterSpacing: "-0.05em",
          }}
        >
          CURATED/<span style={{ color: "var(--blush-deep)" }}>BACH*</span>
        </div>
        <div
          style={{
            marginTop: 22,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
          className="mono"
        >
          <span>Bachelorette weekends, curated around your group.</span>
          <span style={{ color: "var(--blush)" }}>Brooklyn, NY → Worldwide.</span>
        </div>
      </div>

      <div
        className="footer-grid"
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 100px) clamp(20px, 4vw, 56px) 28px",
          display: "grid",
          gridTemplateColumns:
            "minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
          gap: "clamp(28px, 5vw, 64px)",
        }}
      >
        <div>
          <div className="display-soft" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
            Get the<br />letter.
          </div>
          <p
            style={{
              margin: "16px 0 22px",
              color: "rgba(244,239,226,0.7)",
              maxWidth: 380,
              lineHeight: 1.6,
            }}
          >
            One destination, one hotel, one restaurant. Twice a month. No emojis.
          </p>
          <form action="/api/subscribe" method="post" style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              name="email"
              required
              placeholder="email@—"
              style={{
                flex: 1,
                padding: "14px 16px",
                borderRadius: 999,
                border: "1.5px solid var(--cream)",
                background: "transparent",
                color: "var(--cream)",
                font: "inherit",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="pill"
              style={{
                background: "var(--blush)",
                color: "var(--ink)",
                borderColor: "var(--blush)",
                padding: "12px 18px",
              }}
            >
              Sign up →
            </button>
          </form>
        </div>

        {FOOTER_COLS.map(([title, items]) => (
          <div key={title}>
            <div className="mono" style={{ color: "var(--blush)", marginBottom: 14 }}>
              {title}
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {items.map(([l, href]) => (
                <li key={l}>
                  <Link href={href} className="ulink-h">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="mono"
        style={{
          padding: "20px clamp(20px, 4vw, 56px) 28px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          color: "rgba(244,239,226,0.55)",
        }}
      >
        <span>© Curated/Bach MMXXVI</span>
        <span>Set in Bricolage Grotesque + Space Mono</span>
        <span>Made deliberately, not algorithmically.</span>
      </div>

      <style>
        {`@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr !important; } }`}
      </style>
    </footer>
  );
}
