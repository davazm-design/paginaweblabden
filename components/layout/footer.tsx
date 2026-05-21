import { BrandLogo } from "@/components/ui/brand-logo"
import Link from "next/link"

interface FooterProps {
    tagline: string;
}

export function Footer({ tagline }: FooterProps) {
    return (
        <footer role="contentinfo" className="bg-surface border-t border-border py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-4">
                            <BrandLogo />
                        </div>
                        <p className="text-muted text-sm leading-relaxed">
                            {tagline}
                        </p>
                    </div>

                    <nav aria-label="Producto">
                        <h4 className="font-semibold mb-4 text-foreground">Producto</h4>
                        <ul className="space-y-1 md:space-y-2 text-sm text-muted">
                            <li><Link href="/producto" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Características</Link></li>
                            <li><Link href="/precios" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Planes</Link></li>
                            <li><Link href="/seguridad" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Seguridad</Link></li>
                        </ul>
                    </nav>

                    <nav aria-label="Empresa">
                        <h4 className="font-semibold mb-4 text-foreground">Empresa</h4>
                        <ul className="space-y-1 md:space-y-2 text-sm text-muted">
                            <li><Link href="/empresa" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Sobre nosotros</Link></li>
                            <li><Link href="/contacto" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Contacto</Link></li>
                            <li><Link href="/blog" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Blog</Link></li>
                        </ul>
                    </nav>

                    <nav aria-label="Legal">
                        <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
                        <ul className="space-y-1 md:space-y-2 text-sm text-muted">
                            <li><Link href="/privacidad" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Privacidad</Link></li>
                            <li><Link href="/terminos" className="inline-block py-2 hover:text-foreground active:opacity-70 transition-all">Términos</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted">
                    LABDEN — Software para laboratorios dentales<br className="md:hidden" />
                    <span className="hidden md:inline"> · </span>
                    Hecho en México · &copy; {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}
