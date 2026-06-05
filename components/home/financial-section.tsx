import { Wallet, TrendingUp, Clock } from "lucide-react"

const HIGHLIGHTS = [
    {
        icon: Wallet,
        title: "Cuentas por cobrar",
        description: "Ten visibilidad sobre ingresos, pagos pendientes y trabajos por cobrar.",
    },
    {
        icon: TrendingUp,
        title: "Ingresos por dentista",
        description: "Identifica qué dentistas generan más trabajos y cuánto representan para tu laboratorio.",
    },
    {
        icon: Clock,
        title: "Historial de trabajos y pagos",
        description: "Consulta el registro de cada trabajo y su estado de pago sin depender de registros dispersos.",
    },
];

export function FinancialSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                            Control financiero para saber qué entra, qué falta cobrar y quién te pide más trabajos
                        </h2>
                        <p className="text-muted mb-4 max-w-lg leading-relaxed">
                            LabDen te ayuda a tener más visibilidad sobre los ingresos de tu laboratorio dental, las cuentas por cobrar y los dentistas que más trabajos generan.
                        </p>
                        <p className="text-muted mb-8 max-w-lg leading-relaxed">
                            Así puedes tomar mejores decisiones, detectar pendientes y dejar de depender de registros dispersos.
                        </p>

                        <div className="space-y-4">
                            {HIGHLIGHTS.map((h) => (
                                <div key={h.title} className="flex items-start gap-3">
                                    <span className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                        <h.icon className="w-4 h-4" />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-semibold text-foreground">{h.title}</h3>
                                        <p className="text-sm text-muted">{h.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-emerald-500/5 rounded-3xl -z-10 blur-xl" />
                        <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                            <h3 className="text-sm font-bold text-foreground mb-4">Cuentas por cobrar</h3>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-background border border-border text-center">
                                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Total</p>
                                    <p className="text-base font-bold text-foreground">$245,850</p>
                                </div>
                                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-center">
                                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Vencido</p>
                                    <p className="text-base font-bold text-red-600 dark:text-red-400">$32,400</p>
                                </div>
                                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 text-center">
                                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Por vencer</p>
                                    <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">$213,450</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: "Clínica Sonríe", total: "$86,450", color: "bg-blue-500" },
                                    { name: "Dental Fresh", total: "$62,300", color: "bg-emerald-500" },
                                    { name: "Ortodoncia Avanzada", total: "$48,600", color: "bg-amber-500" },
                                    { name: "Dental Care", total: "$48,500", color: "bg-purple-500" },
                                ].map((clinic) => (
                                    <div key={clinic.name} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-2.5 h-2.5 rounded-full ${clinic.color}`} />
                                            <span className="text-muted">{clinic.name}</span>
                                        </div>
                                        <span className="font-semibold text-foreground">{clinic.total}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-xs text-muted text-center">Datos de ejemplo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
