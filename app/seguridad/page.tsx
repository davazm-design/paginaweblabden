import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, Database, KeyRound, FileCheck2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Seguridad y privacidad | LABDEN",
    description:
        "Cómo LABDEN protege la información de tu laboratorio dental: cifrado, respaldos, control de acceso y cumplimiento LFPDPPP México.",
    alternates: { canonical: "/seguridad" },
    openGraph: {
        title: "Seguridad y privacidad | LABDEN",
        description:
            "Cifrado, respaldos, control de acceso y cumplimiento LFPDPPP México.",
        type: "website",
        url: "/seguridad",
    },
};

const PILLARS = [
    {
        icon: Lock,
        title: "Cifrado en tránsito y en reposo",
        body: "Toda la comunicación con LABDEN viaja por HTTPS (TLS 1.2+). Los datos se almacenan en infraestructura cifrada a nivel de disco, en proveedores con certificaciones reconocidas.",
    },
    {
        icon: Database,
        title: "Respaldos automáticos diarios",
        body: "Hacemos respaldos automáticos de la base de datos todos los días, con retención de varias generaciones. Procedimientos de restauración documentados internamente.",
    },
    {
        icon: KeyRound,
        title: "Acceso por roles y sesiones",
        body: "Cada miembro de tu laboratorio entra con su propia cuenta. Los permisos se controlan por rol y las sesiones expiran de forma automática.",
    },
    {
        icon: FileCheck2,
        title: "Cumplimiento LFPDPPP (México)",
        body: "Tratamos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Puedes ejercer tus derechos ARCO en cualquier momento.",
    },
    {
        icon: ShieldCheck,
        title: "Mínimo privilegio interno",
        body: "Solo el personal indispensable accede a la infraestructura productiva, con autenticación reforzada y bitácora de operaciones críticas.",
    },
    {
        icon: AlertCircle,
        title: "Reporte de incidentes",
        body: "Si detectas algo raro en tu cuenta, escríbenos. Investigamos, contenemos y comunicamos cualquier incidente que afecte tus datos.",
    },
];

export default function SeguridadPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-surface-elevated text-sm text-accent font-medium mb-6 shadow-sm">
                        <ShieldCheck className="w-4 h-4" />
                        Seguridad y privacidad
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Las órdenes, doctores y cobros de tu lab, bajo control
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Diseñamos LABDEN sobre prácticas estándar de seguridad para SaaS. Esto es lo que ya hacemos hoy y a qué nos comprometemos.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PILLARS.map((p) => (
                            <article
                                key={p.title}
                                className="flex flex-col p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 hover:shadow-md transition-all"
                            >
                                <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                                    <p.icon className="w-5 h-5" />
                                </span>
                                <h2 className="text-lg font-bold text-foreground mb-2">{p.title}</h2>
                                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface border-t border-border">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="rounded-2xl bg-surface-elevated border border-border p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            ¿Necesitas un acuerdo formal de tratamiento de datos?
                        </h2>
                        <p className="text-muted mb-6 leading-relaxed">
                            Para laboratorios con requisitos contractuales, podemos firmar un convenio de confidencialidad y un acuerdo de tratamiento de datos (DPA). Escríbenos y lo coordinamos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg" href="/contacto">
                                Solicitar DPA
                            </Button>
                            <Link
                                href="/privacidad"
                                className="inline-flex items-center justify-center h-14 px-8 text-base font-medium text-muted hover:text-foreground transition-colors"
                            >
                                Leer aviso de privacidad
                            </Link>
                        </div>
                    </div>

                    <p className="mt-8 text-xs text-muted text-center leading-relaxed">
                        Esta página describe nuestras prácticas actuales. No reemplaza el aviso de privacidad legal ni los términos del servicio. Actualizamos esta información a medida que evolucionan nuestros controles.
                    </p>
                </div>
            </section>

            <Footer tagline="Tu seguridad y privacidad son prioridad." />
        </main>
    );
}
