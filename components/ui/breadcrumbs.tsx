
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
    items: { label: string; href: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Generate JSON-LD for Breadcrumbs
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://labden.com.mx"}${item.href}`
        }))
    };

    return (
        <nav aria-label="Breadcrumb" className="mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ol className="flex items-center text-sm text-muted-foreground">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Inicio</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-border" />
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={item.href} className="flex items-center">
                            {isLast ? (
                                <span className="font-medium text-foreground" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <>
                                    <Link href={item.href} className="hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                    <ChevronRight className="w-4 h-4 mx-2 text-border" />
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
