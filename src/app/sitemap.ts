import type { MetadataRoute } from "next";
import { services, insights } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ardafispartners.com";

  const staticRoutes = [
    "",
    "/services",
    "/how-it-works",
    "/pricing",
    "/about",
    "/security",
    "/contact",
    "/insights",
    "/global-reach",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insights.map((p) => ({
    url: `${siteUrl}/insights/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes];
}
