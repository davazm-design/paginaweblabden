'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import DOMPurify from 'isomorphic-dompurify'

interface FAQ {
    pregunta: string
    respuesta: string
}

interface FAQSectionProps {
    faqs: FAQ[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    // Handle hash navigation to open specific items or scroll to section
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#faq') {
            const element = document.getElementById('faq');
            if (element) {
                // Smooth scroll with a bit of offset
                const y = element.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, []);

    if (!faqs || faqs.length === 0) return null

    return (
        <section id="faq" className="mt-16 border-t pt-12 scroll-mt-24" aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-3xl font-bold mb-8 text-foreground">Preguntas Frecuentes</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const questionId = `faq-question-${index}`;
                    const answerId = `faq-answer-${index}`;
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="faq-item border border-border rounded-lg overflow-hidden bg-card"
                        >
                            <button
                                id={questionId}
                                aria-expanded={isOpen}
                                aria-controls={answerId}
                                className="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors focus:outline-none focus:bg-muted/50 focus:ring-2 focus:ring-inset focus:ring-sky-500/50"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span className="font-semibold text-lg text-foreground">{faq.pregunta}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>
                            <div
                                id={answerId}
                                role="region"
                                aria-labelledby={questionId}
                                hidden={!isOpen}
                                className={`faq-answer-content transition-all duration-200 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <div className="px-6 py-4 bg-muted/20 border-t border-border">
                                    <div
                                        className="faq-answer prose prose-slate max-w-none text-muted-foreground"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(faq.respuesta, { USE_PROFILES: { html: true } }),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
