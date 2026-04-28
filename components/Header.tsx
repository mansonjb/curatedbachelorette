import Link from "next/link";
import { MobileNavTrigger } from "@/components/MobileNav";

type ActiveKey = "destinations" | "vibes" | "field-notes" | "about";
type Props = { active?: ActiveKey | "index" };

const NAV: { label: string; href: string; key: ActiveKey }[] = [
  { label: "Destinations", href: "/destinations", key: "destinations" },
  { label: "Vibes", href: "/vibes", key: "vibes" },
  { label: "Field Notes", href: "/field-notes", key: "field-notes" },
  { label: "About", href: "/about", key: "about" },
];

export function Header({ active }: Props) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "20px clamp(20px, 3.5vw, 40px)",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 24,
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "baseline", gap: 6 }}>
          <span
            className="h-display"
            style={{
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            curated
            <span style={{ color: "var(--pink-deep)" }}>bach</span>
          </span>
          <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>
            weekends, curated
          </span>
        </Link>

        <nav className="hide-md" style={{ display: "flex", justifyContent: "center", gap: 36 }}>
          {NAV.map((it) => {
            const isActive = it.key === active;
            return (
              <Link
                key={it.key}
                href={it.href}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: isActive ? "var(--pink-deep)" : "var(--ink)",
                  transition: "color 160ms",
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/matchmaker" className="btn btn-pink btn-sm hide-sm">
            Plan a weekend
          </Link>
          <MobileNavTrigger />
        </div>
      </div>
    </header>
  );
}
