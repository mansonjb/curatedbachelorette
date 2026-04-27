import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowR, Asterisk } from "@/components/icons";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { findDestination } from "@/data/destinations";
import { COVERS, type DestinationCover } from "@/data/destinations/miami";
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
  const card = findDestination(slug);
  if (!cover || !card) return {};
  const title = `${cover.title}, ${cover.highlight} — bachelorette weekend`;
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
      <main className="route-enter route-enter-active">
        <DestHero cover={cover} />
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Destinations",
              item: `${SITE_URL}/destinations`,
            },
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
          headline: `${cover.title}, ${cover.highlight} — a curated bachelorette weekend`,
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

function DestHero({ cover }: { cover: DestinationCover }) {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(24px, 3vw, 36px) clamp(20px, 4vw, 40px) clamp(36px, 5vw, 64px)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 28,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span className="pill">Issue {ISSUE.number} / Cover Story</span>
        {cover.tags.map((t) => (
          <span key={t} className="pill invert">
            {t}
          </span>
        ))}
        <span className="mono hide-sm" style={{ color: "var(--muted)", marginLeft: "auto" }}>
          Reading time · {cover.readingTime.minutes} min
        </span>
      </div>

      <h1
        className="display"
        style={{ margin: 0, fontSize: "clamp(80px, 16vw, 280px)", lineHeight: 0.82 }}
      >
        {cover.title},
        <br />
        <span
          style={{
            background: "var(--blush-deep)",
            color: "var(--ink)",
            padding: "0 0.06em",
            display: "inline-block",
          }}
        >
          {cover.highlight}
        </span>
        <span style={{ color: "var(--blush-deep)" }}>.</span>
      </h1>

      <div
        className="m-hero"
        style={{
          marginTop: "clamp(36px, 5vw, 64px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: "clamp(24px, 4vw, 40px)",
        }}
      >
        <div className="card-bg" style={{ background: "var(--ink)", padding: 0 }}>
          <Img src={cover.hero.img} alt={`${cover.title} coast`} ratio="16 / 10" rounded={20} />
        </div>
        <div
          className="card-bg"
          style={{
            background: "var(--rose)",
            padding: "clamp(24px, 3vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5 }}>{cover.hero.intro}</p>
          <div
            className="mono"
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "8px 14px",
              paddingTop: 14,
              borderTop: "1.5px solid var(--ink)",
            }}
          >
            <span style={{ opacity: 0.7 }}>Group</span>
            <span>{cover.hero.group}</span>
            <span style={{ opacity: 0.7 }}>Nights</span>
            <span>{cover.hero.nights}</span>
            <span style={{ opacity: 0.7 }}>Per head</span>
            <span>{cover.hero.perHead}</span>
            <span style={{ opacity: 0.7 }}>Best months</span>
            <span>{cover.hero.bestMonths}</span>
          </div>
          <span
            className="pill"
            style={{
              alignSelf: "flex-start",
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "12px 18px",
            }}
          >
            Save this weekend →
          </span>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .m-hero { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function DestIntro({ cover }: { cover: DestinationCover }) {
  return (
    <section
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div
        className="m-intro"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
          gap: "clamp(24px, 4vw, 64px)",
        }}
      >
        <aside>
          <div className="mono" style={{ marginBottom: 16, color: "var(--muted)" }}>
            ★ The Letter
          </div>
          <div className="display" style={{ fontSize: 88, color: "var(--blush-deep)", lineHeight: 0.88 }}>
            {cover.readingTime.minutes}&apos;
          </div>
          <div className="mono" style={{ marginTop: 6, color: "var(--muted)" }}>
            Reading time
          </div>
          <div
            className="mono"
            style={{
              marginTop: 28,
              paddingTop: 18,
              borderTop: "1.5px solid var(--ink)",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "8px 14px",
            }}
          >
            <span style={{ color: "var(--muted)" }}>Words</span>
            <span>{cover.readingTime.words.toLocaleString()}</span>
            <span style={{ color: "var(--muted)" }}>By</span>
            <span>{cover.readingTime.author}</span>
            <span style={{ color: "var(--muted)" }}>Photos</span>
            <span>{cover.readingTime.photographer}</span>
            <span style={{ color: "var(--muted)" }}>Filed</span>
            <span>{cover.readingTime.filed}</span>
          </div>
        </aside>
        <div style={{ maxWidth: 720 }}>
          <p style={{ margin: 0, fontSize: 22, lineHeight: 1.4 }}>
            <span
              className="display"
              style={{
                float: "left",
                fontSize: 88,
                lineHeight: 0.85,
                paddingRight: 14,
                color: "var(--blush-deep)",
              }}
            >
              {cover.intro[0]?.[0]}
            </span>
            {cover.intro[0]?.slice(1)}
          </p>
          {cover.intro.slice(1).map((p, i) => (
            <p
              key={i}
              style={{ margin: "18px 0 0", fontSize: 17, lineHeight: 1.65, color: "#1a1a18" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .m-intro { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function DestStay({ cover }: { cover: DestinationCover }) {
  return (
    <section
      style={{
        borderTop: "1.5px solid var(--ink)",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
            № 01 — <span style={{ color: "var(--blush-deep)" }}>Stay</span>.
          </h2>
          <span className="pill invert">{cover.stay.length} hotels we paid for</span>
        </div>

        <div
          className="stay-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}
        >
          {cover.stay.map((s) => (
            <article
              key={s.no}
              className="card-bg"
              style={{
                background: s.color,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                minHeight: 480,
              }}
            >
              <div style={{ padding: 14 }}>
                <div
                  style={{ borderRadius: 14, overflow: "hidden", border: "1.5px solid var(--ink)" }}
                >
                  <Img src={s.img} alt={s.name} ratio="4 / 5" rounded={0} />
                </div>
              </div>
              <div
                style={{
                  padding: "0 22px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  flex: 1,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="pill">№ {String(s.no).padStart(2, "0")} · {s.area}</span>
                  <span className="mono">{s.price}</span>
                </div>
                <h3 className="display-soft" style={{ margin: 0, fontSize: 28, lineHeight: 1.05 }}>
                  {s.name}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, opacity: 0.85 }}>
                  {s.note}
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
                  <span className="mono">Check rates →</span>
                  <span className="arrow-btn">
                    <ArrowR size={14} />
                  </span>
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
    <section
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
            № 02 — <span style={{ color: "var(--blush)" }}>Do</span>.
          </h2>
          <span
            className="pill"
            style={{ background: "var(--blush)", color: "var(--ink)", borderColor: "var(--blush)" }}
          >
            One thing per half-day
          </span>
        </div>
        <div
          className="do-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}
        >
          {cover.do.map((d, i) => (
            <article
              key={d.title}
              className="card-bg"
              style={{
                background: d.color,
                color: "var(--ink)",
                padding: 0,
                display: "grid",
                gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1fr)",
                overflow: "hidden",
                minHeight: 240,
              }}
            >
              <div style={{ padding: 14 }}>
                <div
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1.5px solid var(--ink)",
                    height: "100%",
                  }}
                >
                  <Img src={d.img} alt={d.title} ratio="4 / 5" rounded={0} />
                </div>
              </div>
              <div
                style={{
                  padding: "20px 22px 20px 6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <span className="pill" style={{ alignSelf: "flex-start" }}>
                  № {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mono">{d.hour}</div>
                <h3 className="display-soft" style={{ margin: 0, fontSize: 24, lineHeight: 1.06 }}>
                  {d.title}
                </h3>
                <span className="arrow-btn" style={{ marginTop: "auto", alignSelf: "flex-end" }}>
                  <ArrowR size={14} />
                </span>
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
    <section
      style={{
        borderTop: "1.5px solid var(--ink)",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div
        className="eat-grid"
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: "clamp(28px, 5vw, 64px)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 28,
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
              № 03 — <span style={{ color: "var(--blush-deep)" }}>Eat</span>.
            </h2>
            <span className="pill invert">{cover.eat.length} reservations</span>
          </div>

          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {cover.eat.map((e, i) => (
              <li
                key={e.no}
                className="card-bg flat"
                style={{
                  padding: "20px 22px",
                  marginBottom: 12,
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  gap: 14,
                  alignItems: "center",
                }}
              >
                <span className="display" style={{ fontSize: 28, color: "var(--blush-deep)" }}>
                  {String(e.no).padStart(2, "0")}
                </span>
                <div>
                  <div className="display-soft" style={{ fontSize: 22, lineHeight: 1.05 }}>
                    {e.name}
                    <span className="mono" style={{ color: "var(--muted)", marginLeft: 6 }}>
                      {e.area}
                    </span>
                  </div>
                  <p style={{ margin: "6px 0 0", color: "#2a2a26", fontSize: 14, lineHeight: 1.5 }}>
                    {e.note}
                  </p>
                </div>
                <span
                  className="pill"
                  style={{
                    background: i === 0 ? "var(--blush)" : "var(--cream)",
                    color: "var(--ink)",
                    borderColor: "var(--ink)",
                  }}
                >
                  {e.meal}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="card-bg" style={{ background: "var(--ink)", padding: 0 }}>
            <Img src={cover.do[0]?.img ?? cover.hero.img} alt="Long table" ratio="4 / 5" rounded={20} />
          </div>
          <div className="card-bg" style={{ background: "var(--blush)", padding: 24 }}>
            <span className="pill">★ Editor&apos;s tip</span>
            <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.55 }}>
              Build the weekend around <em>one</em> long, careful dinner — usually
              Saturday — and let every other meal be casual. Groups of eight tend to
              over-book and under-eat.
            </p>
          </div>
        </aside>
      </div>
      <style>{`@media (max-width: 900px) { .eat-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function DestPullQuote({ cover }: { cover: DestinationCover }) {
  return (
    <section
      style={{
        background: "var(--blush-deep)",
        color: "var(--ink)",
        padding: "clamp(60px, 9vw, 140px) clamp(20px, 4vw, 56px)",
        borderTop: "1.5px solid var(--ink)",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Asterisk size={36} />
        <p
          className="display"
          style={{ margin: "20px 0 0", fontSize: "clamp(40px, 7vw, 124px)", lineHeight: 0.9 }}
        >
          {cover.pullQuote.lead}
          <br />
          South Beach
          <br />
          is,{" "}
          <span style={{ background: "var(--ink)", color: "var(--blush-deep)", padding: "0 0.05em" }}>
            {cover.pullQuote.emphasis}
          </span>
          ,
          <br />
          {cover.pullQuote.tail}
        </p>
        <div className="mono" style={{ marginTop: 28 }}>{cover.pullQuote.cite}</div>
      </div>
    </section>
  );
}

function DestItinerary({ cover }: { cover: DestinationCover }) {
  return (
    <section style={{ padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
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
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
            № 04 — <span style={{ color: "var(--blush-deep)" }}>Plan</span>.
          </h2>
          <span className="pill invert">Print, fold, pretend nothing was organized</span>
        </div>
        <div
          className="iti-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}
        >
          {cover.itinerary.map((d) => (
            <div
              key={d.day}
              className="card-bg"
              style={{
                background: d.color,
                padding: 22,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 280,
              }}
            >
              <div className="display" style={{ fontSize: 28 }}>{d.day}</div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {d.items.map(([t, l]) => (
                  <li
                    key={t}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 10,
                      fontSize: 14,
                      paddingBottom: 8,
                      borderBottom: "1.5px solid rgba(14,14,12,0.2)",
                    }}
                  >
                    <span className="mono">{t}</span>
                    <span style={{ lineHeight: 1.35 }}>{l}</span>
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
    <section
      style={{
        borderTop: "1.5px solid var(--ink)",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
            № 05 — <span style={{ color: "var(--blush-deep)" }}>FAQ</span>.
          </h2>
          <span className="pill invert">Reader letters, paraphrased</span>
        </div>
        <Faq items={cover.faq} />
      </div>
    </section>
  );
}

function DestRelated({ cover }: { cover: DestinationCover }) {
  return (
    <section
      style={{
        borderTop: "1.5px solid var(--ink)",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 4vw, 40px)",
      }}
    >
      <div style={{ maxWidth: 1480, margin: "0 auto" }}>
        <div className="mono" style={{ color: "var(--muted)", marginBottom: 12 }}>
          ★ Adjacent reading
        </div>
        <h2
          className="display"
          style={{ margin: 0, marginBottom: 28, fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          If {cover.title} isn&apos;t quite right.
        </h2>
        <div
          className="rel-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}
        >
          {cover.related.map((it) => (
            <Link
              key={it.name}
              href={`/destinations/${it.slug}`}
              className="card-bg"
              style={{
                background: it.color,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                color: "var(--ink)",
                minHeight: 380,
              }}
            >
              <div style={{ padding: 14 }}>
                <div
                  style={{ borderRadius: 14, overflow: "hidden", border: "1.5px solid var(--ink)" }}
                >
                  <Img src={it.img} alt={it.name} ratio="4 / 3" rounded={0} />
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
                <h3 className="display-soft" style={{ margin: 0, fontSize: 28 }}>
                  {it.name}
                </h3>
                <p style={{ margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{it.note}</p>
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 12,
                  }}
                >
                  <span className="mono">Discover →</span>
                  <span className="arrow-btn">
                    <ArrowR size={14} />
                  </span>
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
