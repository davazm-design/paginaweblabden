"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { analytics } from "@/lib/analytics"

export function ProductoFinalCta() {
    return (
        <section className="py-24 bg-surface/50 border-t border-border text-center">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                    ¿Listo para modernizar tu laboratorio?
                </h2>
                <p className="text-muted mb-10 text-lg">
                    Únete a los laboratorios más eficientes de Latinoamérica.
                </p>
                <Button
                    size="lg"
                    className="w-full md:w-auto h-14 px-10 text-lg"
                    href="/auth/register"
                    onClick={() => analytics.ctaProductoFinalClick()}
                >
                    Empieza tu Prueba Gratis <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
        </section>
    )
}
