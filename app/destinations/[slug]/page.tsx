import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { findDestination } from "@/data/destinations";
import { COVERS } from "@/data/destinations/covers";
import type { DestinationCover } from "@/data/destinations/types";
import { ISSUE, SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(COVERS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cover = COVERS[slug];
  if (!cover) return {};
  const title = `${cover.title} bachelorette weekend, ${cover.highlight}`;
  const description = cover.hero.intro;
  return {
    title,
    description,
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/destinations/${slug}`,
      images: [{ url: cover.hero.img }],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cover = COVERS[slug];
  const card = findDestination(slug);
  if (!cover || !card) notFound();

  return (
    <>
      <DestinationJsonLd cover={cover} card={card} slug={slug} />
      <Header active="destinations" />
      <ScrollProgress />
      <main>
        <Breadcrumbs cover={cover} />
        <DestHero cover={cover} />
        <DestMeta cover={cover} />
        <DestIntro cover={cover} />
        <DestStay cover={cover} />
        <DestDo cover={cover} />
        <DestEat cover={cover} />
        <DestPullQuote cover={cover} />
        <DestItinerary cover={cover} />
        <DestFaq cover={cover} />
        <DestRelated cover={cover} />
      </main>
      <Footer />
    </>
  );
}

function DestinationJsonLd({
  cover,
  card,
  slug,
}: {
  cover: DestinationCover;
  card: ReturnType<typeof findDestination>;
  slug: string;
}) {
  const url = `${SITE_URL}/destinations/${slug}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: cover.title,
          url,
          description: cover.hero.intro,
          image: cover.hero.img,
          touristType: "Bachelorette weekend",
          ...(card && { addressRegion: card.region }),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
            { "@type": "ListItem", position: 3, name: cover.title, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: cover.faq.map((f) => ({
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
          headline: `${cover.title} bachelorette weekend — a curated cover`,
          description: cover.hero.intro,
          author: { "@type": "Person", name: cover.readingTime.author },
          publisher: { "@type": "Organization", name: SITE_NAME },
          image: cover.hero.img,
          mainEntityOfPage: url,
        }}
      />
    </>
  );
}

function Breadcrumbs({ cover }: { cover: DestinationCover }) {
  return (
    <nav
      className="meta"
      style={{
        padding: "20px 0 0",
      }}
    >
      <div className="container container-wide" style={{ maxWidth: 1480, display: "flex", gap: 8 }}>
        <Link href="/" className="ulink" style={{ color: "var(--ink-soft)" }}>Home</Link>
        <span style={{ color: "var(--muted)" }}>/</span>
        <Link href="/destinations" className="ulink" style={{ color: "var(--ink-soft)" }}>Destinations</Link>
        <span style={{ color: "var(--muted)" }}>/</span>
        <span style={{ color: "var(--ink)" }}>{cover.title}</span>
      </div>
    </nav>
  );
}

function DestHero({ cover }: { cover: DestinationCover }) {
  return (
    <section style={{ padding: "clamp(24px, 3vw, 36px) 0 clamp(36px, 5vw, 56px)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
          <span className="tag tag-teal">Issue {ISSUE.number} · Cover Story</span>
          {cover.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <h1 className="h-display h-1" style={{ margin: "0 0 20px", maxWidth: 920 }}>
          {cover.title} bachelorette weekend,{" "}
          <span style={{ color: "var(--teal-deep)" }}>{cover.highlight}</span>.
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: 760,
            fontSize: 19,
            lineHeight: 1.6,
            color: "var(--ink-soft)",
          }}
        >
          {cover.hero.intro}
        </p>
        <div style={{ marginTop: 32, borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
          <Img src={cover.hero.img} alt={cover.title} ratio="16 / 9" rounded={28} />
        </div>
      </div>
    </section>
  );
}

function DestMeta({ cover }: { cover: DestinationCover }) {
  const items: [string, string][] = [
    ["Group", cover.hero.group],
    ["Nights", cover.hero.nights],
    ["Per head", cover.hero.perHead],
    ["Best months", cover.hero.bestMonths],
    ["Reading time", `${cover.readingTime.minutes} min`],
  ];
  return (
    <section
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        className="container container-wide"
        style={{
          maxWidth: 1480,
          padding: "20px clamp(20px, 4vw, 40px)",
          display: "grid",
          gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
          gap: 24,
        }}
      >
        {items.map(([k, v]) => (
          <div key={k}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>{k}</div>
            <div style={{ fontSize: 15, fontWeight: 500 }}>{v}</div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 900px) { section[style*='grid-template-columns: repeat'] { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}

function DestIntro({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>The Letter · {cover.readingTime.author}</div>
        {cover.intro.map((p, i) => (
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

function DestStay({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <SectionHeader number="01" title="Stay" subtitle={`${cover.stay.length} hotels we paid for`} />
        <div
          className="stay-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
        >
          {cover.stay.map((s) => (
            <article key={s.no} className="card" style={{ background: "var(--bg)" }}>
              <Img src={s.img} alt={s.name} ratio="4 / 3" rounded={0} />
              <div style={{ padding: "20px 22px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span className="tag">{s.area}</span>
                  <span className="meta">{s.price}</span>
                </div>
                <h3 className="h-display h-3" style={{ margin: "0 0 8px" }}>{s.name}</h3>
                <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{s.note}</p>
                <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="ulink" style={{ fontSize: 14 }}>Check rates</span>
                  <span style={{ color: "var(--teal-deep)", fontSize: 18 }}>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .stay-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function DestDo({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <SectionHeader number="02" title="Do" subtitle="One thing per half-day" />
        <div
          className="do-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}
        >
          {cover.do.map((d, i) => (
            <article
              key={d.title}
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
                background: "var(--bg)",
              }}
            >
              <Img src={d.img} alt={d.title} ratio="4 / 5" rounded={0} />
              <div
                style={{
                  padding: "22px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  justifyContent: "center",
                }}
              >
                <span className="tag">№ {String(i + 1).padStart(2, "0")}</span>
                <div className="meta">{d.hour}</div>
                <h3 className="h-display h-3" style={{ margin: 0 }}>{d.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .do-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function DestEat({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <SectionHeader number="03" title="Eat" subtitle={`${cover.eat.length} reservations`} />
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cover.eat.map((e) => (
            <li
              key={e.no}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius-md)",
                padding: "20px 24px",
                marginBottom: 12,
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                gap: 16,
                alignItems: "center",
              }}
              className="eat-row"
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--teal-deep)",
                  letterSpacing: "-0.02em",
                }}
              >
                {String(e.no).padStart(2, "0")}
              </span>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600 }}>
                  {e.name}{" "}
                  <span className="meta" style={{ marginLeft: 6, fontWeight: 400 }}>{e.area}</span>
                </div>
                <p style={{ margin: "4px 0 0", color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.55 }}>
                  {e.note}
                </p>
              </div>
              <span className="tag tag-teal">{e.meal}</span>
            </li>
          ))}
        </ol>
        <style>{`@media (max-width: 540px) { .eat-row { grid-template-columns: auto 1fr !important; } .eat-row > .tag { grid-column: 1 / -1; }`}</style>
      </div>
    </section>
  );
}

function DestPullQuote({ cover }: { cover: DestinationCover }) {
  return (
    <section
      style={{
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "var(--ink)",
        color: "#fff",
      }}
    >
      <div className="container" style={{ maxWidth: 960, textAlign: "center" }}>
        <p
          className="h-display"
          style={{
            margin: 0,
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            fontWeight: 600,
          }}
        >
          {cover.pullQuote.lead} {cover.pullQuotePlace} is,{" "}
          <span style={{ color: "var(--teal)" }}>{cover.pullQuote.emphasis}</span>,{" "}
          {cover.pullQuote.tail}
        </p>
        <div className="meta" style={{ marginTop: 24, color: "rgba(255,255,255,0.6)" }}>
          {cover.pullQuote.cite}
        </div>
      </div>
    </section>
  );
}

function DestItinerary({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <SectionHeader number="04" title="Plan" subtitle="Print, fold, pretend nothing was organized" />
        <div
          className="iti-grid"
          style={{ display: "grid", gridTemplateColumns: `repeat(${cover.itinerary.length}, minmax(0, 1fr))`, gap: 16 }}
        >
          {cover.itinerary.map((d) => (
            <div
              key={d.day}
              className="card"
              style={{
                padding: 22,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                background: "var(--bg)",
              }}
            >
              <div className="h-display h-3" style={{ margin: 0 }}>{d.day}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {d.items.map(([t, l]) => (
                  <li
                    key={t}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "70px 1fr",
                      gap: 10,
                      fontSize: 14,
                      paddingBottom: 8,
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    <span className="meta">{t}</span>
                    <span style={{ lineHeight: 1.4 }}>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <style>
          {`@media (max-width: 900px) { .iti-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .iti-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function DestFaq({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)" }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <SectionHeader number="05" title="FAQ" subtitle="Reader letters, paraphrased" />
        <Faq items={cover.faq} />
      </div>
    </section>
  );
}

function DestRelated({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Adjacent reading</div>
        <h2 className="h-display h-2" style={{ margin: "0 0 32px" }}>
          If {cover.title} isn&apos;t quite right.
        </h2>
        <div
          className="rel-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}
        >
          {cover.related.map((it) => (
            <Link key={it.name} href={`/destinations/${it.slug}`} className="card" style={{ display: "block" }}>
              <Img src={it.img} alt={it.name} ratio="4 / 3" rounded={0} />
              <div style={{ padding: "18px 22px 22px" }}>
                <h3 className="h-display h-3" style={{ margin: "0 0 6px" }}>{it.name}</h3>
                <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{it.note}</p>
                <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="ulink" style={{ fontSize: 14 }}>Read the cover</span>
                  <span style={{ color: "var(--teal-deep)", fontSize: 18 }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .rel-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 28,
      }}
    >
      <div>
        <div className="eyebrow" style={{ marginBottom: 6 }}>№ {number}</div>
        <h2 className="h-display h-2" style={{ margin: 0 }}>{title}</h2>
      </div>
      {subtitle && <span className="tag">{subtitle}</span>}
    </div>
  );
}
