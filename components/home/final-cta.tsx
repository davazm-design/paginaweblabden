import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const GUARANTEES = [
    "Sin tarjeta de crédito",
    "Sin compromiso",
    "Cancela cuando quieras",
];

export function FinalCta() {
    return (
        <section className="py-20 md:py-28 bg-surface border-t border-border">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                    ¿Listo para recuperar el control de tu laboratorio?
                </h2>
                <p className="text-muted mb-8 max-w-xl mx-auto leading-relaxed">
                    No vendemos software. Ayudamos a resolver un problema real: la mala comunicación que cuesta tiempo, dinero y tranquilidad.
                </p>

                <Button variant="primary" size="lg" className="h-14 px-10 text-base" href="https://app.labden.com.mx/auth/register">
                    Prueba gratis 30 días
                </Button>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                    {GUARANTEES.map((g) => (
                        <div key={g} className="flex items-center gap-1.5 text-sm text-muted">
                            <Check className="w-4 h-4 text-emerald-500" />
                            {g}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
