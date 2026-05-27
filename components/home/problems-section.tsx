"use client"

import { X, Check } from "lucide-react"

const PAIN_POINTS = [
    "Órdenes incompletas o mal explicadas",
    "Información dispersa en WhatsApp y papel",
    "Cambios que no quedan registrados",
    "Falta de visibilidad del estatus",
    "Retrabajos que cuestan tiempo y dinero",
];

const GAIN_POINTS = [
    "Órdenes digitales completas y claras",
    "Comunicación organizada con cada dentista",
    "Seguimiento en tiempo real del estatus",
    "Historial de cada trabajo siempre disponible",
    "Menos retrabajos, más tranquilidad",
];

export function ProblemsSection() {
    return (
        <section className="py-20 md:py-28 bg-surface/50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Before */}
                    <div className="rounded-2xl border border-red-200/50 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 p-8 md:p-10">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                            Así se pierde tiempo y dinero
                        </h3>
                        <p className="text-sm text-muted mb-6">
                            Cuando la información no llega clara, todo el laboratorio paga las consecuencias.
                        </p>
                        <ul className="space-y-3.5">
                            {PAIN_POINTS.map((point) => (
                                <li key={point} className="flex items-start gap-3 text-sm text-muted">
                                    <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-3 h-3" />
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After */}
                    <div className="rounded-2xl border border-emerald-200/50 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-950/10 p-8 md:p-10">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                            Con LabDen, todo está en orden
                        </h3>
                        <p className="text-sm text-muted mb-6">
                            La información llega clara desde el inicio. Tu equipo se enfoca en lo que importa.
                        </p>
                        <ul className="space-y-3.5">
                            {GAIN_POINTS.map((point) => (
                                <li key={point} className="flex items-start gap-3 text-sm text-muted">
                                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3" />
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
