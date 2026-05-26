import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/google-tag-manager";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://labden.com.mx";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "LABDEN | Gestión para Laboratorios Dentales Modernos",
        template: "%s | LABDEN",
    },
    description:
        "La plataforma todo-en-uno para controlar tu producción, finanzas y crecimiento. Diseñado para laboratorios dentales en Latinoamérica.",
    applicationName: "LABDEN",
    keywords: [
        "laboratorio dental",
        "software laboratorio dental",
        "gestión de órdenes",
        "SaaS dental",
        "LABDEN",
        "México",
        "Latinoamérica",
    ],
    authors: [{ name: "LABDEN" }],
    creator: "LABDEN",
    publisher: "LABDEN",
    icons: {
        icon: { url: "/icon.svg", type: "image/svg+xml" },
        // TODO: añadir apple-icon.png (180×180, optimizado) cuando el equipo de diseño lo provea.
    },
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        siteName: "LABDEN",
        locale: "es_MX",
        url: "/",
        title: "LABDEN | Gestión para Laboratorios Dentales Modernos",
        description:
            "La plataforma todo-en-uno para controlar tu producción, finanzas y crecimiento.",
    },
    twitter: {
        card: "summary_large_image",
        title: "LABDEN | Gestión para Laboratorios Dentales Modernos",
        description:
            "La plataforma todo-en-uno para controlar tu producción, finanzas y crecimiento.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LABDEN",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
        "Plataforma SaaS para gestión de órdenes, producción y finanzas de laboratorios dentales en Latinoamérica.",
    contactPoint: {
        "@type": "ContactPoint",
        email: "soporte@labden.com.mx",
        contactType: "customer support",
        availableLanguage: ["es"],
        areaServed: "MX",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning className="scroll-smooth">
            <head>
                <GoogleTagManager />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
            </head>
            <body className={clsx(inter.variable, "antialiased bg-background text-foreground font-sans min-h-screen flex flex-col")}>
                <GoogleTagManagerNoscript />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
