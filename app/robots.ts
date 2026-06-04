import type { MetadataRoute } from "next";

// F1-T7: default actualizado a www; env var NEXT_PUBLIC_SITE_URL toma precedencia en producción.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.labden.com.mx";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/debug-", "/auth/"],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
