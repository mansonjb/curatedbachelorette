import NextImage from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt?: string;
  /** CSS aspect-ratio string (e.g. "4 / 5"). */
  ratio?: string;
  className?: string;
  style?: CSSProperties;
  /** Pixel border radius applied to the frame. */
  rounded?: number;
  /** When true, the image is loaded eagerly and prioritised by Next.js
   *  for LCP. Use sparingly — typically only for the destination hero. */
  priority?: boolean;
  /** Override the default responsive sizes attribute when the image
   *  isn't a full-bleed card. */
  sizes?: string;
};

const DEFAULT_SIZES = "(max-width: 720px) 100vw, (max-width: 1280px) 50vw, 33vw";

/**
 * Site-wide image wrapper. Sits inside a fixed-aspect-ratio frame and
 * delegates to next/image, which handles:
 *  - automatic AVIF/WebP transcoding,
 *  - responsive srcset based on `sizes`,
 *  - lazy loading below the fold,
 *  - `priority` for the LCP candidate.
 *
 * `fill` is used because the frame controls the aspect ratio via CSS
 * — this is the documented pattern for next/image when you want the
 * image to follow the container rather than its intrinsic size.
 */
export function Img({
  src,
  alt = "",
  ratio = "4 / 5",
  className = "",
  style,
  rounded = 18,
  priority = false,
  sizes = DEFAULT_SIZES,
}: Props) {
  return (
    <div
      className={`img-frame ${className}`}
      style={{
        aspectRatio: ratio,
        width: "100%",
        borderRadius: rounded,
        position: "relative",
        ...style,
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
