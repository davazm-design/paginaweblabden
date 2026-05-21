
/**
 * Utility to compare Visible FAQ Content vs JSON-LD Schema
 */

export interface FAQTypes {
    question: string;
    answer: string;
}

export function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .replace(/<[^>]*>/g, '') // Strip HTML
        .replace(/\s+/g, ' ')    // Normalize whitespace
        .trim();
}

export function compareFAQs(visibleFAQs: FAQTypes[], schemaFAQs: FAQTypes[]): string[] {
    const errors: string[] = [];

    if (visibleFAQs.length !== schemaFAQs.length) {
        errors.push(`Count mismatch: Visible (${visibleFAQs.length}) vs Schema (${schemaFAQs.length})`);
    }

    if (visibleFAQs.length > 5) {
        errors.push(`Warning: having more than 5 FAQs is often discouraged for concise SERP display.`);
    }

    // Check generic matches
    // We won't do 1:1 strict matching because order might differ or text might be slightly different
    // but we expect every schema question to be somewhat present in visible text.

    schemaFAQs.forEach((schemaItem, index) => {
        const schemaQ = normalizeText(schemaItem.question);
        const match = visibleFAQs.find(v => normalizeText(v.question).includes(schemaQ) || schemaQ.includes(normalizeText(v.question)));

        if (!match) {
            errors.push(`Schema Question "${schemaItem.question}" not found in visible FAQs.`);
        }
    });

    return errors;
}
