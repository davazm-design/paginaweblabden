// Load environment variables FIRST before any other imports
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Make NEXT_PUBLIC_WORDPRESS_API_URL available as WORDPRESS_API_URL for Node.js scripts
if (process.env.NEXT_PUBLIC_WORDPRESS_API_URL && !process.env.WORDPRESS_API_URL) {
    process.env.WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
}

// NOW import modules that depend on environment variables
import { getBlogPosts } from '../lib/wordpress-blog';
import { validateSEO, ValidationResult } from './seo-validator';
import { blogPosts } from '../lib/blog-data';

interface BatchResult {
    total: number;
    passed: number;
    failed: number;
    results: Array<{
        slug: string;
        status: 'PASSED' | 'FAILED';
        faqCount?: number;
        errors: string[];
    }>;
}

async function batchValidate(baseUrl: string = 'http://localhost:8000'): Promise<BatchResult> {
    console.log('🔍 Starting batch SEO validation...\n');
    console.log(`Base URL: ${baseUrl}\n`);

    const batchResult: BatchResult = {
        total: 0,
        passed: 0,
        failed: 0,
        results: []
    };

    try {
        // Fetch all blog posts (try WordPress first, fallback to local)
        let posts = await getBlogPosts();

        if (!posts || posts.length === 0) {
            console.log('⚠️ WordPress API not available, using local blog data\n');
            posts = blogPosts.map(p => ({ slug: p.slug }));
        }

        if (!posts || posts.length === 0) {
            console.log('⚠️ No posts found to validate');
            return batchResult;
        }

        batchResult.total = posts.length;
        console.log(`Found ${posts.length} posts to validate\n`);
        console.log('━'.repeat(60));

        // Validate each post
        for (const post of posts) {
            const slug = post.slug;
            const url = `${baseUrl}/blog/${slug}`;

            console.log(`\n📄 Validating: ${slug}`);

            const result: ValidationResult = await validateSEO(url, true);

            if (result.success) {
                batchResult.passed++;
                console.log(`✅ PASSED - ${result.faqCount || 0} FAQs`);
                batchResult.results.push({
                    slug,
                    status: 'PASSED',
                    faqCount: result.faqCount,
                    errors: []
                });
            } else {
                batchResult.failed++;
                console.log(`❌ FAILED`);
                result.errors.forEach(error => console.log(`   - ${error}`));
                batchResult.results.push({
                    slug,
                    status: 'FAILED',
                    faqCount: result.faqCount,
                    errors: result.errors
                });
            }

            console.log('━'.repeat(60));
        }

        // Print summary
        console.log('\n\n🧾 Summary:');
        console.log(`Validated: ${batchResult.total} posts`);
        console.log(`Passed: ${batchResult.passed} ✅`);
        console.log(`Failed: ${batchResult.failed} ❌`);

        const successRate = batchResult.total > 0
            ? ((batchResult.passed / batchResult.total) * 100).toFixed(1)
            : '0.0';
        console.log(`Success Rate: ${successRate}%`);

        if (batchResult.failed > 0) {
            console.log('\n⚠️ Failed Posts:');
            batchResult.results
                .filter(r => r.status === 'FAILED')
                .forEach(r => {
                    console.log(`  - ${r.slug}`);
                    r.errors.forEach(err => console.log(`    • ${err}`));
                });
        }

        return batchResult;

    } catch (error) {
        console.error('❌ Batch validation error:', error);
        return batchResult;
    }
}

// CLI execution
const baseUrl = process.argv[2] || 'http://localhost:8000';
batchValidate(baseUrl).then(result => {
    process.exit(result.failed > 0 ? 1 : 0);
});
