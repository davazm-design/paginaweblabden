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
    title: "Plataforma | LabDen",
    description:
        "Conoce cómo LabDen organiza órdenes, comunicación y cobros de tu laboratorio dental en un solo lugar.",
    alternates: { canonical: "/plataforma" },
    openGraph: {
        title: "Plataforma | LabDen",
        description:
            "Gestión de órdenes, comunicación con dentistas y control financiero. Todo en una plataforma.",
        type: "website",
        url: "/plataforma",
    },
};

export default function PlataformaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />

            <ProductHero
                title="Tres problemas. Una solución."
                subtitle="LabDen resuelve los 3 dolores operativos más comunes de los laboratorios dentales."
                ctaText="Prueba gratis 14 días"
                ctaHref="https://app.labden.com.mx/auth/register"
            />

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
                            afterTitle="Todo en orden"
                            afterText="Visualiza cada trabajo desde que entra hasta que sale."
                            features={[
                                "Tablero en tiempo real",
                                "Etapas personalizables",
                                "Historial completo"
                            ]}
                        />

                        <TransformationCard
                            area="Comunicación con Dentistas"
                            icon={Globe}
                            beforeTitle="Mensajes dispersos"
                            beforeText="Los dentistas envían trabajos por WhatsApp causando confusión."
                            afterTitle="Comunicación organizada"
                            afterText="Cada dentista con su portal y toda la información en un solo lugar."
                            features={[
                                "Portal para dentistas",
                                "Órdenes digitales claras",
                                "Notificaciones automáticas"
                            ]}
                        />

                        <TransformationCard
                            area="Control de Cobros"
                            icon={CreditCard}
                            beforeTitle="Incertidumbre financiera"
                            beforeText="Pagos olvidados y cuentas por cobrar sin visibilidad."
                            afterTitle="Control financiero al día"
                            afterText="Visualiza pendientes, ingresos y cuentas por cobrar por clínica."
                            features={[
                                "Cuentas por cobrar",
                                "Ingresos por dentista",
                                "Menos pérdidas"
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <ProductShowcase
                        title="Todo claro, desde el primer clic"
                        description="Visualiza órdenes, cobros y comunicación en un solo lugar."
                    />
                </div>
            </section>

            <ProductoFinalCta />

            <Footer />
        </main>
    );
}
