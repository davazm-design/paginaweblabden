import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
    title: "Página no encontrada",
    description: "La página que buscas no existe o ya no está disponible.",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="flex-1 flex items-center justify-center px-4 py-20">
                <div className="max-w-lg w-full text-center">
                    <span className="inline-flex w-14 h-14 rounded-full bg-accent/10 text-accent items-center justify-center mb-6">
                        <Compass className="w-7 h-7" />
                    </span>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                        Error 404
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Esta página no existe
                    </h1>
                    <p className="text-muted leading-relaxed mb-8">
                        El enlace puede estar roto o la página fue movida. Te dejamos un par de rutas para que sigas explorando.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button variant="primary" size="lg" href="/">
                            Volver al inicio
                        </Button>
                        <Link
                            href="/blog"
                            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium text-muted hover:text-foreground transition-colors"
                        >
                            Ir al blog
                        </Link>
                    </div>
                </div>
            </section>

            <Footer tagline="Cuando algo no funciona, te ayudamos a encontrar el camino." />
        </main>
    );
}
