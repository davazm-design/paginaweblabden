import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { BenefitsBar } from "@/components/home/benefits-bar";
import { EmotionalBlock } from "@/components/home/emotional-block";
import { StorySections } from "@/components/home/story-sections";
import { ProblemsSection } from "@/components/home/problems-section";
import { IdealSection } from "@/components/home/ideal-section";
import { FinancialSection } from "@/components/home/financial-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { SocialProof } from "@/components/home/social-proof";
import { PricingSection } from "@/components/home/pricing-section";
import { AcademyTeaser } from "@/components/home/academy-teaser";
import { CommunitySection } from "@/components/home/community-section";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            {/* 1. Hero */}
            <HeroSection />
            {/* 2. Microbeneficios */}
            <BenefitsBar />
            {/* 3. Diferenciador / origen */}
            <EmotionalBlock />
            {/* 4. Funcionalidades — 6 tarjetas con imágenes */}
            <StorySections />
            {/* 5. Dolores + Tabla comparativa */}
            <ProblemsSection />
            {/* 6. Ideal para 1–10 empleados */}
            <IdealSection />
            {/* 7. Control financiero */}
            <FinancialSection />
            {/* Ancla #como-funciona — 4 pasos */}
            <HowItWorks />
            {/* Métricas / Social proof */}
            <SocialProof />
            {/* Precios */}
            <PricingSection />
            {/* 9. Academy */}
            <AcademyTeaser />
            {/* 10. Comunidad */}
            <CommunitySection />
            {/* 11. Prueba gratis 30 días */}
            <FinalCta />
            <Footer />
        </main>
    );
}
