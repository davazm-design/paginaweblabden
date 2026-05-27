import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { ProblemsSection } from "@/components/home/problems-section";
import { FeaturesGrid } from "@/components/home/features-grid";
import { ProductShowcase } from "@/components/home/product-showcase";
import { PricingSection } from "@/components/home/pricing-section";
import { SecuritySection } from "@/components/home/security-section";
import { getHomeDataStruct } from "@/lib/wordpress";
import type { HomePageDomain } from "@/lib/types";

export const revalidate = 300;

const FALLBACK_HOME_DATA: HomePageDomain = {
    hero: {
        badge: "Hecho para laboratorios dentales",
        title: "Recupera el control de tu laboratorio.",
        subtitle: "Centraliza órdenes, seguimiento y comunicación en un solo lugar para trabajar con más claridad y menos desgaste.",
        ctaPrimary: "Prueba gratis 14 días",
        ctaSecondary: "Ver cómo funciona",
        footerText: "Sin tarjeta de crédito. Cancela cuando quieras."
    },
    problem: {
        title: "Así se pierde tiempo y dinero",
        description: "Cuando la información no llega clara, todo el laboratorio paga las consecuencias.",
        cards: [
            {
                title: "Órdenes incompletas o mal explicadas",
                description: "La información llega por WhatsApp, papel o de palabra. Se pierde contexto y se generan errores."
            },
            {
                title: "Información dispersa",
                description: "Mensajes en WhatsApp, notas sueltas, Excel desactualizado. Nadie tiene la foto completa."
            },
            {
                title: "Retrabajos constantes",
                description: "Cambios sin registrar, fotos poco claras y falta de seguimiento generan trabajo doble."
            }
        ]
    },
    solution: {
        title: "Con LabDen, todo está en orden",
        subtitle: "La información llega clara desde el inicio",
        cards: [
            {
                title: "Órdenes digitales claras",
                description: "Cada orden con fotos, indicaciones y materiales. Todo en un solo lugar."
            },
            {
                title: "Comunicación organizada",
                description: "Cada dentista con su historial. Sin mensajes perdidos ni malentendidos."
            },
            {
                title: "Control y seguimiento real",
                description: "Estatus visible, historial completo y cuentas por cobrar al día."
            }
        ]
    },
    howItWorks: {
        title: "Así de fácil funciona LabDen",
        steps: [
            {
                number: "01",
                title: "El dentista envía la orden completa",
                description: "Con fotos, indicaciones y archivos en la plataforma."
            },
            {
                number: "02",
                title: "Tú la recibes y organizas",
                description: "En tu panel con toda la información clara."
            },
            {
                number: "03",
                title: "Elaboras el trabajo",
                description: "Con procesos más precisos y sin retrabajos."
            },
            {
                number: "04",
                title: "Entregas y cierras el caso",
                description: "El dentista y tú siempre informados."
            }
        ],
        dashboardPreview: {
            title: "Todo en un solo lugar",
            description: "Panel de control diseñado para el laboratorio dental. Habla tu lenguaje."
        }
    },
    security: undefined,
    footer: {
        tagline: "Organiza la comunicación entre dentistas y laboratorios."
    }
};

export default async function Home() {
    let homeData: HomePageDomain | null = null;

    try {
        homeData = await getHomeDataStruct();
    } catch (err) {
        console.error("[home] Error al obtener datos de WordPress:", err);
    }

    const data = homeData ?? FALLBACK_HOME_DATA;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <HeroSection />
            <ProblemsSection />
            <section id="como-funciona" className="py-24 bg-surface/30 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FeaturesGrid
                            title={data.howItWorks.title}
                            steps={data.howItWorks.steps.map(s => ({
                                stepNumber: s.number,
                                stepTitle: s.title,
                                stepDescription: s.description
                            }))}
                        />
                        <ProductShowcase
                            title={data.howItWorks.dashboardPreview.title}
                            description={data.howItWorks.dashboardPreview.description}
                        />
                    </div>
                </div>
            </section>
            <PricingSection />
            <SecuritySection {...(data.security ?? {})} />
            <Footer />
        </main>
    );
}
