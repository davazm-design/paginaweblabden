import Image from "next/image"
import { Check } from "lucide-react"

interface FeatureCard {
    title: string;
    description: string;
    bullets: string[];
    mockup: string;
    mockupAlt: string;
}

const FEATURE_CARDS: FeatureCard[] = [
    {
        title: "Órdenes de trabajo completas desde el inicio",
        description:
            "Recibe solicitudes de trabajo con la información necesaria para reducir dudas, errores y retrabajos.",
        bullets: ["Órdenes organizadas", "Menos errores", "Información centralizada"],
        mockup: "/images/story/ordenes-detalle.png",
        mockupAlt: "Panel de órdenes de trabajo de LabDen con tarjetas de estado, distribución de órdenes y lista de trabajos",
    },
    {
        title: "Dentistas registrados dentro de tu sistema",
        description:
            "Da de alta a los dentistas que trabajan con tu laboratorio y consulta su historial de órdenes.",
        bullets: ["Dentistas organizados", "Historial completo", "Solicitudes por dentista"],
        mockup: "/images/story/resumen-general.jpg",
        mockupAlt: "Resumen general del laboratorio con técnico dental revisando el sistema",
    },
    {
        title: "Seguimiento de producción por etapa",
        description:
            "Consulta el estado de cada trabajo y mejora el control de entregas dentro del laboratorio.",
        bullets: ["Más control", "Mejor seguimiento", "Menos llamadas innecesarias"],
        mockup: "/images/story/seguimiento-orden.png",
        mockupAlt: "Lista de órdenes con estado de producción y barras de progreso en tiempo real",
    },
    {
        title: "Comunicación organizada por cada trabajo",
        description:
            "Evita mensajes perdidos y conserva la información importante asociada a cada orden.",
        bullets: ["Comunicación organizada", "Historial disponible", "Sin WhatsApp disperso"],
        mockup: "/images/story/comunicacion.png",
        mockupAlt: "Técnico de laboratorio dental con comunicación organizada dentro del sistema",
    },
    {
        title: "Control financiero, ingresos y cuentas por cobrar",
        description:
            "Ten visibilidad sobre ingresos, pagos pendientes y trabajos por cobrar.",
        bullets: ["Más claridad financiera", "Control de pagos", "Sin Excel manual"],
        mockup: "/images/story/dashboard-financiero.png",
        mockupAlt: "Dashboard financiero de LabDen con ingresos, cuentas por cobrar, ticket promedio y tendencia de ingresos",
    },
    {
        title: "Reportes para saber qué dentistas generan más trabajo",
        description:
            "Identifica qué dentistas generan más trabajos y toma mejores decisiones para tu negocio.",
        bullets: ["Reportes por dentista", "Decisiones informadas", "Visibilidad del negocio"],
        mockup: "/images/story/resumen-general.jpg",
        mockupAlt: "Reporte de actividad por dentista en el sistema LabDen",
    },
];

export function StorySections() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                        Todo lo que tu laboratorio puede controlar con LabDen
                    </h2>
                </div>

                <div className="space-y-12 md:space-y-20">
                    {FEATURE_CARDS.map((card, idx) => {
                        const isReverse = idx % 2 === 1;
                        return (
                            <div
                                key={card.title}
                                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                            >
                                {/* Mockup */}
                                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-emerald-500/5 border border-border/50 aspect-[4/3]">
                                    <Image
                                        src={card.mockup}
                                        alt={card.mockupAlt}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight mb-4">
                                        {card.title}
                                    </h3>
                                    <p className="text-base text-muted leading-relaxed mb-6">
                                        {card.description}
                                    </p>
                                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                                        {card.bullets.map((b) => (
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
