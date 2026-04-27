import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { DESTINATIONS, type DestinationCard } from "@/data/destinations";
import { COVERS } from "@/data/destinations/covers";
import { FIELD_NOTES } from "@/data/manifesto";
import { VIBES } from "@/data/vibes";
import { IMG } from "@/lib/images";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export default function HomePage() {
  const published = DESTINATIONS.filter((d) => COVERS[d.slug]);
  const featured = published.slice(0, 6);

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
      <main>
        <Hero />
        <DestinationGrid items={featured} />
        <PromiseBand />
        <VibesGrid />
        <FieldNotesRow />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "clamp(48px, 7vw, 96px) 0 clamp(36px, 5vw, 64px)",
      }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: "clamp(28px, 4vw, 56px)",
            alignItems: "center",
          }}
        >
          <div>
            <span className="tag tag-teal" style={{ marginBottom: 18 }}>
              ● Issue 07 · Spring–Summer 2026
            </span>
            <h1 className="h-display h-1" style={{ margin: "0 0 20px" }}>
              Bachelorette weekends,{" "}
              <span style={{ color: "var(--teal-deep)" }}>curated</span> around your
              group.
            </h1>
            <p
              style={{
                margin: "0 0 28px",
                fontSize: 18,
                lineHeight: 1.6,
                color: "var(--ink-soft)",
                maxWidth: 540,
              }}
            >
              Editor-vetted three- and four-night plans for ten cities and counting.
              We&apos;ve stayed in every hotel, eaten the full menu at every restaurant,
              and lain by every pool listed. Nothing here was comped.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/destinations" className="btn btn-primary btn-lg">
                Browse destinations
              </Link>
              <Link href="/matchmaker" className="btn btn-ghost btn-lg">
                Take the matchmaker
              </Link>
            </div>
          </div>
          <div className="img-frame" style={{ aspectRatio: "4 / 5", borderRadius: "var(--radius-xl)" }}>
            <Img src={IMG.poolGirls} alt="Pool day" ratio="4 / 5" rounded={28} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function DestinationGrid({ items }: { items: DestinationCard[] }) {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
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
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>The Atlas</div>
            <h2 className="h-display h-2" style={{ margin: 0 }}>
              Featured destinations
            </h2>
          </div>
          <Link href="/destinations" className="btn btn-ghost btn-sm">
            See all destinations →
          </Link>
        </div>

        <div
          className="dest-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
        >
          {items.map((d) => (
            <DestCard key={d.slug} d={d} />
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .dest-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .dest-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function DestCard({ d }: { d: DestinationCard }) {
  return (
    <Link href={`/destinations/${d.slug}`} className="card" style={{ display: "block" }}>
      <Img src={d.img} alt={d.name} ratio="4 / 3" rounded={0} />
      <div style={{ padding: "20px 22px 22px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            gap: 8,
          }}
        >
          <span className="tag tag-teal">{d.tag}</span>
          <span className="meta">{d.price}</span>
        </div>
        <h3 className="h-display h-3" style={{ margin: "0 0 6px" }}>
          {d.name}
        </h3>
        <div className="meta" style={{ marginBottom: 12 }}>
          {d.region} · {d.group} guests · {d.days}
        </div>
        <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
          {d.headline}
        </p>
        <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="ulink" style={{ fontSize: 14 }}>Read the cover</span>
          <span style={{ color: "var(--teal-deep)", fontSize: 18 }}>→</span>
        </div>
      </div>
    </Link>
  );
}

function PromiseBand() {
  const items: [string, string][] = [
    ["10+", "Destinations covered"],
    ["100%", "Hotels we paid for"],
    ["0", "Pink-glitter clichés"],
    ["3", "Editors on the road"],
  ];
  return (
    <section
      className="section"
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="promise-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 32 }}
        >
          {items.map(([n, l]) => (
            <div key={l}>
              <div className="h-display h-1" style={{ margin: 0, color: "var(--teal-deep)", fontSize: "clamp(36px, 4vw, 56px)" }}>
                {n}
              </div>
              <div className="meta" style={{ marginTop: 6, color: "var(--ink-soft)" }}>
                {l}
              </div>
            </div>
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .promise-grid { grid-template-columns: 1fr 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function VibesGrid() {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
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
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Pick a vibe</div>
            <h2 className="h-display h-2" style={{ margin: 0 }}>
              Eight indexes, one for every group.
            </h2>
          </div>
          <Link href="/vibes" className="btn btn-ghost btn-sm">
            All vibes →
          </Link>
        </div>

        <div
          className="vibe-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}
        >
          {VIBES.map((v) => (
            <Link key={v.slug} href={`/vibes/${v.slug}`} className="card" style={{ display: "block" }}>
              <Img src={v.img} alt={v.name} ratio="4 / 3" rounded={0} />
              <div style={{ padding: "16px 18px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <h3 className="h-4" style={{ margin: 0, fontWeight: 600 }}>{v.name}</h3>
                  <span className="meta">{v.count}</span>
                </div>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                  {v.note}
                </p>
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

function FieldNotesRow() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
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
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Field Notes</div>
            <h2 className="h-display h-2" style={{ margin: 0 }}>
              Reading, between the bookings.
            </h2>
          </div>
          <Link href="/field-notes" className="btn btn-ghost btn-sm">
            All notes →
          </Link>
        </div>

        <div
          className="notes-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
        >
          {FIELD_NOTES.map((n) => (
            <article key={n.t} className="card" style={{ background: "var(--bg)" }}>
              <Img src={n.img} alt={n.t} ratio="5 / 4" rounded={0} />
              <div style={{ padding: "18px 22px 22px" }}>
                <span className="tag" style={{ marginBottom: 10 }}>{n.tag}</span>
                <h3 className="h-display h-3" style={{ margin: "0 0 10px" }}>{n.t}</h3>
                <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                  {n.b}
                </p>
              </div>
            </article>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .notes-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container" style={{ maxWidth: 960, textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>The matchmaker</div>
        <h2 className="h-display h-1" style={{ margin: "0 0 16px" }}>
          Tell us your group. We&apos;ll send the weekend.
        </h2>
        <p style={{ margin: "0 auto 24px", maxWidth: 560, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.55 }}>
          Six questions, two minutes. We come back with one destination, one hotel,
          and a draft of your itinerary by the end of the week. Free.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/matchmaker" className="btn btn-primary btn-lg">
            Take the matchmaker
          </Link>
          <Link href="/destinations" className="btn btn-ghost btn-lg">
            Browse 10 ready-made
          </Link>
        </div>
      </div>
    </section>
  );
}
