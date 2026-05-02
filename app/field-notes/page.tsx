import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { FIELD_NOTES } from "@/data/manifesto";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Field Notes — what we wrote between the bookings",
  description:
    "Essays, etiquette, and small dispatches from the road. Group-text rules, ranked pools, the polite art of leaving before midnight.",
  alternates: { canonical: "/field-notes" },
};

export default function FieldNotesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Curated Bachelorette · Field Notes",
          url: `${SITE_URL}/field-notes`,
        }}
      />
      <Header active="field-notes" />
      <main>
        <Hero />
        <Featured />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px) clamp(28px, 4vw, 48px)" }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Field Notes</div>
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
          Reading,{" "}
          <TicketBadge variant="yellow" rotate={-1.5}>between</TicketBadge>{" "}
          the bookings.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 720 }}>
          Short pieces about the parts of a bachelorette that aren&apos;t a
          city. The group text. The bride who hates surprises. How to tip a
          maitre d&apos; in a language you don&apos;t speak. Filed twice a
          month, when we have something to say.
        </p>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="section-tight">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="notes-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}
        >
          {FIELD_NOTES.map((n, i) => (
            <article
              key={n.t}
              className="card"
              style={{ background: "var(--bg-alt)", display: "flex", flexDirection: "column" }}
            >
              <div style={{ padding: 14 }}>
                <Img src={n.img} alt={n.t} ratio="4 / 3" rounded={28} />
              </div>
              <div
                style={{
                  padding: "8px 28px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  flex: 1,
                }}
              >
                <span
                  className="tag"
                  style={{ alignSelf: "flex-start", background: i === 0 ? "var(--pink)" : "var(--bg)" }}
                >
                  {n.tag}
                </span>
                <h2 className="h-display" style={{ margin: 0, fontSize: 28, lineHeight: 1.1 }}>
                  {n.t}
                </h2>
                <p style={{ margin: 0, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65 }}>
                  {n.b}
                </p>
                <div style={{ marginTop: "auto", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="meta">Filed by an editor · 6-min read</span>
                  <span className="meta" style={{ color: "var(--pink-deep)" }}>Coming soon →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 32, fontSize: 14.5, color: "var(--muted)" }}>
          The pieces above are filed for May. Subscribe below and we&apos;ll send
          each one the morning it ships.
        </p>
        <style>
          {`@media (max-width: 900px) { .notes-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .notes-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section
      className="section"
      style={{ background: "var(--pink-soft)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
        <h2 className="h-display h-2" style={{ margin: "0 0 16px" }}>
          The Letter, twice a month.
        </h2>
        <p style={{ margin: "0 auto 24px", maxWidth: 540, fontSize: 16, color: "var(--ink-soft)" }}>
          One destination, one hotel, one restaurant — and the small thing we
          changed our minds about that week. No emojis. Unsubscribe in two
          clicks.
        </p>
        <form
          action="/api/subscribe"
          method="post"
          style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            style={{
              flex: "1 1 280px",
              maxWidth: 360,
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
          <button type="submit" className="btn btn-pink">
            Sign up
          </button>
        </form>
        <p style={{ marginTop: 18, fontSize: 13, color: "var(--muted)" }}>
          Read previous editions on{" "}
          <Link href="/letters" className="ulink">/letters</Link>.
        </p>
      </div>
    </section>
  );
}
