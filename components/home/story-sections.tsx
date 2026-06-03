import Image from "next/image"
import { Check } from "lucide-react"

interface StorySection {
    number: string;
    title: string;
    description: string;
    bullets: string[];
    mockup: string;
    mockupAlt: string;
}

const SECTIONS: StorySection[] = [
    {
        number: "1",
        title: "Diseñado por técnicos para técnicos",
        description:
            "LabDen entiende el trabajo real del laboratorio dental. Fue creada para ayudarte a organizar órdenes, seguimiento y comunicación sin depender de mensajes dispersos.",
        bullets: ["Menos retrabajos", "Más claridad", "Mejor organización"],
        mockup: "/images/story/resumen-general.jpg",
        mockupAlt: "Resumen general del laboratorio",
    },
    {
        number: "2",
        title: "Órdenes más claras desde el inicio",
        description:
            "Recibe fotografías, indicaciones y archivos organizados por cada trabajo. Evita información incompleta, cambios perdidos y mensajes mezclados entre conversaciones.",
        bullets: ["Órdenes organizadas", "Menos errores", "Información centralizada"],
        mockup: "/images/story/ordenes-detalle.png",
        mockupAlt: "Panel de órdenes de trabajo de LabDen con tarjetas de estado, distribución de órdenes y lista de trabajos",
    },
    {
        number: "3",
        title: "Seguimiento en tiempo real",
        description:
            "Visualiza exactamente en qué etapa se encuentra cada trabajo y mantén mejor control del laboratorio. Todo el equipo puede trabajar con más claridad y seguimiento.",
        bullets: ["Más control", "Mejor seguimiento", "Menos llamadas innecesarias"],
        mockup: "/images/story/seguimiento-orden.png",
        mockupAlt: "Lista de órdenes con estado de producción y barras de progreso en tiempo real",
    },
    {
        number: "4",
        title: "Más control financiero",
        description:
            "Consulta ingresos, trabajos pendientes y cuentas por cobrar desde un solo lugar. Sin depender de Excel o cuentas manuales.",
        bullets: ["Más claridad financiera", "Control de pagos", "Mejor organización"],
        mockup: "/images/story/dashboard-financiero.svg",
        mockupAlt: "Dashboard financiero",
    },
    {
        number: "5",
        title: "Menos mensajes dispersos",
        description:
            "Toda la comunicación queda organizada dentro de cada orden de trabajo. Más claridad para el laboratorio y también para el dentista.",
        bullets: ["Comunicación organizada", "Historial completo", "Información siempre disponible"],
        mockup: "/images/story/comunicacion.png",
        mockupAlt: "Técnico de laboratorio dental abrumado por mensajes de WhatsApp dispersos, correos y notas adhesivas",
    },
];

export function StorySections() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="space-y-12 md:space-y-20">
                    {SECTIONS.map((section, idx) => {
                        const isReverse = idx % 2 === 1;
                        return (
                            <div
                                key={section.number}
                                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReverse ? "lg:[&>*:first-child]:order-2" : ""
                                    }`}
                            >
                                {/* Mockup */}
                                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-emerald-500/5 border border-border/50 aspect-[4/3]">
                                    <Image
                                        src={section.mockup}
                                        alt={section.mockupAlt}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                                            {section.number}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight mb-4">
                                        {section.title}
                                    </h3>
                                    <p className="text-base text-muted leading-relaxed mb-6">
                                        {section.description}
                                    </p>
                                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                                        {section.bullets.map((b) => (
                                            <div key={b} className="flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                                                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                                {b}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
