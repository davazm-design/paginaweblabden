const COMPARISON_ROWS = [
    { before: "Órdenes por WhatsApp", after: "Órdenes organizadas en el sistema" },
    { before: "Información incompleta", after: "Solicitudes más claras" },
    { before: "Mensajes perdidos", after: "Comunicación asociada al trabajo" },
    { before: "Seguimiento manual", after: "Estado de producción visible" },
    { before: "Cobros dispersos", after: "Cuentas por cobrar controladas" },
    { before: "No sabes qué dentistas generan más", after: "Reportes por dentista" },
];

export function ProblemsSection() {
    return (
        <section className="py-16 md:py-24 bg-surface/50">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Dolores — H2 + 3 H3 */}
                <div className="mb-16 md:mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-5">
                            Menos errores entre dentistas y laboratorio dental
                        </h2>
                        <p className="text-base text-muted leading-relaxed">
                            Cuando las órdenes llegan por WhatsApp, notas sueltas o mensajes incompletos, el laboratorio pierde tiempo, se generan dudas y aumentan los reclamos.
                        </p>
                        <p className="text-base text-muted leading-relaxed mt-3">
                            Con LabDen, cada dentista puede enviar sus solicitudes dentro del sistema, con la información necesaria para que el laboratorio tenga más claridad desde el inicio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl border border-border bg-background">
                            <h3 className="text-base font-bold text-foreground mb-2">
                                Evita indicaciones perdidas en WhatsApp
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                Cada solicitud queda registrada dentro del sistema con toda la información necesaria para producir sin dudas.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-border bg-background">
                            <h3 className="text-base font-bold text-foreground mb-2">
                                Reduce reclamos por órdenes incompletas
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                Con órdenes más claras desde el inicio, el laboratorio reduce los retrabajos y las discusiones por información faltante.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-border bg-background">
                            <h3 className="text-base font-bold text-foreground mb-2">
                                Ten evidencia clara de cada solicitud
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                El historial de cada orden queda guardado para que el laboratorio pueda consultarlo cuando sea necesario.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabla comparativa */}
                <div>
                    <div className="overflow-hidden rounded-2xl border border-border">
                        <div className="grid grid-cols-2 bg-surface-elevated">
                            <div className="px-6 py-4 border-b border-r border-border">
                                <span className="text-sm font-bold text-muted uppercase tracking-wider">Antes de LabDen</span>
                            </div>
                            <div className="px-6 py-4 border-b border-border">
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">Con LabDen</span>
                            </div>
                        </div>
                        {COMPARISON_ROWS.map((row, idx) => (
                            <div
                                key={idx}
                                className={`grid grid-cols-2 ${idx < COMPARISON_ROWS.length - 1 ? "border-b border-border" : ""}`}
                            >
                                <div className="px-6 py-4 border-r border-border text-sm text-muted/70 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                    {row.before}
                                </div>
                                <div className="px-6 py-4 text-sm text-foreground flex items-center gap-2 bg-emerald-50/30 dark:bg-emerald-950/10">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    {row.after}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
