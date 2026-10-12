import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { posts } from "@/data/posts";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/courses",
    "/placement",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/refund",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-10-12T00:00:00.000Z",
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const coursePages = coursePlans.map((plan) => ({
    url: `${baseUrl}/courses/${plan.slug}`,
    lastModified: "2026-10-12T00:00:00.000Z",
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: "2026-10-12T00:00:00.000Z",
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...coursePages, ...blogPages];
}
