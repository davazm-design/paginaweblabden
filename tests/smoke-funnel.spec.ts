import { test, expect } from "@playwright/test";

/**
 * Smoke del funnel principal.
 * NO depende de WordPress — usa solo rutas estáticas y contenido predecible.
 * Si este test falla, el funnel de adquisición está roto en producción.
 */

test.describe("Funnel home → precios", () => {
    test("home carga y muestra navegación principal", async ({ page }) => {
        await page.goto("/");

        const title = await page.title();
        expect(title.toLowerCase()).toContain("labden");

        // Navbar visible + enlace de Precios presente (en mobile vive dentro del menú)
        await expect(page.locator("nav").first()).toBeVisible();
        await expect(
            page.getByRole("link", { name: /precios/i }).first()
        ).toBeAttached();
    });

    test("CTA principal lleva a /precios con planes visibles", async ({ page }) => {
        await page.goto("/precios");
        await expect(page).toHaveURL(/\/precios$/);

        await expect(page.getByRole("heading", { name: /plan starter/i })).toBeVisible();
        await expect(page.getByRole("heading", { name: /plan profesional/i })).toBeVisible();
        await expect(page.getByText(/\$699/)).toBeVisible();
        await expect(page.getByText(/\$1,099/)).toBeVisible();
    });

    test("/login encadena al portal de auth del SaaS", async ({ page }) => {
        // /login → /auth/login → app.labden.com.mx (la auth vive en el SaaS)
        const response = await page.goto("/login");
        expect(response?.ok()).toBeTruthy();
        await expect(page).toHaveURL(/app\.labden\.com\.mx/);
    });

    test("rutas placeholder reemplazadas (no 'Próximamente')", async ({ page }) => {
        for (const path of ["/contacto", "/seguridad", "/precios"]) {
            await page.goto(path);
            const body = await page.locator("body").innerText();
            expect(body.toLowerCase()).not.toContain("próximamente...");
        }
    });

    test("contacto expone mailto a soporte y ventas", async ({ page }) => {
        await page.goto("/contacto");
        await expect(page.getByText("soporte@labden.com.mx")).toBeVisible();
        await expect(page.getByText("ventas@labden.com.mx")).toBeVisible();
    });

    test("seguridad expone 6 pilares y CTA de DPA", async ({ page }) => {
        await page.goto("/seguridad");
        await expect(page.getByRole("heading", { name: /cifrado/i })).toBeVisible();
        await expect(page.getByRole("heading", { name: /LFPDPPP/i })).toBeVisible();
        await expect(
            page.getByRole("link", { name: /solicitar dpa/i })
        ).toBeVisible();
    });
});

test.describe("SEO técnico básico", () => {
    test("sitemap.xml accesible y lista rutas críticas", async ({ request }) => {
        const res = await request.get("/sitemap.xml");
        expect(res.ok()).toBeTruthy();
        const body = await res.text();
        for (const path of ["/precios", "/plataforma", "/blog", "/empresa", "/contacto", "/seguridad"]) {
            expect(body).toContain(path);
        }
    });

    test("robots.txt declara sitemap y bloquea rutas privadas", async ({ request }) => {
        const res = await request.get("/robots.txt");
        expect(res.ok()).toBeTruthy();
        const body = await res.text();
        expect(body.toLowerCase()).toContain("sitemap:");
        expect(body).toContain("/auth/");
    });

    test("home tiene JSON-LD Organization", async ({ page }) => {
        await page.goto("/");
        // Buscar el schema Organization entre todos los bloques JSON-LD (hay varios:
        // Organization, SoftwareApplication, BreadcrumbList, FAQPage).
        const scripts = await page
            .locator('script[type="application/ld+json"]')
            .allTextContents();
        const org = scripts
            .map((s) => { try { return JSON.parse(s); } catch { return null; } })
            .filter(Boolean)
            .find((o) => o["@type"] === "Organization");
        expect(org).toBeTruthy();
        expect(org.name).toBe("LabDen");
    });

    test("404 page renderiza y es noindex", async ({ page, request }) => {
        const res = await request.get("/ruta-que-no-existe-jamas-12345");
        expect(res.status()).toBe(404);

        await page.goto("/ruta-que-no-existe-jamas-12345");
        // El not-found emite la meta robots noindex (puede haber más de una por el
        // boundary de Next); basta con que la primera sea noindex.
        const robots = await page.locator('meta[name="robots"]').first().getAttribute("content");
        expect(robots?.toLowerCase()).toContain("noindex");
    });
});

test.describe("Security headers (middleware)", () => {
    test("home responde con CSP y X-Frame-Options", async ({ request }) => {
        const res = await request.get("/");
        const csp = res.headers()["content-security-policy"];
        const xfo = res.headers()["x-frame-options"];
        const xcto = res.headers()["x-content-type-options"];

        expect(csp).toBeTruthy();
        expect(csp).toContain("default-src 'self'");
        expect(xfo).toBe("DENY");
        expect(xcto).toBe("nosniff");
    });
});
