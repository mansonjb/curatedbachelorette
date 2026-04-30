import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { DESTINATIONS, type DestinationCard } from "@/data/destinations";
import { COVERS } from "@/data/destinations/covers";
import { FIELD_NOTES } from "@/data/manifesto";
import { IMG } from "@/lib/images";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export default function HomePage() {
  const published = DESTINATIONS.filter((d) => COVERS[d.slug]);
  const featured = published.slice(0, 6);
  const formatDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() - offsetDays);
    const day = d.getDate();
    const suffix = day % 10 === 1 && day !== 11 ? "st" : day % 10 === 2 && day !== 12 ? "nd" : day % 10 === 3 && day !== 13 ? "rd" : "th";
    const month = d.toLocaleString("en-US", { month: "long" });
    return `${day}${suffix} ${month} ${d.getFullYear()}`;
  };

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
        <FeaturedGrid items={featured} formatDate={formatDate} />
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
        padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px) clamp(48px, 6vw, 96px)",
      }}
    >
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
          <h1
            className="h-display"
            style={{
              margin: 0,
              fontSize: "clamp(56px, 9vw, 120px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              fontWeight: 800,
            }}
          >
            <span style={{ display: "inline-block", marginBottom: 8 }}>
              <TicketBadge variant="yellow" rotate={-2}>weekends</TicketBadge>
            </span>
            <br />
            <span style={{ display: "inline-block" }}>
              <TicketBadge variant="pink" rotate={1.5}>curated</TicketBadge>
            </span>
            <br />
            <span style={{ marginLeft: "0.05em" }}>around you.</span>
          </h1>

          <p
            style={{
              margin: "32px 0 28px",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              maxWidth: 540,
            }}
          >
            Editor-vetted three- and four-night plans for ten cities and counting.
            Travelling with four? Heading off in a group of ten? Celebrating a bride
            who&apos;d rather have one very good dinner than four mediocre ones?
            We&apos;ve got a weekend for you.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/destinations" className="btn btn-yellow btn-lg">
              Browse destinations
            </Link>
            <Link href="/matchmaker" className="btn btn-ghost btn-lg">
              Take the matchmaker
            </Link>
          </div>
        </div>

        {/* Tilted hero photo card */}
        <div className="tilt-r">
          <div
            style={{
              border: "1.5px solid var(--ink)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              background: "var(--bg-alt)",
            }}
          >
            <Img src={IMG.poolGirls} alt="Pool day" ratio="4 / 5" rounded={0} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function FeaturedGrid({
  items,
  formatDate,
}: {
  items: DestinationCard[];
  formatDate: (offset: number) => string;
}) {
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 36,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <h2 className="h-display h-2" style={{ margin: 0 }}>
            Featured weekends.
          </h2>
          <Link href="/destinations" className="btn btn-ghost btn-sm">
            See all destinations →
          </Link>
        </div>

        <div
          className="dest-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}
        >
          {items.map((d, i) => (
            <ArticleCard key={d.slug} d={d} updated={formatDate(i * 7 + 5)} published={formatDate(i * 7 + 21)} />
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .dest-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .dest-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function ArticleCard({
  d,
  updated,
  published,
}: {
  d: DestinationCard;
  updated: string;
  published: string;
}) {
  return (
    <Link href={`/destinations/${d.slug}`} className="card" style={{ display: "block" }}>
      <div style={{ padding: 14 }}>
        <Img src={d.img} alt={d.name} ratio="4 / 5" rounded={36} />
      </div>
      <div style={{ padding: "8px 28px 28px" }}>
        <div className="eyebrow" style={{ marginBottom: 6 }}>Bachelorette weekend in</div>
        <h3
          className="h-display"
          style={{ margin: "0 0 4px", fontSize: 40, lineHeight: 1.0, letterSpacing: "-0.025em" }}
        >
          {d.name}
        </h3>
        <div className="meta" style={{ marginBottom: 14 }}>{d.region}</div>
        <div className="meta" style={{ marginBottom: 4 }}>Updated: {updated}</div>
        <div className="meta" style={{ marginBottom: 16 }}>Published: {published}</div>
        <p style={{ margin: 0, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
          {d.headline}
        </p>
      </div>
    </Link>
  );
}

function CtaBand() {
  return (
    <section
      style={{
        padding: "clamp(56px, 8vw, 100px) clamp(20px, 4vw, 40px)",
        background: "var(--yellow-soft)",
      }}
    >
      <div className="container" style={{ maxWidth: 920, textAlign: "center" }}>
        <h2 className="h-display h-1" style={{ margin: "0 0 18px", fontSize: "clamp(36px, 5vw, 72px)" }}>
          Tell us your group. We&apos;ll send the weekend.
        </h2>
        <p style={{ margin: "0 auto 28px", maxWidth: 560, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6 }}>
          Six questions, two minutes. We come back with one destination, one hotel,
          and a draft of your itinerary by the end of the week. Free.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/matchmaker" className="btn btn-pink btn-lg">
            Take the matchmaker
          </Link>
          <Link href="/destinations" className="btn btn-ghost btn-lg">
            Browse destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
