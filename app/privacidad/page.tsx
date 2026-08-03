import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

// NOTA: este documento cubre tanto el sitio público como la plataforma SaaS.
// La lista de proveedores de la sección 5 debe mantenerse sincronizada con la
// infraestructura real del producto: si se añade o retira un proveedor que trate
// datos de clientes, actualizar esa tabla. Se recomienda revisión legal
// profesional antes de una auditoría formal.

export const metadata: Metadata = {
    title: "Política de Privacidad | LabDen",
    description: "Cómo LabDen trata, protege y conserva la información de los laboratorios que usan la plataforma.",
};

const SUPPORT_EMAIL = "soporte@labden.com.mx";

const PROVIDERS = [
    { name: "Stripe", purpose: "Procesamiento de pagos y suscripciones", location: "EE.UU." },
    { name: "Supabase", purpose: "Base de datos y almacenamiento de archivos", location: "EE.UU." },
    { name: "Vercel", purpose: "Alojamiento del sitio web", location: "EE.UU." },
    { name: "Railway", purpose: "Alojamiento de la API de la plataforma", location: "EE.UU." },
    { name: "Resend", purpose: "Envío de correos transaccionales", location: "EE.UU." },
    { name: "Sentry", purpose: "Monitoreo de errores técnicos", location: "EE.UU." },
    { name: "Google Analytics / Tag Manager", purpose: "Analítica del sitio público", location: "EE.UU." },
];

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
                        Última actualización: Agosto de 2026
                    </p>

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-8">

                        {/* 1. Alcance */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">1. Alcance de esta Política</h2>
                            <p className="text-muted leading-relaxed">
                                Esta Política aplica tanto al sitio web público de LabDen como a la plataforma de gestión para laboratorios dentales. Describe qué información tratamos, con qué finalidad, con quién la compartimos, cuánto tiempo la conservamos y cómo puedes ejercer tus derechos.
                            </p>
                        </section>

                        {/* 2. Doble rol */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">2. Nuestro Rol en el Tratamiento</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen actúa con dos roles distintos, y es importante diferenciarlos:
                            </p>
                            <div className="bg-surface border border-border rounded-lg p-6 mb-4">
                                <p className="text-muted leading-relaxed mb-3">
                                    <strong className="text-foreground">Como responsable</strong> — respecto de los datos de la cuenta del laboratorio: registro, usuarios administradores, facturación y datos de uso de la plataforma. Estos datos los determinamos y utilizamos nosotros para prestar y cobrar el servicio.
                                </p>
                                <p className="text-muted leading-relaxed">
                                    <strong className="text-foreground">Como encargado</strong> — respecto de la información que cada laboratorio carga en el sistema sobre sus dentistas y pacientes. <strong>El laboratorio es el responsable</strong> de esos datos; LabDen únicamente los procesa siguiendo sus instrucciones, para operar la plataforma, y no los utiliza para fines propios.
                                </p>
                            </div>
                            <p className="text-muted leading-relaxed">
                                Cada laboratorio opera en un entorno aislado: no tiene acceso a la información de ningún otro laboratorio.
                            </p>
                        </section>

                        {/* 3. Datos que tratamos */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">3. Datos que Tratamos</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                <strong className="text-foreground">En el sitio web:</strong>
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
                                <li><strong>Formularios de contacto:</strong> nombre, correo electrónico y mensaje.</li>
                                <li><strong>Navegación:</strong> páginas visitadas, tiempo de permanencia, tipo de dispositivo y navegador.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mb-4">
                                <strong className="text-foreground">En la plataforma:</strong>
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
                                <li><strong>Cuenta y usuarios:</strong> nombre del laboratorio, correos electrónicos, contraseñas almacenadas con cifrado irreversible, roles y permisos.</li>
                                <li><strong>Dentistas:</strong> datos de contacto de los clientes del laboratorio.</li>
                                <li><strong>Órdenes de trabajo:</strong> identificación del paciente, tipo de trabajo, especificaciones técnicas y fechas.</li>
                                <li><strong>Archivos adjuntos:</strong> fotografías y escaneos intraorales en formato digital.</li>
                                <li><strong>Comunicación:</strong> mensajes intercambiados dentro de cada orden.</li>
                                <li><strong>Datos financieros del laboratorio:</strong> precios, pagos recibidos y cuentas por cobrar.</li>
                            </ul>
                            <div className="bg-surface border border-border rounded-lg p-6">
                                <p className="text-muted leading-relaxed">
                                    <strong className="text-foreground">LabDen no almacena datos completos de tarjetas bancarias.</strong> Los pagos de la suscripción se procesan directamente en Stripe, que cumple con el estándar PCI-DSS. Nosotros solo conservamos el identificador de cliente y el estado de la suscripción.
                                </p>
                            </div>
                        </section>

                        {/* 4. Finalidades */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">4. Finalidades del Tratamiento</h2>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Prestar, operar y mantener el servicio contratado.</li>
                                <li>Gestionar el cobro de la suscripción y la facturación.</li>
                                <li>Enviar comunicaciones operativas: avisos de cuenta, vencimientos y notificaciones de órdenes.</li>
                                <li>Brindar soporte técnico y responder consultas.</li>
                                <li>Detectar y corregir errores técnicos, y mejorar el funcionamiento del servicio.</li>
                                <li>Enviar información comercial, únicamente si lo has autorizado y con opción de baja en todo momento.</li>
                            </ul>
                        </section>

                        {/* 5. Proveedores */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">5. Proveedores y Transferencias</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen <strong>no vende ni comercializa</strong> tu información. Para operar el servicio nos apoyamos en los siguientes proveedores de infraestructura, que tratan datos por cuenta nuestra y bajo contrato, exclusivamente para prestar el servicio:
                            </p>
                            <div className="overflow-x-auto mb-4">
                                <table className="w-full text-left text-sm border border-border rounded-lg">
                                    <thead className="bg-surface">
                                        <tr>
                                            <th className="p-3 font-bold text-foreground border-b border-border">Proveedor</th>
                                            <th className="p-3 font-bold text-foreground border-b border-border">Finalidad</th>
                                            <th className="p-3 font-bold text-foreground border-b border-border">Ubicación</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PROVIDERS.map((p) => (
                                            <tr key={p.name} className="border-b border-border last:border-0">
                                                <td className="p-3 text-foreground font-medium">{p.name}</td>
                                                <td className="p-3 text-muted">{p.purpose}</td>
                                                <td className="p-3 text-muted">{p.location}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-muted leading-relaxed mb-4">
                                El uso de estos proveedores implica la <strong>transferencia internacional de datos</strong> hacia servidores ubicados en Estados Unidos. Al utilizar el servicio, aceptas dicha transferencia.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Además de lo anterior, solo divulgamos información cuando lo exija una obligación legal o el requerimiento de una autoridad competente.
                            </p>
                        </section>

                        {/* 6. Cookies */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">6. Cookies y Herramientas de Análisis</h2>
                            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                                <li><strong>Google Analytics:</strong> mide tráfico y comportamiento de navegación de forma agregada y estadística en el sitio público.</li>
                                <li><strong>Cookies funcionales:</strong> recuerdan preferencias como el modo claro u oscuro.</li>
                                <li><strong>Cookies de sesión:</strong> mantienen tu sesión iniciada en la plataforma de forma segura. Son necesarias para el funcionamiento del servicio.</li>
                            </ul>
                            <p className="text-muted leading-relaxed">
                                Puedes desactivar las cookies desde la configuración de tu navegador, considerando que las de sesión son indispensables para acceder a la plataforma.
                            </p>
                        </section>

                        {/* 7. Conservación */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">7. Conservación y Eliminación</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Conservamos la información mientras la cuenta permanezca activa.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Cuando una cuenta vence o se cancela, pasa a modo de solo lectura durante un periodo que permite consultar y exportar la información. Concluido ese plazo, y previo aviso por correo electrónico al contacto registrado, los datos podrán eliminarse de forma definitiva.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Puedes solicitar en cualquier momento la exportación o el borrado anticipado de tu información escribiendo a{" "}
                                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                                    {SUPPORT_EMAIL}
                                </a>
                                . Cierta información podrá conservarse por el tiempo que exijan las obligaciones fiscales y contables aplicables.
                            </p>
                        </section>

                        {/* 8. Seguridad */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">8. Medidas de Seguridad</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Aplicamos medidas técnicas y organizativas para proteger la información:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                                <li>Cifrado de las comunicaciones en tránsito mediante HTTPS/TLS.</li>
                                <li>Contraseñas almacenadas con funciones de cifrado irreversible; nadie en LabDen puede leerlas.</li>
                                <li>Aislamiento por laboratorio: cada cuenta accede únicamente a su propia información.</li>
                                <li>Control de acceso por rol dentro de cada laboratorio.</li>
                                <li>Sesiones gestionadas con cookies seguras no accesibles desde el navegador.</li>
                                <li>Monitoreo continuo de errores y registro de auditoría de operaciones sensibles.</li>
                            </ul>
                            <p className="text-muted leading-relaxed">
                                Ningún sistema es completamente invulnerable. Ante un incidente de seguridad que afecte de forma significativa datos personales, notificaremos a los laboratorios afectados sin demora indebida.
                            </p>
                        </section>

                        {/* 9. Derechos ARCO */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">9. Derechos ARCO</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), tienes derecho a <strong>Acceder, Rectificar, Cancelar u Oponerte</strong> al tratamiento de tus datos personales, así como a revocar tu consentimiento.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Para ejercerlos, escribe a{" "}
                                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                                    {SUPPORT_EMAIL}
                                </a>{" "}
                                indicando tu solicitud y acreditando tu identidad. Responderemos en un plazo máximo de 20 días hábiles.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Si eres paciente o dentista y tus datos fueron registrados por un laboratorio, dirige tu solicitud directamente a ese laboratorio, que es el responsable de dicha información. Si nos contactas, te orientaremos y daremos aviso al laboratorio correspondiente.
                            </p>
                        </section>

                        {/* 10. Menores */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">10. Menores de Edad</h2>
                            <p className="text-muted leading-relaxed">
                                LabDen es una herramienta profesional dirigida a laboratorios dentales. No está destinada al uso directo por menores de edad. Cuando una orden de trabajo corresponda a un paciente menor, el laboratorio es responsable de contar con el consentimiento de quien ejerza la patria potestad o tutela.
                            </p>
                        </section>

                        {/* 11. Cambios */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">11. Cambios a esta Política</h2>
                            <p className="text-muted leading-relaxed">
                                LabDen podrá actualizar esta Política de Privacidad. Cualquier cambio será publicado en esta página indicando la fecha de la última actualización; los cambios sustanciales serán notificados por correo electrónico a los laboratorios activos.
                            </p>
                        </section>

                        {/* 12. Contacto */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">12. Contacto</h2>
                            <p className="text-muted leading-relaxed">
                                Si tienes dudas o comentarios sobre esta Política de Privacidad, puedes escribirnos a:<br />
                                📧{" "}
                                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                                    {SUPPORT_EMAIL}
                                </a>
                            </p>
                        </section>

                        {/* 13. Jurisdicción */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">13. Jurisdicción</h2>
                            <p className="text-muted leading-relaxed">
                                Esta Política de Privacidad se rige por las leyes de los Estados Unidos Mexicanos. Cualquier controversia relacionada con el tratamiento de datos personales será resuelta conforme a la legislación y tribunales competentes en México.
                            </p>
                        </section>

                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
