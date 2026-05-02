import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { IMG } from "@/lib/images";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — who we are, what we book, what we won't",
  description:
    "An editor's index of bachelorette weekends. Three women, twelve cities, no comped rooms.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${SITE_NAME}`,
          url: `${SITE_URL}/about`,
        }}
      />
      <Header active="about" />
      <main>
        <Hero />
        <Origin />
        <NumbersBand />
        <Editors />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section style={{ padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)" }}>
      <div
        className="hero-grid"
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1.15fr)",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "center",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>About us</div>
          <h1
            className="h-display"
            style={{
              margin: 0,
              fontSize: "clamp(48px, 8vw, 104px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              fontWeight: 800,
            }}
          >
            We plan the trip you wish your friend had planned.
          </h1>
          <p
            style={{
              margin: "32px 0 16px",
              fontSize: 19,
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              maxWidth: 580,
            }}
          >
            Three editors, twelve cities, one rule: every hotel we recommend is
            one we paid for. We started this site because the bachelorette
            internet was a mess of sashes and pink banners and spreadsheets called{" "}
            <em>itinerary v3 FINAL.xlsx</em>, and the bride deserved better.
          </p>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--ink-soft)",
              maxWidth: 580,
            }}
          >
            What you get here is a short list. Twelve cities. Three hotels
            each. Five restaurants. One Saturday-night dinner that will be the
            photo of the trip. And the unspoken agreement that nobody — not
            even the bride — is going to wear a sash.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/destinations" className="btn btn-pink btn-lg">
              Browse the index
            </Link>
            <Link href="/standards" className="btn btn-ghost btn-lg">
              Read the standards
            </Link>
          </div>
        </div>
        <div className="tilt-r">
          <div
            style={{
              border: "1.5px solid var(--ink)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              background: "var(--bg-alt)",
            }}
          >
            <Img src={IMG.poolGirls} alt="A pool day" ratio="4 / 5" rounded={0} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function Origin() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>The origin story</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 28px" }}>
          It started, like most of these things, with a{" "}
          <TicketBadge variant="yellow" rotate={-1.5}>group chat</TicketBadge>.
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 21, lineHeight: 1.45 }}>
          A friend was getting married. Someone in the chat had volunteered to
          plan. By week two there were nine browser tabs, four Airbnbs on hold,
          and a very polite argument about whether Tulum in February was a good
          idea (it was not).
        </p>
        <p
          style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)" }}
        >
          We&apos;d each been on the other end of that planning before. The
          maids of honour we admired all had the same trick: they didn&apos;t
          start from a blank page. They had a file. A short list of hotels they
          knew worked, restaurants they&apos;d already booked at, an opinion on
          why August was the wrong month for the Med. The trip felt
          considered. The bride got to be a guest.
        </p>
        <p
          style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)" }}
        >
          So this site is the file. We&apos;ve filled it with the cities we
          love, the hotels we&apos;d send our sister to, and the dinners
          we&apos;ll cite for years. We update it twice a month. We pay for
          everything ourselves. And we say no a lot — to comped rooms, to
          press trips, to the suggestion that a bachelorette needs a sash.
        </p>
      </div>
    </section>
  );
}

function NumbersBand() {
  const stats: [string, string][] = [
    ["12", "Cities in the index"],
    ["108", "Nights paid for"],
    ["0", "Comped stays"],
    ["3", "Editors on the road"],
  ];
  return (
    <section
      className="section"
      style={{ background: "var(--pink-soft)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="num-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 32 }}
        >
          {stats.map(([n, l]) => (
            <div key={l}>
              <div
                className="h-display"
                style={{
                  fontSize: "clamp(56px, 7vw, 88px)",
                  color: "var(--pink-deep)",
                  lineHeight: 0.95,
                }}
              >
                {n}
              </div>
              <div className="meta" style={{ marginTop: 10, color: "var(--ink)" }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .num-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function Editors() {
  const team = [
    {
      name: "M. Aldrin",
      role: "Editor-in-chief",
      bio: "Built the file. Lives in Brooklyn, eats in Lisbon. Has strong opinions about Capri in October and the right way to tip a concierge.",
    },
    {
      name: "L. Bertrand",
      role: "Photo editor",
      bio: "Shoots every cover that appears here. Has a slip dress in every colour and a flat sandal that has survived four bachelorettes.",
    },
    {
      name: "J. Park",
      role: "Senior writer",
      bio: "Wrote the Lisbon, Marrakech and Comporta covers. Will tell you to skip the Sahara, with feeling.",
    },
  ];
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>The masthead</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 32px" }}>
          Three of us. Twelve cities. No PR list.
        </h2>
        <div
          className="team-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}
        >
          {team.map((t) => (
            <article
              key={t.name}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div className="h-display" style={{ fontSize: 36, lineHeight: 1 }}>{t.name}</div>
              <div className="eyebrow" style={{ color: "var(--pink-deep)" }}>{t.role}</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)" }}>
                {t.bio}
              </p>
            </article>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .team-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section
      style={{
        padding: "clamp(56px, 8vw, 100px) clamp(20px, 4vw, 40px)",
        background: "var(--yellow-soft)",
      }}
    >
      <div className="container" style={{ maxWidth: 920, textAlign: "center" }}>
        <h2
          className="h-display h-1"
          style={{ margin: "0 0 18px", fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          Want a weekend that&apos;s yours?
        </h2>
        <p style={{ margin: "0 auto 28px", maxWidth: 560, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6 }}>
          The matchmaker takes six questions, two minutes. We come back with
          one destination, one hotel, and a draft itinerary by the end of the
          week. Free, because we&apos;re paid by the hotels, not by you.
        </p>
        <Link href="/matchmaker" className="btn btn-pink btn-lg">
          Take the matchmaker
        </Link>
      </div>
    </section>
  );
}
