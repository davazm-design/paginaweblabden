import { ShieldCheck, Lock, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SecurityFeature {
    featureTitle: string;
    featureDescription: string;
}

interface SecurityPreviewProps {
    title: string;
    features: SecurityFeature[];
    finalCtaTitle: string;
    finalCtaDescription: string;
    finalCtaButtonText: string;
    finalCtaDisclaimer: string;
}

export function SecurityPreview({
    title,
    features,
    finalCtaTitle,
    finalCtaDescription,
    finalCtaButtonText,
    finalCtaDisclaimer
}: SecurityPreviewProps) {
    // Iconos fijos para las 3 features
    const icons = [Lock, Server, ShieldCheck];
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold mb-12 flex items-center justify-center gap-3">
                    <ShieldCheck className="text-emerald-400" />
                    {title}
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                    {features.map((feature, idx) => {
                        const Icon = icons[idx] || ShieldCheck;
                        return (
                            <div key={idx} className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200 shadow-[0_4px_10px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.06)]">
                                <Icon className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                                <h3 className="font-medium mb-1 text-[#0F172A]">{feature.featureTitle}</h3>
                                <p className="text-sm text-[#475569]">{feature.featureDescription}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-sky-500/5 border border-sky-500/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">{finalCtaTitle}</h3>
                    <p className="text-muted mb-8">
                        {finalCtaDescription}
                    </p>
                    <Button size="lg" href="/precios">
                        {finalCtaButtonText}
                    </Button>
                    <p className="text-xs text-slate-500 mt-4">
                        {finalCtaDisclaimer}
                    </p>
                </div>
            </div>
        </section>
    )
}
