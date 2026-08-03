import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos y Condiciones | LabDen",
    description: "Conoce los términos y condiciones de uso del sitio web de LabDen.",
};

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />

            <article className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Términos y Condiciones de Uso
                    </h1>
                    <p className="text-muted mb-12">
                        Última actualización: Enero de 2026
                    </p>

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-8">

                        {/* 1. Objeto del Sitio */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">1. Objeto del Sitio</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                El presente sitio web es operado por LabDen y tiene como finalidad proporcionar información general sobre la plataforma, sus funcionalidades y permitir el registro de usuarios interesados en el servicio.
                            </p>
                            <p className="text-muted leading-relaxed">
                                El uso de este sitio implica la aceptación de los presentes Términos y Condiciones.
                            </p>
                        </section>

                        {/* 2. Naturaleza del Servicio */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">2. Naturaleza del Servicio</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen es una plataforma de software como servicio (SaaS) por suscripción para la gestión de laboratorios dentales. El acceso se contrata mediante los planes publicados en la página de{" "}
                                <a href="/precios" className="text-accent hover:underline">
                                    Precios
                                </a>{" "}
                                y se factura de forma recurrente.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                La contratación de un plan constituye un acuerdo vinculante entre el laboratorio contratante y LabDen, regido por los presentes Términos y Condiciones.
                            </p>
                            <p className="text-muted leading-relaxed">
                                LabDen podrá modificar, habilitar o deshabilitar funcionalidades de la plataforma, procurando no afectar de forma sustancial las funciones esenciales contratadas durante el periodo vigente.
                            </p>
                        </section>

                        {/* 3. Uso Permitido */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">3. Uso Permitido</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                El usuario se compromete a utilizar el sitio de manera lícita y conforme a estos Términos.
                            </p>
                            <p className="text-muted leading-relaxed mb-2">Queda prohibido:</p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Utilizar el sitio con fines ilegales o no autorizados.</li>
                                <li>Intentar acceder sin autorización a sistemas, cuentas o información.</li>
                                <li>Introducir código malicioso, ataques automatizados o actividades que afecten la operación del sitio.</li>
                            </ul>
                        </section>

                        {/* 4. Registro de Usuario */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">4. Registro de Usuario</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                El registro en el sitio es opcional y puede ser requerido para acceder a ciertas funcionalidades.
                            </p>
                            <p className="text-muted leading-relaxed mb-2">El usuario es responsable de:</p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Proporcionar información veraz y actualizada.</li>
                                <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                LabDen no será responsable por el uso indebido de las credenciales por parte del usuario o terceros.
                            </p>
                        </section>

                        {/* 5. Propiedad Intelectual */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">5. Propiedad Intelectual</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Todos los contenidos del sitio, incluyendo textos, diseños, logotipos, gráficos y software, son propiedad de LabDen o se utilizan bajo licencia.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Queda prohibida su reproducción, distribución o uso sin autorización previa y expresa.
                            </p>
                        </section>

                        {/* 6. Disponibilidad del Sitio */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">6. Disponibilidad del Sitio</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen no garantiza que el sitio esté disponible de forma continua o libre de errores.
                            </p>
                            <p className="text-muted leading-relaxed mb-2">El acceso puede ser suspendido temporalmente por:</p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Mantenimiento</li>
                                <li>Actualizaciones</li>
                                <li>Fallas técnicas</li>
                                <li>Causas ajenas a LabDen</li>
                            </ul>
                        </section>

                        {/* 7. Limitación de Responsabilidad */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">7. Limitación de Responsabilidad</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen no será responsable por daños directos o indirectos derivados del uso o imposibilidad de uso del sitio, incluyendo pérdida de información, interrupciones del servicio o errores técnicos.
                            </p>
                            <p className="text-muted leading-relaxed">
                                El uso del sitio se realiza bajo responsabilidad del usuario.
                            </p>
                        </section>

                        {/* 8. Modificaciones a los Términos */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">8. Modificaciones a los Términos</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen podrá modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en esta página indicando la fecha de actualización.
                            </p>
                            <p className="text-muted leading-relaxed">
                                El uso continuo del sitio implica la aceptación de dichos cambios.
                            </p>
                        </section>

                        {/* 9. Legislación Aplicable y Jurisdicción */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">9. Legislación Aplicable y Jurisdicción</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Cualquier controversia será sometida a los tribunales competentes de México.
                            </p>
                        </section>

                        {/* 10. Contacto */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">10. Contacto</h2>
                            <p className="text-muted leading-relaxed">
                                Para cualquier duda relacionada con estos Términos y Condiciones, puedes contactarnos en:<br />
                                📧{" "}
                                <a href="mailto:soporte@labden.com.mx" className="text-accent hover:underline">
                                    soporte@labden.com.mx
                                </a>
                            </p>
                        </section>

                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
