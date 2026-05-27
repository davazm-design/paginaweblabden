import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Video, Lightbulb, TrendingUp, Trophy, Play } from "lucide-react";

export const metadata: Metadata = {
    title: "Talks | LabDen",
    description:
        "Contenido en video para laboratorios dentales: lives, tips, tendencias del sector, casos de éxito y entrevistas con expertos.",
    alternates: { canonical: "/talks" },
    openGraph: {
        title: "LabDen Talks",
        description: "Contenido que inspira, informa y conecta a la comunidad de laboratorios dentales.",
        type: "website",
        url: "/talks",
    },
};

const FORMATS = [
    { icon: Video, title: "Lives en vivo", description: "Sesiones en tiempo real con expertos y la comunidad." },
    { icon: Lightbulb, title: "Tips y consejos", description: "Cápsulas cortas con ideas prácticas para tu laboratorio." },
    { icon: TrendingUp, title: "Tendencias del sector", description: "Lo que está cambiando en el mundo del laboratorio dental." },
    { icon: Trophy, title: "Casos de éxito", description: "Historias reales de laboratorios que mejoraron su operación." },
    { icon: Play, title: "Videos on demand", description: "Todo el contenido disponible cuando tú quieras." },
];

export default function TalksPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-sm text-accent font-medium mb-6">
                        Muy pronto
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Video className="w-10 h-10 text-accent" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            LabDen Talks
                        </h1>
                    </div>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Contenido que inspira, informa y conecta a la comunidad de laboratorios dentales.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {FORMATS.map((format) => (
                            <div key={format.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border">
                                <span className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                                    <format.icon className="w-6 h-6" />
                                </span>
                                <h3 className="text-base font-bold text-foreground mb-2">{format.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{format.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface border-t border-border">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Pronto vamos a compartir contenido contigo
                    </h2>
                    <p className="text-muted mb-8">
                        Estamos preparando los primeros episodios de LabDen Talks. Escríbenos si quieres participar o sugerir temas.
                    </p>
                    <Button variant="primary" size="lg" href="/contacto">
                        Escríbenos
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
