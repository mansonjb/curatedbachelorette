"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/destinations/types";

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li
            key={it.q}
            style={{
              background: isOpen ? "var(--pink-soft)" : "var(--bg-alt)",
              borderRadius: "var(--radius-lg)",
              marginBottom: 12,
              overflow: "hidden",
              transition: "background 220ms",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "22px 28px",
                border: 0,
                background: "transparent",
                cursor: "pointer",
                font: "inherit",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 14,
                alignItems: "center",
                color: "var(--ink)",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35 }}>{it.q}</span>
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: isOpen ? "var(--ink)" : "var(--bg)",
                  color: isOpen ? "var(--bg)" : "var(--ink)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 240ms, background 220ms, color 220ms",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? 320 : 0,
                opacity: isOpen ? 1 : 0,
                transition: "max-height 320ms, opacity 240ms, padding 240ms",
                padding: isOpen ? "0 28px 24px" : "0 28px 0",
              }}
            >
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)" }}>
                {it.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
