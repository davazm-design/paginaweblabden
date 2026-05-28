import Image from "next/image"

const GROUPS = [
    {
        label: "Organiza y da seguimiento",
        features: [
            {
                image: "/images/features/ordenes-claras.svg",
                title: "Órdenes claras",
                description: "Recibe toda la información que necesitas para trabajar sin errores.",
            },
            {
                image: "/images/features/seguimiento-estatus.svg",
                title: "Seguimiento por estatus",
                description: "Visualiza cada caso en tiempo real: nuevo, en proceso, terminado o entregado.",
            },
            {
                image: "/images/features/historial-completo.svg",
                title: "Historial completo",
                description: "Consulta el historial de cada trabajo, cambios y comunicación.",
            },
            {
                image: "/images/features/comunicacion-organizada.svg",
                title: "Comunicación organizada",
                description: "Mensajes, archivos y acuerdos siempre ordenados.",
            },
        ],
    },
    {
        label: "Controla y haz crecer tu laboratorio",
        features: [
            {
                image: "/images/features/control-cobros.svg",
                title: "Control de cobros e ingresos",
                description: "Consulta lo que te deben por clínica y toma mejores decisiones.",
            },
            {
                image: "/images/features/reportes-metricas.svg",
                title: "Reportes y métricas",
                description: "Conoce tu productividad, casos por dentista e ingresos.",
            },
            {
                image: "/images/features/accesos-seguridad.svg",
                title: "Accesos y seguridad",
                description: "Tú decides quién accede y qué puede hacer dentro del sistema.",
            },
            {
                image: "/images/features/desde-cualquier-lugar.svg",
                title: "Desde cualquier lugar",
                description: "En computadora, tablet o celular. Tu laboratorio contigo siempre.",
            },
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
                                        <div className="relative w-24 h-24 mb-4">
                                            <Image
                                                src={f.image}
                                                alt={f.title}
                                                fill
                                                className="object-contain"
                                                sizes="96px"
                                            />
                                        </div>
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
