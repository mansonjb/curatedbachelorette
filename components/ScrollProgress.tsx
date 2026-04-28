"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const t = h.scrollHeight - h.clientHeight;
      setProgress(t > 0 ? Math.min(1, h.scrollTop / t) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${progress * 100}%`,
        background: "var(--pink-deep)",
        zIndex: 60,
        transition: "width 80ms",
      }}
    />
  );
}
