export function IdealSection() {
    return (
        <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                        Ideal para laboratorios dentales de 1 a 10 empleados
                    </h2>
                    <p className="text-base text-muted leading-relaxed max-w-xl mx-auto">
                        LabDen está diseñado para laboratorios dentales de 1 a 10 empleados que necesitan ordenar su operación sin implementar procesos complicados.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-border bg-surface">
                        <h3 className="text-base font-bold text-foreground mb-2">
                            Empieza sin procesos complicados
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                            No necesitas conocimientos técnicos ni semanas de configuración. LabDen está pensado para que un laboratorio pequeño pueda empezar a ordenar su operación desde el primer día.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-surface">
                        <h3 className="text-base font-bold text-foreground mb-2">
                            Da de alta a tus dentistas y organiza sus solicitudes
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                            LabDen permite que el laboratorio dé de alta a los dentistas que le solicitan trabajos, para tener sus órdenes, historial y comunicación organizados en un solo lugar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
