import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { findDestination } from "@/data/destinations";
import { VIBES, destinationsForVibe, vibeBySlug, type Vibe } from "@/data/vibes";
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
      images: [{ url: vibe.img }],
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
      <VibeJsonLd vibe={vibe} destinations={destinations} slug={slug} />
      <Header active="vibes" />
      <main>
        <Hero vibe={vibe} count={destinations.length} />
        <Editorial vibe={vibe} />
        <Principles vibe={vibe} />
        {destinations.length > 0 ? (
          <Grid items={destinations} />
        ) : (
          <EmptyState vibe={vibe} />
        )}
        <BestForSkipIf vibe={vibe} />
        <FaqSection vibe={vibe} />
        <RelatedVibes currentSlug={slug} />
      </main>
      <Footer />
    </>
  );
}

function VibeJsonLd({
  vibe,
  destinations,
  slug,
}: {
  vibe: Vibe;
  destinations: ReturnType<typeof destinationsForVibe>;
  slug: string;
}) {
  const url = `${SITE_URL}/vibes/${slug}`;
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
            { "@type": "ListItem", position: 3, name: vibe.name, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: vibe.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${vibe.name} bachelorette weekends — a curated guide`,
          description: vibe.description,
          publisher: { "@type": "Organization", name: SITE_NAME },
          image: vibe.img,
          mainEntityOfPage: url,
        }}
      />
    </>
  );
}

function Hero({ vibe, count }: { vibe: Vibe; count: number }) {
  return (
    <section
      style={{
        background: vibe.color,
        padding: "clamp(48px, 7vw, 88px) clamp(20px, 4vw, 40px) clamp(48px, 7vw, 88px)",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      <div
        className="vibe-hero-grid"
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "center",
        }}
      >
        <div>
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
            {vibe.name}.
          </h1>
          <p style={{ margin: 0, maxWidth: 560, fontSize: 19, lineHeight: 1.6, color: "var(--ink)" }}>
            {vibe.description}
          </p>
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
            <Img src={vibe.img} alt={vibe.name} ratio="4 / 5" rounded={0} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .vibe-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function Editorial({ vibe }: { vibe: Vibe }) {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>The case for {vibe.name.toLowerCase()}</div>
        {vibe.editorial.map((p, i) => (
          <p
            key={i}
            style={{
              margin: i === 0 ? "0 0 18px" : "18px 0 0",
              fontSize: i === 0 ? 21 : 17,
              lineHeight: i === 0 ? 1.45 : 1.65,
              color: i === 0 ? "var(--ink)" : "var(--ink-soft)",
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function Principles({ vibe }: { vibe: Vibe }) {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>House rules</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 36px" }}>
          What makes a {vibe.name.toLowerCase()} weekend work.
        </h2>
        <div
          className="principle-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 20 }}
        >
          {vibe.principles.map((p, i) => (
            <article
              key={p.title}
              style={{
                background: "var(--bg)",
                borderRadius: "var(--radius-lg)",
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 260,
              }}
            >
              <div className="h-display" style={{ fontSize: 36, color: "var(--pink-deep)", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="h-display" style={{ fontSize: 20, lineHeight: 1.2 }}>{p.title}</div>
              <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                {p.body}
              </p>
            </article>
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .principle-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .principle-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function Grid({ items }: { items: ReturnType<typeof destinationsForVibe> }) {
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Picked for this vibe</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 32px" }}>
          {items.length} destination{items.length === 1 ? "" : "s"}, all editor-tested.
        </h2>
        <div
          className="vibe-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}
        >
          {items.map((d) => {
            const card = findDestination(d.slug);
            return (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="card"
                style={{ display: "block" }}
              >
                <div style={{ padding: 14 }}>
                  <Img src={d.hero.img} alt={d.title} ratio="4 / 5" rounded={36} />
                </div>
                <div style={{ padding: "8px 28px 28px" }}>
                  <h3 className="h-display" style={{ margin: "0 0 14px", fontSize: 26, lineHeight: 1.1 }}>
                    Bachelorette weekend in {d.title}
                  </h3>
                  <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
                    {d.tags.slice(0, 3).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  {card && (
                    <div className="meta" style={{ marginBottom: 12 }}>
                      {card.group} guests · {card.days} · {card.price}
                    </div>
                  )}
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

function BestForSkipIf({ vibe }: { vibe: Vibe }) {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--rule)" }}
    >
      <div
        className="bfsi-grid container container-wide"
        style={{
          maxWidth: 1480,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}
      >
        <div
          style={{
            background: vibe.color,
            borderRadius: "var(--radius-lg)",
            padding: "clamp(28px, 4vw, 40px)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 8 }}>Pick this vibe if</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {vibe.bestFor.map((line) => (
              <li key={line} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, fontSize: 16, lineHeight: 1.5 }}>
                <span aria-hidden style={{ fontWeight: 700, color: "var(--ink)" }}>+</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            background: "var(--bg-alt)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(28px, 4vw, 40px)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 8 }}>Skip if</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {vibe.skipIf.map((line) => (
              <li
                key={line}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 12,
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: "var(--ink-soft)",
                }}
              >
                <span aria-hidden style={{ fontWeight: 700 }}>–</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .bfsi-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function FaqSection({ vibe }: { vibe: Vibe }) {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Reader letters, paraphrased</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 28px" }}>
          {vibe.name} weekend FAQ.
        </h2>
        <Faq items={vibe.faq} />
      </div>
    </section>
  );
}

function EmptyState({ vibe }: { vibe: Vibe }) {
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
