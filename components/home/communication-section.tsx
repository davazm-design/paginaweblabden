import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const BEFORE = [
    "Mensajes dispersos",
    "Fotos sin contexto",
    "Cambios sin registro",
    "Información incompleta",
    "Retrabajos constantes",
];

const AFTER = [
    "Órdenes completas",
    "Fotos e indicaciones claras",
    "Historial y cambios registrados",
    "Estatus siempre visible",
    "Menos retrabajos y estrés",
];

export function CommunicationSection() {
    return (
        <section className="py-20 md:py-28 bg-surface/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                        Comunicación que sí funciona
                    </h2>
                    <p className="text-muted max-w-lg mx-auto">
                        Menos mensajes sueltos. Más claridad, acuerdos y resultados.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 items-start">
                    {/* Before */}
                    <div className="p-6 rounded-2xl bg-background border border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Antes (desorden)</p>
                        <ul className="space-y-3">
                            {BEFORE.map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Arrow / visual center */}
                    <div className="flex items-center justify-center py-8 md:py-0">
                        <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center">
                            <span className="text-accent text-2xl font-bold">→</span>
                        </div>
                    </div>

                    {/* After */}
                    <div className="p-6 rounded-2xl bg-background border border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">Con LabDen (claridad)</p>
                        <ul className="space-y-3">
                            {AFTER.map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Button variant="outline" href="/plataforma">
                        Ver cómo mejora
                    </Button>
                </div>
            </div>
        </section>
    )
}
