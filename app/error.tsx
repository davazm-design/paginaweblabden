"use client"

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, RotateCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Surface to GTM dataLayer si está disponible.
        if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
            window.dataLayer.push({
                event: "app_error",
                error_message: error?.message ?? "unknown",
                error_digest: error?.digest ?? "none",
            });
        }
        console.error("App error:", error);
    }, [error]);

    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                <span className="inline-flex w-14 h-14 rounded-full bg-accent/10 text-accent items-center justify-center mb-6">
                    <AlertCircle className="w-7 h-7" />
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Algo no salió como esperábamos
                </h1>
                <p className="text-muted leading-relaxed mb-2">
                    Tuvimos un problema al cargar esta página. Intenta de nuevo en unos segundos.
                </p>
                {error?.digest && (
                    <p className="text-xs text-muted/70 font-mono mb-8">Ref: {error.digest}</p>
                )}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="primary" size="lg" onClick={() => reset()}>
                        <RotateCw className="w-4 h-4 mr-2" />
                        Reintentar
                    </Button>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center h-14 px-8 text-base font-medium text-muted hover:text-foreground transition-colors"
                    >
                        Reportar al equipo
                    </Link>
                </div>
            </div>
        </main>
    );
}
