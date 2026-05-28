import { Clock, CheckCircle2, Calendar, Smile } from "lucide-react"

const METRICS = [
    {
        icon: Clock,
        value: "-47%",
        label: "menos tiempo en retrabajos",
        color: "from-cyan-500/15 to-blue-500/10",
        iconColor: "text-cyan-500",
    },
    {
        icon: CheckCircle2,
        value: "+85%",
        label: "órdenes entregadas sin correcciones",
        color: "from-emerald-500/15 to-green-500/10",
        iconColor: "text-emerald-500",
    },
    {
        icon: Calendar,
        value: "3.2 hrs",
        label: "ahorradas por día en organización",
        color: "from-violet-500/15 to-purple-500/10",
        iconColor: "text-violet-500",
    },
    {
        icon: Smile,
        value: "100%",
        label: "clientes más satisfechos cada mes",
        color: "from-amber-500/15 to-orange-500/10",
        iconColor: "text-amber-500",
    },
];

export function SocialProof() {
    return (
        <section className="py-16 md:py-24 bg-surface/50 border-y border-border">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                        Resultados reales
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Así trabajan los laboratorios que usan LabDen
                    </h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Más claridad, menos retrabajos y entregas siempre en tiempo.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {METRICS.map((m) => (
                        <div
                            key={m.label}
                            className={`p-5 md:p-6 rounded-2xl border border-border bg-gradient-to-br ${m.color} backdrop-blur-sm`}
                        >
                            <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background/60 ${m.iconColor} mb-4`}>
                                <m.icon className="w-5 h-5" />
                            </span>
                            <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                                {m.value}
                            </p>
                            <p className="text-xs md:text-sm text-muted leading-tight">
                                {m.label}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-muted/60 mt-6">
                    Resultados estimados basados en operación promedio de laboratorios dentales.
                </p>
            </div>
        </section>
    )
}
