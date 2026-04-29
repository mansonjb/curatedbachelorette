import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { findDestination } from "@/data/destinations";
import { VIBES, destinationsForVibe, vibeBySlug } from "@/data/vibes";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return VIBES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vibe = vibeBySlug(slug);
  if (!vibe) return {};
  const destinations = destinationsForVibe(slug);
  return {
    title: `${vibe.name} bachelorette weekends — ${destinations.length} destinations`,
    description: vibe.description,
    alternates: { canonical: `/vibes/${slug}` },
    openGraph: {
      title: `${vibe.name} bachelorette weekends`,
      description: vibe.description,
      type: "website",
      url: `${SITE_URL}/vibes/${slug}`,
    },
  };
}

export default async function VibePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vibe = vibeBySlug(slug);
  if (!vibe) notFound();
  const destinations = destinationsForVibe(slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${vibe.name} bachelorette weekends`,
          description: vibe.description,
          itemListElement: destinations.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: d.title,
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
            { "@type": "ListItem", position: 2, name: "Vibes", item: `${SITE_URL}/vibes` },
            { "@type": "ListItem", position: 3, name: vibe.name, item: `${SITE_URL}/vibes/${slug}` },
          ],
        }}
      />
      <Header active="vibes" />
      <main>
        <Hero vibe={vibe} count={destinations.length} />
        {destinations.length > 0 ? (
          <Grid items={destinations} />
        ) : (
          <EmptyState vibe={vibe} />
        )}
        <RelatedVibes currentSlug={slug} />
      </main>
      <Footer />
    </>
  );
}

function Hero({
  vibe,
  count,
}: {
  vibe: NonNullable<ReturnType<typeof vibeBySlug>>;
  count: number;
}) {
  return (
    <section
      style={{
        background: vibe.color,
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <div className="meta" style={{ marginBottom: 12 }}>
          <Link href="/vibes" className="ulink">Vibes</Link> ·{" "}
          {count} destination{count === 1 ? "" : "s"}
        </div>
        <h1
          className="h-display"
          style={{
            margin: "0 0 20px",
            fontSize: "clamp(56px, 9vw, 120px)",
            lineHeight: 1.0,
            fontWeight: 800,
            letterSpacing: "-0.025em",
          }}
        >
          {vibe.name}
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: 720,
            fontSize: 19,
            lineHeight: 1.6,
            color: "var(--ink)",
          }}
        >
          {vibe.description}
        </p>
      </div>
    </section>
  );
}

function Grid({
  items,
}: {
  items: ReturnType<typeof destinationsForVibe>;
}) {
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div
          className="vibe-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}
        >
          {items.map((d) => {
            const card = findDestination(d.slug);
            return (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="card" style={{ display: "block" }}>
                <div style={{ padding: 14 }}>
                  <Img src={d.hero.img} alt={d.title} ratio="4 / 5" rounded={36} />
                </div>
                <div style={{ padding: "8px 28px 28px" }}>
                  <h2 className="h-display" style={{ margin: "0 0 14px", fontSize: 26, lineHeight: 1.1 }}>
                    Bachelorette weekend in {d.title}
                  </h2>
                  <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
                    {d.tags.slice(0, 3).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <p style={{ margin: 0, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                    {card?.headline ?? d.hero.intro.slice(0, 160)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <style>
          {`@media (max-width: 900px) { .vibe-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .vibe-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function EmptyState({
  vibe,
}: {
  vibe: NonNullable<ReturnType<typeof vibeBySlug>>;
}) {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)" }}>
          We&apos;re still on the road for the {vibe.name.toLowerCase()} index. The first
          destinations land later this season — in the meantime,{" "}
          <Link href="/destinations" className="ulink">browse the full atlas</Link> or{" "}
          <Link href="/letters" className="ulink">subscribe to the letter</Link> and we&apos;ll
          tell you when it ships.
        </p>
      </div>
    </section>
  );
}

function RelatedVibes({ currentSlug }: { currentSlug: string }) {
  const others = VIBES.filter((v) => v.slug !== currentSlug).slice(0, 5);
  return (
    <section
      className="section-tight"
      style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Other vibes</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {others.map((v) => (
            <Link
              key={v.slug}
              href={`/vibes/${v.slug}`}
              className="tag"
              style={{ background: v.color, fontSize: 14, padding: "10px 18px" }}
            >
              {v.name}
            </Link>
          ))}
          <Link href="/destinations" className="tag" style={{ fontSize: 14, padding: "10px 18px" }}>
            All destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}
