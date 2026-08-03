import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

// NOTA: este documento describe las condiciones comerciales reales del servicio
// (planes, renovación, cancelación, reembolsos, suspensión por impago). Los plazos
// aquí declarados están alineados con el comportamiento implementado en el producto.
// Se recomienda revisión legal profesional antes de una auditoría formal.

export const metadata: Metadata = {
    title: "Términos y Condiciones | LabDen",
    description: "Condiciones de contratación del servicio LabDen: planes, facturación, renovación, cancelación y reembolsos.",
};

const SUPPORT_EMAIL = "soporte@labden.com.mx";

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
                        Última actualización: Agosto de 2026
                    </p>

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-8">

                        {/* 1. Objeto y aceptación */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">1. Objeto y Aceptación</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Los presentes Términos y Condiciones regulan tanto el uso de este sitio web como la contratación y el uso de la plataforma LabDen por parte de los laboratorios dentales que suscriben un plan.
                            </p>
                            <p className="text-muted leading-relaxed">
                                El uso del sitio, la creación de una cuenta o la contratación de cualquier plan implican la aceptación plena de estos Términos.
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

                        {/* 3. Planes, precios y facturación */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">3. Planes, Precios y Facturación</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen ofrece los siguientes planes de suscripción, expresados en pesos mexicanos (MXN):
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                                <li><strong>Plan Starter:</strong> $699 MXN/mes o $6,291 MXN/año, más IVA.</li>
                                <li><strong>Plan Profesional:</strong> $1,099 MXN/mes o $9,891 MXN/año, más IVA.</li>
                                <li><strong>Plan Enterprise:</strong> condiciones a medida, acordadas por escrito.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mb-4">
                                El pago anual representa un ahorro del 25% respecto al pago mensual equivalente. <strong>Todos los precios publicados no incluyen IVA</strong>; el impuesto se añade al momento del cobro y se refleja en el comprobante fiscal correspondiente.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                La suscripción se cobra <strong>por adelantado</strong> al inicio de cada periodo de facturación. El procesamiento de pagos se realiza a través de <strong>Stripe</strong>; LabDen no almacena los datos completos de tu tarjeta.
                            </p>
                            <p className="text-muted leading-relaxed">
                                El precio vigente es el publicado en la página de{" "}
                                <a href="/precios" className="text-accent hover:underline">
                                    Precios
                                </a>{" "}
                                al momento de la contratación. LabDen podrá modificar sus precios notificando previamente al cliente; los cambios no afectarán el periodo ya pagado.
                            </p>
                        </section>

                        {/* 4. Prueba gratuita */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">4. Prueba Gratuita</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen ofrece un periodo de prueba gratuito de <strong>15 días</strong>, sin necesidad de registrar una tarjeta de crédito.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Al no existir un medio de pago registrado, <strong>no se genera ningún cargo automático</strong> al finalizar la prueba. Recibirás avisos por correo electrónico antes del vencimiento.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Si al término de la prueba no se contrata un plan, la cuenta pasa a <strong>modo de solo lectura</strong>: podrás consultar y exportar tu información, pero no registrar nueva actividad. La conservación posterior de los datos se rige por la sección 8.
                            </p>
                        </section>

                        {/* 5. Renovación automática y cancelación */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">5. Renovación Automática y Cancelación</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Las suscripciones se <strong>renuevan automáticamente</strong> por periodos iguales al contratado (mensual o anual), salvo que el cliente cancele antes de la fecha de renovación.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Puedes cancelar en cualquier momento desde el portal de facturación disponible en tu cuenta, o escribiendo a{" "}
                                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                                    {SUPPORT_EMAIL}
                                </a>.
                            </p>
                            <p className="text-muted leading-relaxed">
                                La cancelación surte efecto <strong>al final del periodo ya pagado</strong>. Conservas el acceso completo hasta esa fecha y no se generan cargos posteriores.
                            </p>
                        </section>

                        {/* 6. Reembolsos */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">6. Reembolsos</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Dado que LabDen ofrece 15 días de prueba gratuita previos a cualquier cobro, <strong>no se realizan reembolsos por periodos de suscripción ya iniciados</strong>.
                            </p>
                            <p className="text-muted leading-relaxed mb-2">
                                Sí se reembolsa íntegramente en los siguientes casos:
                            </p>
                            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                                <li>Cobros duplicados.</li>
                                <li>Cargos posteriores a una cancelación solicitada en tiempo.</li>
                                <li>Errores de facturación atribuibles a LabDen.</li>
                            </ul>
                            <p className="text-muted leading-relaxed">
                                Para solicitar un reembolso escribe a{" "}
                                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                                    {SUPPORT_EMAIL}
                                </a>
                                . Respondemos en un plazo máximo de 5 días hábiles.
                            </p>
                        </section>

                        {/* 7. Suspensión por falta de pago */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">7. Suspensión por Falta de Pago</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Si un cargo no puede procesarse, la cuenta entra en un <strong>periodo de gracia</strong> durante el cual conserva el acceso completo, para dar oportunidad de actualizar el método de pago.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Transcurrido el periodo de gracia sin regularizar el pago, la cuenta pasa a <strong>modo de solo lectura</strong>: la información permanece accesible y exportable, pero no es posible registrar nuevas órdenes ni modificar datos.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Regularizado el pago, el acceso completo se restablece sin pérdida de información.
                            </p>
                        </section>

                        {/* 8. Datos del cliente */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">8. Datos del Cliente</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                La información que el laboratorio registra en la plataforma —órdenes de trabajo, catálogo, dentistas, pacientes, archivos y registros financieros— es <strong>propiedad del laboratorio</strong>.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen no vende esa información ni la utiliza para fines distintos a la prestación del servicio. El tratamiento se detalla en la{" "}
                                <a href="/privacidad" className="text-accent hover:underline">
                                    Política de Privacidad
                                </a>.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Tras la cancelación o el vencimiento, la cuenta permanece en modo de solo lectura durante un periodo que permite consultar y exportar la información. Concluido ese plazo, y previo aviso por correo electrónico, los datos podrán eliminarse de forma definitiva. Puedes solicitar la exportación o el borrado anticipado en{" "}
                                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                                    {SUPPORT_EMAIL}
                                </a>.
                            </p>
                        </section>

                        {/* 9. Uso Permitido */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">9. Uso Permitido</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                El usuario se compromete a utilizar el sitio y la plataforma de manera lícita y conforme a estos Términos.
                            </p>
                            <p className="text-muted leading-relaxed mb-2">Queda prohibido:</p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Utilizar el servicio con fines ilegales o no autorizados.</li>
                                <li>Intentar acceder sin autorización a sistemas, cuentas o información de otros laboratorios.</li>
                                <li>Introducir código malicioso, ataques automatizados o actividades que afecten la operación del servicio.</li>
                                <li>Revender, sublicenciar o ceder el acceso a la plataforma sin autorización expresa.</li>
                            </ul>
                        </section>

                        {/* 10. Registro de Usuario */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">10. Registro y Cuentas de Usuario</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                El laboratorio contratante es responsable de las cuentas de usuario que cree dentro de su organización, así como del alcance de los permisos que les asigne.
                            </p>
                            <p className="text-muted leading-relaxed mb-2">El usuario es responsable de:</p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Proporcionar información veraz y actualizada.</li>
                                <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                LabDen no será responsable por el uso indebido de las credenciales por parte del usuario o de terceros.
                            </p>
                        </section>

                        {/* 11. Propiedad Intelectual */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">11. Propiedad Intelectual</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Todos los contenidos del sitio y de la plataforma, incluyendo textos, diseños, logotipos, gráficos y software, son propiedad de LabDen o se utilizan bajo licencia.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Queda prohibida su reproducción, distribución o uso sin autorización previa y expresa. Esta cláusula no afecta la propiedad del cliente sobre sus propios datos, conforme a la sección 8.
                            </p>
                        </section>

                        {/* 12. Disponibilidad del Servicio */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">12. Disponibilidad del Servicio</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen procura la máxima continuidad del servicio, pero no garantiza que esté disponible de forma ininterrumpida o libre de errores.
                            </p>
                            <p className="text-muted leading-relaxed mb-2">El acceso puede suspenderse temporalmente por:</p>
                            <ul className="list-disc list-inside text-muted space-y-2">
                                <li>Mantenimiento programado</li>
                                <li>Actualizaciones</li>
                                <li>Fallas técnicas</li>
                                <li>Causas ajenas a LabDen, incluidas fallas de sus proveedores de infraestructura</li>
                            </ul>
                        </section>

                        {/* 13. Limitación de Responsabilidad */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">13. Limitación de Responsabilidad</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                En la medida permitida por la legislación aplicable, la responsabilidad total de LabDen frente al cliente por cualquier concepto no excederá el importe efectivamente pagado por éste durante los doce meses previos al hecho que motive la reclamación.
                            </p>
                            <p className="text-muted leading-relaxed">
                                LabDen no será responsable por daños indirectos, lucro cesante o pérdida de oportunidades comerciales derivados del uso o imposibilidad de uso del servicio.
                            </p>
                        </section>

                        {/* 14. Modificaciones a los Términos */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">14. Modificaciones a los Términos</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                LabDen podrá modificar estos Términos y Condiciones. Las modificaciones serán publicadas en esta página indicando la fecha de actualización, y los cambios sustanciales que afecten condiciones económicas serán notificados por correo electrónico.
                            </p>
                            <p className="text-muted leading-relaxed">
                                El uso continuo del servicio tras la entrada en vigor implica la aceptación de dichos cambios.
                            </p>
                        </section>

                        {/* 15. Legislación Aplicable y Jurisdicción */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">15. Legislación Aplicable y Jurisdicción</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Cualquier controversia será sometida a los tribunales competentes de México.
                            </p>
                        </section>

                        {/* 16. Contacto */}
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4">16. Contacto</h2>
                            <p className="text-muted leading-relaxed">
                                Para cualquier duda relacionada con estos Términos y Condiciones, puedes contactarnos en:<br />
                                📧{" "}
                                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
                                    {SUPPORT_EMAIL}
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
