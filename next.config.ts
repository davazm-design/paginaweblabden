import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { protocol: "https", hostname: "**.hostingersite.com" },
            { protocol: "https", hostname: "**.wp.com" },
            { protocol: "https", hostname: "images.unsplash.com" },
        ],
    },
};

export default nextConfig;
