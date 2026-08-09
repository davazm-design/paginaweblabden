import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
    ClipboardList,
    BarChart3,
    History,
    MessageCircle,
    Wallet,
    ShieldCheck,
    Smartphone,
    Puzzle,
    ArrowRight,
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

const FEATURES = [
    {
        icon: ClipboardList,
        title: "Gestión de órdenes",
        description: "Recibe órdenes digitales claras con fotos, indicaciones y materiales. Todo organizado desde el inicio.",
    },
    {
        icon: BarChart3,
        title: "Seguimiento por estatus",
        description: "Visualiza en qué etapa está cada trabajo: nuevo, en proceso, terminado o entregado.",
    },
    {
        icon: History,
        title: "Historial completo",
        description: "Consulta el historial de cada caso, cambios registrados y comunicación con el dentista.",
    },
    {
        icon: MessageCircle,
        title: "Comunicación organizada",
        description: "Toda la conversación relacionada con cada caso conectada directamente a la orden de trabajo.",
    },
    {
        icon: Wallet,
        title: "Control de cobros e ingresos",
        description: "Visualiza lo que te deben, lo que has cobrado y la actividad de cada dentista. Sin Excel.",
    },
    {
        icon: ShieldCheck,
        title: "Accesos y seguridad",
        description: "Tú decides quién accede y qué puede hacer. Datos protegidos con encriptación y respaldos diarios.",
    },
    {
        icon: Smartphone,
        title: "Desde cualquier lugar",
        description: "En computadora, tablet o celular. Tu laboratorio contigo siempre.",
    },
    {
        icon: Puzzle,
        title: "Integraciones futuras",
        description: "Un ecosistema abierto que sigue creciendo. Conexión con más herramientas y nuevas funcionalidades.",
    },
];

export default function PlataformaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent uppercase tracking-wider mb-6">
                        La plataforma
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        ¿Qué es LabDen?
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                        Una plataforma diseñada para organizar la comunicación entre dentistas y laboratorios dentales. Centraliza órdenes, seguimiento, estatus e información en un solo lugar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button variant="primary" size="lg" href="/prueba">
                            Prueba gratis 15 días
                        </Button>
                        <Button variant="outline" size="lg" href="#funciones">
                            Ver funciones
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="funciones" className="py-20 md:py-28 bg-background">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                            Funciones principales
                        </h2>
                        <p className="text-muted max-w-lg mx-auto">
                            Todo lo que tu laboratorio necesita para trabajar con más claridad y menos desgaste.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {FEATURES.map((f) => (
                            <div key={f.title} className="flex flex-col p-6 rounded-2xl bg-surface border border-border hover:border-accent/20 hover:shadow-md transition-all">
                                <span className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                                    <f.icon className="w-5 h-5" />
                                </span>
                                <h3 className="text-sm font-bold text-foreground mb-2">{f.title}</h3>
                                <p className="text-xs text-muted leading-relaxed flex-1">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-surface border-t border-border text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        ¿Listo para recuperar el control?
                    </h2>
                    <p className="text-muted mb-8">
                        Prueba LabDen sin compromiso. Configura tu laboratorio en minutos.
                    </p>
                    <Button variant="primary" size="lg" href="/prueba">
                        Prueba gratis 15 días <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
