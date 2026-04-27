import Link from "next/link";
import { ArrowR, Asterisk, Bird } from "@/components/icons";
import { CategoryRail } from "@/components/CategoryRail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { DESTINATIONS, type DestinationCard } from "@/data/destinations";
import { FIELD_NOTES, HOUSE_RULES } from "@/data/manifesto";
import { VIBES } from "@/data/vibes";
import { IMG } from "@/lib/images";
import { ISSUE, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_TAGLINE,
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />
      <Header active="index" />
      <main className="route-enter route-enter-active">
        <Hero />
        <CategoryRail />
        <DestGrid />
        <BigQuote />
        <ManifestoBlock />
        <VibesPosters />
        <FieldNotes />
        <CtaStrip />
        <Marquee />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(28px, 4vw, 56px) clamp(20px, 4vw, 40px) clamp(40px, 6vw, 80px)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 28,
        }}
      >
        <span
          className="pill"
          style={{ background: "var(--blush)", color: "var(--ink)", borderColor: "var(--ink)" }}
        >
          ● Issue {ISSUE.number} / {ISSUE.season}
        </span>
        <span className="pill invert">72 destinations</span>
        <span className="pill invert">Editor-vetted</span>
        <span className="mono hide-sm" style={{ color: "var(--muted)" }}>
          ← scroll for the index
        </span>
      </div>

      <h1
        className="display"
        style={{ margin: 0, fontSize: "clamp(64px, 13vw, 220px)", lineHeight: 0.84 }}
      >
        Bach
        <br />
        <span
          style={{
            background: "var(--blush-deep)",
            color: "var(--ink)",
            padding: "0 0.06em",
            borderRadius: "0.06em",
            display: "inline-block",
          }}
        >
          weekends,
        </span>
        <br />
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: "0.1em" }}>
          curated*
          <Asterisk size={48} color="var(--ink)" />
        </span>
      </h1>

      <div
        className="hero-grid"
        style={{
          marginTop: "clamp(36px, 5vw, 64px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1.35fr)",
          gap: "clamp(28px, 4vw, 56px)",
          alignItems: "stretch",
        }}
      >
        <div
          className="card-bg"
          style={{
            background: "var(--rose)",
            padding: "clamp(28px, 3vw, 40px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="pill" style={{ alignSelf: "flex-start" }}>The Cover</span>
          <h2
            className="display"
            style={{ margin: "20px 0 0", fontSize: "clamp(36px, 4.4vw, 64px)" }}
          >
            Miami,
            <br />
            slowly.
          </h2>
          <p
            style={{
              margin: "20px 0 28px",
              color: "var(--ink)",
              maxWidth: 420,
              lineHeight: 1.55,
              fontSize: 16.5,
            }}
          >
            A three-night plan for six to ten people who&apos;d rather have one very good
            dinner than four mediocre ones — and who understand that the point of South
            Beach is, mostly, to lie down.
          </p>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/destinations/miami" className="mono ulink-h">
              Read the cover →
            </Link>
            <Link
              href="/destinations/miami"
              aria-label="Open Miami"
              className="arrow-btn"
              style={{ textDecoration: "none" }}
            >
              <ArrowR />
            </Link>
          </div>
          <Asterisk size={28} color="var(--ink)" style={{ position: "absolute", top: 20, right: 20 }} />
        </div>

        <div
          className="card-bg"
          style={{ background: "var(--ink)", padding: 0, position: "relative" }}
        >
          <Img src={IMG.poolGirls} alt="Pool day" ratio="16 / 11" rounded={20} />
          <div style={{ position: "absolute", left: 20, top: 20, display: "flex", gap: 8 }}>
            <span
              className="pill"
              style={{ background: "var(--cream)", color: "var(--ink)", borderColor: "var(--cream)" }}
            >
              Field study №&nbsp;14
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "var(--cream)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid var(--ink)",
            }}
          >
            <Bird size={20} color="var(--ink)" />
          </div>
          <div
            style={{
              position: "absolute",
              left: 20,
              right: 20,
              bottom: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 16,
            }}
          >
            <div style={{ color: "var(--cream)" }}>
              <div className="mono" style={{ color: "var(--blush)", marginBottom: 6 }}>
                Six pools, ranked honestly
              </div>
              <div
                className="display-soft"
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.05 }}
              >
                We spent three Saturdays
                <br />
                face-down on a float so
                <br />
                you don&apos;t have to.
              </div>
            </div>
            <span className="arrow-btn" style={{ background: "var(--cream)", color: "var(--ink)" }}>
              <ArrowR />
            </span>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function DestGrid() {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(40px, 6vw, 88px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 28,
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="mono" style={{ color: "var(--muted)", marginBottom: 8 }}>
            The Index — 8 of 72
          </div>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(36px, 6vw, 88px)" }}>
            Eight weekends.
            <br />
            <span style={{ color: "var(--blush-deep)" }}>Considered.</span>
          </h2>
        </div>
        <Link href="/destinations" className="pill invert">
          See all 72 destinations →
        </Link>
      </div>

      <div
        className="dg-row"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <DestColorCard d={DESTINATIONS[0]} large />
        <DestImageCard d={DESTINATIONS[0]} large />
      </div>

      <div
        className="dg-row3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <DestSplitCard d={DESTINATIONS[1]} />
        <DestSplitCard d={DESTINATIONS[2]} />
        <DestSplitCard d={DESTINATIONS[3]} />
      </div>

      <div
        className="dg-row"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <DestImageCard d={DESTINATIONS[5]} large />
        <DestColorCard d={DESTINATIONS[7]} />
      </div>

      <div
        className="dg-row2"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}
      >
        <DestSplitCard d={DESTINATIONS[4]} />
        <DestSplitCard d={DESTINATIONS[6]} />
      </div>

      <style>
        {`@media (max-width: 900px) { .dg-row, .dg-row3, .dg-row2 { grid-template-columns: 1fr !important; } }`}
      </style>
    </section>
  );
}

function destHref(d: DestinationCard) {
  return `/destinations/${d.slug}`;
}

function DestColorCard({ d, large = false }: { d: DestinationCard; large?: boolean }) {
  return (
    <div
      className="card-bg"
      style={{
        background: d.color,
        padding: "clamp(24px, 3vw, 36px)",
        display: "flex",
        flexDirection: "column",
        minHeight: large ? 380 : 320,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="pill">{d.tag}</span>
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            border: "1.5px solid var(--ink)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Asterisk size={16} />
        </span>
      </div>
      <div style={{ marginTop: 24 }}>
        <div className="mono" style={{ color: "var(--ink)", marginBottom: 8 }}>
          № {String(d.no).padStart(2, "0")} · {d.region}
        </div>
        <h3
          className="display"
          style={{
            margin: 0,
            fontSize: large ? "clamp(40px, 4.5vw, 64px)" : "clamp(32px, 3.5vw, 44px)",
          }}
        >
          {d.name}
        </h3>
        <p style={{ margin: "12px 0 0", maxWidth: 360, lineHeight: 1.5, fontSize: 16 }}>
          {d.headline}
        </p>
      </div>
      <div
        style={{
          marginTop: "auto",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono">Discover →</span>
        <Link href={destHref(d)} aria-label={`Open ${d.name}`} className="arrow-btn">
          <ArrowR />
        </Link>
      </div>
    </div>
  );
}

function DestImageCard({ d, large = false }: { d: DestinationCard; large?: boolean }) {
  return (
    <Link
      href={destHref(d)}
      className="card-bg"
      style={{
        padding: 0,
        position: "relative",
        border: "1.5px solid var(--ink)",
        background: "var(--ink)",
        textAlign: "left",
        font: "inherit",
        color: "inherit",
        minHeight: large ? 380 : 320,
        display: "block",
      }}
    >
      <Img src={d.img} alt={d.name} ratio={large ? "5 / 3" : "4 / 3"} rounded={20} />
      <div style={{ position: "absolute", left: 16, top: 16, display: "flex", gap: 8 }}>
        <span
          className="pill"
          style={{ background: "var(--cream)", color: "var(--ink)", borderColor: "var(--cream)" }}
        >
          {d.tag}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          right: 16,
          top: 16,
          width: 36,
          height: 36,
          borderRadius: 999,
          background: "var(--cream)",
          border: "1.5px solid var(--ink)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Bird size={16} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 16,
          color: "var(--cream)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 16,
        }}
      >
        <div>
          <div className="mono" style={{ marginBottom: 6, color: "var(--blush)" }}>
            № {String(d.no).padStart(2, "0")} / {d.region}
          </div>
          <div
            className="display-soft"
            style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.05 }}
          >
            {d.name}
          </div>
        </div>
        <span className="arrow-btn" style={{ background: "var(--cream)", color: "var(--ink)" }}>
          <ArrowR />
        </span>
      </div>
    </Link>
  );
}

function DestSplitCard({ d }: { d: DestinationCard }) {
  return (
    <div
      className="card-bg"
      style={{
        background: d.color,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        minHeight: 380,
      }}
    >
      <div
        style={{
          padding: "20px 22px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span className="pill">{d.tag}</span>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 999,
            border: "1.5px solid var(--ink)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Asterisk size={14} />
        </span>
      </div>
      <div style={{ padding: "0 22px 16px" }}>
        <div className="mono" style={{ marginBottom: 6 }}>
          № {String(d.no).padStart(2, "0")} · {d.region}
        </div>
        <h3 className="display" style={{ margin: 0, fontSize: "clamp(26px, 2.4vw, 34px)" }}>
          {d.name}
        </h3>
        <p style={{ margin: "8px 0 0", lineHeight: 1.45, fontSize: 14, opacity: 0.85 }}>
          {d.headline}
        </p>
      </div>
      <div style={{ padding: "0 14px 14px", marginTop: "auto" }}>
        <div style={{ borderRadius: 14, overflow: "hidden", border: "1.5px solid var(--ink)" }}>
          <Img src={d.img} alt={d.name} ratio="16 / 9" rounded={0} />
        </div>
      </div>
      <div
        style={{
          padding: "0 22px 18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono">View weekend →</span>
        <Link href={destHref(d)} aria-label={`Open ${d.name}`} className="arrow-btn">
          <ArrowR size={14} />
        </Link>
      </div>
    </div>
  );
}

function BigQuote() {
  return (
    <section
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "clamp(60px, 9vw, 140px) clamp(20px, 4vw, 56px)",
        borderTop: "1.5px solid var(--ink)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="mono" style={{ color: "var(--blush)", marginBottom: 28 }}>
          ★ Editor&apos;s letter — paraphrased
        </div>
        <p
          className="display"
          style={{ margin: 0, fontSize: "clamp(40px, 7vw, 124px)", lineHeight: 0.9 }}
        >
          A bachelorette is not
          <br />
          <span style={{ color: "var(--blush-deep)" }}>a launch event.</span>
          <br />
          It&apos;s a long lunch
          <br />
          that lasts <em style={{ fontStyle: "italic" }}>three days.</em>
        </p>
        <div className="mono" style={{ marginTop: 36, color: "rgba(244,239,226,0.6)" }}>
          — M. Aldrin · Editor-in-Chief · Issue {ISSUE.number}
        </div>
      </div>
    </section>
  );
}

function ManifestoBlock() {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(48px, 7vw, 100px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 36,
        }}
      >
        <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 6vw, 84px)" }}>
          The <span style={{ background: "var(--blush)", padding: "0 0.08em" }}>house rules</span>.
        </h2>
        <Link href="/standards" className="pill invert">
          Read the standards →
        </Link>
      </div>
      <div
        className="rules-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 20 }}
      >
        {HOUSE_RULES.map(([n, t, b]) => (
          <div
            key={n}
            className="card-bg flat"
            style={{
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minHeight: 240,
            }}
          >
            <div className="display" style={{ fontSize: 56, color: "var(--blush-deep)" }}>{n}</div>
            <div className="display-soft" style={{ fontSize: 22, lineHeight: 1.1 }}>{t}</div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.55 }}>{b}</p>
          </div>
        ))}
      </div>
      <style>
        {`@media (max-width: 900px) { .rules-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .rules-grid { grid-template-columns: 1fr !important; } }`}
      </style>
    </section>
  );
}

function VibesPosters() {
  return (
    <section
      style={{
        borderTop: "1.5px solid var(--ink)",
        background: "var(--cream)",
        padding: "clamp(48px, 7vw, 100px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 32,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 6vw, 88px)" }}>
            Pick a <span style={{ color: "var(--blush-deep)" }}>vibe.</span>
          </h2>
          <span className="pill invert">{VIBES.length} indexes · {VIBES.reduce((s, v) => s + v.count, 0)} weekends</span>
        </div>

        <div
          className="vibe-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}
        >
          {VIBES.map((v, i) => (
            <Link
              key={v.slug}
              href={`/vibes/${v.slug}`}
              className="card-bg"
              style={{
                background: v.color,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                minHeight: 320,
                color: "var(--ink)",
              }}
            >
              <div
                style={{
                  padding: "16px 18px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span className="pill">№ {String(i + 1).padStart(2, "0")}</span>
                <span className="mono">{v.count}</span>
              </div>
              <div style={{ padding: "4px 18px 10px" }}>
                <h3
                  className="display"
                  style={{ margin: 0, fontSize: "clamp(28px, 2.4vw, 36px)", lineHeight: 0.92 }}
                >
                  {v.name}
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: 13.5, lineHeight: 1.45 }}>{v.note}</p>
              </div>
              <div style={{ padding: "0 12px 12px", marginTop: "auto" }}>
                <div
                  style={{ borderRadius: 12, overflow: "hidden", border: "1.5px solid var(--ink)" }}
                >
                  <Img src={v.img} alt={v.name} ratio="4 / 3" rounded={0} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .vibe-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .vibe-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function FieldNotes() {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(56px, 8vw, 100px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div className="mono" style={{ color: "var(--muted)", marginBottom: 14 }}>
        ★ Field Notes / Recently published
      </div>
      <h2
        className="display"
        style={{ margin: 0, marginBottom: 36, fontSize: "clamp(36px, 5vw, 72px)" }}
      >
        Reading, between
        <br />
        the bookings.
      </h2>

      <div
        className="notes-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}
      >
        {FIELD_NOTES.map((n) => (
          <article
            key={n.t}
            className="card-bg"
            style={{
              background: n.color,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              minHeight: 460,
            }}
          >
            <div style={{ padding: 14 }}>
              <div
                style={{ borderRadius: 14, overflow: "hidden", border: "1.5px solid var(--ink)" }}
              >
                <Img src={n.img} alt={n.t} ratio="5 / 4" rounded={0} />
              </div>
            </div>
            <div
              style={{
                padding: "0 22px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                flex: 1,
              }}
            >
              <span className="pill" style={{ alignSelf: "flex-start" }}>{n.tag}</span>
              <h3 className="display-soft" style={{ margin: 0, fontSize: 26, lineHeight: 1.05 }}>
                {n.t}
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, opacity: 0.85 }}>{n.b}</p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="mono">Read →</span>
                <span className="arrow-btn">
                  <ArrowR size={14} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <style>{`@media (max-width: 900px) { .notes-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function CtaStrip() {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div
        className="cta-grid card-bg"
        style={{
          background: "var(--blush)",
          padding: "clamp(36px, 5vw, 64px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: 36,
          alignItems: "center",
        }}
      >
        <div>
          <div className="mono" style={{ marginBottom: 14 }}>★ The matchmaker</div>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 6vw, 88px)" }}>
            Tell us your group.
            <br />
            We&apos;ll send the weekend.
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: 540, lineHeight: 1.55, fontSize: 16 }}>
            Six questions, two minutes. We&apos;ll come back with one destination, one
            hotel, and a draft of your itinerary by the end of the week. Free.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "stretch" }}>
          <Link
            href="/matchmaker"
            className="pill"
            style={{
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "16px 22px",
              fontSize: 12,
              justifyContent: "space-between",
            }}
          >
            Take the matchmaker <ArrowR />
          </Link>
          <Link
            href="/destinations"
            className="pill invert"
            style={{ padding: "14px 22px", justifyContent: "space-between" }}
          >
            Or read 72 ready-made →
          </Link>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .cta-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
