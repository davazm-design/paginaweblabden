import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, MessageSquare, Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Contacto | LabDen",
    description:
        "Habla con el equipo de LabDen. Soporte para laboratorios dentales en México (atendemos también el resto de LATAM), horarios CDMX y canales directos.",
    alternates: { canonical: "/contacto" },
    openGraph: {
        title: "Contacto | LabDen",
        description: "Habla con el equipo de LabDen.",
        type: "website",
        url: "/contacto",
    },
};

const SUPPORT_EMAIL = "soporte@labden.com.mx";
const SALES_EMAIL = "ventas@labden.com.mx";
const SUPPORT_PHONE = "+52 56 6401 5780";

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-surface-elevated text-sm text-accent font-medium mb-6 shadow-sm">
                        Contacto
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Hablemos
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Atendemos a laboratorios dentales en México y el resto de LATAM. Escríbenos y te respondemos en menos de 24 horas hábiles.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                Envíanos un mensaje
                            </h2>
                            <ContactForm />
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                También puedes escribirnos directo
                            </h2>

                            <a
                                href={`mailto:${SALES_EMAIL}?subject=${encodeURIComponent("Consulta comercial LabDen")}`}
                                className="group flex flex-col p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                                        <MessageSquare className="w-4 h-4" />
                                    </span>
                                    <h3 className="text-lg font-bold text-foreground">Ventas</h3>
                                </div>
                                <p className="text-sm text-muted mb-4 leading-relaxed">
                                    Demos, planes y condiciones para varios usuarios.
                                </p>
                                <span className="text-sm text-accent font-semibold">
                                    {SALES_EMAIL}
                                </span>
                            </a>

                            <a
                                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Soporte LabDen")}`}
                                className="group flex flex-col p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    <h3 className="text-lg font-bold text-foreground">Soporte</h3>
                                </div>
                                <p className="text-sm text-muted mb-4 leading-relaxed">
                                    Ayuda con tu cuenta, órdenes o facturación.
                                </p>
                                <span className="text-sm text-accent font-semibold">
                                    {SUPPORT_EMAIL}
                                </span>
                            </a>

                            <a
                                href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}
                                className="group flex flex-col p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </span>
                                    <h3 className="text-lg font-bold text-foreground">Teléfono</h3>
                                </div>
                                <p className="text-sm text-muted mb-4 leading-relaxed">
                                    Atención directa en horario hábil.
                                </p>
                                <span className="text-sm text-accent font-semibold">
                                    {SUPPORT_PHONE}
                                </span>
                            </a>

                            <div className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-border">
                                <span className="w-9 h-9 rounded-lg bg-surface-elevated text-muted flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-4 h-4" />
                                </span>
                                <div>
                                    <h3 className="text-sm font-bold text-foreground mb-1">Horario de atención</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Lunes a viernes, 9:00–18:00 (CDMX).<br />
                                        Respondemos en menos de 24 horas hábiles.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-border">
                                <span className="w-9 h-9 rounded-lg bg-surface-elevated text-muted flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                <div>
                                    <h3 className="text-sm font-bold text-foreground mb-1">Cobertura</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        México y LATAM.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface border-t border-border">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        ¿Listo para probar LabDen?
                    </h2>
                    <p className="text-muted mb-8">
                        Empieza tu prueba gratuita de 15 días, sin tarjeta de crédito.
                    </p>
                    <Button variant="primary" size="lg" href="/precios">
                        Ver planes
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
