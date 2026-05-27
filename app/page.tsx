import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { ProblemsSection } from "@/components/home/problems-section";
import { FeaturesOverview } from "@/components/home/features-overview";
import { HowItWorks } from "@/components/home/how-it-works";
import { FinancialSection } from "@/components/home/financial-section";
import { CommunicationSection } from "@/components/home/communication-section";
import { PricingSection } from "@/components/home/pricing-section";
import { AcademyTeaser } from "@/components/home/academy-teaser";
import { EmotionalBlock } from "@/components/home/emotional-block";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <HeroSection />
            <ProblemsSection />
            <FeaturesOverview />
            <HowItWorks />
            <FinancialSection />
            <CommunicationSection />
            <PricingSection />
            <AcademyTeaser />
            <EmotionalBlock />
            <FinalCta />
            <Footer />
        </main>
    );
}
