import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { ValueProposition } from "@/components/home/value-proposition";
import { FeaturesGrid } from "@/components/home/features-grid";
import { ProductShowcase } from "@/components/home/product-showcase";
import { PricingSection } from "@/components/home/pricing-section";
import { SecuritySection } from "@/components/home/security-section";
import { getHomeDataStruct } from "@/lib/wordpress";

export const revalidate = 300;

export default async function Home() {
    const homeData = await getHomeDataStruct();

    if (!homeData) {
        // WordPress down o sin datos: lanzamos para que app/error.tsx se haga cargo.
        throw new Error("No se pudo cargar el contenido desde el CMS.");
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <HeroSection
                badgeText={homeData.hero.badge}
                title={homeData.hero.title}
                subtitle={homeData.hero.subtitle}
                ctaText={homeData.hero.ctaPrimary}
                secondaryButtonText={homeData.hero.ctaSecondary}
                footerText={homeData.hero.footerText}
            />
            <ValueProposition
                sectionTitle="Tu laboratorio hoy vs. Tu laboratorio con LABDEN"
                sectionSubtitle="Digitaliza tu operación sin cambiar tu forma de trabajar. Solo eliminas lo que te frena."
                painPoints={homeData.problem.cards.map(c => ({
                    title: c.title,
                    description: c.description
                }))}
                gainPoints={homeData.solution.cards.map(c => ({
                    title: c.title,
                    description: c.description
                }))}
            />
            <section id="como-funciona" className="py-24 bg-surface/30 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FeaturesGrid
                            title={homeData.howItWorks.title}
                            steps={homeData.howItWorks.steps.map(s => ({
                                stepNumber: s.number,
                                stepTitle: s.title,
                                stepDescription: s.description
                            }))}
                        />
                        <ProductShowcase
                            title={homeData.howItWorks.dashboardPreview.title}
                            description={homeData.howItWorks.dashboardPreview.description}
                        />
                    </div>
                </div>
            </section>
            <PricingSection />
            <SecuritySection {...(homeData.security ?? {})} />
            <Footer tagline={homeData.footer.tagline} />
        </main>
    );
}
