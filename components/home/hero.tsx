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
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/8 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent uppercase tracking-wider mb-8">
                        Hecho para laboratorios dentales
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
                        Recupera el control de tu laboratorio.
                    </h1>

                    <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
                        Centraliza órdenes, seguimiento y comunicación en un solo lugar para trabajar con más claridad y menos desgaste.
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10">
                        {BENEFITS.map((b) => (
                            <div key={b} className="flex items-center gap-1.5 text-sm text-muted">
                                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                                {b}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
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

                <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] -z-20 opacity-15 pointer-events-none blur-[100px] bg-accent rounded-full" />
                    <div className="relative w-full h-full flex items-center justify-center"
                        style={{
                            maskImage: 'radial-gradient(circle at center, black 50%, transparent 90%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 90%)'
                        }}
                    >
                        <Image
                            src="/images/hero-3d.png"
                            alt="Panel de control LabDen"
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
