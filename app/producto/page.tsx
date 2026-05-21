import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductHero } from "@/components/producto/product-hero";
import { TransformationCard } from "@/components/producto/transformation-card";
import { ProductShowcase } from "@/components/home/product-showcase";
import { ProductoFinalCta } from "@/components/producto/producto-final-cta";
import {
    ClipboardCheck,
    Globe,
    CreditCard,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Producto",
    description:
        "Tres problemas, una solución. LABDEN resuelve gestión de órdenes, portal para dentistas y control financiero en una plataforma para laboratorios dentales.",
    alternates: { canonical: "/producto" },
    openGraph: {
        title: "Producto | LABDEN",
        description:
            "Gestión de órdenes, portal para dentistas y control financiero. Todo en una plataforma.",
        type: "website",
        url: "/producto",
    },
};

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />

            {/* Hero - H1 único */}
            <ProductHero
                title="Tres problemas. Una solución."
                subtitle="LABDEN resuelve los 3 dolores operativos más comunes de los laboratorios dentales."
                ctaText="Empieza tu Prueba Gratis"
                ctaHref="/auth/register"
            />

            {/* Transformation Section - H2 */}
            <section className="py-24 bg-[#F8FAFC] overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Transforma tu Operación
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <TransformationCard
                            area="Gestión de Órdenes"
                            icon={ClipboardCheck}
                            beforeTitle="Caos en el seguimiento"
                            beforeText="¿Pierdes tiempo buscando notas o descifrando estatus?"
                            afterTitle="Trazabilidad total"
                            afterText="Visualiza cada trabajo desde que entra hasta que sale."
                            features={[
                                "Tablero en tiempo real",
                                "Etapas personalizables",
                                "Códigos QR"
                            ]}
                        />

                        <TransformationCard
                            area="Portal para Dentistas"
                            icon={Globe}
                            beforeTitle="Desorden digital"
                            beforeText="Los dentistas envían trabajos por WhatsApp causando confusión."
                            afterTitle="Portal VIP con tu marca"
                            afterText="Dales acceso a un portal exclusivo con tu logo y colores."
                            features={[
                                "App web para clientes",
                                "Recepción de STL",
                                "Notificaciones automáticas"
                            ]}
                        />

                        <TransformationCard
                            area="Control Financiero"
                            icon={CreditCard}
                            beforeTitle="Estrés de cobranza"
                            beforeText="Pagos olvidados y facturas manuales te quitan liquidez."
                            afterTitle="Cobros automatizados"
                            afterText="Automatiza cobros, suscripciones y alertas de saldo."
                            features={[
                                "Integración Stripe",
                                "Corte de caja automático",
                                "Alertas a morosos"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Dashboard Showcase - H2 (reutilizado) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <ProductShowcase
                        title="Todo claro, desde el primer clic"
                        description="Visualiza órdenes, finanzas y comunicación en un solo dashboard."
                    />
                </div>
            </section>

            {/* CTA Final - H2 (Client Component with tracking) */}
            <ProductoFinalCta />

            <Footer tagline="Simplificando la gestión de laboratorios dentales." />
        </main>
    );
}
