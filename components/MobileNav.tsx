"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ITEMS: [string, string][] = [
  ["Index", "/"],
  ["Destinations", "/destinations"],
  ["Vibes", "/vibes"],
  ["Field Notes", "/field-notes"],
  ["The Letters", "/letters"],
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
        className="show-md"
        onClick={() => setOpen(true)}
        aria-label="Menu"
        style={{
          display: "none",
          background: "var(--ink)",
          color: "var(--cream)",
          borderRadius: 999,
          border: 0,
          padding: "10px 14px",
          cursor: "pointer",
          font: "inherit",
        }}
      >
        Menu
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "var(--ink)",
            color: "var(--cream)",
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
            <span className="mono" style={{ color: "var(--blush)" }}>Issue №&nbsp;07</span>
            <button
              onClick={() => setOpen(false)}
              className="pill"
              style={{ background: "var(--blush)", color: "var(--ink)", borderColor: "var(--blush)" }}
            >
              Close ✕
            </button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {ITEMS.map(([label, href], i) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="display"
                style={{
                  fontSize: "clamp(40px, 11vw, 96px)",
                  padding: "8px 0",
                  borderBottom: "1.5px solid #2a2a26",
                  color: "var(--cream)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 18,
                }}
              >
                <span className="mono" style={{ color: "var(--blush-deep)", fontSize: 11 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
