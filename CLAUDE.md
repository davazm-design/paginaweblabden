# CLAUDE.md — LABDEN-LANDING

Contexto primario para Claude Code en este repositorio.
Este archivo se carga automáticamente en cada sesión que abra Claude Code aquí — incluyendo invocaciones a los subagents del repo. Léelo completo antes de cualquier acción.

---

## Qué es este repositorio

**LABDEN-LANDING** es la **landing pública** del SaaS LABDEN.

- Es el activo de **adquisición orgánica**: SEO, content marketing, conversión de visitantes en trials.
- **NO es el SaaS**. El producto vive en `../Web-LABDEN/` (repo aparte, con gobernanza propia). **No tocar ese repo desde aquí.**
- Audiencia: dueños/operadores de **laboratorios dentales en LATAM**, español-only por ahora.
- Tagline establecido: **"El sistema operativo para laboratorios dentales"**.
- Tono de marca: profesional, confiable, claro, enterprise — **evitar lo "startup flashy"** *(brand kit en `../Web-LABDEN/.context/11_BRAND_GUIDELINES.md`)*.

---

## Stack real detectado

| Capa | Tecnología |
|---|---|
| Framework | Next.js **16.1.4** App Router |
| UI | React **19.2.3** |
| Lenguaje | TypeScript 5.x |
| Estilos | Tailwind CSS **4.x** vía `@tailwindcss/postcss` |
| CMS | WordPress headless vía **GraphQL** (`graphql-request@7.4.0`) |
| Animaciones | Framer Motion 12.x *(verificar uso real — posiblemente eliminable)* |
| Iconos | Lucide React |
| Markdown | react-markdown + rehype + remark |
| Analytics | Google Tag Manager + dataLayer custom |
| Testing | Playwright (E2E) |
| Modo de build actual | `output: "export"` *(bajo revisión — ver decisión arquitectónica)* |

---

## Decisión arquitectónica recomendada (pendiente de OK humano)

**Recomendación**: migrar de `output: "export"` a **SSR/ISR en Vercel**.

**Por qué**:
1. CSP por `middleware.ts` es imposible con static export — un bloqueador de seguridad.
2. Next Image optimization (AVIF/WebP, srcset responsive) está desactivado por `images.unoptimized: true`. Recuperarlo da +20-30 puntos de Lighthouse móvil.
3. `revalidate: 300` permite que Marketing edite WP y vea cambios en 5 min sin rebuild manual.
4. Server-only env vars (endpoint WP fuera del bundle del cliente).
5. El "ahorro" de hostear estático (~$20/mo) es ruido vs. la fricción operativa de no tener ISR.

**Estado**: NO migrar sin OK explícito del humano. Por ahora, todo el código asume `output: "export"`.

---

## Set de agentes operativos

Este repo opera con **3 subagents nativos** en `.claude/agents/`:

| Agente | Tipo | Cuándo invocarlo |
|---|---|---|
| `landing-engineer` | Builder principal | Toda construcción de páginas, componentes, integración WP, performance, a11y, eventos GTM, CI/deploy. Es el único IC dueño del código. |
| `landing-security-auditor` | Read-only gate | **Obligatorio antes de merge** cuando el diff toca: `lib/wordpress*.ts`, `dangerouslySetInnerHTML`, `next.config.ts`, `middleware.ts`, env vars, `scripts/`, `app/api/**`, `wp-plugins/**`, `package.json`, deploy config, archivos en root del repo. Emite verdict PASS/BLOCK con cita archivo:línea. Nunca escribe código. |
| `landing-seo-specialist` | Specialist focused | Owner único de `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `metadataBase`, JSON-LD (Organization, SoftwareApplication, Product, FAQPage, BreadcrumbList, Article), generateMetadata por ruta, Core Web Vitals desde la lente SEO. No toca JSX visible. |

**Flujo típico para una feature**:
```
landing-engineer construye
        ↓
(si toca trigger) landing-security-auditor revisa diff → PASS/BLOCK
        ↓
(si la feature tiene SEO surface) landing-seo-specialist añade metadata + JSON-LD
        ↓
humano mergea
```

**Coordinación**:
- El `landing-engineer` **no toca SEO técnico** — eso es del `landing-seo-specialist`.
- El `landing-seo-specialist` **no toca JSX visible** — eso es del `landing-engineer`.
- El `landing-security-auditor` **no escribe código** — solo flaggea.

---

## Source of truth de mensajería

**`../marketing/`** (workspace padre, fuera del repo de git) contiene la verdad sobre posicionamiento, copy y estrategia:

```
marketing/
├── 00_GO_TO_MARKET.md
├── 01_ICP_BUYER_PERSONA.md
├── 02_VALUE_PROPOSITION.md
├── 03_MESSAGING_PILLARS.md
├── 04_CONTENT_CALENDAR.md
├── 05_CHANNELS.md
├── 06_SALES_KIT.md
└── 07_LAUNCH_CHECKLIST.md
```

**Reglas**:
- Antes de escribir copy nuevo, leer `02_VALUE_PROPOSITION.md` y `03_MESSAGING_PILLARS.md`.
- El copy de la landing debe ser coherente con esos pilares.
- Si vas a publicar copy que no aparece en marketing/, **preguntar al humano** antes de inventarlo.
- `marketing/` es **solo-lectura** desde la landing — no escribir nada ahí.

---

## Hallazgos críticos vigentes (auditoría mayo 2026)

Estos son los gaps activos identificados. Pueden estar arreglándose en sesiones paralelas — **antes de tocar uno, verificar estado actual con `git status` y `git log --oneline -20`**.

### Bloqueadores de seguridad
1. **XSS vivo** en `app/blog/[slug]/page.tsx:149,193` — `dangerouslySetInnerHTML` con output crudo de WP. Sanitizar con `isomorphic-dompurify`.
2. **Endpoint WP filtrado** — `test-wp-connection.js` en root con URL Hostinger hardcoded. Mover a `scripts/` con `process.env.WORDPRESS_API_URL` o borrar.
3. **`NEXT_PUBLIC_WORDPRESS_API_URL`** mete el endpoint en el bundle del cliente. Renombrar a `WORDPRESS_API_URL` (server-only).
4. **Sin CSP, sin middleware** — limitado por `output: "export"`. Cierra después de la decisión arquitectónica.
5. **GraphQL introspection** probablemente abierta en el endpoint WP — verificar y cerrar en producción.

### Bloqueadores de conversión
6. **`PricingSection` huérfana** — componente completo (180 LoC en `components/home/pricing-section.tsx`) NO importado en ningún sitio. Prioridad #1 de funnel: importar en `app/precios/page.tsx`.
7. **Páginas placeholder** que el navbar enlaza: `/contacto`, `/seguridad`, `/empresa` están como stubs de 14 líneas.
8. **`/login` y `/auth/login` duplicadas** — unificar con `redirect()`.
9. **CTAs apuntan a `/auth/register`** que no existe — funnel roto.

### Higiene
10. **`/debug-logos` accesible públicamente** — borrar.
11. **5 versiones huérfanas de logo** en `public/` (`brand-icon-final-v2/v3/v4.png`, etc.) — borrar las no usadas.
12. **HTML inválido** — `<p>` dentro de `<ul>` en `components/home/pricing-section.tsx:106`.
13. **Doble `<FAQSchema>`** en `app/blog/[slug]/page.tsx` (líneas 132 y 241).
14. **`console.log`** en `app/blog/page.tsx:28-30`.
15. **`framer-motion` en `dependencies`** posiblemente sin uso — verificar y eliminar.
16. **`axios` y `cheerio`** en `dependencies` cuando solo `qa-seo/` los usa — mover a `devDependencies`.
17. **`.DS_Store`** commiteados — `git rm --cached`.
18. **GTM ID hardcoded** en `components/google-tag-manager.tsx:3` — mover a `NEXT_PUBLIC_GTM_ID`.

### Deuda funcional
19. **"Phase 4 Security" hardcoded** en `lib/wordpress.ts:331-340` — migrar a ACF.
20. **Sin `app/sitemap.ts`, `app/robots.ts`, `metadataBase`, JSON-LD Organization, opengraph-image** — dominio del `landing-seo-specialist`.
21. **3.6 MB en `public/`** — target <600 KB. Imágenes a WebP/AVIF.
22. **Sin CI/CD** — no hay `.github/workflows/`.
23. **Sin Lighthouse CI, sin axe-core, sin contract test de WP**.
24. **`README.md`** es el boilerplate de create-next-app — reescribir.

---

## Validaciones obligatorias post-cambio

Antes de declarar una tarea terminada:

```bash
npm run lint
npm run typecheck     # o npx tsc --noEmit si no existe el script
npm run build         # debe pasar sin warnings críticos
```

Si tocaste blog o WP integration:
```bash
npx playwright test
```

Si añadiste imagen nueva en `public/`:
- Verificar peso (<200 KB en WebP/AVIF).
- Verificar que está referenciada desde algún componente.

---

## Lo que NO se hace desde este repo

- **No tocar** `../Web-LABDEN/` (es el SaaS, zona protegida con su propio CLAUDE.md y gobernanza Architect/Auditor/Coder).
- **No tocar** `../Web-LABDEN COWORK/` (workspace experimental).
- **No escribir** en `../marketing/*` — solo lectura.
- **No escribir secretos** en ningún archivo del repo. `.env*` está en `.gitignore`; si necesitas un env var nuevo, documentarlo en `.env.example` y avisar al humano.
- **No inventar copy** que no esté en `marketing/` sin OK explícito.
- **No migrar export → SSR/ISR** sin OK explícito del humano (es decisión arquitectónica).
- **No mergear** sin pasar `landing-security-auditor` cuando el cambio caiga en su lista de triggers.
- **No expandir scope** — si la tarea es "importar PricingSection", no aprovechar para refactorizar el Hero.
- **No introducir dependencias nuevas** sin justificación clara y OK del humano.

---

## Convenciones de commits

```
<tipo>(<scope>): <descripción>

Tipos: feat · fix · docs · style · refactor · test · chore
Scopes típicos: home · pricing · blog · wp · seo · perf · a11y · ci · deps
Ejemplo: fix(blog): sanitize WP content with DOMPurify
```

---

## Cómo orientar a un agente nuevo en sesión

Cuando el humano pregunte a un agente *"¿tienes el contexto?"*, la respuesta esperada es:
1. Sí, leí `CLAUDE.md` del repo.
2. Conozco el stack, los 3 agentes operativos, los hallazgos críticos vigentes, y `marketing/` como source of truth.
3. Antes de actuar, voy a verificar el estado actual con `git status` y `git log` para detectar trabajo en paralelo de otras sesiones.

---

*Generado: 2026-05-21 · Landing pública de LABDEN · No reemplaza el CLAUDE.md del workspace padre ni el del repo del SaaS.*
