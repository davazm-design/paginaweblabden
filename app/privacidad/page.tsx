import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | LABDEN",
    description: "Conoce cómo LABDEN protege y maneja tu información personal.",
};

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />

            <article className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Política de Privacidad
                    </h1>
                    <p className="text-muted mb-12">
                        Última actualización: Enero de 2026
                    </p>

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-8">

                        {/* 1. Responsable */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">1. Responsable del Tratamiento</h2>
                            <p className="text-muted leading-relaxed">
                                LABDEN es el responsable del tratamiento de los datos personales que se recopilan a través de este sitio web. Nos comprometemos a proteger tu privacidad y a manejar tu información de manera responsable y conforme a la legislación aplicable en México.
                            </p>
                        </section>

                        {/* 2. Datos que recopilamos */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">2. Datos que Recopilamos</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Recopilamos información únicamente cuando tú nos la proporcionas de forma voluntaria o mediante el uso normal del sitio, incluyendo:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li><strong>Formularios de contacto:</strong> nombre, correo electrónico y mensaje.</li>
                                <li><strong>Registro de cuenta:</strong> correo electrónico y contraseña (almacenada de forma encriptada).</li>
                                <li><strong>Navegación básica:</strong> páginas visitadas, tiempo de permanencia, tipo de dispositivo y navegador.</li>
                            </ul>
                        </section>

                        {/* 3. Uso de la información */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">3. Uso de la Información</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                La información recopilada se utiliza para:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Responder a tus consultas y solicitudes.</li>
                                <li>Operar, mantener y mejorar el funcionamiento del sitio web.</li>
                                <li>Enviarte información relacionada con nuestros servicios, únicamente si así lo autorizas.</li>
                            </ul>
                        </section>

                        {/* 4. Cookies y Analytics */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">4. Cookies y Herramientas de Análisis</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Este sitio utiliza cookies y herramientas de análisis para comprender cómo los visitantes interactúan con el contenido:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li><strong>Google Analytics:</strong> utilizado para medir tráfico y comportamiento de navegación de forma agregada y estadística.</li>
                                <li><strong>Cookies funcionales:</strong> para recordar preferencias del usuario, como el modo claro u oscuro.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                Puedes desactivar las cookies en cualquier momento desde la configuración de tu navegador.
                            </p>
                        </section>

                        {/* 5. Transferencia de Datos */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">5. Transferencia de Datos</h2>
                            <p className="text-muted leading-relaxed">
                                LABDEN no comparte ni transfiere tus datos personales a terceros, salvo en los casos en que sea necesario para cumplir con obligaciones legales o requerimientos de autoridad competente.
                            </p>
                        </section>

                        {/* 6. Protección de la información */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">6. Protección de la Información</h2>
                            <p className="text-muted leading-relaxed">
                                Implementamos medidas de seguridad razonables para proteger tu información personal contra acceso no autorizado, pérdida, uso indebido o alteración. No obstante, debes considerar que ningún sistema de transmisión o almacenamiento de datos en internet es completamente seguro.
                            </p>
                        </section>

                        {/* 7. Derechos ARCO */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">7. Derechos ARCO</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                De conformidad con la legislación mexicana aplicable, tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales (Derechos ARCO).
                            </p>
                            <p className="text-muted leading-relaxed">
                                Para ejercer estos derechos, puedes contactarnos en:<br />
                                📧{" "}
                                <a href="mailto:soporte@labden.com.mx" className="text-accent hover:underline">
                                    soporte@labden.com.mx
                                </a>
                            </p>
                        </section>

                        {/* 8. Cambios a la política */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">8. Cambios a esta Política</h2>
                            <p className="text-muted leading-relaxed">
                                LABDEN podrá actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página, indicando la fecha de la última actualización.
                            </p>
                        </section>

                        {/* 9. Contacto */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">9. Contacto</h2>
                            <p className="text-muted leading-relaxed">
                                Si tienes dudas o comentarios sobre esta Política de Privacidad, puedes escribirnos a:<br />
                                📧{" "}
                                <a href="mailto:soporte@labden.com.mx" className="text-accent hover:underline">
                                    soporte@labden.com.mx
                                </a>
                            </p>
                        </section>

                        {/* 10. Jurisdicción */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">10. Jurisdicción</h2>
                            <p className="text-muted leading-relaxed">
                                Esta Política de Privacidad se rige por las leyes de los Estados Unidos Mexicanos. Cualquier controversia relacionada con el tratamiento de datos personales será resuelta conforme a la legislación y tribunales competentes en México.
                            </p>
                        </section>

                    </div>
                </div>
            </article>

            <Footer tagline="Protegemos tu información." />
        </main>
    );
}
