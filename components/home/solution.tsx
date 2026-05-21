import { Layers, DollarSign, BarChart3 } from "lucide-react"

interface SolutionCard {
    cardTitle: string;
    cardDescription: string;
}

interface SolutionSectionProps {
    title: string;
    subtitle: string;
    cards: SolutionCard[];
}

export function SolutionSection({ title, subtitle, cards }: SolutionSectionProps) {
    // Iconos fijos (se pueden hacer dinámicos después si quieres)
    const icons = [Layers, DollarSign, BarChart3];
    const colors = [
        "text-sky-400 bg-sky-500/10",
        "text-emerald-400 bg-emerald-500/10",
        "text-violet-400 bg-violet-500/10"
    ];

    return (
        <section id="soluciones" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => {
                        const Icon = icons[idx] || Layers;
                        const color = colors[idx] || colors[0];

                        return (
                            <div key={idx} className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 shadow-[0_4px_10px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.06)] hover:border-sky-500/30 transition-all">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${color}`}>
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#0F172A]">{card.cardTitle}</h3>
                                <p className="text-[#475569] leading-relaxed">
                                    {card.cardDescription}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
