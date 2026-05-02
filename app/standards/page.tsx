import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Standards — how a destination makes the cut",
  description:
    "Editorial principles for Curated Bachelorette: how we vet hotels, how we pick restaurants, what we never accept.",
  alternates: { canonical: "/standards" },
};

const RULES: { title: string; body: string }[] = [
  {
    title: "We pay for the room.",
    body:
      "Every hotel in our index is one we booked at the public rate, on our own card, with our own group. No comped stays. No press rates. No back-channel discounts in exchange for a mention. The first time a brand offers, we politely decline; the second, we name them.",
  },
  {
    title: "We eat the full menu.",
    body:
      "If a restaurant is in our Eat list, we ate there at least twice and ordered widely. Bottle, dessert, the awkward shared starter. The note you read is what we'd tell a friend over coffee a week later, not the version that survives a comms team.",
  },
  {
    title: "We swim in the pool.",
    body:
      "Sounds silly. It isn't. Most travel writing about pools is done from a lobby. We sit by every pool we list, on a Saturday afternoon, with the group it was built for. The right pool for six is not the right pool for ten, and the room rate doesn't tell you which is which.",
  },
  {
    title: "We say no in print.",
    body:
      "If a city doesn't work for us, we say so on the page — with reasons. We don't pretend everywhere is good. There are destinations that nearly made the index and didn't, and we'll tell you why if you ask. Our readers come back because the no's are honest.",
  },
  {
    title: "We bury affiliate, not editorial.",
    body:
      "We make money when a reader books through a link. We never make money for what we recommend. The hotels in our cover are the hotels we'd recommend even if they paid no commission. The Viator and Stay22 blocks are below the editorial copy, marked sponsored, and easy to skip.",
  },
  {
    title: "We update, in public.",
    body:
      "Restaurants close. Chefs leave. A hotel changes hands. We re-visit the index every spring and the changes are visible — every cover carries an 'updated' line, and old recommendations get a strikethrough, not a quiet delete. The trail matters.",
  },
];

export default function StandardsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `Standards · ${SITE_NAME}`,
          url: `${SITE_URL}/standards`,
        }}
      />
      <Header active="about" />
      <main>
        <Hero />
        <Rules />
        <SignOff />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>The standards</div>
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
          Six rules,{" "}
          <TicketBadge variant="pink" rotate={-1.5}>no exceptions</TicketBadge>.
        </h1>
        <p style={{ margin: 0, maxWidth: 720, fontSize: 18, lineHeight: 1.65, color: "var(--ink-soft)" }}>
          A bachelorette is a small thing — a weekend, a group, a reservation —
          and it&apos;s easy to spend it badly. The rules below are how we
          decide what makes the index. They&apos;re what stops this from being
          another influencer page.
        </p>
      </div>
    </section>
  );
}

function Rules() {
  return (
    <section className="section-tight">
      <div className="container" style={{ maxWidth: 880 }}>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 28 }}>
          {RULES.map((r, i) => (
            <li
              key={r.title}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 36px",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 28,
                alignItems: "start",
              }}
            >
              <div
                className="h-display"
                style={{
                  fontSize: 56,
                  lineHeight: 0.9,
                  color: "var(--pink-deep)",
                  minWidth: 64,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="h-display" style={{ margin: "0 0 12px", fontSize: 24, lineHeight: 1.15 }}>
                  {r.title}
                </h2>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SignOff() {
  return (
    <section className="section" style={{ background: "var(--pink-soft)" }}>
      <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
        <p
          className="h-display"
          style={{ margin: "0 0 18px", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2 }}
        >
          Caught us breaking one of these? Tell us — we&apos;ll fix it.
        </p>
        <p style={{ margin: "0 auto 24px", maxWidth: 540, fontSize: 16, color: "var(--ink-soft)" }}>
          editor@curatedbachelorette.com — we read everything, we answer most.
        </p>
        <Link href="/contact" className="btn btn-pink btn-lg">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
