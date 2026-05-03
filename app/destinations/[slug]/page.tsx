import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Stay22Cta, Stay22Map } from "@/components/Stay22";
import { TicketBadge } from "@/components/TicketBadge";
import { ViatorBlock } from "@/components/ViatorBlock";
import { findDestination, type DestinationCard } from "@/data/destinations";
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
  const title = `Bachelorette weekend in ${cover.title}, ${cover.highlight}`;
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
      <DisclosureBanner />
      <Header active="destinations" />
      <ScrollProgress />
      <main>
        <Breadcrumbs cover={cover} />
        <DestHero cover={cover} />
        <DestMeta cover={cover} />
        <DestIntro cover={cover} />
        <DestStay cover={cover} card={card} />
        <ViatorBlock slug={slug} city={cover.title} />
        <DestNight cover={cover} />
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
          headline: `Bachelorette weekend in ${cover.title} — a curated cover`,
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
    <nav style={{ padding: "20px 0 0" }}>
      <div className="container-wide" style={{ maxWidth: 1480, margin: "0 auto", padding: "0 clamp(20px, 4vw, 40px)", display: "flex", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
        <Link href="/" className="ulink-h">Home</Link>
        <span style={{ color: "var(--muted)" }}>/</span>
        <Link href="/destinations" className="ulink-h">Destinations</Link>
        <span style={{ color: "var(--muted)" }}>/</span>
        <span style={{ color: "var(--ink)" }}>{cover.title}</span>
      </div>
    </nav>
  );
}

function DestHero({ cover }: { cover: DestinationCover }) {
  return (
    <section style={{ padding: "clamp(28px, 4vw, 56px) clamp(20px, 4vw, 40px) clamp(36px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
          <span className="tag tag-ink">Issue {ISSUE.number} · Cover</span>
          {cover.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <h1
          className="h-display"
          style={{
            margin: 0,
            fontSize: "clamp(56px, 9vw, 120px)",
            lineHeight: 1.0,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            maxWidth: 1100,
          }}
        >
          Bachelorette weekend in {cover.title},{" "}
          <TicketBadge variant="pink" rotate={-1.2}>
            {cover.highlight}
          </TicketBadge>
        </h1>
        <p style={{ margin: "32px 0 0", maxWidth: 760, fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)" }}>
          {cover.hero.intro}
        </p>
        <div className="tilt-l" style={{ marginTop: 40 }}>
          <div style={{ border: "1.5px solid var(--ink)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--bg-alt)" }}>
            <Img src={cover.hero.img} alt={cover.title} ratio="16 / 9" rounded={0} />
          </div>
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
        background: "var(--bg-soft)",
        margin: "0 clamp(20px, 4vw, 40px)",
        borderRadius: "var(--radius-lg)",
        maxWidth: 1480,
      }}
    >
      <div
        className="meta-grid"
        style={{
          padding: "24px clamp(24px, 4vw, 40px)",
          display: "grid",
          gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
          gap: 24,
          maxWidth: 1480,
          margin: "0 auto",
        }}
      >
        {items.map(([k, v]) => (
          <div key={k}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>{k}</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{v}</div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 900px) { .meta-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
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
              fontSize: i === 0 ? 22 : 17,
              lineHeight: i === 0 ? 1.45 : 1.7,
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

function DestStay({ cover, card }: { cover: DestinationCover; card: DestinationCard }) {
  const cityAddress = `${cover.title}, ${card.region}`;
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <SectionHeader number="01" title="Stay" />
        <div className="stay-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}>
          {cover.stay.map((s) => (
            <article key={s.no} className="card" style={{ background: "var(--bg-alt)" }}>
              <div style={{ padding: 14 }}>
                <Img src={s.img} alt={s.name} ratio="4 / 3" rounded={28} />
              </div>
              <div style={{ padding: "0 26px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span className="tag">{s.area}</span>
                  <span className="meta">{s.price}</span>
                </div>
                <h3 className="h-display" style={{ margin: "0 0 8px", fontSize: 24, lineHeight: 1.15 }}>{s.name}</h3>
                <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{s.note}</p>
                <div style={{ marginTop: 16 }}>
                  <Stay22Cta hotelName={s.name} city={cover.title} context={`${cover.slug}-stay-${s.no}`} />
                </div>
              </div>
            </article>
          ))}
        </div>
        <Stay22Map address={cityAddress} />
        <style>{`@media (max-width: 900px) { .stay-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function DestNight({ cover }: { cover: DestinationCover }) {
  if (!cover.night || cover.night.length === 0) return null;
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--bg)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
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
            <div className="eyebrow" style={{ marginBottom: 6, color: "var(--pink)" }}>№ 03</div>
            <h2 className="h-display h-2" style={{ margin: 0 }}>Night.</h2>
            <p style={{ margin: "10px 0 0", fontSize: 16, color: "rgba(245,239,229,0.7)", maxWidth: 540 }}>
              The bachelorette&apos;s reason for being. {cover.night.length} venues we&apos;d
              actually walk into — clubs, beach-bars, and the late-night
              hideouts that don&apos;t have a sign on the door.
            </p>
          </div>
          <span className="meta" style={{ color: "rgba(245,239,229,0.6)" }}>Editor-curated</span>
        </div>
        <div
          className="night-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}
        >
          {cover.night.map((n) => (
            <article
              key={n.no}
              style={{
                background: "var(--bg-alt)",
                color: "var(--ink)",
                borderRadius: "var(--radius-lg)",
                padding: "26px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <span className="tag tag-pink">{n.kind}</span>
                {n.when && <span className="meta">{n.when}</span>}
              </div>
              <h3 className="h-display" style={{ margin: "4px 0 0", fontSize: 24, lineHeight: 1.15 }}>
                {n.name}{" "}
                <span className="meta" style={{ marginLeft: 6, fontWeight: 400 }}>{n.area}</span>
              </h3>
              <p style={{ margin: 0, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6 }}>
                {n.note}
              </p>
              {n.link && (
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener nofollow"
                  className="ulink"
                  style={{ alignSelf: "flex-start", marginTop: 6, fontSize: 14 }}
                >
                  Find it on the map →
                </a>
              )}
            </article>
          ))}
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 13,
            color: "rgba(245,239,229,0.55)",
            maxWidth: 720,
            lineHeight: 1.55,
          }}
        >
          Bookable nightlife (boat parties, club entries, bar crawls) ships in
          a separate block above when our GetYourGuide and Fever integrations
          go live this season. The list here is the editor&apos;s shortlist —
          venues we&apos;d send a friend to without checking a partnership.
        </p>
        <style>
          {`@media (max-width: 900px) { .night-grid { grid-template-columns: 1fr !important; } }`}
        </style>
      </div>
    </section>
  );
}

function DestEat({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <SectionHeader number="04" title="Eat" />
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cover.eat.map((e) => (
            <li
              key={e.no}
              style={{
                background: "var(--bg-alt)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 32px",
                marginBottom: 14,
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                gap: 20,
                alignItems: "center",
              }}
            >
              <span className="h-display" style={{ fontSize: 28, color: "var(--pink-deep)" }}>
                {String(e.no).padStart(2, "0")}
              </span>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  {e.name} <span className="meta" style={{ marginLeft: 6, fontWeight: 400 }}>{e.area}</span>
                </div>
                <p style={{ margin: "4px 0 0", color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.55 }}>
                  {e.note}
                </p>
              </div>
              <span className="tag tag-pink">{e.meal}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DestPullQuote({ cover }: { cover: DestinationCover }) {
  return (
    <section
      style={{
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 40px)",
        background: "var(--ink)",
        color: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <p
          className="h-display"
          style={{
            margin: 0,
            fontSize: "clamp(36px, 6vw, 72px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            fontWeight: 800,
          }}
        >
          {cover.pullQuote.lead} {cover.pullQuotePlace} is,{" "}
          <TicketBadge variant="yellow" rotate={-1.2}>{cover.pullQuote.emphasis}</TicketBadge>
          ,{" "}
          {cover.pullQuote.tail}
        </p>
        <div className="meta" style={{ marginTop: 28, color: "rgba(245,239,229,0.6)" }}>
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
        <SectionHeader number="05" title="Plan" />
        <div className="iti-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${cover.itinerary.length}, minmax(0, 1fr))`, gap: 20 }}>
          {cover.itinerary.map((d) => (
            <div
              key={d.day}
              className="card"
              style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14, background: "var(--bg-alt)" }}
            >
              <div className="h-display" style={{ margin: 0, fontSize: 24 }}>{d.day}</div>
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
        <style>{`@media (max-width: 900px) { .iti-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .iti-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function DestFaq({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <SectionHeader number="06" title="FAQ" />
        <Faq items={cover.faq} />
      </div>
    </section>
  );
}

function DestRelated({ cover }: { cover: DestinationCover }) {
  return (
    <section className="section">
      <div className="container container-wide" style={{ maxWidth: 1480 }}>
        <h2 className="h-display h-2" style={{ margin: "0 0 28px" }}>
          If {cover.title} isn&apos;t quite right.
        </h2>
        <div className="rel-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28 }}>
          {cover.related.map((it) => (
            <Link key={it.name} href={`/destinations/${it.slug}`} className="card" style={{ display: "block" }}>
              <div style={{ padding: 14 }}>
                <Img src={it.img} alt={it.name} ratio="4 / 3" rounded={28} />
              </div>
              <div style={{ padding: "0 26px 24px" }}>
                <h3 className="h-display" style={{ margin: "0 0 8px", fontSize: 22 }}>{it.name}</h3>
                <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.55 }}>{it.note}</p>
              </div>
            </Link>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .rel-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
      <span className="eyebrow">№ {number}</span>
      <h2 className="h-display h-2" style={{ margin: 0 }}>{title}.</h2>
    </div>
  );
}
