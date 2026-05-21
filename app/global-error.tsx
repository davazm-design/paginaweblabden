"use client"

import { useEffect } from "react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global error:", error);
    }, [error]);

    return (
        <html lang="es">
            <body
                style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    background: "#0a0a0a",
                    color: "#fafafa",
                    margin: 0,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                }}
            >
                <div style={{ maxWidth: 520, textAlign: "center" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
                        Error inesperado
                    </h1>
                    <p style={{ color: "#a1a1aa", lineHeight: 1.6, marginBottom: "2rem" }}>
                        La aplicación encontró un problema y no pudo recuperarse. Recarga la página o vuelve más tarde.
                    </p>
                    {error?.digest && (
                        <p style={{ fontSize: "0.75rem", color: "#71717a", fontFamily: "monospace", marginBottom: "2rem" }}>
                            Ref: {error.digest}
                        </p>
                    )}
                    <button
                        onClick={() => reset()}
                        style={{
                            background: "#0284C7",
                            color: "#ffffff",
                            border: "none",
                            padding: "0.75rem 1.75rem",
                            borderRadius: "0.5rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: "1rem",
                        }}
                    >
                        Recargar
                    </button>
                </div>
            </body>
        </html>
    );
}
