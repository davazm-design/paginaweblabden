import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingSection } from "@/components/home/pricing-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Planes y precios | LabDen",
    description:
        "Planes claros desde $699 MXN/mes. Digitaliza tu laboratorio dental con prueba gratis de 30 días, sin tarjeta de crédito.",
    alternates: { canonical: "/precios" },
    openGraph: {
        title: "Planes y precios | LabDen",
        description:
            "Planes claros desde $699 MXN/mes para laboratorios dentales. Prueba gratis 30 días.",
        type: "website",
        url: "/precios",
    },
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "¿Cuánto cuesta LabDen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "LabDen tiene dos planes con precio fijo: Plan Starter a $699 MXN/mes (hasta 100 órdenes) y Plan Profesional a $1,099 MXN/mes (órdenes ilimitadas + control financiero y de producción). Para laboratorios de mayor escala existe el Plan Enterprise a medida. Ambos planes con precio fijo incluyen 30 días de prueba gratis sin tarjeta de crédito.",
            },
        },
        {
            "@type": "Question",
            name: "¿Puedo probar LabDen gratis?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Ofrecemos 30 días de prueba gratis sin tarjeta de crédito y sin compromiso. Puedes cancelar cuando quieras.",
            },
        },
        {
            "@type": "Question",
            name: "¿Qué incluye el pago anual?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Con el pago anual recibes 3 meses gratis, lo que representa un ahorro del 25% respecto al pago mensual.",
            },
        },
    ],
};

export default function PreciosPage() {
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-surface-elevated text-sm text-accent font-medium mb-6 shadow-sm">
                        Precios transparentes
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Un plan para cada etapa de tu laboratorio
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Sin contratos largos, sin sorpresas. Empieza con 30 días gratis y paga solo si te aporta valor.
                    </p>
                </div>
            </section>

            <PricingSection />

            <section className="py-20 bg-surface border-t border-border">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        ¿Necesitas algo distinto?
                    </h2>
                    <p className="text-muted mb-8 max-w-xl mx-auto">
                        Para laboratorios de alto volumen, integraciones a la medida o procesos especiales, hablemos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" href="/contacto">
                            Hablar con ventas
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Link
                            href="/plataforma"
                            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium text-muted hover:text-foreground transition-colors"
                        >
                            Conoce la plataforma
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
        </>
    );
}
