"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
    Heart,
    MessageCircle,
    ShieldCheck,
    Lightbulb,
    Wrench,
    X,
    Check,
    ArrowRight,
} from "lucide-react";

const BELIEFS = [
    { icon: MessageCircle, text: "La buena comunicación también es calidad." },
    { icon: Lightbulb, text: "La claridad evita retrabajos." },
    { icon: Heart, text: "El orden reduce desgaste." },
    { icon: Wrench, text: "La tecnología debe simplificar, no complicar." },
    { icon: ShieldCheck, text: "El técnico dental merece herramientas construidas para su realidad." },
];

const WE_ARE = [
    "Una plataforma construida desde necesidades reales del laboratorio",
    "Una herramienta que organiza la comunicación entre dentistas y laboratorios",
    "Un aliado que acompaña tu crecimiento operativo",
    "Un equipo que conoce el desgaste diario del sector",
];

const WE_ARE_NOT = [
    "Un CRM genérico adaptado al sector dental",
    "Una solución que automatiza todo sin criterio humano",
    "Un sustituto del criterio técnico del laboratorio",
    "Una promesa de resultados mágicos",
];

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/8 rounded-full blur-[120px] -z-10" />
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent uppercase tracking-wider mb-8">
                        Nuestra historia
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Creada desde el laboratorio, para el laboratorio
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        LabDen no nació en una oficina de tecnología. Nació de una conversación entre personas que conocen el día a día del sector dental.
                    </p>
                </div>
            </section>

            {/* Storytelling */}
            <section className="py-16 md:py-20 bg-surface border-y border-border">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="space-y-6 text-muted leading-relaxed">
                        <p>
                            Un programador. Una técnico dental. Y una especialista en experiencia del cliente y organización de procesos.
                        </p>
                        <p>
                            La pregunta parecía simple: <em className="text-foreground font-medium">¿Por qué un laboratorio con tanto talento sigue perdiendo tiempo en problemas de comunicación?</em>
                        </p>
                        <p>
                            Al profundizar en la operación diaria apareció el verdadero problema: órdenes incompletas, mensajes perdidos, fotografías poco claras, cambios sin registrar y retrabajos constantes que generaban desgaste innecesario.
                        </p>
                        <p>
                            Lo más frustrante era entender que muchas veces el laboratorio ni siquiera tenía la culpa. El problema comenzaba desde la información que llegaba incompleta o dispersa.
                        </p>
                        <p>
                            A partir de esa conversación nació un primer sistema interno pensado para ordenar la comunicación entre clínica y laboratorio. El resultado fue inmediato: más claridad, menos confusión y mucho más control sobre cada trabajo.
                        </p>
                        <p className="text-foreground font-medium">
                            Con el tiempo, ese sistema evolucionó hasta convertirse en LabDen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lo que creemos */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                        Lo que creemos
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {BELIEFS.map((b) => (
                            <div key={b.text} className="flex items-start gap-3 p-5 rounded-2xl bg-surface border border-border">
                                <span className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                    <b.icon className="w-4 h-4" />
                                </span>
                                <p className="text-sm text-muted leading-relaxed">{b.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lo que somos y lo que no */}
            <section className="py-16 md:py-20 bg-surface border-y border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                        Lo que somos y lo que no
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 md:p-8 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200/50 dark:border-emerald-900/30">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-5">Lo que sí somos</p>
                            <ul className="space-y-3.5">
                                {WE_ARE.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 md:p-8 rounded-2xl bg-red-50/50 dark:bg-red-950/10 border border-red-200/50 dark:border-red-900/30">
                            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-5">Lo que no somos</p>
                            <ul className="space-y-3.5">
                                {WE_ARE_NOT.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-background text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        ¿Quieres conocer cómo funciona?
                    </h2>
                    <p className="text-muted mb-8">
                        Prueba LabDen sin compromiso y descubre si es la herramienta que tu laboratorio necesita.
                    </p>
                    <Button variant="primary" size="lg" href="https://app.labden.com.mx/auth/register">
                        Prueba gratis 14 días <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
