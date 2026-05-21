import { test, expect } from "@playwright/test";

/**
 * Test contract con WordPress.
 *
 * Verifica que el response real de WP cumple el shape que asumen nuestros componentes.
 * Skip automático si no hay endpoint configurado (CI sin secret puede correr el resto).
 */

const endpoint = process.env.WORDPRESS_API_URL;

test.describe("WordPress contract", () => {
    test.skip(!endpoint, "WORDPRESS_API_URL no configurado");

    test("getHomeFields devuelve hero+problem+solution+howItWorks+footer", async ({
        request,
    }) => {
        const query = `
            query GetHomeFieldsShape {
                pageBy(uri: "home") {
                    homeFields {
                        heroTitle
                        heroCtaText
                        problemTitle
                        problemCard1Title
                        solutionTitle
                        solutionCard1Title
                        howItWorksTitle
                        howItWorksStep1Title
                        footerTagline
                    }
                }
            }
        `;
        const res = await request.post(endpoint!, {
            data: { query },
            headers: { "Content-Type": "application/json" },
            timeout: 10_000,
        });
        expect(res.ok(), `WP respondió ${res.status()}`).toBeTruthy();

        const json = await res.json();
        expect(json.errors, JSON.stringify(json.errors)).toBeFalsy();

        const fields = json.data?.pageBy?.homeFields;
        expect(fields, "homeFields no presente en respuesta WP").toBeTruthy();

        for (const key of [
            "heroTitle",
            "heroCtaText",
            "problemTitle",
            "problemCard1Title",
            "solutionTitle",
            "solutionCard1Title",
            "howItWorksTitle",
            "howItWorksStep1Title",
            "footerTagline",
        ]) {
            expect(fields[key], `Campo ${key} vacío o ausente en WP`).toBeTruthy();
        }
    });
});
