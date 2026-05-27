import { Send, ClipboardList, Wrench, PackageCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const STEPS = [
    {
        icon: Send,
        number: "1",
        title: "El dentista envía la orden completa",
        description: "Con fotos, indicaciones y archivos en la plataforma.",
    },
    {
        icon: ClipboardList,
        number: "2",
        title: "Tú la recibes y organizas",
        description: "En tu panel con toda la información clara.",
    },
    {
        icon: Wrench,
        number: "3",
        title: "Elaboras el trabajo",
        description: "Con procesos más precisos y sin retrabajos.",
    },
    {
        icon: PackageCheck,
        number: "4",
        title: "Entregas y cierras el caso",
        description: "El dentista y tú siempre informados.",
    },
];

export function HowItWorks() {
    return (
        <section id="como-funciona" className="py-20 md:py-28 bg-surface/30">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-14">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                        Simple, rápido y efectivo
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Así de fácil funciona <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">LabDen</span>
                    </h2>
                    <p className="text-muted max-w-xl">
                        Un flujo diseñado para que ahorres tiempo, evites errores y mantengas todo bajo control.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((step, idx) => (
                        <div key={step.number} className="relative flex flex-col items-center text-center p-6">
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4 relative">
                                <step.icon className="w-6 h-6" />
                                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
                            <p className="text-xs text-muted leading-relaxed">{step.description}</p>
                            {idx < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-10 -right-3 text-border text-2xl">→</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Button variant="outline" size="lg" href="/plataforma">
                        Ver recorrido completo
                    </Button>
                </div>
            </div>
        </section>
    )
}
