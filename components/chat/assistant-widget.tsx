"use client"

import { useState } from "react"
import { MessageCircle, X, ArrowRight, RotateCcw } from "lucide-react"
import Image from "next/image"
import { analytics } from "@/lib/analytics"

const WHATSAPP_URL =
    "https://wa.me/525664015780?text=" +
    encodeURIComponent("Hola, vengo de la web de LabDen y quiero hablar con el equipo.")

/**
 * Horario laboral del equipo: L–V, 9:00–18:00 hora de CDMX (America/Mexico_City),
 * sin importar la zona horaria del visitante. Si algo falla, devuelve false
 * (cae de forma segura al formulario de contacto).
 */
function isBusinessHoursMX(): boolean {
    try {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Mexico_City",
            weekday: "short",
            hour: "numeric",
            hour12: false,
        }).formatToParts(new Date())
        const weekday = parts.find((p) => p.type === "weekday")?.value ?? ""
        const hour = Number(parts.find((p) => p.type === "hour")?.value)
        const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday)
        return isWeekday && hour >= 9 && hour < 18
    } catch {
        return false
    }
}

interface Message {
    role: "assistant" | "user"
    content: string
    links?: { label: string; href: string }[]
}

const WELCOME: Message = {
    role: "assistant",
    content: "¡Hola! Soy el asistente de LabDen. ¿En qué puedo ayudarte?",
}

const QUICK_OPTIONS = [
    { id: "what", label: "¿Qué es LabDen?" },
    { id: "how", label: "¿Cómo funciona?" },
    { id: "price", label: "¿Cuánto cuesta?" },
    { id: "try", label: "Quiero probar" },
    { id: "help", label: "Tengo dudas" },
]

const RESPONSES: Record<string, Message> = {
    what: {
        role: "assistant",
        content:
            "LabDen es una plataforma que organiza la comunicación entre dentistas y laboratorios dentales. Centraliza órdenes, seguimiento, estatus y cobros en un solo lugar para que trabajes con más claridad y menos desgaste.",
        links: [{ label: "Conoce la plataforma", href: "/plataforma" }],
    },
    how: {
        role: "assistant",
        content:
            "Funciona en 4 pasos:\n\n1. El dentista envía la orden completa con fotos e indicaciones.\n2. Tú la recibes y organizas en tu panel.\n3. Elaboras el trabajo con toda la información clara.\n4. Entregas y cierras el caso — todos informados.\n\nTodo desde tu navegador, sin instalar nada.",
        links: [{ label: "Ver cómo funciona", href: "/#como-funciona" }],
    },
    price: {
        role: "assistant",
        content:
            "Tenemos 3 planes:\n\n• Plan Starter: $699 MXN/mes (hasta 100 órdenes)\n• Plan Profesional: $1,099 MXN/mes (órdenes ilimitadas + control financiero y de producción)\n• Plan Enterprise: a medida\n\nLos planes Starter y Profesional incluyen 30 días de prueba gratis, sin tarjeta de crédito. En pago anual te regalamos 3 meses.",
        links: [{ label: "Ver planes completos", href: "/precios" }],
    },
    try: {
        role: "assistant",
        content:
            "Puedes empezar tu prueba gratis ahora mismo. Son 30 días sin tarjeta de crédito y sin compromiso. Configura tu laboratorio en minutos.",
        links: [
            { label: "Registrarme gratis", href: "https://app.labden.com.mx/auth/register" },
        ],
    },
    help: {
        role: "assistant",
        content:
            "Sin problema. Puedes escribirnos directamente y te respondemos en menos de 24 horas hábiles. También puedes mandarnos un WhatsApp al 56 6401 5780.",
        links: [
            { label: "Ir a contacto", href: "/contacto" },
            { label: "WhatsApp", href: "https://wa.me/525664015780" },
        ],
    },
}

export function AssistantWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([WELCOME])
    const [showOptions, setShowOptions] = useState(true)
    const online = isBusinessHoursMX()

    function handleOption(id: string) {
        const userMsg: Message = {
            role: "user",
            content: QUICK_OPTIONS.find((o) => o.id === id)?.label ?? "",
        }
        const response = RESPONSES[id]
        setMessages((prev) => [...prev, userMsg, response])
        setShowOptions(false)
    }

    function handleReset() {
        setMessages([WELCOME])
        setShowOptions(true)
    }

    return (
        <>
            {/* Floating button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
                    aria-label="Abrir asistente"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
            )}

            {/* Chat panel */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
                    {/* Header */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                        <Image
                            src="/labden-icon.png"
                            alt="LabDen"
                            width={32}
                            height={32}
                            loading="lazy"
                            className="rounded-lg"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-bold">Asistente LabDen</p>
                            <p className="flex items-center gap-1.5 text-[10px] text-white/70">
                                <span
                                    className={`inline-block w-1.5 h-1.5 rounded-full ${online ? "bg-emerald-300" : "bg-white/40"}`}
                                    aria-hidden="true"
                                />
                                {online ? "En línea" : "Fuera de horario"}
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Cerrar asistente"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                                        msg.role === "user"
                                            ? "bg-accent text-accent-foreground rounded-br-md"
                                            : "bg-surface border border-border text-foreground rounded-bl-md"
                                    }`}
                                >
                                    <p className="whitespace-pre-line">{msg.content}</p>
                                    {msg.links && msg.links.length > 0 && (
                                        <div className="mt-2.5 flex flex-wrap gap-2">
                                            {msg.links.map((link) => (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                                                >
                                                    {link.label}
                                                    <ArrowRight className="w-3 h-3" />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick options or reset */}
                    <div className="px-4 py-3 border-t border-border bg-surface/50">
                        {showOptions ? (
                            <div className="flex flex-wrap gap-2">
                                {QUICK_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleOption(opt.id)}
                                        className="px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-medium text-accent hover:bg-accent/10 transition-colors"
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {/* Fuera de horario: aviso explícito de que no hay nadie en línea ahora. */}
                                {!online && (
                                    <p className="text-[11px] leading-snug text-muted px-1">
                                        🌙 Ahora estamos fuera de horario. Déjanos tu mensaje y te
                                        respondemos en cuanto volvamos a estar en línea (L–V, 9:00–18:00 h, hora de México).
                                    </p>
                                )}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleReset}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted hover:text-foreground transition-colors"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                        Hacer otra pregunta
                                    </button>
                                    {online ? (
                                        // En horario (L–V 9–18 CDMX): chat real por WhatsApp.
                                        <a
                                            href={WHATSAPP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => analytics.clickWhatsapp()}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 transition-colors"
                                        >
                                            <MessageCircle className="w-3 h-3" />
                                            Hablar por WhatsApp
                                        </a>
                                    ) : (
                                        // Fuera de horario: dejar mensaje en el formulario.
                                        <a
                                            href="/contacto"
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-xs font-medium text-accent hover:bg-accent/15 transition-colors"
                                        >
                                            Dejar un mensaje
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
