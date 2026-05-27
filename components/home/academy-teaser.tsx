import { GraduationCap, BookOpen, Users, Lightbulb, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const PILLARS = [
    { icon: BookOpen, label: "Cursos especializados" },
    { icon: Users, label: "Expertos del sector" },
    { icon: Lightbulb, label: "Técnicas y mejores prácticas" },
    { icon: RefreshCw, label: "Contenido siempre actualizado" },
];

export function AcademyTeaser() {
    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-accent/5 via-background to-blue-500/5">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="rounded-3xl border border-accent/15 bg-surface/80 backdrop-blur-sm p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                                Muy pronto
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-8 h-8 text-accent" />
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    LabDen Academy
                                </h2>
                            </div>
                            <p className="text-muted leading-relaxed mb-6 max-w-md">
                                Educación especializada para laboratorios que quieren crecer, profesionalizarse y destacar.
                            </p>
                            <Button variant="primary" href="/academy">
                                Quiero saber más
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:w-[340px] flex-shrink-0">
                            {PILLARS.map((p) => (
                                <div key={p.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-background/60 border border-border/50">
                                    <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-2">
                                        <p.icon className="w-5 h-5" />
                                    </span>
                                    <p className="text-sm font-semibold text-foreground leading-tight">{p.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
