import { Button } from "@/components/ui/button"

interface ProductHeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
}

export function ProductHero({ title, subtitle, ctaText, ctaHref }: ProductHeroProps) {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto max-w-4xl text-center">
                {/* H1 único de la página */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
                    {subtitle}
                </p>

                <Button size="lg" className="h-12 px-8 text-base" href={ctaHref}>
                    {ctaText}
                </Button>
            </div>
        </section>
    )
}
