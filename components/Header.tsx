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

export function Header({ active = "index" }: Props) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        className="container container-wide"
        style={{
          padding: "16px clamp(20px, 3.5vw, 40px)",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 24,
          alignItems: "center",
          maxWidth: 1480,
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: "var(--teal)",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "-0.02em",
            }}
          >
            CB
          </span>
          <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.015em" }}>
            Curated Bachelorette
          </span>
        </Link>

        <nav className="hide-md" style={{ display: "flex", justifyContent: "center", gap: 28 }}>
          {NAV.map((it) => {
            const isActive = it.key === active;
            return (
              <Link
                key={it.key}
                href={it.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive ? "var(--teal-deep)" : "var(--ink)",
                  borderBottom: isActive ? "2px solid var(--teal)" : "2px solid transparent",
                  paddingBottom: 4,
                  transition: "color 160ms",
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/matchmaker" className="btn btn-primary btn-sm hide-sm">
            Plan a weekend
          </Link>
          <MobileNavTrigger />
        </div>
      </div>
    </header>
  );
}
