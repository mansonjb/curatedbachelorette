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
            className="card-bg"
            style={{
              background: isOpen ? "var(--blush)" : "var(--paper)",
              padding: 0,
              marginBottom: 12,
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "22px 24px",
                border: 0,
                background: "transparent",
                cursor: "pointer",
                font: "inherit",
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                gap: 14,
                alignItems: "center",
                color: "var(--ink)",
              }}
            >
              <span className="display" style={{ fontSize: 28, color: "var(--blush-deep)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display-soft" style={{ fontSize: 22, lineHeight: 1.1 }}>
                {it.q}
              </span>
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "var(--ink)",
                  color: "var(--cream)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 240ms",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? 280 : 0,
                opacity: isOpen ? 1 : 0,
                transition: "max-height 320ms, opacity 240ms, padding 240ms",
                padding: isOpen ? "0 24px 22px 82px" : "0 24px 0 82px",
              }}
            >
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}>{it.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
