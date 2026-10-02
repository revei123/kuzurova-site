import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/services", "/about", "/practice", "/blog", "/contact", "/privacy"];
  return [
    ...staticPaths.map((path) => ({
      url: new URL(path || "/", site.url).toString(),
      lastModified: now,
    })),
    ...services.map((item) => ({
      url: new URL(`/services/${item.slug}`, site.url).toString(),
      lastModified: now,
    })),
    ...cases.map((item) => ({
      url: new URL(`/practice/${item.slug}`, site.url).toString(),
      lastModified: now,
    })),
    ...articles.map((item) => ({
      url: new URL(`/blog/${item.slug}`, site.url).toString(),
      lastModified: new Date(item.dateISO),
    })),
  ];
}
