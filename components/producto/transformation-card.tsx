import { LucideIcon, XCircle, CheckCircle } from "lucide-react"

interface TransformationCardProps {
    area: string;
    icon: LucideIcon;
    beforeTitle: string;
    beforeText: string;
    afterTitle: string;
    afterText: string;
    features?: string[];
}

export function TransformationCard({
    area,
    icon: Icon,
    beforeTitle,
    beforeText,
    afterTitle,
    afterText,
    features = []
}: TransformationCardProps) {
    return (
        <article className="bg-surface-elevated p-6 md:p-8 rounded-2xl border border-border shadow-[var(--shadow-md)] hover:border-accent/30 transition-all">
            {/* Área Header - H3 */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{area}</h3>
            </div>

            {/* Antes - NO es heading, solo texto con estilo */}
            <div className="mb-4 p-4 rounded-lg bg-red-500/5 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span className="font-semibold text-red-700 dark:text-red-400 text-sm">Antes</span>
                </div>
                <p className="font-medium text-foreground mb-1">{beforeTitle}</p>
                <p className="text-sm text-muted">{beforeText}</p>
            </div>

            {/* Después - NO es heading, solo texto con estilo */}
            <div className="mb-6 p-4 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 text-sm">Después</span>
                </div>
                <p className="font-medium text-foreground mb-1">{afterTitle}</p>
                <p className="text-sm text-muted">{afterText}</p>
            </div>

            {/* Features opcionales - máx 3 bullets */}
            {features.length > 0 && (
                <ul className="space-y-2 pt-4 border-t border-border">
                    {features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
        </article>
    )
}

