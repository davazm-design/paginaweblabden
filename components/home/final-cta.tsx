"use client"

import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"

export function FinalCta() {
    return (
        <section className="py-20 md:py-28 bg-surface border-t border-border">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                    Prueba LabDen gratis durante 30 días
                </h2>
                <p className="text-muted mb-8 max-w-xl mx-auto leading-relaxed">
                    LabDen es un sistema para laboratorios dentales en México. Ayuda a controlar órdenes de trabajo, dentistas, producción, entregas, ingresos y cuentas por cobrar desde una sola plataforma.
                </p>

                <Button
                    variant="primary"
                    size="lg"
                    className="h-14 px-10 text-base"
                    href="https://app.labden.com.mx/auth/register"
                    onClick={() => analytics.clickPruebaGratis('final_cta')}
                >
                    Prueba gratis 30 días
                </Button>

                <p className="mt-5 text-sm text-muted/60">
                    Sin tarjeta de crédito. Sin compromiso. Hecho para laboratorios dentales.
                </p>
            </div>
        </section>
    )
}
