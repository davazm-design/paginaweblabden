export function EmotionalBlock() {
    return (
        <section className="py-16 md:py-24 bg-surface/50 border-y border-border">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
                        Hecho para laboratorios dentales que quieren trabajar con más orden
                    </h2>
                </div>
                <div className="space-y-4 text-base md:text-lg text-muted leading-relaxed text-center max-w-2xl mx-auto">
                    <p>
                        LabDen no nació como un sistema genérico. Fue construido con la guía directa de un laboratorio dental real, a partir de problemas diarios como órdenes incompletas, mensajes perdidos, entregas lentas, reclamos, retrabajos y falta de control financiero.
                    </p>
                    <p>
                        Por eso cada función está pensada para la operación real de un laboratorio dental: desde que el dentista solicita un trabajo hasta que el laboratorio lo produce, lo entrega y lo cobra.
                    </p>
                    <p className="text-sm text-muted italic">
                        LabDen fue construido con la guía directa de un laboratorio dental real.
                    </p>
                </div>
            </div>
        </section>
    )
}
