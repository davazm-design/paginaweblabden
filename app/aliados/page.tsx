import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, CalendarDays, Gift, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Aliados | LABDEN",
    description:
        "Conectamos laboratorios dentales con marcas, congresos y beneficios exclusivos para impulsar tu crecimiento.",
    alternates: { canonical: "/aliados" },
    openGraph: {
        title: "Aliados LabDen",
        description: "Marcas, congresos y beneficios exclusivos para laboratorios dentales.",
        type: "website",
        url: "/aliados",
    },
};

const PILLARS = [
    { icon: Building2, title: "Marcas aliadas", description: "Conexiones con las mejores marcas del sector dental." },
    { icon: CalendarDays, title: "Congresos y eventos", description: "Acceso a eventos relevantes para tu crecimiento profesional." },
    { icon: Gift, title: "Beneficios exclusivos", description: "Descuentos, promociones y recursos solo para la comunidad LabDen." },
    { icon: Users, title: "Comunidad", description: "Una red de laboratorios que comparten experiencia y se apoyan." },
];

export default function AliadosPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-sm text-accent font-medium mb-6">
                        Muy pronto
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Handshake className="w-10 h-10 text-accent" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            Aliados LabDen
                        </h1>
                    </div>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Conectamos con marcas, congresos y beneficios para impulsar tu laboratorio.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {PILLARS.map((pillar) => (
                            <div key={pillar.title} className="flex items-start gap-4 p-6 rounded-2xl bg-surface border border-border">
                                <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                    <pillar.icon className="w-5 h-5" />
                                </span>
                                <div>
                                    <h3 className="text-base font-bold text-foreground mb-1">{pillar.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface border-t border-border">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        ¿Quieres ser aliado de LabDen?
                    </h2>
                    <p className="text-muted mb-8">
                        Si tu marca o evento conecta con el sector dental, hablemos. Estamos construyendo una red de aliados que sumen valor real.
                    </p>
                    <Button variant="primary" size="lg" href="/contacto">
                        Conéctate con nosotros
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
