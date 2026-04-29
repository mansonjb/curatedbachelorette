import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { COVERS } from "@/data/destinations/covers";
import { VIBES } from "@/data/vibes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/destinations`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/vibes`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/disclosure`, lastModified: now, priority: 0.3 },
    ...Object.keys(COVERS).map((slug) => ({
      url: `${SITE_URL}/destinations/${slug}`,
      lastModified: now,
      priority: 0.9,
    })),
    ...VIBES.map((v) => ({
      url: `${SITE_URL}/vibes/${v.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
