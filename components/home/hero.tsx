"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { analytics } from "@/lib/analytics"
import { Check } from "lucide-react"

const BENEFITS = [
    "Menos retrabajos",
    "Más control",
    "Mejor comunicación",
    "Más rentabilidad",
];

export function HeroSection() {
    return (
        <section className="relative pt-28 pb-0 md:pt-40 md:pb-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/8 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                {/* Text content */}
                <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent uppercase tracking-wider mb-8">
                        Hecho para laboratorios dentales
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
                        Recupera el control de tu laboratorio.
                    </h1>

                    <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-xl mx-auto">
                        Centraliza órdenes, seguimiento y comunicación en un solo lugar para trabajar con más claridad y menos desgaste.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-10">
                        {BENEFITS.map((b) => (
                            <div key={b} className="flex items-center gap-1.5 text-sm text-muted">
                                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                                {b}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-12 px-8 text-base font-medium"
                            href="https://app.labden.com.mx/auth/register"
                            onClick={() => analytics.ctaHomeHeroClick()}
                        >
                            Prueba gratis 14 días
                        </Button>
                        <Button size="lg" variant="ghost" className="w-full sm:w-auto h-12 px-8 text-base text-muted hover:text-foreground" href="#como-funciona">
                            Ver cómo funciona
                        </Button>
                    </div>

                    <p className="mt-6 text-xs text-muted/60">
                        Sin tarjeta de crédito · Sin compromiso · Cancela cuando quieras
                    </p>
                </div>

                {/* Hero image — full width */}
                <div className="relative max-w-5xl mx-auto">
                    <Image
                        src="/images/hero-platform.png"
                        alt="Plataforma LabDen — órdenes, seguimiento, finanzas"
                        width={1600}
                        height={900}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
