import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Letter — twice a month, in your inbox",
  description:
    "One destination, one hotel, one restaurant — and the small thing we changed our minds about that week. Subscribe.",
  alternates: { canonical: "/letters" },
};

const ARCHIVE: { date: string; title: string; teaser: string }[] = [
  {
    date: "26 April 2026",
    title: "Why we keep going back to Comporta in May",
    teaser:
      "Five reasons, none of which is the beach. The pine forest in the morning, the way nobody books restaurants past 9PM, the bakery in Carvalhal that opens at 7. The right week is the second one of May.",
  },
  {
    date: "12 April 2026",
    title: "On groups of ten — and why eight is the better number",
    teaser:
      "Two extra people changes the dinner reservation, the boat charter, the cab from the airport, and the late-night kitchen-counter conversation that ends most good bachelorettes. Below ten is a different trip.",
  },
  {
    date: "29 March 2026",
    title: "Capri at 6PM, when the day-trippers leave",
    teaser:
      "The hour we built the cover around. What to do with it: walk the Piazzetta empty, take the small lift down to Marina Piccola for one swim, sit at Pulalli with a glass on the terrace.",
  },
  {
    date: "15 March 2026",
    title: "The maitre d' tip, in three currencies",
    teaser:
      "Twenty euros in Lisbon, fifty in Capri, a hundred in Marrakech — and what each one buys you the next time you walk in. Plus the one place we don't tip the maitre d' (Mexico City) and why.",
  },
];

export default function LettersPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Periodical",
          name: "The Letter — Curated Bachelorette",
          url: `${SITE_URL}/letters`,
          publisher: { "@type": "Organization", name: "Curated Bachelorette" },
        }}
      />
      <Header active="about" />
      <main>
        <Hero />
        <Subscribe />
        <Archive />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px) clamp(28px, 4vw, 56px)",
        background: "var(--yellow-soft)",
      }}
    >
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>The Letter · since 2025</div>
        <h1
          className="h-display"
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            fontWeight: 800,
          }}
        >
          One letter,{" "}
          <TicketBadge variant="pink" rotate={-1.5}>twice a month</TicketBadge>.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 720 }}>
          We send The Letter on the second and fourth Sunday of every month.
          One destination, one hotel, one restaurant — and the small thing we
          changed our minds about that week. Eight to ten minutes. No emojis,
          no &quot;hey girl,&quot; no influencer affiliate-link bait.
        </p>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <section className="section-tight">
      <div className="container" style={{ maxWidth: 720 }}>
        <form
          action="/api/subscribe"
          method="post"
          style={{
            display: "flex",
            gap: 12,
            background: "var(--bg-alt)",
            border: "1.5px solid var(--ink)",
            borderRadius: 999,
            padding: 6,
            paddingLeft: 22,
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            style={{
              flex: 1,
              minWidth: 220,
              padding: "12px 0",
              border: 0,
              background: "transparent",
              color: "var(--ink)",
              font: "inherit",
              fontSize: 16,
              outline: "none",
            }}
          />
          <button type="submit" className="btn btn-pink">
            Subscribe →
          </button>
        </form>
        <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--muted)" }}>
          About 9,000 readers. Unsubscribe in two clicks. We don&apos;t share
          your address with anyone — not partners, not advertisers, not the
          person sitting next to us at the bar.
        </p>
      </div>
    </section>
  );
}

function Archive() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1280 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Recent letters</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 28px" }}>
          What you&apos;ll find in your inbox.
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          {ARCHIVE.map((a) => (
            <li
              key={a.title}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-lg)",
                padding: "26px 32px",
                display: "grid",
                gridTemplateColumns: "minmax(0, 180px) 1fr",
                gap: 28,
                alignItems: "start",
              }}
              className="archive-row"
            >
              <div className="meta" style={{ color: "var(--pink-deep)", fontWeight: 600 }}>
                {a.date}
              </div>
              <div>
                <h3 className="h-display" style={{ margin: "0 0 10px", fontSize: 22, lineHeight: 1.2 }}>
                  {a.title}
                </h3>
                <p style={{ margin: 0, fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.65 }}>
                  {a.teaser}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 28, fontSize: 14, color: "var(--muted)" }}>
          Past editions are sent on request — email{" "}
          <Link href="/contact" className="ulink">letters@curatedbachelorette.com</Link>.
        </p>
        <style>{`@media (max-width: 720px) { .archive-row { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}
