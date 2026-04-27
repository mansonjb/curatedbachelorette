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
              background: "var(--bg)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--radius-md)",
              marginBottom: 10,
              overflow: "hidden",
              transition: "border-color 200ms",
              borderColor: isOpen ? "var(--teal)" : "var(--rule)",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "20px 24px",
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
              <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.4 }}>{it.q}</span>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  background: isOpen ? "var(--teal)" : "var(--bg-alt)",
                  color: isOpen ? "#fff" : "var(--ink)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 240ms, background 200ms, color 200ms",
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
                padding: isOpen ? "0 24px 22px" : "0 24px 0",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "var(--ink-soft)",
                }}
              >
                {it.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
