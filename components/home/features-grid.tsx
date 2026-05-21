interface FeaturesStep {
    stepNumber: string;
    stepTitle: string;
    stepDescription: string;
}

interface FeaturesGridProps {
    title: string;
    steps: FeaturesStep[];
}

export function FeaturesGrid({ title, steps }: FeaturesGridProps) {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
            <div className="space-y-12">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold bg-sky-500/5">
                            {step.stepNumber}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{step.stepTitle}</h3>
                            <p className="text-muted">{step.stepDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
