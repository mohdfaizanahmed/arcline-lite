import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/** Add your own routes here as you build more pages. */
const routes = [{ path: "", priority: 1 }];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
