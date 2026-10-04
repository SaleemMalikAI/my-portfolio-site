import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.url, lastModified: new Date(), priority: 1 }];
}
