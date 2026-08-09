"use client"

import { BrandLogo } from "@/components/ui/brand-logo"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { analytics } from "@/lib/analytics"

const SOCIAL_LINKS = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61588445277715", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/labden.mx/", icon: Instagram },
];

const WHATSAPP_NUMBER = "5664015780";

const FOOTER_COLUMNS = [
    {
        title: "Plataforma",
        links: [
            { name: "Funciones", href: "/plataforma" },
            { name: "Precios", href: "/precios" },
            { name: "Seguridad", href: "/seguridad" },
        ],
    },
    {
        title: "Academy",
        links: [
            { name: "Cursos", href: "/academy" },
            { name: "LabDen Talks", href: "/talks" },
        ],
    },
    {
        title: "Recursos",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Contacto", href: "/contacto" },
            { name: "Aliados", href: "/aliados" },
        ],
    },
    {
        title: "Empresa",
        links: [
            { name: "Nosotros", href: "/empresa" },
            { name: "Términos y condiciones", href: "/terminos" },
            { name: "Aviso de privacidad", href: "/privacidad" },
        ],
    },
];

export function Footer() {
    return (
        <footer role="contentinfo" className="bg-[#0f1729] text-white/80 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-6 gap-10 mb-12">
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <BrandLogo showText={true} />
                        </div>
                        {/* Texto SEO — frase citable para crawlers y LLMs (F6-T2) */}
                        <p className="text-sm leading-relaxed text-white/75 max-w-xs mb-4">
                            LabDen es un sistema para laboratorios dentales en México. Ayuda a controlar órdenes de trabajo, dentistas, producción, entregas, ingresos y cuentas por cobrar desde una sola plataforma.
                        </p>
                        <div className="mb-6">
                            <Link
                                href="/prueba"
                                onClick={() => analytics.clickPruebaGratis('footer')}
                                className="inline-block text-xs font-semibold text-[#0f1729] bg-white hover:bg-white/90 px-4 py-2 rounded-lg transition-colors"
                            >
                                Prueba gratis 15 días
                            </Link>
                        </div>
                        {/* TODO Epic B: añadir enlaces a páginas internas SEO cuando existan:
                             /sistema-para-laboratorios-dentales
                             /software-para-laboratorios-dentales
                             /control-ordenes-laboratorio-dental
                             /comunidad */}
                        <div className="flex items-center gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                            <a
                                href={`https://wa.me/52${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                onClick={() => analytics.clickWhatsapp()}
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.353 0-4.563-.64-6.461-1.756l-.451-.27-2.648.888.888-2.648-.27-.451A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                            </a>
                        </div>
                    </div>

                    {FOOTER_COLUMNS.map((column) => (
                        <nav key={column.title} aria-label={column.title}>
                            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{column.title}</h3>
                            <ul className="space-y-2.5">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
                        <p>&copy; {new Date().getFullYear()} LabDen. Todos los derechos reservados.</p>
                        <p className="italic">La calidad no falla. La información sí.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
