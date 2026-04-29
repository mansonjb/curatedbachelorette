import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { VIBES, destinationsForVibe } from "@/data/vibes";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vibes — pick the bachelorette that matches your group",
  description:
    "Six ways to slice the Curated Bachelorette atlas — Beach, Luxury, City, Foodie, Wellness, Slow. Pick the vibe, get the matching destinations.",
  alternates: { canonical: "/vibes" },
};

export default function VibesIndex() {
  const vibesWithCounts = VIBES.map((v) => ({
    ...v,
    count: destinationsForVibe(v.slug).length,
  }));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Curated Bachelorette vibes",
          itemListElement: vibesWithCounts.map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: v.name,
            url: `${SITE_URL}/vibes/${v.slug}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Vibes", item: `${SITE_URL}/vibes` },
          ],
        }}
      />
      <Header active="vibes" />
      <main>
        <Hero />
        <Grid items={vibesWithCounts} />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section style={{ padding: "clamp(40px, 5vw, 64px) clamp(20px, 4vw, 40px) clamp(32px, 4vw, 56px)" }}>
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <h1
          className="h-display"
          style={{
            margin: "0 0 20px",
            fontSize: "clamp(48px, 8vw, 104px)",
            lineHeight: 1.0,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            maxWidth: 980,
          }}
        >
          Pick a vibe.
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
          Six ways to slice the atlas. Tell us how the bride wants the weekend to feel
          and we&apos;ll line up the destinations that match — every cover below has been
          tested by an editor with their own group.
        </p>
      </div>
    </section>
  );
}

function Grid({
  items,
}: {
  items: (typeof VIBES[number] & { count: number })[];
}) {
  return (
    <section className="section-tight">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="vibes-index-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}
        >
          {items.map((v) => (
            <Link
              key={v.slug}
              href={`/vibes/${v.slug}`}
              className="card"
              style={{ display: "block", background: v.color }}
            >
              <div style={{ padding: 14 }}>
                <Img src={v.img} alt={v.name} ratio="4 / 5" rounded={36} />
              </div>
              <div style={{ padding: "8px 28px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                  <h2 className="h-display" style={{ margin: 0, fontSize: 32, lineHeight: 1.0 }}>
                    {v.name}
                  </h2>
                  <span className="meta">{v.count}</span>
                </div>
                <p style={{ margin: 0, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                  {v.note}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .vibes-index-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .vibes-index-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}
