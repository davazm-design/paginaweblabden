import { Send, ClipboardList, Wrench, PackageCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const STEPS = [
    {
        icon: Send,
        number: "1",
        title: "El dentista envía la orden completa",
        description: "Con fotos, indicaciones y archivos organizados desde el inicio.",
        mockup: "/images/story/paso-1-envio-orden-laboratorio-dental.webp",
    },
    {
        icon: ClipboardList,
        number: "2",
        title: "El laboratorio recibe y organiza",
        description: "La información queda organizada automáticamente en un solo lugar.",
        mockup: "/images/story/paso-2-organizacion-laboratorio-dental.webp",
    },
    {
        icon: Wrench,
        number: "3",
        title: "Das seguimiento en tiempo real",
        description: "Visualiza el estatus de cada trabajo y evita pérdidas de información.",
        mockup: "/images/story/paso-3-seguimiento-produccion-dental.webp",
    },
    {
        icon: PackageCheck,
        number: "4",
        title: "Entregas con más control",
        description: "Todo queda registrado para el laboratorio y el dentista.",
        mockup: "/images/story/paso-4-entrega-trabajo-dental.webp",
    },
];

export function HowItWorks() {
    return (
        <section id="como-funciona" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-12 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                        Simple, rápido y efectivo
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Así de fácil funciona <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">LabDen</span>
                    </h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Un flujo diseñado para que ahorres tiempo, evites errores y mantengas todo bajo control.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line — hidden on mobile, shown from sm */}
                    <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-cyan-500/30 to-emerald-500/30" />

                    <div className="space-y-8 md:space-y-12">
                        {STEPS.map((step) => (
                            <div key={step.number} className="grid sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start">
                                {/* Number + icon column */}
                                <div className="relative flex sm:flex-col items-center gap-3 sm:gap-2 z-10">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold shadow-lg shadow-blue-500/25 ring-4 ring-background">
                                        {step.number}
                                    </span>
                                    <span className="sm:mt-2 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                                        <step.icon className="w-5 h-5" />
                                    </span>
                                </div>

                                {/* Content + mockup */}
                                <div className="grid md:grid-cols-2 gap-5 items-center pb-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                    <div className="relative rounded-xl overflow-hidden border border-border bg-gradient-to-br from-blue-500/5 to-cyan-500/5 aspect-[4/3]">
                                        <Image
                                            src={step.mockup}
                                            alt={step.title}
                                            fill
                                            loading="lazy"
                                            sizes="(max-width: 768px) 90vw, 45vw"
                                            className="object-contain p-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button variant="primary" size="lg" href="https://app.labden.com.mx/auth/register">
                        Pruébalo gratis 30 días
                    </Button>
                </div>
            </div>
        </section>
    )
}
