import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description:
    "How Curated Bachelorette makes money, what we accept, and what we never do.",
  alternates: { canonical: "/disclosure" },
};

export default function DisclosurePage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>The fine print</div>
          <h1 className="h-display h-1" style={{ margin: "0 0 24px" }}>
            How we make money.
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)" }}>
            <p>
              <strong>Curated Bachelorette is supported by affiliate commissions.</strong>{" "}
              When you book a hotel, tour, or experience through a link on this site, we
              may earn a small commission. It does not change the price you pay, and it
              does not change which hotels or restaurants we recommend.
            </p>
            <p>
              <strong>We pay for our own rooms.</strong> No comped stays. No press trips.
              Every hotel we list is one we stayed in on our own dime, and every
              restaurant on the &quot;Eat&quot; sections is one we paid for, ate the full menu
              of, and would book again.
            </p>
            <p>
              <strong>Our affiliate partners are:</strong> Stay22 (hotels), Viator
              (tours and experiences), GetYourGuide (activities), DiscoverCars (car
              rentals), Amazon Associates (gear), Etsy (gifts and accessories). All
              affiliate links are tagged{" "}
              <code style={{ background: "var(--bg-alt)", padding: "2px 6px", borderRadius: 4 }}>
                rel=&quot;sponsored&quot;
              </code>{" "}
              for transparency.
            </p>
            <p>
              <strong>What we never do:</strong> recommend a hotel we&apos;ve only seen
              in photos, accept payment to feature a specific property, or take a comped
              meal in exchange for editorial mention. The first time we are offered, we
              decline; the second time, we name the brand.
            </p>
            <p>
              Questions? Email{" "}
              <Link href="mailto:editor@curatedbachelorette.com" className="ulink" style={{ color: "var(--teal-deep)" }}>
                editor@curatedbachelorette.com
              </Link>
              .
            </p>
          </div>

          <hr className="divider" style={{ margin: "40px 0 24px" }} />
          <p className="meta" style={{ margin: 0 }}>
            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
