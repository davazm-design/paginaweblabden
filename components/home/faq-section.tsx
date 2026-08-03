import { FAQSchema } from "@/components/blog/faq-schema";

export const FAQ_ITEMS = [
    {
        pregunta: "¿Qué es LabDen?",
        respuesta:
            "LabDen es un sistema para laboratorios dentales que ayuda a controlar órdenes de trabajo, dentistas, producción, entregas, ingresos y cuentas por cobrar desde una sola plataforma.",
    },
    {
        pregunta: "¿LabDen es para clínicas dentales o para laboratorios dentales?",
        respuesta:
            "LabDen está diseñado para laboratorios dentales. Los laboratorios pueden dar de alta a los dentistas que les solicitan trabajos para organizar mejor las órdenes y la comunicación.",
    },
    {
        pregunta: "¿Los dentistas pagan por usar LabDen?",
        respuesta:
            "No necesariamente. El laboratorio adquiere su sesión y puede dar de alta a los dentistas que le solicitan trabajos, de acuerdo con las condiciones del plan contratado.",
    },
    {
        pregunta: "¿LabDen sirve para laboratorios dentales pequeños?",
        respuesta:
            "Sí. LabDen está pensado especialmente para laboratorios dentales de 1 a 10 empleados que necesitan ordenar su operación sin implementar procesos complicados.",
    },
    {
        pregunta: "¿Puedo usar LabDen si hoy trabajo con WhatsApp o Excel?",
        respuesta:
            "Sí. LabDen ayuda a centralizar información que normalmente queda dispersa en WhatsApp, Excel, notas o mensajes sueltos.",
    },
    {
        pregunta: "¿Qué problemas ayuda a resolver LabDen?",
        respuesta:
            "Ayuda a reducir órdenes incompletas, mensajes perdidos, falta de seguimiento, reclamos por trabajos mal solicitados, retrasos y falta de control financiero.",
    },
    {
        pregunta: "¿LabDen incluye control financiero?",
        respuesta:
            "Sí. LabDen permite tener mayor visibilidad sobre ingresos, cuentas por cobrar y dentistas que generan más trabajos para el laboratorio.",
    },
    {
        pregunta: "¿La prueba gratis requiere tarjeta de crédito?",
        respuesta:
            "No. Puedes iniciar la prueba gratis de 15 días sin tarjeta de crédito y sin compromiso.",
    },
    {
        pregunta: "¿LabDen funciona para laboratorios dentales en México?",
        respuesta:
            "Sí. LabDen está enfocado en laboratorios dentales en México, comenzando por Ciudad de México, Estado de México, Puebla y Morelos, con visión de escalar a toda la República Mexicana.",
    },
    {
        pregunta: "¿Por qué LabDen no se presenta como un CRM dental?",
        respuesta:
            "Porque en el medio de los técnicos y laboratorios dentales la palabra CRM no siempre es familiar. LabDen se comunica como un sistema para laboratorios dentales porque describe mejor lo que el usuario necesita: ordenar trabajos, dentistas, producción y cobros.",
    },
] as const;

export function FaqSection() {
    return (
        <section
            aria-labelledby="faq-heading"
            className="py-16 md:py-24 bg-white"
        >
            {/* FAQPage JSON-LD — misma fuente de datos que el acordeón */}
            <FAQSchema faqs={FAQ_ITEMS as unknown as { pregunta: string; respuesta: string }[]} />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    id="faq-heading"
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center"
                >
                    Preguntas frecuentes sobre LabDen
                </h2>

                <div className="space-y-3">
                    {FAQ_ITEMS.map((item) => (
                        <details
                            key={item.pregunta}
                            className="group border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none list-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                                    {item.pregunta}
                                </h3>
                                {/* Chevron — rota 180° cuando el details está abierto */}
                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </summary>
                            <div className="px-5 pb-5 pt-2">
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {item.respuesta}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
