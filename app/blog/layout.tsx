import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Guías prácticas sobre operación, control y crecimiento para laboratorios dentales. Sin rodeos, directo a lo que importa para tu negocio.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Blog | LABDEN",
        description:
            "Guías prácticas sobre operación, control y crecimiento para laboratorios dentales modernos.",
        type: "website",
        url: "/blog",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
