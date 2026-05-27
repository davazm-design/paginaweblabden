import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { ProblemsSection } from "@/components/home/problems-section";
import { FeaturesOverview } from "@/components/home/features-overview";
import { HowItWorks } from "@/components/home/how-it-works";
import { FinancialSection } from "@/components/home/financial-section";
import { CommunicationSection } from "@/components/home/communication-section";
import { PricingSection } from "@/components/home/pricing-section";
import { SecuritySection } from "@/components/home/security-section";

export const revalidate = 300;

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
            <SecuritySection />
            <Footer />
        </main>
    );
}
