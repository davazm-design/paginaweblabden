import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { StorySections } from "@/components/home/story-sections";
import { HowItWorks } from "@/components/home/how-it-works";
import { SocialProof } from "@/components/home/social-proof";
import { PricingSection } from "@/components/home/pricing-section";
import { AcademyTeaser } from "@/components/home/academy-teaser";
import { EmotionalBlock } from "@/components/home/emotional-block";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <HeroSection />
            <StorySections />
            <HowItWorks />
            <SocialProof />
            <PricingSection />
            <AcademyTeaser />
            <EmotionalBlock />
            <FinalCta />
            <Footer />
        </main>
    );
}
