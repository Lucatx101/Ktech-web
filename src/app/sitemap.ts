import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/content/company";

export const dynamic = "force-static";

const routes = ["/vi", "/en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: getCanonicalUrl(route),
    changeFrequency: "monthly",
    priority: route === "/vi" ? 1 : 0.9,
  }));
}
