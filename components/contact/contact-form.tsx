"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        const fd = new FormData(e.currentTarget);
        const payload = {
            nombre: fd.get("nombre"),
            email: fd.get("email"),
            laboratorio: fd.get("laboratorio"),
            telefono: fd.get("telefono"),
            mensaje: fd.get("mensaje"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Error al enviar.");
            }

            setStatus("sent");
        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message : "Error inesperado.");
            setStatus("error");
        }
    }

    if (status === "sent") {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Mensaje enviado</h3>
                <p className="text-muted">
                    Te responderemos en menos de 24 horas hábiles.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">
                        Nombre *
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        minLength={2}
                        placeholder="Tu nombre"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@laboratorio.com"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="laboratorio" className="block text-sm font-medium text-foreground mb-1.5">
                        Laboratorio *
                    </label>
                    <input
                        id="laboratorio"
                        name="laboratorio"
                        type="text"
                        required
                        minLength={2}
                        placeholder="Nombre de tu laboratorio"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">
                        Teléfono <span className="text-muted">(opcional)</span>
                    </label>
                    <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="Ej. 55 1234 5678"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">
                    Mensaje *
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-y"
                />
            </div>

            {status === "error" && (
                <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
                {status === "sending" ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        Enviar mensaje
                    </>
                )}
            </button>
        </form>
    );
}
