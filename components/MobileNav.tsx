"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ITEMS: [string, string][] = [
  ["Destinations", "/destinations"],
  ["Vibes", "/vibes"],
  ["Field Notes", "/field-notes"],
  ["About", "/about"],
  ["Plan a weekend", "/matchmaker"],
];

export function MobileNavTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <>
      <button
        className="show-md btn btn-ghost btn-sm"
        onClick={() => setOpen(true)}
        aria-label="Menu"
        style={{ display: "none" }}
      >
        Menu
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "var(--bg)",
            color: "var(--ink)",
            padding: "20px clamp(20px, 5vw, 40px)",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <span className="eyebrow">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="btn btn-ghost btn-sm"
            >
              Close ✕
            </button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {ITEMS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="h-display"
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  padding: "16px 0",
                  borderBottom: "1.5px solid var(--rule)",
                  color: "var(--ink)",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
