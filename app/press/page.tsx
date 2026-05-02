import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press — what we are, in a paragraph",
  description:
    "Press kit, brand bio, editor bios, and the right way to reach us about a story.",
  alternates: { canonical: "/press" },
};

const FACTS: { label: string; value: string }[] = [
  { label: "Founded", value: "Brooklyn, 2025" },
  { label: "Editors", value: "Three (M. Aldrin, J. Park, L. Bertrand)" },
  { label: "Cities in the index", value: "Twelve, all editor-tested" },
  { label: "Audience", value: "MOH and brides, 25–38, US + Western Europe" },
  { label: "Newsletter", value: "Twice a month, ~9,000 readers" },
  { label: "Business model", value: "Affiliate. We pay for our own rooms." },
];

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Press · Curated Bachelorette",
          url: `${SITE_URL}/press`,
        }}
      />
      <Header active="about" />
      <main>
        <Hero />
        <Bio />
        <FactsBlock />
        <PitchInbox />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Press</div>
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
          For{" "}
          <TicketBadge variant="yellow" rotate={-1.5}>journalists</TicketBadge>{" "}
          and producers.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 720 }}>
          A short page, on purpose. Below: the bio you can quote, the numbers
          you can cite, and the inbox to write to. We&apos;re happy to do
          interviews, panels and the occasional podcast — we just don&apos;t
          take cold pitches without an angle.
        </p>
      </div>
    </section>
  );
}

function Bio() {
  return (
    <section className="section-tight">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>The bio you can quote</div>
        <p style={{ margin: "0 0 18px", fontSize: 19, lineHeight: 1.55 }}>
          <strong>Curated Bachelorette is a quarterly editorial index of bachelorette
          weekends</strong> — twelve cities, vetted by editors who pay for their own
          rooms and never accept comped stays.
        </p>
        <p style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
          Founded in 2025 by editor-in-chief M. Aldrin, the site exists to
          replace the bachelorette internet&apos;s spreadsheets and Pinterest
          boards with a single, opinionated short list. Every cover is built
          around one Saturday-night dinner and three hotels we&apos;d send our
          sister to. The voice is Mr & Mrs Smith with a wedding planner
          inside; the position is &quot;skip August.&quot;
        </p>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
          The site publishes new covers every spring and fall, runs a
          twice-monthly newsletter, and a free matchmaker service for groups
          who want a personalised recommendation. It&apos;s funded by hotel
          and tour affiliate commissions; nothing in the editorial index is
          paid placement.
        </p>
      </div>
    </section>
  );
}

function FactsBlock() {
  return (
    <section
      className="section"
      style={{ background: "var(--pink-soft)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>The numbers</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 28px" }}>
          Facts you can quote without checking.
        </h2>
        <dl
          style={{
            margin: 0,
            display: "grid",
            gridTemplateColumns: "minmax(0, 220px) 1fr",
            gap: "16px 28px",
          }}
        >
          {FACTS.map((f) => (
            <div key={f.label} style={{ display: "contents" }}>
              <dt
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--ink)",
                  borderTop: "1px solid var(--rule-strong)",
                  paddingTop: 14,
                }}
              >
                {f.label}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontSize: 16,
                  color: "var(--ink-soft)",
                  borderTop: "1px solid var(--rule-strong)",
                  paddingTop: 14,
                  lineHeight: 1.5,
                }}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function PitchInbox() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>How to reach us</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 18px" }}>
          One inbox, one rule.
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)" }}>
          Send the angle, the outlet, and the deadline. If we&apos;re a fit
          and we have something useful to say, we&apos;ll come back within 48
          hours. If not, we&apos;ll tell you that too — we&apos;d rather
          decline cleanly than waste your day.
        </p>
        <p style={{ margin: "0 0 28px", fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)" }}>
          Brand assets, headshots, and the high-res version of the cover
          wordmark are linked below. Anything not on this list, just ask.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="mailto:press@curatedbachelorette.com" className="btn btn-pink btn-lg">
            press@curatedbachelorette.com
          </a>
          <Link href="/about" className="btn btn-ghost btn-lg">
            About the editors
          </Link>
        </div>
      </div>
    </section>
  );
}
