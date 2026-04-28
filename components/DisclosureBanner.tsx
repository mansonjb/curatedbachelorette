import Link from "next/link";

/**
 * FTC-required affiliate disclosure shown above-the-fold on destination
 * covers. Keep brief; full text lives on /disclosure.
 */
export function DisclosureBanner() {
  return (
    <div
      style={{
        background: "var(--yellow-soft)",
        fontSize: 12.5,
        color: "var(--ink)",
        fontWeight: 500,
      }}
    >
      <div
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "8px clamp(20px, 4vw, 40px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <span>
          Some links here are affiliate links — we may earn a commission at no cost to you.
        </span>
        <Link href="/disclosure" className="ulink-h">
          Learn more
        </Link>
      </div>
    </div>
  );
}
