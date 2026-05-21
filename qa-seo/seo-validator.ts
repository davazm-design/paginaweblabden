import axios from 'axios';
import { load } from 'cheerio';

interface FAQQuestion {
    name: string;
    acceptedAnswer: {
        '@type': string;
        text: string;
    };
}

interface FAQSchema {
    '@context': string;
    '@type': string;
    mainEntity: FAQQuestion[];
}

export interface ValidationResult {
    success: boolean;
    url: string;
    faqCount?: number;
    errors: string[];
}

export async function validateSEO(url: string, silent: boolean = false): Promise<ValidationResult> {
    const result: ValidationResult = {
        success: false,
        url,
        errors: []
    };

    if (!silent) {
        console.log(`\n🔍 Validating SEO for: ${url}\n`);
    }

    try {
        // Fetch HTML
        const response = await axios.get(url);
        const html = response.data;
        const $ = load(html);

        // Extract JSON-LD scripts
        const jsonLdScripts = $('script[type="application/ld+json"]');
        let faqSchema: FAQSchema | null = null;

        jsonLdScripts.each((_, element) => {
            try {
                const content = $(element).html();
                if (!content) return;

                const parsed = JSON.parse(content);
                if (parsed['@type'] === 'FAQPage') {
                    faqSchema = parsed;
                }
            } catch (e) {
                // Ignore parse errors
            }
        });

        // Validate JSON-LD exists
        if (!faqSchema) {
            const error = 'No FAQPage JSON-LD found';
            result.errors.push(error);
            if (!silent) console.log(`❌ ${error}`);
            return result;
        }

        if (!silent) console.log('✅ FAQPage JSON-LD found');

        // Extract visible FAQs from HTML
        const visibleFAQs: Array<{ question: string; answer: string }> = [];
        $('.faq-item').each((_, element) => {
            const question = $(element).find('.faq-question').text().trim();
            const answer = $(element).find('.faq-answer').text().trim();
            if (question && answer) {
                visibleFAQs.push({ question, answer });
            }
        });

        // Validate count
        const schemaCount = faqSchema.mainEntity.length;
        const visibleCount = visibleFAQs.length;
        result.faqCount = schemaCount;

        if (schemaCount !== visibleCount) {
            const error = `FAQ count mismatch: JSON-LD has ${schemaCount}, HTML has ${visibleCount}`;
            result.errors.push(error);
            if (!silent) console.log(`❌ ${error}`);
            return result;
        }

        if (!silent) console.log(`✅ FAQ count matches: ${schemaCount} questions`);

        // Validate each question
        let allMatch = true;
        for (let i = 0; i < schemaCount; i++) {
            const schemaQ = faqSchema.mainEntity[i];
            const visibleQ = visibleFAQs[i];

            const normalizeText = (text: string) =>
                text.toLowerCase().replace(/[^\w\s]/g, '').trim();

            const schemaQuestionNorm = normalizeText(schemaQ.name);
            const visibleQuestionNorm = normalizeText(visibleQ.question);

            if (schemaQuestionNorm !== visibleQuestionNorm) {
                const error = `Question ${i + 1} mismatch: JSON-LD="${schemaQ.name}", HTML="${visibleQ.question}"`;
                result.errors.push(error);
                if (!silent) {
                    console.log(`❌ Question ${i + 1} mismatch:`);
                    console.log(`   JSON-LD: "${schemaQ.name}"`);
                    console.log(`   HTML:    "${visibleQ.question}"`);
                }
                allMatch = false;
            }

            // Validate answer structure
            if (!schemaQ.acceptedAnswer || !schemaQ.acceptedAnswer.text) {
                const error = `Question ${i + 1} missing acceptedAnswer.text in JSON-LD`;
                result.errors.push(error);
                if (!silent) console.log(`❌ ${error}`);
                allMatch = false;
            }
        }

        if (allMatch) {
            result.success = true;
            if (!silent) {
                console.log('✅ All FAQ questions match between JSON-LD and HTML');
                console.log('\n🎉 SEO Validation PASSED\n');
            }
        } else {
            if (!silent) console.log('\n❌ SEO Validation FAILED\n');
        }

        return result;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMsg = `Failed to fetch URL: ${error.message}`;
            result.errors.push(errorMsg);
            if (!silent) console.log(`❌ ${errorMsg}`);
        } else {
            const errorMsg = `Validation error: ${error}`;
            result.errors.push(errorMsg);
            if (!silent) console.log(`❌ ${errorMsg}`);
        }
        return result;
    }
}

// CLI execution (only runs when executed directly)
if (require.main === module) {
    const url = process.argv[2];
    if (!url) {
        console.log('Usage: npx ts-node qa-seo/seo-validator.ts <URL>');
        process.exit(1);
    }

    validateSEO(url).then(result => {
        process.exit(result.success ? 0 : 1);
    });
}
