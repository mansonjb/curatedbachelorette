import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { TicketBadge } from "@/components/TicketBadge";
import { DESTINATIONS, type DestinationCard } from "@/data/destinations";
import { COVERS } from "@/data/destinations/covers";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destinations — every weekend, considered",
  description:
    "The full Curated Bachelorette atlas — every destination we've stayed in, eaten through, and would book again.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsIndex() {
  const published = DESTINATIONS.filter((d) => COVERS[d.slug]);
  const upcoming = DESTINATIONS.filter((d) => !COVERS[d.slug]);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Curated Bachelorette destinations",
          itemListElement: published.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: d.name,
            url: `${SITE_URL}/destinations/${d.slug}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
          ],
        }}
      />
      <Header active="destinations" />
      <main>
        <Hero published={published.length} total={DESTINATIONS.length} />
        <Grid items={published} />
        {upcoming.length > 0 && <UpcomingList items={upcoming} />}
      </main>
      <Footer />
    </>
  );
}

function Hero({ published, total }: { published: number; total: number }) {
  return (
    <section style={{ padding: "clamp(40px, 5vw, 64px) clamp(20px, 4vw, 40px) clamp(32px, 4vw, 56px)" }}>
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <h1
          className="h-display"
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(48px, 8vw, 104px)",
            lineHeight: 1.0,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            maxWidth: 980,
          }}
        >
          Every weekend,{" "}
          <TicketBadge variant="yellow" rotate={-1.5}>considered</TicketBadge>.
        </h1>
        <p
          style={{
            margin: "0 0 22px",
            maxWidth: 720,
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--ink-soft)",
          }}
        >
          We&apos;ve stayed in every hotel below, eaten the full menu at every
          restaurant we recommend, and lain by every pool listed for at least one
          uninterrupted Saturday afternoon. Nothing here was comped.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="tag tag-pink">{published} published</span>
          <span className="tag">{total - published} upcoming</span>
        </div>
      </div>
    </section>
  );
}

function Grid({ items }: { items: DestinationCard[] }) {
  return (
    <section className="section-tight">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="atlas-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}
        >
          {items.map((d) => (
            <ArticleCard key={d.slug} d={d} />
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .atlas-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .atlas-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function ArticleCard({ d }: { d: DestinationCard }) {
  return (
    <Link href={`/destinations/${d.slug}`} className="card" style={{ display: "block" }}>
      <div style={{ padding: 14 }}>
        <Img src={d.img} alt={d.name} ratio="4 / 5" rounded={36} />
      </div>
      <div style={{ padding: "8px 28px 28px" }}>
        <div className="eyebrow" style={{ marginBottom: 6 }}>Bachelorette weekend in</div>
        <h2
          className="h-display"
          style={{ margin: "0 0 4px", fontSize: 40, lineHeight: 1.0, letterSpacing: "-0.025em" }}
        >
          {d.name}
        </h2>
        <div className="meta" style={{ marginBottom: 14 }}>{d.region}</div>
        <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <span className="tag">{d.tag}</span>
          <span className="meta">{d.group} guests · {d.days} · {d.price}</span>
        </div>
        <p style={{ margin: 0, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
          {d.headline}
        </p>
      </div>
    </Link>
  );
}

function UpcomingList({ items }: { items: DestinationCard[] }) {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-soft)", marginTop: "clamp(40px, 5vw, 72px)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <h2 className="h-display h-2" style={{ margin: "0 0 8px" }}>Upcoming covers.</h2>
        <p style={{ margin: "0 0 28px", color: "var(--ink-soft)", fontSize: 16 }}>Filed, not yet published.</p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
          {items.map((d) => (
            <li
              key={d.slug}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-lg)",
                padding: "20px 28px",
                display: "grid",
                gridTemplateColumns: "1fr auto auto",
                gap: 18,
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  Bachelorette weekend in {d.name}{" "}
                  <span className="meta" style={{ marginLeft: 6, fontWeight: 400 }}>{d.region}</span>
                </div>
                <p style={{ margin: "4px 0 0", color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.55 }}>
                  {d.headline}
                </p>
              </div>
              <span className="tag">{d.tag}</span>
              <span className="meta">Soon →</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
