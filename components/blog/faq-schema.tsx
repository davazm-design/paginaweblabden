
import React from 'react';

interface FAQ {
    pregunta: string
    respuesta: string
}

interface FAQSchemaProps {
    faqs: FAQ[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    if (!faqs || faqs.length === 0) return null

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.pregunta,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.respuesta.replace(/<[^>]*>/g, '') // Strip HTML tags for clean schema
            }
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
