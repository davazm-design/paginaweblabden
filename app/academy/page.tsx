import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Lightbulb, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
    title: "Academy | LABDEN",
    description:
        "Educación especializada para laboratorios dentales. Cursos, expertos del sector y mejores prácticas para profesionalizar tu operación.",
    alternates: { canonical: "/academy" },
    openGraph: {
        title: "LabDen Academy",
        description: "Educación especializada para laboratorios que quieren crecer.",
        type: "website",
        url: "/academy",
    },
};

const PILLARS = [
    { icon: BookOpen, title: "Cursos especializados", description: "Formación práctica diseñada para el día a día del laboratorio dental." },
    { icon: Users, title: "Expertos del sector", description: "Aprende de profesionales con experiencia real en laboratorios." },
    { icon: Lightbulb, title: "Técnicas y mejores prácticas", description: "Procesos probados para reducir errores y mejorar tu operación." },
    { icon: RefreshCw, title: "Contenido siempre actualizado", description: "Nuevos recursos y materiales conforme evoluciona el sector." },
];

export default function AcademyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-sm text-accent font-medium mb-6">
                        Muy pronto
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <GraduationCap className="w-10 h-10 text-accent" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            LabDen Academy
                        </h1>
                    </div>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Educación especializada para laboratorios que quieren crecer, profesionalizarse y destacar.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
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
                        Estamos preparando algo especial
                    </h2>
                    <p className="text-muted mb-8">
                        LabDen Academy está en desarrollo. Déjanos tus datos y te avisamos cuando esté lista.
                    </p>
                    <Button variant="primary" size="lg" href="/contacto">
                        Quiero saber más
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
