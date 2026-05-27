import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { getBlogPosts } from "@/lib/wordpress-blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://labden.com.mx";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/plataforma", priority: 0.9, changeFrequency: "monthly" },
    { path: "/precios", priority: 0.9, changeFrequency: "monthly" },
    { path: "/academy", priority: 0.7, changeFrequency: "monthly" },
    { path: "/talks", priority: 0.7, changeFrequency: "monthly" },
    { path: "/aliados", priority: 0.6, changeFrequency: "monthly" },
    { path: "/empresa", priority: 0.6, changeFrequency: "monthly" },
    { path: "/seguridad", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terminos", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
        url: `${SITE_URL}${r.path}`,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));

    const localBlogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const wpSlugs = await getBlogPosts().catch(() => []);
    const wpBlogEntries: MetadataRoute.Sitemap = wpSlugs
        .filter((p: { slug?: string }) => !!p?.slug)
        .filter((p: { slug: string }) => !blogPosts.some((local) => local.slug === p.slug))
        .map((p: { slug: string }) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

    return [...staticEntries, ...localBlogEntries, ...wpBlogEntries];
}
