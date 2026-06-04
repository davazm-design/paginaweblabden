import { Check } from "lucide-react"

const BENEFITS = [
    "Órdenes completas desde el inicio",
    "Seguimiento de producción",
    "Control financiero",
    "Comunicación organizada",
];

export function BenefitsBar() {
    return (
        <div className="bg-surface/60 border-b border-border py-3">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {BENEFITS.map((b) => (
                        <div key={b} className="flex items-center gap-1.5 text-sm text-muted">
                            <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            {b}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
