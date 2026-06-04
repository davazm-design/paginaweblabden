import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/google-tag-manager";
import { AssistantWidget } from "@/components/chat/assistant-widget";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    // F1-T2: title con keyword principal + brand (~56 car.)
    title: {
        default: "Sistema para Laboratorios Dentales en México | LabDen",
        template: "%s | LabDen",
    },
    // F1-T3: description global (~155 car.)
    description:
        "Organiza órdenes, dentistas, producción, entregas y cuentas por cobrar con LabDen, el sistema para laboratorios dentales. Prueba gratis 30 días.",
    applicationName: "LabDen",
    // F1-T4: mapa semántico (~14 keywords)
    keywords: [
        "sistema para laboratorios dentales",
        "software para laboratorios dentales",
        "sistema para laboratorio dental",
        "programa para laboratorio dental",
        "plataforma para laboratorios dentales",
        "sistema de gestión para laboratorio dental",
        "software para laboratorio dental en México",
        "control de órdenes para laboratorio dental",
        "control de trabajos dentales",
        "gestión de laboratorio dental",
        "administración de laboratorio dental",
        "software para órdenes de trabajo dental",
        "sistema para cuentas por cobrar en laboratorio dental",
        "LabDen",
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
    // F1-T6: canonical "/" resuelto contra metadataBase www.
    alternates: { canonical: "/" },
    // F1-T5: OG con nuevo title/description/url/image.
    openGraph: {
        type: "website",
        siteName: "LabDen",
        locale: "es_MX",
        url: "/",
        title: "Sistema para Laboratorios Dentales en México | LabDen",
        description:
            "Organiza órdenes, dentistas, producción, entregas y cuentas por cobrar con LabDen. Prueba gratis 30 días.",
        // TODO F5: cambiar a /images/sistema-para-laboratorios-dentales-labden.webp cuando exista (F5-T2).
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Sistema para Laboratorios Dentales en México — LabDen",
            },
        ],
    },
    // F1-T5: Twitter card.
    twitter: {
        card: "summary_large_image",
        title: "Sistema para Laboratorios Dentales en México | LabDen",
        // F1-T3: twitter description (versión corta)
        description:
            "Controla órdenes, dentistas, producción y cuentas por cobrar con LabDen.",
        // TODO F5: cambiar a /images/sistema-para-laboratorios-dentales-labden.webp cuando exista (F5-T2).
        images: ["/opengraph-image"],
    },
    // F1-T6: index/follow confirmado.
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

// F4-T1: Organization — areaServed México + description alineada a copy canónico (COPY.md).
const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LabDen",
    url: SITE_URL,
    logo: `${SITE_URL}/labden-icon.png`,
    description:
        "LabDen es un sistema para laboratorios dentales que ayuda a controlar órdenes de trabajo, dentistas, producción, entregas, ingresos y cuentas por cobrar.",
    areaServed: { "@type": "Country", "name": "México" },
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

// F4-T2: SoftwareApplication — areaServed México + description nueva; AggregateOffer intacto (D5 = MANTENER).
const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LabDen",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
        "Sistema para laboratorios dentales que permite controlar órdenes, dentistas, producción, entregas, ingresos y cuentas por cobrar.",
    areaServed: { "@type": "Country", "name": "México" },
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
                {/* Escape < as < to prevent </script> breakout in JSON-LD (same pattern as faq-schema.tsx). */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c") }}
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
