"use client";
import { useState, type CSSProperties } from "react";

type Props = {
  src: string;
  alt?: string;
  /** CSS aspect-ratio string (e.g. "4 / 5") */
  ratio?: string;
  className?: string;
  style?: CSSProperties;
  /** Pixel border radius applied to the frame */
  rounded?: number;
};

export function Img({ src, alt = "", ratio = "4 / 5", className = "", style, rounded = 18 }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={`img-frame ${className}`}
      style={{ aspectRatio: ratio, width: "100%", borderRadius: rounded, ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={loaded ? "loaded" : ""}
      />
    </div>
  );
}
