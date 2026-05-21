import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contacto | LABDEN",
    description:
        "Habla con el equipo de LABDEN. Soporte para laboratorios dentales en México (atendemos también el resto de LATAM), horarios CDMX y canales directos.",
    alternates: { canonical: "/contacto" },
    openGraph: {
        title: "Contacto | LABDEN",
        description: "Habla con el equipo de LABDEN.",
        type: "website",
        url: "/contacto",
    },
};

const SUPPORT_EMAIL = "soporte@labden.com.mx";
const SALES_EMAIL = "ventas@labden.com.mx";

export default function ContactoPage() {
    const mailtoSupport = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
        "Soporte LABDEN"
    )}`;
    const mailtoSales = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
        "Consulta comercial LABDEN"
    )}`;

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
                        Atendemos a laboratorios dentales en México y el resto de LATAM. Elige el canal que prefieras y te respondemos en horas hábiles.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-6">
                        <a
                            href={mailtoSales}
                            className="group flex flex-col p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5" />
                                </span>
                                <h2 className="text-xl font-bold text-foreground">Ventas</h2>
                            </div>
                            <p className="text-muted mb-6 leading-relaxed">
                                ¿Quieres conocer LABDEN, ver una demo o pedir condiciones para varios usuarios?
                            </p>
                            <span className="mt-auto text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                {SALES_EMAIL}
                            </span>
                        </a>

                        <a
                            href={mailtoSupport}
                            className="group flex flex-col p-8 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <h2 className="text-xl font-bold text-foreground">Soporte</h2>
                            </div>
                            <p className="text-muted mb-6 leading-relaxed">
                                ¿Ya eres cliente y necesitas ayuda con tu cuenta, órdenes o facturación?
                            </p>
                            <span className="mt-auto text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                {SUPPORT_EMAIL}
                            </span>
                        </a>
                    </div>

                    <div className="mt-12 grid sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-border">
                            <span className="w-10 h-10 rounded-lg bg-surface-elevated text-muted flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5" />
                            </span>
                            <div>
                                <h3 className="text-sm font-bold text-foreground mb-1">Horario de atención</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Lunes a viernes, 9:00–18:00 (CDMX). Respondemos correos en menos de 24 h hábiles.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-border">
                            <span className="w-10 h-10 rounded-lg bg-surface-elevated text-muted flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5" />
                            </span>
                            <div>
                                <h3 className="text-sm font-bold text-foreground mb-1">Cobertura</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Operamos desde México. Si tu lab está en otro país de LATAM, escríbenos y vemos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface border-t border-border">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        ¿Listo para probar LABDEN?
                    </h2>
                    <p className="text-muted mb-8">
                        Empieza tu prueba gratuita de 14 días, sin tarjeta de crédito.
                    </p>
                    <Button variant="primary" size="lg" href="/precios">
                        Ver planes
                    </Button>
                </div>
            </section>

            <Footer tagline="Atención cercana para laboratorios dentales." />
        </main>
    );
}
