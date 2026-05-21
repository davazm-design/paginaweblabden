"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function BlogPage() {
    const categories = [
        "Operación",
        "Finanzas",
        "Gestión",
        "Digitalización",
        "Seguridad"
    ];

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredPosts = selectedCategory
        ? blogPosts.filter(post => post.category === selectedCategory)
        : blogPosts;

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-4 bg-surface border-b border-border">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-surface-elevated text-sm text-accent font-medium mb-6 shadow-sm">
                        <BookOpen size={16} />
                        Blog LABDEN
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Recursos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">laboratorios dentales modernos</span>
                    </h1>

                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Guías prácticas sobre operación, control y crecimiento. Sin rodeos, directo a lo que importa para tu negocio.
                    </p>

                    {/* Categories Pills */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {/* "Todas" pill */}
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-3 min-h-[44px] rounded-full border text-sm font-medium transition-all active:scale-[0.98] ${selectedCategory === null
                                ? 'bg-accent border-accent text-accent-foreground shadow-md'
                                : 'bg-surface-elevated border-border text-muted hover:border-accent hover:text-accent'
                                }`}
                        >
                            Todas
                        </button>

                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-3 min-h-[44px] rounded-full border text-sm font-medium transition-all active:scale-[0.98] ${selectedCategory === cat
                                    ? 'bg-accent border-accent text-accent-foreground shadow-md'
                                    : 'bg-surface-elevated border-border text-muted hover:border-accent hover:text-accent'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Active filter indicator */}
                    {selectedCategory && (
                        <div className="mt-6 text-sm text-muted">
                            Mostrando {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo' : 'artículos'} en <span className="font-semibold text-accent">{selectedCategory}</span>
                        </div>
                    )}
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-lg text-muted">No hay artículos en esta categoría aún.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="flex flex-col bg-surface-elevated rounded-2xl border border-border shadow-[var(--shadow-md)] hover:border-accent/30 hover:shadow-lg transition-all group overflow-hidden"
                                >
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Badge variant="outline" className="text-accent border-accent/20 bg-accent/5 rounded-md font-medium px-2 py-0.5">
                                                {post.category}
                                            </Badge>
                                            <span className="text-xs text-muted font-medium">{post.readTime} lectura</span>
                                        </div>

                                        <Link href={`/blog/${post.slug}`} className="group-hover:text-accent transition-colors">
                                            <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="pt-6 border-t border-border flex items-center justify-between mt-auto">
                                            <span className="text-xs text-muted">{post.date}</span>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="text-sm font-semibold text-accent flex items-center gap-1 active:opacity-70 transition-opacity p-2 -mr-2"
                                            >
                                                Leer artículo
                                                <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Soft CTA */}
            <section className="py-20 bg-surface border-t border-border">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        ¿Quieres dejar atrás el Excel y los procesos manuales?
                    </h3>
                    <p className="text-muted mb-8">
                        Conoce cómo LABDEN ayuda a laboratorios como el tuyo a recuperar el control.
                    </p>
                    <div className="flex justify-center">
                        <Button variant="secondary" size="lg" className="h-12 px-8" href="/producto">
                            Ver Tour de Producto
                        </Button>
                    </div>
                </div>
            </section>

            <Footer tagline="Consejos y estrategias para el laboratorio moderno." />
        </main>
    );
}

