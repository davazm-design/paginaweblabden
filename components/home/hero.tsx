"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { analytics } from "@/lib/analytics"

interface HeroSectionProps {
    badgeText: string;
    title: string;
    subtitle: string;
    ctaText: string;
    secondaryButtonText: string;
    footerText: string;
}

export function HeroSection({ badgeText, title, subtitle, ctaText, secondaryButtonText, footerText }: HeroSectionProps) {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-8 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                        {badgeText}
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground leading-[1.3] mb-8">
                        {title}
                    </h1>

                    <p className="text-base md:text-lg text-muted/80 mb-10 leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-12 px-8 text-base font-medium"
                            href="/precios"
                            onClick={() => analytics.ctaHomeHeroClick()}
                        >
                            {ctaText}
                        </Button>
                        <Button size="lg" variant="ghost" className="w-full sm:w-auto h-12 px-8 text-base text-muted hover:text-foreground" href="/#como-funciona">
                            {secondaryButtonText}
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-3 text-sm font-medium text-muted/80">
                        {footerText}
                    </div>
                </div>

                {/* Visual Content */}
                <div className="relative h-[400px] md:h-[600px] w-full perspective-1000 flex items-center justify-center">

                    {/* Clean Background Glow (Minimalist) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] -z-20 opacity-20 pointer-events-none blur-[100px] bg-accent rounded-full" />

                    {/* Image with Radial Mask */}
                    <div className="relative w-full h-full animate-float flex items-center justify-center"
                        style={{
                            maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
                        }}
                    >
                        <Image
                            src="/images/hero-3d.png"
                            alt="Labden Cloud Dental Core"
                            fill
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
