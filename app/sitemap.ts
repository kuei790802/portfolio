import type { MetadataRoute } from "next";
import { cases } from "@/data/cases";

export const dynamic = "force-static";

const SITE_URL = "https://bykuei.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cases.map((c) => ({
      url: `${SITE_URL}/cases/${c.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
