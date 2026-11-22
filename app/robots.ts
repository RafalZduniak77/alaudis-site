import type { MetadataRoute } from "next";
import { SITE_URL, isIndexable } from "@/lib/seo";

// Produkcja: wszystko dostępne poza panelem i API.
// Podglądy Vercel: całość zablokowana, żeby nie dublowały alaudis.eu.
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/panel-galerii", "/api/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
