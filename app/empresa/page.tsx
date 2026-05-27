"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
    Rocket,
    ShieldCheck,
    Handshake,
    MapPin,
    Mail,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />

            {/* Hero Section - Mission */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
                {/* Minimalist Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-100 bg-sky-50 text-sm text-sky-700 font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                        Nuestra Misión
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Modernizar la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Odontología Digital</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#475569] dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                        En LabDen, creemos que la tecnología no debe ser complicada. Nuestro objetivo es empoderar a los laboratorios dentales con herramientas simples, potentes y accesibles.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <h2 className="text-3xl font-bold text-[#0F172A] mb-6 text-center">Nuestra Historia</h2>
                        <p className="text-[#475569] leading-relaxed mb-6">
                            LabDen nació al observar una realidad común: Laboratorios creando arte dental increíble, pero gestionando su negocio con papel, lápiz y estrés. Vimos técnicos perdiendo horas buscando órdenes y dentistas frustrados por la falta de comunicación.
                        </p>
                        <p className="text-[#475569] leading-relaxed">
                            Decidimos cambiar eso. Combinamos nuestra pasión por el desarrollo de software con el conocimiento profundo del flujo de trabajo dental para crear un sistema operativo que trabaja por ti.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0F172A]">Nuestros Valores</h2>
                        <p className="text-[#475569] mt-4">Los pilares que sostienen cada línea de código que escribimos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Innovation */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_4px_10px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.06)] hover:border-sky-500/30 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                                <Rocket size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Innovación Práctica</h3>
                            <p className="text-[#475569] text-sm leading-relaxed">
                                No creamos tecnología por moda. Desarrollamos herramientas que resuelven problemas reales del día a día en el laboratorio.
                            </p>
                        </div>

                        {/* Transparency */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_4px_10px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.06)] hover:border-sky-500/30 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6">
                                <Handshake size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Transparencia Total</h3>
                            <p className="text-[#475569] text-sm leading-relaxed">
                                Sin letras chiquitas. Creemos en precios claros, datos abiertos y en construir relaciones a largo plazo con nuestros clientes.
                            </p>
                        </div>

                        {/* Security */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_4px_10px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.06)] hover:border-sky-500/30 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 mb-6">
                                <ShieldCheck size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Seguridad Primero</h3>
                            <p className="text-[#475569] text-sm leading-relaxed">
                                Sabemos que manejas datos sensibles de pacientes. Por eso, la seguridad no es una &laquo;característica&raquo;, es la base de todo lo que construimos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Contact Split */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Why Choose Us */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">¿Por qué elegirnos?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-sky-500 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0F172A] text-lg">Soporte Local</h3>
                                        <p className="text-[#475569] text-sm mt-1">Entendemos el mercado latinoamericano. Hablamos tu idioma y conocemos tus retos.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-sky-500 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0F172A] text-lg">Enfoque 100% Dental</h3>
                                        <p className="text-[#475569] text-sm mt-1">No somos un CRM genérico. Somos especialistas en flujos de prótesis, ortodoncia e implantes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-sky-500 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0F172A] text-lg">Actualizaciones Constantes</h3>
                                        <p className="text-[#475569] text-sm mt-1">Tu suscripción incluye mejoras continuas. El software que usas hoy será aún mejor mañana.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
                            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Contáctanos</h2>
                            <p className="text-[#475569] mb-8">
                                ¿Tienes dudas o quieres conocer al equipo? Estamos listos para escucharte.
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:soporte@labden.com.mx" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-sky-500/50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-[#0F172A] font-medium">soporte@labden.com.mx</span>
                                </a>

                                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="text-[#0F172A] font-medium">Ciudad de México, México</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-[#F1F5F9]/50 border-t border-slate-200 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h3 className="text-3xl font-bold text-[#0F172A] mb-6">
                        Únete a la nueva generación de laboratorios digitales
                    </h3>
                    <div className="flex justify-center">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-sky-900/20" href="/precios">
                            Conoce nuestros Planes <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
