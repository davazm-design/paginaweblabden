"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"

export function HeroSection() {
    return (
        <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 overflow-hidden">
            {/* Glow del hero — radial-gradient en lugar de blur-[120px] sobre un div grande:
                mismo efecto visual, pero sin el filtro blur que es costosísimo de pintar en CPU móvil. */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] -z-10"
                style={{
                    background: "radial-gradient(50% 50% at 50% 30%, var(--accent) 0%, transparent 70%)",
                    opacity: 0.08,
                }}
            />

            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-[11px] md:text-xs font-semibold text-accent uppercase tracking-wider mb-6 md:mb-8">
                        Hecho para laboratorios dentales
                    </div>

                    {/* H1 único — texto largo en desktop, corto en mobile (un solo nodo <h1>;
                        el span oculto vía display:none no entra al nombre accesible ni al conteo). */}
                    <h1 className="text-[28px] sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5 md:mb-6">
                        <span className="hidden sm:inline">Sistema para laboratorios dentales que ordena tus trabajos, dentistas y cobros</span>
                        <span className="sm:hidden">Sistema para laboratorios dentales</span>
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
                            href="/prueba"
                            onClick={() => analytics.clickPruebaGratis('hero')}
                        >
                            Prueba gratis 15 días
                        </Button>
                        <Button
                            size="lg"
                            variant="ghost"
                            className="w-full sm:w-auto h-12 px-8 text-base text-muted hover:text-foreground"
                            href="#como-funciona"
                            onClick={() => analytics.clickVerComoFunciona()}
                        >
                            Ver cómo funciona
                        </Button>
                    </div>

                    {/* Acceso para usuarios recurrentes — link discreto; el CTA primario
                        sigue siendo "Prueba gratis". Va al login del SaaS. */}
                    <p className="mt-4 text-sm text-muted">
                        ¿Ya tienes cuenta?{" "}
                        <Link
                            href="https://app.labden.com.mx"
                            onClick={() => analytics.clickLogin()}
                            className="font-semibold text-accent hover:underline underline-offset-4"
                        >
                            Entrar →
                        </Link>
                    </p>

                    <p className="mt-3 text-xs text-muted">
                        Sin tarjeta de crédito. Sin compromiso. Diseñado para laboratorios dentales.
                    </p>
                </div>
            </div>
        </section>
    )
}
