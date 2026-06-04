import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AcademyTeaser() {
    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-accent/5 via-background to-blue-500/5">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="rounded-3xl border border-accent/15 bg-surface/80 backdrop-blur-sm p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                                Muy pronto
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-8 h-8 text-accent flex-shrink-0" />
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    LabDen Academy: capacitación para técnicos y laboratorios dentales
                                </h2>
                            </div>
                            <p className="text-muted leading-relaxed mb-4 max-w-xl">
                                Además del sistema, LabDen impulsa una academia pensada para técnicos y laboratorios dentales. Los cursos se nutren de las necesidades reales de la comunidad, para que la capacitación responda a los temas que más se viven dentro del laboratorio.
                            </p>
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-foreground mb-2">
                                    Cursos creados a partir de necesidades reales del sector
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Cada módulo parte de los problemas y preguntas que los propios laboratorios comparten. No es educación genérica: es formación específica para quienes trabajan en laboratorios dentales.
                                </p>
                            </div>
                            <Button variant="primary" href="/academy">
                                Quiero saber más
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
