import type { MetadataRoute } from "next";
import { profile, projects } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.url, lastModified: new Date(), priority: 1 },
    ...projects.map((p) => ({ url: `${profile.url}/projects/${p.slug}`, lastModified: new Date(), priority: 0.7 })),
  ];
}
