import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Empresa",
    description:
        "Quiénes somos: el equipo detrás de LabDen, una plataforma SaaS diseñada para laboratorios dentales en Latinoamérica.",
    alternates: { canonical: "/empresa" },
    openGraph: {
        title: "Empresa | LabDen",
        description:
            "Quiénes somos: el equipo detrás de LabDen, hecho para laboratorios dentales en Latinoamérica.",
        type: "website",
        url: "/empresa",
    },
};

export default function EmpresaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
