import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/catalogo`, changeFrequency: "weekly", priority: 0.9 },
  ];
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/produto/${product.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
