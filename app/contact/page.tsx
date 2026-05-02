import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — say hi, send a tip, ask a question",
  description:
    "Editorial, partnerships, press, advertising — every channel a person can write to us through.",
  alternates: { canonical: "/contact" },
};

const ROUTES: { eyebrow: string; title: string; body: string; email: string }[] = [
  {
    eyebrow: "Editorial",
    title: "Pitch a destination, fix a fact, send a story.",
    body: "If a recommendation has gone bad, a chef has moved, or a place we missed deserves a cover — write to the editors. We read everything; we answer most.",
    email: "editor@curatedbachelorette.com",
  },
  {
    eyebrow: "Reader letters",
    title: "Quick advice. The matchmaker is the long form.",
    body: "Two-line questions, specific city queries, where to put your mum on a four-night Lisbon trip — those go here. Faster than the matchmaker form, less detailed.",
    email: "letters@curatedbachelorette.com",
  },
  {
    eyebrow: "Partnerships",
    title: "We don't do paid placements.",
    body: "We do the occasional content collaboration with a hotel or restaurant brand — clearly labelled, never traded for editorial coverage. If that's the conversation, this is the inbox.",
    email: "partners@curatedbachelorette.com",
  },
  {
    eyebrow: "Press",
    title: "Speaking, podcasts, panel invitations.",
    body: "Brand kit and bios are on the press page. For interview requests, send the angle and the deadline — we don't take cold pitches without one.",
    email: "press@curatedbachelorette.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Curated Bachelorette",
          url: `${SITE_URL}/contact`,
        }}
      />
      <Header active="about" />
      <main>
        <Hero />
        <Routes />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Contact</div>
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
          Four inboxes,{" "}
          <TicketBadge variant="pink" rotate={-1.5}>real humans</TicketBadge>.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 720 }}>
          We don&apos;t use a ticket system. Pick the inbox that fits;
          one of us will reply, usually within two working days, signed.
        </p>
      </div>
    </section>
  );
}

function Routes() {
  return (
    <section className="section-tight">
      <div className="container container-wide" style={{ maxWidth: 1280 }}>
        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}
        >
          {ROUTES.map((r) => (
            <article
              key={r.email}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div className="eyebrow" style={{ color: "var(--pink-deep)" }}>{r.eyebrow}</div>
              <h2 className="h-display" style={{ margin: 0, fontSize: 26, lineHeight: 1.15 }}>
                {r.title}
              </h2>
              <p style={{ margin: 0, fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.65 }}>
                {r.body}
              </p>
              <a
                href={`mailto:${r.email}`}
                className="btn btn-pink"
                style={{ alignSelf: "flex-start", marginTop: 6 }}
              >
                {r.email}
              </a>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 32, fontSize: 14.5, color: "var(--muted)" }}>
          Want a personalised plan? Try{" "}
          <Link href="/matchmaker" className="ulink">the matchmaker</Link>{" "}
          first — it&apos;s the right shape for that conversation.
        </p>
        <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}
