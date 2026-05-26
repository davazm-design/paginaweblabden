"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { BrandLogo } from "@/components/ui/brand-logo"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const navLinks = [
        { name: "Producto", href: "/producto" },
        { name: "Soluciones", href: "/#como-funciona" },
        { name: "Planes", href: "/precios" },
        { name: "Empresa", href: "/empresa" },
        { name: "Blog", href: "/blog" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo - Centralized Component */}
                <Link href="/" className="group" onClick={() => setIsOpen(false)}>
                    <BrandLogo showText={true} className="transition-transform group-hover:scale-105" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-foreground" : "text-muted"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-6 left-0 w-full h-[2px] bg-primary rounded-full" />
                                )}
                            </Link>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <Link href="https://app.labden.com.mx" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                        Entrar
                    </Link>
                    <Button variant="primary" size="sm" href="https://app.labden.com.mx/auth/register" className="h-10 px-6">
                        Prueba 14 días
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden w-12 h-12 flex items-center justify-center text-muted hover:text-foreground active:scale-90 transition-transform focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 top-20 bg-background/60 backdrop-blur-sm z-40 animate-in fade-in duration-200"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu Content */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-border p-6 flex flex-col gap-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-muted hover:text-primary active:bg-accent/5 p-4 rounded-xl transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-border my-4" />
                    <Link
                        href="https://app.labden.com.mx"
                        onClick={() => setIsOpen(false)}
                        className="block text-center py-4 text-foreground font-medium active:bg-accent/5 rounded-xl transition-colors"
                    >
                        Entrar
                    </Link>
                    <Button variant="primary" size="lg" className="w-full active:scale-[0.98]" href="https://app.labden.com.mx/auth/register" onClick={() => setIsOpen(false)}>
                        Comenzar ahora
                    </Button>
                </div>
            )}
        </nav>
    )
}
