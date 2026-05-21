import { AlertTriangle, Clock, TrendingDown } from "lucide-react"

interface ProblemCard {
    cardTitle: string;
    cardDescription: string;
}

interface ProblemSectionProps {
    title: string;
    description: string;
    cards: ProblemCard[];
}

export function ProblemSection({ title, description, cards }: ProblemSectionProps) {
    // Iconos fijos para las 3 tarjetas
    const icons = [Clock, TrendingDown, AlertTriangle];

    return (
        <section className="py-20 bg-surface/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-muted text-lg">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => {
                        const Icon = icons[idx] || Clock;
                        return (
                            <div key={idx} className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200 shadow-[0_4px_10px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.06)] hover:border-sky-500/30 transition-colors">
                                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-4">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-[#0F172A]">{card.cardTitle}</h3>
                                <p className="text-sm text-[#475569]">{card.cardDescription}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
