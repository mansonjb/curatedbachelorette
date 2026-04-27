import Link from "next/link";

/**
 * FTC-required affiliate disclosure shown above-the-fold on every page.
 * Keep brief; full text lives on /disclosure.
 */
export function DisclosureBanner() {
  return (
    <div
      style={{
        background: "var(--bg-alt)",
        borderBottom: "1px solid var(--rule)",
        fontSize: 12.5,
        color: "var(--ink-soft)",
      }}
    >
      <div
        className="container container-wide"
        style={{
          maxWidth: 1480,
          padding: "8px clamp(20px, 4vw, 40px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <span>
          Some links on this page are affiliate links — we may earn a commission at no
          cost to you.
        </span>
        <Link href="/disclosure" className="ulink" style={{ color: "var(--teal-deep)" }}>
          Learn more
        </Link>
      </div>
    </div>
  );
}
