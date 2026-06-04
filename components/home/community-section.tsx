export function CommunitySection() {
    return (
        <section className="py-16 md:py-20 bg-surface/50 border-y border-border">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
                    Comunidad LabDen: el sistema evoluciona con los laboratorios
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                    LabDen busca crecer junto con los laboratorios dentales. La comunidad ayuda a detectar nuevas necesidades, sugerir mejoras y orientar la evolución del sistema y de la academia.
                </p>
                <p className="text-base text-muted leading-relaxed mb-4">
                    No se trata solo de usar una plataforma, sino de formar parte de un ecosistema creado para ordenar y profesionalizar la operación de los laboratorios dentales.
                </p>
                <div className="mt-6 p-4 rounded-xl border border-border bg-background inline-block">
                    <h3 className="text-sm font-semibold text-foreground">
                        Una plataforma construida con retroalimentación real
                    </h3>
                    <p className="text-sm text-muted mt-1 max-w-md">
                        Cada mejora en LabDen nace de las necesidades que los laboratorios reportan. Tu operación diaria da forma al sistema.
                    </p>
                </div>
            </div>
        </section>
    )
}
