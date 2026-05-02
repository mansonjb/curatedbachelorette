import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The matchmaker — tell us your group, get a weekend",
  description:
    "Six questions, two minutes, one personal recommendation. We come back by Friday with a destination, a hotel, and a draft itinerary. Free.",
  alternates: { canonical: "/matchmaker" },
};

const QUESTIONS: { n: string; q: string; hint: string }[] = [
  {
    n: "01",
    q: "Who's the bride?",
    hint: "Two sentences. The detail that matters: does she like to dress up, hate to dress up, or refuse to think about it?",
  },
  {
    n: "02",
    q: "How many of you?",
    hint: "Plus the bride. Four to ten is our wheelhouse; above ten we'll still answer but the answer changes shape.",
  },
  {
    n: "03",
    q: "When are you going?",
    hint: "Month and length. Three nights, four nights — and if you're flexible by a week, say so. The right week beats the right city.",
  },
  {
    n: "04",
    q: "What's the per-head budget?",
    hint: "Roughly. Hotel, dinners, one boat or one spa, getting there. We can plan a $900 weekend or a $4,000 weekend; we just need to know which.",
  },
  {
    n: "05",
    q: "What does the group not want?",
    hint: "More useful than what they do want. No clubs, no four-hour tasting, no airport day-trip — say it now.",
  },
  {
    n: "06",
    q: "What would make the bride say 'this was perfect'?",
    hint: "One specific thing. The lunch she'd cite a year later. The view from the room. The morning she got to read for an hour. We build the trip around it.",
  },
];

export default function MatchmakerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Curated Bachelorette matchmaker",
          serviceType: "Bachelorette weekend recommendation",
          url: `${SITE_URL}/matchmaker`,
          provider: { "@type": "Organization", name: "Curated Bachelorette" },
        }}
      />
      <Header active="about" />
      <main>
        <Hero />
        <Form />
        <How />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px) clamp(32px, 5vw, 64px)",
        background: "var(--yellow-soft)",
      }}
    >
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>The matchmaker · free</div>
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
          Tell us your group.{" "}
          <TicketBadge variant="pink" rotate={-1.5}>We&apos;ll send</TicketBadge>{" "}
          the weekend.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 720 }}>
          Six questions, two minutes. We read every form ourselves and come
          back, usually within four working days, with one destination, one
          hotel, and a draft of the trip. If we can&apos;t place you well,
          we&apos;ll tell you that too.
        </p>
      </div>
    </section>
  );
}

function Form() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <form
          action="/api/matchmaker"
          method="post"
          style={{ display: "flex", flexDirection: "column", gap: 28 }}
        >
          {QUESTIONS.map((q) => (
            <fieldset
              key={q.n}
              style={{
                border: "1.5px solid var(--ink)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 32px",
                background: "var(--bg-alt)",
                margin: 0,
              }}
            >
              <legend
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "0 12px",
                }}
              >
                <span
                  className="h-display"
                  style={{ fontSize: 22, color: "var(--pink-deep)", lineHeight: 1 }}
                >
                  {q.n}
                </span>
                <span style={{ fontSize: 19, fontWeight: 700 }}>{q.q}</span>
              </legend>
              <p style={{ margin: "8px 0 14px", fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                {q.hint}
              </p>
              <textarea
                name={`q${q.n}`}
                rows={3}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1.5px solid var(--rule-strong)",
                  background: "var(--bg)",
                  color: "var(--ink)",
                  font: "inherit",
                  fontSize: 16,
                  resize: "vertical",
                  outline: "none",
                }}
              />
            </fieldset>
          ))}

          <fieldset
            style={{
              border: "1.5px solid var(--ink)",
              borderRadius: "var(--radius-lg)",
              padding: "28px 32px",
              background: "var(--bg-alt)",
              margin: 0,
            }}
          >
            <legend style={{ padding: "0 12px", fontSize: 19, fontWeight: 700 }}>
              Where to send it
            </legend>
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              style={{
                width: "100%",
                marginTop: 14,
                padding: "14px 16px",
                borderRadius: 999,
                border: "1.5px solid var(--rule-strong)",
                background: "var(--bg)",
                color: "var(--ink)",
                font: "inherit",
                fontSize: 16,
                outline: "none",
              }}
            />
          </fieldset>

          <button
            type="submit"
            className="btn btn-pink btn-lg"
            style={{ alignSelf: "flex-start" }}
          >
            Send it →
          </button>
        </form>
      </div>
    </section>
  );
}

function How() {
  const steps: [string, string][] = [
    ["You write us.", "Six answers, your email. We don't share it; we don't sell it."],
    ["We read it.", "An editor — usually M. Aldrin or J. Park — opens your form within 48 hours."],
    ["We answer.", "By Friday at the latest. One destination, one hotel, a draft of the three or four nights with our notes on what to book first."],
    ["You take it from there.", "Or we keep going — the matchmaker is free, but if you'd like us to handle bookings the second round costs €240."],
  ];
  return (
    <section
      className="section"
      style={{ background: "var(--pink-soft)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1280 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>How it works</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 32px" }}>
          From form to itinerary, in a week.
        </h2>
        <ol
          className="how-grid"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {steps.map(([t, b], i) => (
            <li
              key={t}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-lg)",
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 220,
              }}
            >
              <div className="h-display" style={{ fontSize: 32, color: "var(--pink-deep)", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="h-display" style={{ fontSize: 20, lineHeight: 1.15 }}>{t}</div>
              <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{b}</p>
            </li>
          ))}
        </ol>
        <style>
          {`@media (max-width: 900px) { .how-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .how-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function FAQ() {
  const items: [string, string][] = [
    [
      "Is it really free?",
      "The recommendation is. We&apos;re paid by the hotels you book through us, not by you. If you want us to do the actual booking and the back-and-forth with the property, that's a paid service (€240 flat).",
    ],
    [
      "What if you can't place us?",
      "We tell you. About one in ten forms doesn't fit our index — usually because the budget and the destination don't match, or the dates fall in the wrong week. We give you our reasoning and point you somewhere useful.",
    ],
    [
      "Can we ask for a specific city?",
      "Yes — but the form is more useful when you don't. Half of what we do is talk groups out of the destination they walked in with.",
    ],
    [
      "How many editors are reading this?",
      "Three. M. Aldrin, J. Park, and L. Bertrand. One of us answers your form personally. Replies are signed.",
    ],
  ];
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Reader letters · paraphrased</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 28px" }}>
          What people ask.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {items.map(([q, a]) => (
            <div
              key={q}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-md)",
                padding: "20px 28px",
              }}
            >
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{q}</div>
              <p
                style={{ margin: 0, fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: a }}
              />
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, fontSize: 14, color: "var(--muted)" }}>
          Other questions?{" "}
          <Link href="/contact" className="ulink">Email us</Link>.
        </p>
      </div>
    </section>
  );
}
