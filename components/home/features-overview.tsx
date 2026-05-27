import {
    ClipboardList,
    BarChart3,
    History,
    MessageCircle,
    Wallet,
    LineChart,
    ShieldCheck,
    Smartphone,
} from "lucide-react"

const GROUPS = [
    {
        label: "Organiza y da seguimiento",
        features: [
            { icon: ClipboardList, title: "Órdenes claras", description: "Recibe toda la información que necesitas para trabajar sin errores." },
            { icon: BarChart3, title: "Seguimiento por estatus", description: "Visualiza cada caso en tiempo real: nuevo, en proceso, terminado o entregado." },
            { icon: History, title: "Historial completo", description: "Consulta el historial de cada trabajo, cambios y comunicación." },
            { icon: MessageCircle, title: "Comunicación organizada", description: "Mensajes, archivos y acuerdos siempre ordenados." },
        ],
    },
    {
        label: "Controla y haz crecer tu laboratorio",
        features: [
            { icon: Wallet, title: "Control de cobros e ingresos", description: "Consulta lo que te deben por clínica y toma mejores decisiones." },
            { icon: LineChart, title: "Reportes y métricas", description: "Conoce tu productividad, casos por dentista e ingresos." },
            { icon: ShieldCheck, title: "Accesos y seguridad", description: "Tú decides quién accede y qué puede hacer dentro del sistema." },
            { icon: Smartphone, title: "Desde cualquier lugar", description: "En computadora, tablet o celular. Tu laboratorio contigo siempre." },
        ],
    },
];

export function FeaturesOverview() {
    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Todo lo que necesitas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">tener el control</span>
                    </h2>
                </div>

                <div className="space-y-12">
                    {GROUPS.map((group) => (
                        <div key={group.label}>
                            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center">
                                {group.label}
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {group.features.map((f) => (
                                    <div
                                        key={f.title}
                                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border hover:border-accent/20 hover:shadow-md transition-all"
                                    >
                                        <span className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                                            <f.icon className="w-5 h-5" />
                                        </span>
                                        <h3 className="text-base font-bold text-foreground mb-1.5">{f.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed">{f.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
