import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            // Evita regresiones tipo console.log de debug en producción.
            // console.warn y console.error sí están permitidos para error handling legítimo.
            "no-console": ["warn", { allow: ["warn", "error"] }],
        },
    },
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        "qa-seo/**",
        "wp-plugins/**",
        "scripts/**",
        "test-results/**",
        "playwright-report/**",
    ]),
]);

export default eslintConfig;
