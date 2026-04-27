import type { Metadata } from "next";
import Link from "next/link";
import { ArrowR } from "@/components/icons";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { DESTINATIONS, type DestinationCard } from "@/data/destinations";
import { COVERS } from "@/data/destinations/covers";
import { ISSUE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destinations — every weekend, considered",
  description:
    "The full Curated Bachelorette atlas — every destination we've stayed in, eaten through, and would book again, ranked by editorial conviction.",
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Destinations",
              item: `${SITE_URL}/destinations`,
            },
          ],
        }}
      />
      <Header active="destinations" />
      <main className="route-enter route-enter-active">
        <IndexHero published={published.length} total={DESTINATIONS.length} />
        <PublishedGrid items={published} />
        {upcoming.length > 0 && <UpcomingList items={upcoming} />}
      </main>
      <Footer />
    </>
  );
}

function IndexHero({ published, total }: { published: number; total: number }) {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(24px, 4vw, 56px) clamp(20px, 4vw, 40px) clamp(28px, 4vw, 56px)",
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
          ● The Atlas
        </span>
        <span className="pill invert">{published} published</span>
        <span className="pill invert">{total - published} upcoming</span>
        <span className="mono hide-sm" style={{ color: "var(--muted)" }}>
          Issue {ISSUE.number}
        </span>
      </div>
      <h1
        className="display"
        style={{ margin: 0, fontSize: "clamp(64px, 11vw, 200px)", lineHeight: 0.84 }}
      >
        Every weekend,
        <br />
        <span style={{ color: "var(--blush-deep)" }}>considered.</span>
      </h1>
      <p
        style={{
          marginTop: 22,
          maxWidth: 720,
          fontSize: 18,
          lineHeight: 1.55,
        }}
      >
        We have stayed in every hotel below, eaten the full menu at every restaurant
        we recommend, and lain by every pool listed for at least one uninterrupted
        Saturday afternoon. Nothing here was comped.
      </p>
    </section>
  );
}

function PublishedGrid({ items }: { items: DestinationCard[] }) {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(24px, 4vw, 56px) clamp(20px, 4vw, 40px) clamp(40px, 6vw, 80px)",
      }}
    >
      <div
        className="atlas-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 20,
        }}
      >
        {items.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="card-bg"
            style={{
              background: d.color,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              minHeight: 460,
              color: "var(--ink)",
            }}
          >
            <div style={{ padding: 14 }}>
              <div
                style={{ borderRadius: 16, overflow: "hidden", border: "1.5px solid var(--ink)" }}
              >
                <Img src={d.img} alt={d.name} ratio="4 / 3" rounded={0} />
              </div>
            </div>
            <div
              style={{
                padding: "0 22px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="pill">№ {String(d.no).padStart(2, "0")} · {d.tag}</span>
                <span className="mono">{d.price}</span>
              </div>
              <h2 className="display" style={{ margin: 0, fontSize: "clamp(28px, 2.6vw, 40px)" }}>
                {d.name}
              </h2>
              <div className="mono" style={{ color: "var(--muted)" }}>
                {d.region} · {d.group} guests · {d.days}
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, opacity: 0.9 }}>
                {d.headline}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="mono">Read the cover →</span>
                <span className="arrow-btn">
                  <ArrowR size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <style>
        {`@media (max-width: 900px) { .atlas-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .atlas-grid { grid-template-columns: 1fr !important; } }`}
      </style>
    </section>
  );
}

function UpcomingList({ items }: { items: DestinationCard[] }) {
  return (
    <section
      style={{
        borderTop: "1.5px solid var(--ink)",
        background: "var(--cream)",
        padding: "clamp(40px, 6vw, 88px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div>
            <div className="mono" style={{ color: "var(--muted)", marginBottom: 8 }}>
              ★ Filed, not yet published
            </div>
            <h2 className="display" style={{ margin: 0, fontSize: "clamp(36px, 5vw, 72px)" }}>
              Upcoming covers.
            </h2>
          </div>
          <span className="pill invert">{items.length} on the desk</span>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {items.map((d, i) => (
            <li
              key={d.slug}
              className="card-bg flat"
              style={{
                padding: "22px 24px",
                marginBottom: 12,
                display: "grid",
                gridTemplateColumns: "44px 1fr auto auto",
                gap: 16,
                alignItems: "center",
              }}
            >
              <span className="display" style={{ fontSize: 28, color: "var(--blush-deep)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="display-soft" style={{ fontSize: 22, lineHeight: 1.05 }}>
                  {d.name}
                  <span className="mono" style={{ color: "var(--muted)", marginLeft: 8 }}>
                    {d.region}
                  </span>
                </div>
                <p
                  style={{ margin: "6px 0 0", color: "#2a2a26", fontSize: 14, lineHeight: 1.5 }}
                >
                  {d.headline}
                </p>
              </div>
              <span className="pill invert">{d.tag}</span>
              <span
                className="mono"
                style={{ color: "var(--muted)" }}
                aria-label="Coming soon"
              >
                Soon →
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
