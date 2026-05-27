"use client"

import { ShieldCheck, Lock, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"
import type { SecurityDomain } from "@/lib/types"

const ICONS = [Lock, Server, ShieldCheck];

const DEFAULT_TITLE = "Seguridad y confiabilidad";

const DEFAULT_FEATURES = [
    {
        title: "Encriptación de datos",
        description:
            "LabDen protege tu información con encriptación avanzada, respaldos diarios y acceso 24/7 desde cualquier dispositivo.",
    },
    {
        title: "Respaldos automáticos diarios",
        description:
            "Tu información se guarda sin que tengas que hacer nada. Con LabDen, los laboratorios no pierden información gracias a respaldos diarios automáticos.",
    },
    {
        title: "Disponibilidad 24/7",
        description:
            "Desde tu laboratorio, casa o celular: revisa y avanza tus órdenes sin depender de nadie. Acceso total a tu operación en cualquier momento.",
    },
];

const DEFAULT_FINAL_CTA = {
    title: "Prueba LabDen gratis por 14 días",
    description: "Sin tarjeta de crédito. Cancela cuando quieras.",
    buttonText: "Comenzar prueba gratuita",
    disclaimer:
        "Laboratorios dentales ya digitalizan su operación con LabDen.",
};

export function SecuritySection({ title, features, finalCta }: SecurityDomain = {}) {
    const resolvedTitle = title?.trim() || DEFAULT_TITLE;
    const resolvedFeatures =
        features && features.length > 0 ? features : DEFAULT_FEATURES;
    const resolvedFinalCta = {
        title: finalCta?.title?.trim() || DEFAULT_FINAL_CTA.title,
        description: finalCta?.description?.trim() || DEFAULT_FINAL_CTA.description,
        buttonText: finalCta?.buttonText?.trim() || DEFAULT_FINAL_CTA.buttonText,
        disclaimer: finalCta?.disclaimer?.trim() || DEFAULT_FINAL_CTA.disclaimer,
    };

    return (
        <section id="seguridad" className="py-20 bg-background border-t border-border overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold mb-12 flex items-center justify-center gap-3">
                    <ShieldCheck className="text-emerald-500" />
                    {resolvedTitle}
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                    {resolvedFeatures.map((feature, idx) => {
                        const Icon = ICONS[idx] || ShieldCheck;
                        return (
                            <div key={idx} className="p-4 rounded-lg bg-surface border border-border shadow-[var(--shadow-md)]">
                                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                                <h3 className="font-medium mb-1 text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-12 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">{resolvedFinalCta.title}</h3>
                    <p className="text-muted mb-8">{resolvedFinalCta.description}</p>
                    <Button
                        size="lg"
                        href="/precios"
                        onClick={() => analytics.ctaHomeFinalClick()}
                    >
                        {resolvedFinalCta.buttonText}
                    </Button>
                    <p className="text-xs text-muted mt-4">{resolvedFinalCta.disclaimer}</p>
                </div>
            </div>
        </section>
    )
}
