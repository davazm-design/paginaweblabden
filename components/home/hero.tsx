"use client"

import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"

export function HeroSection() {
    return (
        <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/8 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-[11px] md:text-xs font-semibold text-accent uppercase tracking-wider mb-6 md:mb-8">
                        Hecho para laboratorios dentales
                    </div>

                    {/* Desktop H1 */}
                    <h1 className="hidden sm:block text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5 md:mb-6">
                        Sistema para laboratorios dentales que ordena tus trabajos, dentistas y cobros
                    </h1>

                    {/* Mobile H1 — versión corta */}
                    <h1 className="sm:hidden text-[28px] font-bold tracking-tight text-foreground leading-[1.1] mb-5">
                        Sistema para laboratorios dentales
                    </h1>

                    {/* Desktop subtitle */}
                    <p className="hidden sm:block text-base md:text-lg text-muted leading-relaxed mb-7 md:mb-8 max-w-xl mx-auto">
                        LabDen ayuda a laboratorios dentales a recibir órdenes completas, dar seguimiento a cada trabajo, mejorar la comunicación con dentistas y controlar ingresos desde una sola plataforma.
                    </p>

                    {/* Mobile subtitle — versión corta */}
                    <p className="sm:hidden text-base text-muted leading-relaxed mb-7 max-w-xl mx-auto">
                        Controla órdenes, dentistas, producción y cobros desde una sola plataforma.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-12 px-8 text-base font-medium"
                            href="https://app.labden.com.mx/auth/register"
                            onClick={() => analytics.ctaHomeHeroClick()}
                        >
                            Prueba gratis 30 días
                        </Button>
                        <Button size="lg" variant="ghost" className="w-full sm:w-auto h-12 px-8 text-base text-muted hover:text-foreground" href="#como-funciona">
                            Ver cómo funciona
                        </Button>
                    </div>

                    <p className="mt-5 text-xs text-muted/60">
                        Sin tarjeta de crédito. Sin compromiso. Diseñado para laboratorios dentales.
                    </p>
                </div>
            </div>
        </section>
    )
}
