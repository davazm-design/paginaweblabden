import { ImageResponse } from "next/og";

export const alt = "LabDen — Gestión para Laboratorios Dentales Modernos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background:
                        "linear-gradient(135deg, #0a0a0a 0%, #0f172a 60%, #0284C7 140%)",
                    color: "#ffffff",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        fontSize: 28,
                        fontWeight: 600,
                        letterSpacing: 2,
                        opacity: 0.85,
                    }}
                >
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: 999,
                            background: "#38BDF8",
                        }}
                    />
                    LabDen
                </div>
                <div
                    style={{
                        marginTop: 40,
                        fontSize: 72,
                        fontWeight: 700,
                        lineHeight: 1.1,
                        maxWidth: 980,
                    }}
                >
                    Gestión para laboratorios dentales modernos
                </div>
                <div
                    style={{
                        marginTop: 28,
                        fontSize: 30,
                        lineHeight: 1.3,
                        maxWidth: 900,
                        color: "#cbd5e1",
                    }}
                >
                    Órdenes, finanzas y crecimiento en una sola plataforma.
                </div>
            </div>
        ),
        { ...size }
    );
}
