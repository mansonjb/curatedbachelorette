"use client";

import { useState } from "react";
import { CATEGORIES } from "@/data/destinations";

export function CategoryRail() {
  const [active, setActive] = useState<string>("All");
  return (
    <section
      style={{
        borderTop: "1.5px solid var(--ink)",
        borderBottom: "1.5px solid var(--ink)",
        background: "var(--cream)",
      }}
    >
      <div
        className="chip-rail"
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "16px clamp(20px, 4vw, 40px)",
          display: "flex",
          gap: 18,
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        <span className="mono" style={{ color: "var(--muted)", marginRight: 8 }}>
          Filter →
        </span>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className="mono"
            style={{
              background: "transparent",
              border: 0,
              padding: "6px 0",
              cursor: "pointer",
              color: c === active ? "var(--ink)" : "var(--muted)",
              textDecoration: c === active ? "underline" : "none",
              textUnderlineOffset: 5,
              font: "inherit",
              fontFamily: "var(--font-space-mono), monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: 11,
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
