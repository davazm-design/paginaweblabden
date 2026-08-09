import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Solicita tu prueba de 15 días | LabDen",
    description:
        "Solicita tu prueba gratuita de 15 días de LabDen. Escríbenos y nuestro equipo configura tu laboratorio dental.",
    robots: { index: false, follow: false },
    alternates: { canonical: "/prueba" },
};

const SUPPORT_EMAIL = "soporte@labden.com.mx";
const MAILTO_HREF = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Solicitud de prueba de 15 días")}`;

export default function PruebaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="flex-1 flex items-center pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-surface-elevated text-sm text-accent font-medium mb-6 shadow-sm">
                        Prueba gratuita
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Solicita tu prueba de 15 días
                    </h1>
                    <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-8">
                        Para iniciar tu prueba gratis de 15 días, escríbenos a{" "}
                        <span className="text-foreground font-medium">{SUPPORT_EMAIL}</span> y
                        nuestro equipo configurará tu laboratorio.
                    </p>

                    <a
                        href={MAILTO_HREF}
                        className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-accent text-accent-foreground text-base font-medium shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                        <Mail className="w-4 h-4" />
                        Escribir a {SUPPORT_EMAIL}
                    </a>

                    <p className="mt-5 text-sm text-muted/60">
                        Sin tarjeta de crédito. Sin compromiso.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
