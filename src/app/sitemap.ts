import type { MetadataRoute } from "next";
import { services, insights } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ardafispartners.com";

  const priorityRoutes: { route: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { route: "", priority: 1.0, changeFrequency: "weekly" },
    { route: "/services", priority: 0.9, changeFrequency: "weekly" },
    { route: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { route: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
    { route: "/switch-to-ardafis", priority: 0.7, changeFrequency: "monthly" },
    { route: "/services/quickbooks-outsourcing", priority: 0.8, changeFrequency: "monthly" },
    { route: "/services/xero-outsourcing", priority: 0.8, changeFrequency: "monthly" },
    { route: "/about", priority: 0.6, changeFrequency: "monthly" },
    { route: "/security", priority: 0.5, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { route: "/insights", priority: 0.6, changeFrequency: "weekly" },
    { route: "/global-reach", priority: 0.4, changeFrequency: "monthly" },
  ];

  const staticRoutes = priorityRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const insightRoutes = insights.map((p) => ({
    url: `${siteUrl}/insights/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes];
}
