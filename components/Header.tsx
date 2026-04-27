import Link from "next/link";
import { Asterisk } from "@/components/icons";
import { MobileNavTrigger } from "@/components/MobileNav";

type Props = { active?: "index" | "destinations" | "vibes" | "field-notes" };

const NAV: { label: string; href: string; key: NonNullable<Props["active"]> }[] = [
  { label: "Index", href: "/", key: "index" },
  { label: "Destinations", href: "/destinations", key: "destinations" },
  { label: "Vibes", href: "/vibes", key: "vibes" },
  { label: "Field Notes", href: "/field-notes", key: "field-notes" },
];

export function Header({ active = "index" }: Props) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--cream)",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      <div
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "16px clamp(20px, 3.5vw, 40px)",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 24,
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: "var(--ink)",
              color: "var(--blush)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Asterisk size={16} color="var(--blush)" />
          </span>
          <span className="display" style={{ fontSize: 18, lineHeight: 1 }}>
            Curated/<span style={{ color: "var(--blush-deep)" }}>Bach</span>
          </span>
        </Link>

        <nav className="hide-md" style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {NAV.map((it) => {
            const isActive = it.key === active;
            return (
              <Link
                key={it.key}
                href={it.href}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  background: isActive ? "var(--ink)" : "transparent",
                  color: isActive ? "var(--cream)" : "var(--ink)",
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link
            href="/search"
            className="hide-sm pill invert"
            style={{ background: "var(--paper)" }}
          >
            Search
          </Link>
          <Link
            href="/matchmaker"
            className="pill"
            style={{ background: "var(--blush)", color: "var(--ink)", borderColor: "var(--ink)" }}
          >
            Plan a weekend →
          </Link>
          <MobileNavTrigger />
        </div>
      </div>
    </header>
  );
}
