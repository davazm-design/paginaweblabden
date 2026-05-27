import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/google-tag-manager";
import { AssistantWidget } from "@/components/chat/assistant-widget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://labden.com.mx";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "LabDen | Gestión para Laboratorios Dentales Modernos",
        template: "%s | LabDen",
    },
    description:
        "La plataforma todo-en-uno para controlar tu producción, finanzas y crecimiento. Diseñado para laboratorios dentales en Latinoamérica.",
    applicationName: "LabDen",
    keywords: [
        "laboratorio dental",
        "software laboratorio dental",
        "gestión de órdenes",
        "SaaS dental",
        "LabDen",
        "México",
        "Latinoamérica",
    ],
    authors: [{ name: "LabDen" }],
    creator: "LabDen",
    publisher: "LabDen",
    icons: {
        icon: [
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/labden-icon.png", type: "image/png", sizes: "512x512" },
        ],
        // TODO: añadir apple-icon.png (180×180, optimizado) cuando el equipo de diseño lo provea.
    },
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        siteName: "LabDen",
        locale: "es_MX",
        url: "/",
        title: "LabDen | Gestión para Laboratorios Dentales Modernos",
        description:
            "La plataforma todo-en-uno para controlar tu producción, finanzas y crecimiento.",
    },
    twitter: {
        card: "summary_large_image",
        title: "LabDen | Gestión para Laboratorios Dentales Modernos",
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
    name: "LabDen",
    url: SITE_URL,
    logo: `${SITE_URL}/labden-icon.png`,
    description:
        "Plataforma para organizar la comunicación entre dentistas y laboratorios dentales en Latinoamérica.",
    sameAs: [
        "https://www.facebook.com/profile.php?id=61588445277715",
        "https://www.instagram.com/labden.mx/",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        email: "soporte@labden.com.mx",
        telephone: "+525664015780",
        contactType: "customer support",
        availableLanguage: ["es"],
        areaServed: "MX",
    },
};

const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LabDen",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
        "Plataforma que centraliza órdenes, seguimiento y comunicación entre dentistas y laboratorios dentales.",
    offers: {
        "@type": "AggregateOffer",
        priceCurrency: "MXN",
        lowPrice: "550",
        highPrice: "850",
        offerCount: "2",
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
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
                    <AssistantWidget />
                </ThemeProvider>
            </body>
        </html>
    );
}
