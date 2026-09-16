import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/b1g-iptv-reseller-panel",
    "/b1g-iptv-installation-guide",
    "/b1g-iptv-player-app-latest-version-for-android-firestick",
    "/contact-b1g-iptv",
    "/blogs",
  ];

  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date("2026-09-16"),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
