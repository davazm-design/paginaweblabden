import { XCircle, CheckCircle } from "lucide-react"

interface TransformationPoint {
    title: string;
    description: string;
}

interface ValuePropositionProps {
    sectionTitle: string;
    sectionSubtitle: string;
    painPoints: TransformationPoint[];
    gainPoints: TransformationPoint[];
}

export function ValueProposition({
    sectionTitle,
    sectionSubtitle,
    painPoints,
    gainPoints
}: ValuePropositionProps) {
    return (
        <section className="py-24 bg-surface/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{sectionTitle}</h2>
                    <p className="text-lg text-muted">{sectionSubtitle}</p>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Before Card */}
                    <div className="p-6 md:p-8 rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-6 h-6 text-red-400" />
                            <h3 className="text-xl font-bold text-red-700 dark:text-red-400">Sin LABDEN</h3>
                        </div>
                        <ul className="space-y-6">
                            {painPoints.map((point, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                                    <div>
                                        <p className="font-medium text-foreground mb-1">{point.title}</p>
                                        <p className="text-sm text-muted">{point.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After Card */}
                    <div className="p-6 md:p-8 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-6 h-6 text-emerald-500" />
                            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Con LABDEN</h3>
                        </div>
                        <ul className="space-y-6">
                            {gainPoints.map((point, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                                    <div>
                                        <p className="font-medium text-foreground mb-1">{point.title}</p>
                                        <p className="text-sm text-muted">{point.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
