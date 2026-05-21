
import React from 'react';
import { Quote } from 'lucide-react';

interface CitableQuotesProps {
    quotes: { quoteText: string }[];
}

export function CitableQuotes({ quotes }: CitableQuotesProps) {
    if (!quotes || quotes.length === 0) return null;

    return (
        <div className="my-12 space-y-8">
            {quotes.map((item, idx) => (
                <blockquote key={idx} className="relative p-8 bg-sky-50 dark:bg-sky-900/20 rounded-xl border-l-4 border-primary">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                    <p className="text-xl md:text-2xl font-serif italic text-foreground relative z-10 pl-6">
                        &ldquo;{item.quoteText}&rdquo;
                    </p>
                </blockquote>
            ))}
        </div>
    );
}
