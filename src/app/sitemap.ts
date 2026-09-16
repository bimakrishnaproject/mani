import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mymani.ai";

  const routes = [
    "",
    "/collections",
    "/collections/bye-bye-narcissist",
    "/watch-learn",
    "/app",
    "/why-mani",
    "/about",
    "/faq",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/refund-policy",
    "/shipping-policy",
    "/community-guidelines",
    "/beta-terms",
    "/join-community",
    "/join-beta",
    "/products/bye-bye-narcissist-book",
    "/products/bye-bye-narcissist-workbook",
    "/products/bye-bye-narcissist-coloring-book",
    "/products/bye-bye-narcissist-posters",
    "/products/bye-bye-narcissist-affirmation-cards",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("/collections") ? 0.9 : 0.8,
  }));
}
