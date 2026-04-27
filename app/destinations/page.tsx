import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
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
        <PublishedGrid items={published} />
        {upcoming.length > 0 && <UpcomingList items={upcoming} />}
      </main>
      <Footer />
    </>
  );
}

function Hero({ published, total }: { published: number; total: number }) {
  return (
    <section style={{ padding: "clamp(40px, 5vw, 64px) 0 clamp(32px, 4vw, 48px)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>The Atlas</div>
        <h1 className="h-display h-1" style={{ margin: "0 0 16px", maxWidth: 880 }}>
          Every bachelorette weekend, considered.
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: 720,
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--ink-soft)",
          }}
        >
          We have stayed in every hotel below, eaten the full menu at every restaurant
          we recommend, and lain by every pool listed for at least one uninterrupted
          Saturday afternoon. Nothing here was comped.
        </p>
        <div style={{ marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="tag tag-teal">{published} published</span>
          <span className="tag">{total - published} upcoming</span>
        </div>
      </div>
    </section>
  );
}

function PublishedGrid({ items }: { items: DestinationCard[] }) {
  return (
    <section className="section-tight">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="atlas-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
        >
          {items.map((d) => (
            <DestCard key={d.slug} d={d} />
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .atlas-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .atlas-grid { grid-template-columns: 1fr !important; } }`}
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
        <h2 className="h-display h-3" style={{ margin: "0 0 6px" }}>{d.name}</h2>
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

function UpcomingList({ items }: { items: DestinationCard[] }) {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)", marginTop: "clamp(40px, 5vw, 72px)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Filed, not yet published</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 28px" }}>Upcoming covers.</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {items.map((d, i) => (
            <li
              key={d.slug}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius-md)",
                padding: "20px 24px",
                marginBottom: 12,
                display: "grid",
                gridTemplateColumns: "44px 1fr auto auto",
                gap: 16,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--teal-deep)",
                  letterSpacing: "-0.02em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600 }}>
                  {d.name}{" "}
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
