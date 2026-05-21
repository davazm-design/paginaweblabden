"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PricingSection() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Image 
                            src="/premium-plans-icon.png" 
                            alt="Premium Plans Icon" 
                            width={56} 
                            height={56}
                            className="drop-shadow-lg"
                        />
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Planes LABDEN
                        </h2>
                    </div>
                    <p className="text-lg text-muted">
                        Planes claros para crecer contigo.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">

                    {/* PLAN BASE */}
                    <div className="flex flex-col p-8 rounded-2xl bg-surface border border-border transition-all hover:shadow-lg">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-foreground mb-1">PLAN BASE</h3>
                            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Digitalización Operativa</p>
                            <p className="text-sm text-muted">Para laboratorios que quieren dejar el papel y el WhatsApp sin fricción.</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-3xl font-bold text-foreground">Desde $550</span>
                                <span className="text-muted font-medium">MXN / mes</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                                🧪 Prueba gratuita 14 días
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Hasta 100 órdenes al mes</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Órdenes digitales con odontograma</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Doctores ilimitados</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Control básico de estatus</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Notificaciones por email</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Soporte estándar</span>
                            </li>
                        </ul>

                        <Button variant="primary" size="lg" className="w-full h-12" href="/precios">
                            Probar gratis 14 días
                        </Button>
                    </div>

                    {/* PLAN PRO */}
                    <div className="flex flex-col p-8 rounded-2xl bg-surface-elevated border-2 border-accent relative shadow-xl transform md:scale-105 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                            ⭐ El más elegido
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-foreground mb-1">PLAN PRO</h3>
                            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Control y Crecimiento</p>
                            <p className="text-sm text-muted">Para laboratorios que necesitan visibilidad financiera y escala.</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-4xl font-bold text-foreground">$850</span>
                                <span className="text-muted font-medium">MXN / mes</span>
                            </div>
                            <span className="text-xs text-muted">Ahorra en retrabajos y tiempo</span>
                        </div>

                        <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest mb-4">Todo lo del plan Base, más:</p>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span><strong>Órdenes ilimitadas</strong></span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Dashboard financiero</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Cuentas por cobrar</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Métricas de productividad</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Branding del laboratorio para doctores</span>
                            </li>
                        </ul>

                        <Button variant="primary" size="lg" className="w-full h-14 text-lg" href="/precios">
                            Probar gratis 14 días
                        </Button>
                    </div>

                    {/* PLAN ENTERPRISE */}
                    <div className="flex flex-col p-8 rounded-2xl bg-surface/50 border border-border opacity-80 grayscale-[0.5] transition-all hover:grayscale-0 hover:opacity-100">
                        <div className="mb-6">
                            <div className="inline-flex items-center px-2 py-0.5 rounded bg-muted/20 text-muted text-[10px] font-bold uppercase tracking-widest mb-4">
                                💬 Próximamente
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-1">PLAN ENTERPRISE</h3>
                            <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Transformación Digital</p>
                            <p className="text-sm text-muted">Para centros de producción y laboratorios de alto volumen.</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-muted">Custom</span>
                            </div>
                            <span className="text-xs text-muted">Contacta con un asesor</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-muted/60">
                                <Check className="w-5 h-5 text-muted/40 flex-shrink-0 mt-0.5" />
                                <span>Archivos 3D / STL</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted/60">
                                <Check className="w-5 h-5 text-muted/40 flex-shrink-0 mt-0.5" />
                                <span>Auditoría avanzada</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted/60">
                                <Check className="w-5 h-5 text-muted/40 flex-shrink-0 mt-0.5" />
                                <span>Integraciones personalizadas</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted/60">
                                <Check className="w-5 h-5 text-muted/40 flex-shrink-0 mt-0.5" />
                                <span>Soporte dedicado</span>
                            </li>
                        </ul>

                        <div className="mt-auto h-12 flex items-center justify-center rounded-lg border border-border bg-transparent text-muted text-sm font-medium">
                            Contáctanos
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
