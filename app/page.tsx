import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { ValueProposition } from "@/components/home/value-proposition";
import { FeaturesGrid } from "@/components/home/features-grid";
import { ProductShowcase } from "@/components/home/product-showcase";
import { PricingSection } from "@/components/home/pricing-section";
import { SecuritySection } from "@/components/home/security-section";
import { getHomeDataStruct } from "@/lib/wordpress";
import type { HomePageDomain } from "@/lib/types";

export const revalidate = 300;

// Contenido de respaldo usado cuando WordPress no responde durante el build o en runtime.
// Copy alineado con marketing/02_VALUE_PROPOSITION.md.
const FALLBACK_HOME_DATA: HomePageDomain = {
    hero: {
        badge: "Nuevo",
        title: "El sistema operativo para laboratorios dentales",
        subtitle: "Digitaliza tu operación sin cambiar tu forma de trabajar. Solo eliminas lo que te frena.",
        ctaPrimary: "Probar gratis 14 días",
        ctaSecondary: "Ver planes",
        footerText: "Sin tarjeta de crédito. Cancela cuando quieras."
    },
    problem: {
        title: "Tu laboratorio hoy",
        description: "El caos operativo que frena tu crecimiento",
        cards: [
            {
                title: "Órdenes perdidas en WhatsApp",
                description: "Sin un sistema claro, los trabajos se pierden entre mensajes y el técnico estrella se vuelve indispensable."
            },
            {
                title: "Excel que no aguanta el ritmo",
                description: "Hojas desactualizadas, fórmulas rotas y cero visibilidad del estado real de cada orden."
            },
            {
                title: "Doctores que llaman para saber en qué va su trabajo",
                description: "Sin notificaciones automáticas, cada llamada interrumpe tu producción y daña la relación."
            }
        ]
    },
    solution: {
        title: "Tu laboratorio con LABDEN",
        subtitle: "Control total sin cambiar tu forma de trabajar",
        cards: [
            {
                title: "Sabes en qué va cada orden",
                description: "Órdenes digitales con odontograma, materiales y timeline. Nada se pierde."
            },
            {
                title: "Tus doctores se informan solos",
                description: "Notificaciones automáticas por email. Ellos saben el estado sin tener que llamarte."
            },
            {
                title: "Visibilidad financiera real",
                description: "Dashboard de cobros, cuentas por cobrar y productividad. Sin fórmulas de Excel."
            }
        ]
    },
    howItWorks: {
        title: "Cómo funciona",
        steps: [
            {
                number: "01",
                title: "Crea tu laboratorio",
                description: "Regístrate y configura tu lab en minutos. Sin instalación, sin consultor."
            },
            {
                number: "02",
                title: "Invita a tu equipo y doctores",
                description: "Cada quien ve solo lo suyo. Tu equipo en producción, tus doctores en su portal."
            },
            {
                number: "03",
                title: "Opera desde el primer día",
                description: "Captura órdenes, gestiona entregas y cobra sin salir del sistema."
            }
        ],
        dashboardPreview: {
            title: "Todo en un solo lugar",
            description: "Panel de control diseñado para protésicos, no para vendedores. Habla el lenguaje de tu lab."
        }
    },
    security: undefined,
    footer: {
        tagline: "El sistema operativo para laboratorios dentales."
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
            <HeroSection
                badgeText={data.hero.badge}
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                ctaText={data.hero.ctaPrimary}
                secondaryButtonText={data.hero.ctaSecondary}
                footerText={data.hero.footerText}
            />
            <ValueProposition
                sectionTitle="Tu laboratorio hoy vs. Tu laboratorio con LABDEN"
                sectionSubtitle="Digitaliza tu operación sin cambiar tu forma de trabajar. Solo eliminas lo que te frena."
                painPoints={data.problem.cards.map(c => ({
                    title: c.title,
                    description: c.description
                }))}
                gainPoints={data.solution.cards.map(c => ({
                    title: c.title,
                    description: c.description
                }))}
            />
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
            <Footer tagline={data.footer.tagline} />
        </main>
    );
}
