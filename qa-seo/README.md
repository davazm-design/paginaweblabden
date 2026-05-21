# 🕵️ QA SEO System for LABDEN

This system ensures that your Next.js blog posts meet strict SEO requirements, specifically validating that the visible FAQ content perfectly matches the structured data (JSON-LD) understood by Google.

## 📁 Structure

- **`seo-validator.ts`**: The core script. Fetches a URL, parses HTML, and runs checks.
- **`faq-compare.ts`**: Shared logic for comparing visible text vs Schema.
- **`../tests/playwright-seo.spec.ts`**: E2E test for CI/CD integration.

## 🚀 Usage

### 1. Manual Validation
You can run the validator script manually against any URL (localhost or production).

**Prerequisites:**
```bash
npm install axios cheerio ts-node typescript
```

**Run:**
```bash
# Validate Localhost
npx ts-node qa-seo/seo-validator.ts http://localhost:8000/blog/mi-post

# Validate Production
npx ts-node qa-seo/seo-validator.ts https://labden.com/blog/mi-post
```

### 2. CI/CD Integration (Playwright)
To run the automated E2E tests:

```bash
npx playwright test tests/playwright-seo.spec.ts
```

This test will:
1. Navigate to a blog post.
2. Verify critical tags (`<h1>`, `<article>`).
3. Check that JSON-LD exists.
4. Verify accordion interactivity.
5. Ensure content consistency.

## 🛠️ Adding New Checks
Edit `qa-seo/seo-validator.ts` to add new rules (e.g., checking meta description, open graph tags, etc).
