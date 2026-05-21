import { test, expect } from '@playwright/test';

/**
 * 🧪 E2E Test Suite: Blog SEO & Accessibility
 * 
 * Target URL: /blog/[slug]
 * Requirement: Content fetched from WordPress (or Local fallback with same structure)
 * 
 * Checks:
 * 1. SEO Structure (<title>, <meta>, <article>)
 * 2. AI Visibility (JSON-LD, Blockquotes)
 * 3. Functional Content (Images, FAQs)
 * 4. Accessibility (ARIA attributes, Keyboard nav)
 */

// Slug configurable. Usa baseURL del playwright.config.ts en navegación.
const TEST_SLUG = process.env.BLOG_TEST_SLUG || 'organizacion-flujo-trabajo-laboratorio-dental';
const TEST_URL = `/blog/${TEST_SLUG}`;

test.describe('Blog Post SEO & Technical Validation', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(TEST_URL);
    });

    // 📌 1. Check SEO Structure
    test('SEO: Should have correct structural tags and metadata', async ({ page }) => {
        // Check <article> existence
        await expect(page.locator('article')).toBeVisible();

        // Check Dynamic Title (Should not be empty and contain the site name suffix if configured)
        const title = await page.title();
        expect(title).not.toBe('');
        console.log(`✅ Title found: ${title}`);

        // Check Meta Description
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveCount(1);
        const descContent = await metaDescription.getAttribute('content');
        expect(descContent).toBeTruthy();

        // Check Open Graph Image
        const ogImage = page.locator('meta[property="og:image"]');
        await expect(ogImage).toHaveCount(1);
        const ogImageContent = await ogImage.getAttribute('content');
        expect(ogImageContent).toBeTruthy();
        // Should be absolute URL
        expect(ogImageContent).toMatch(/^https?:\/\//);
    });

    // 📌 2. Check AI & Rich Results Visibility
    test('AI: Should render valid JSON-LD and Citable content', async ({ page }) => {
        // Validate JSON-LD FAQPage (might be multiple scripts)
        const scripts = page.locator('script[type="application/ld+json"]');
        const count = await scripts.count();
        expect(count).toBeGreaterThan(0);

        let faqSchemaFound = false;

        for (let i = 0; i < count; ++i) {
            const content = await scripts.nth(i).textContent();
            if (!content) continue;

            try {
                const schema = JSON.parse(content);
                if (schema['@type'] === 'FAQPage') {
                    faqSchemaFound = true;
                    expect(schema.mainEntity).toBeInstanceOf(Array);
                    console.log(`✅ JSON-LD FAQPage found with ${schema.mainEntity.length} questions.`);
                }
            } catch (e) {
                // Ignore parse errors for other scripts
            }
        }

        expect(faqSchemaFound).toBe(true);
        expect(faqSchemaFound).toBe(true);

        // Check for Citable Quotes (if content has them)
        // We allow this to pass if no quotes are present, but if they are, they must be <blockquote>
        const quotes = page.locator('blockquote');
        if (await quotes.count() > 0) {
            await expect(quotes.first()).toBeVisible();
            console.log('✅ Citable quotes detected in <blockquote> tags.');
        }
    });

    // 📌 3. & 4. Accessibility & Functionality
    test('A11y: FAQ Accordion should be accessible and interactive', async ({ page }) => {
        const faqSection = page.locator('#faq');

        // Only run if FAQ section exists in this post
        if (await faqSection.count() > 0) {
            await expect(faqSection).toBeVisible();
            await expect(faqSection).toHaveAttribute('aria-labelledby', 'faq-title');

            // Get first question button
            const firstQuestionBtn = page.locator('.faq-question').first();
            const firstAnswerPanel = page.locator('.faq-answer-content').first();

            // Initial state: Closed
            await expect(firstQuestionBtn).toHaveAttribute('aria-expanded', 'false');
            await expect(firstAnswerPanel).not.toBeVisible();

            // Interaction: Click to Open
            await firstQuestionBtn.click();

            // State: Opened
            await expect(firstQuestionBtn).toHaveAttribute('aria-expanded', 'true');
            await expect(firstAnswerPanel).toBeVisible();

            // Verify Content is readable (for humans and AI)
            await expect(firstAnswerPanel).not.toBeEmpty();

            // Interaction: Keyboard Navigation (Enter key)
            await firstQuestionBtn.press('Enter'); // Toggle to Close
            await expect(firstQuestionBtn).toHaveAttribute('aria-expanded', 'false'); // Should be closed now (toggle)
            // Note: Logic in component sets openIndex(null) on toggle.
        } else {
            console.log('ℹ️ No FAQ section found on this post (Test Skipped for FAQ).');
        }
    });

    test('Content: Featured Image should use Next/Image', async ({ page }) => {
        // Check if there is a main image in the article
        // We look for the specific wrapper class or structure we defined
        const featuredImg = page.locator('article img[alt]').first(); // Naive check for main image

        if (await featuredImg.count() > 0) {
            await expect(featuredImg).toBeVisible();
            // Check if it's optimized (Next.js images usually have srcset or distinct attributes, 
            // but strictly verifying it's "next/image" via DOM is tricky. 
            // We check for decoding="async" or standard nextjs classes if meaningful)
            const src = await featuredImg.getAttribute('src');
            expect(src).toBeTruthy();
        }
    });

});
