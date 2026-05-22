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
| Testing | Playwright (E2E) + Lighthouse CI |
| CI | GitHub Actions (`.github/workflows/ci.yml`) — lint, typecheck, smoke, Lighthouse |
| Modo de build | **SSR/ISR en Vercel** (migrado mayo 2026 — `revalidate: 300` en home y blog) |

---

## Arquitectura editorial (decidida y vigente)

- `output: "export"` **fue eliminado** en mayo 2026. El sitio requiere host con Node (Vercel/Netlify/Cloud Run).
- `middleware.ts` aplica CSP estricta + HSTS + X-Frame-Options + Permissions-Policy.
- `app/api/revalidate/route.ts` recibe webhook de WP (`x-revalidate-secret`) y dispara `revalidatePath` on-demand. Sin webhook, ISR de 300 s.
- WP queries pasan por `React.cache()` para dedupe entre `generateMetadata` y el componente.
- `WORDPRESS_API_URL` es **server-only** (sin prefijo `NEXT_PUBLIC_`). El endpoint del CMS no entra al bundle del cliente.
- HTML de WP renderizado vía `dangerouslySetInnerHTML` pasa siempre por `isomorphic-dompurify`.

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

## Estado actual (mayo 2026)

Auditoría inicial detectó 24 gaps críticos. La mayoría se cerraron en un refactor de 8 sprints — ver `git log --oneline` para los commits. **Antes de tocar algo, verifica `git status` y `git log --oneline -20`** por si otra sesión ya lo movió.

### ✅ Cerrado en el refactor de mayo 2026

- **Seguridad**: XSS sanitizado con DOMPurify (blog title/content + FAQ). Endpoint WP filtrado eliminado (`test-wp-connection.js`). `WORDPRESS_API_URL` server-only. CSP + HSTS + X-Frame-Options + Permissions-Policy vía `middleware.ts`.
- **Funnel**: `PricingSection` importada en home + `/precios` real con planes Base $550 / Pro $850 / Enterprise. `/contacto` y `/seguridad` reales (no placeholders). `/login` → redirect a `/auth/login`. Todos los CTAs `/auth/register` redirigidos a `/precios`.
- **SEO**: `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `metadataBase`, JSON-LD Organization global, `generateMetadata` por ruta.
- **Higiene**: `/debug-logos` eliminado. Versiones huérfanas de logo eliminadas. HTML inválido corregido. Doble `<FAQSchema>` deduplicado. `console.log` debug fuera. `framer-motion` removido. `axios`/`cheerio` a `devDependencies`. `.DS_Store` purgados. `GTM_ID` → `NEXT_PUBLIC_GTM_ID`.
- **Performance**: `/public` 3.6 MB → 804 KB (logo PNG 660 KB → SVG 1.7 KB, huérfanos eliminados). Next Image optimization activa.
- **DX**: README real (235 líneas), `.env.example`, `app/apple-icon.tsx`, CI con lint + typecheck + Playwright smoke + Lighthouse.
- **Calidad**: 0 `any` types, 0 lint errors, `tsc --noEmit` limpio.

### ⚠️ Abierto — requiere acción humana o WP

- **Introspección GraphQL** del endpoint WP de producción: cerrarla en Hostinger/proveedor (fuera del código).
- **Campos ACF de Security en WP**: opcional. Hoy `SecuritySection` usa defaults internos sensatos. Si Marketing quiere editar esa sección sin tocar código, añadir `securityFeature{1-3}{Title,Description}` y `finalCta{Title,Description,ButtonText,Disclaimer}` en ACF + actualizar `GET_HOME_FIELDS` y `getHomeDataStruct` en `lib/wordpress.ts`.
- **24 posts en `lib/blog-data.ts`**: pendientes de migrar a WP. Cuando estén en WP, eliminar `blog-data.ts` y simplificar `app/blog/[slug]/page.tsx` (rama `isWP ? wpPost : localPost`).
- **`marketing/03_MESSAGING_PILLARS.md`** está vacío (5 pilares "Pendiente"). Cuando se complete, vale otra pasada de validación de copy global.
- **Deploy**: el repo ya no es `output: "export"`. Si todavía no se migró el hosting a Vercel/Netlify/Cloud Run, hacerlo. Configurar en el host: `WORDPRESS_API_URL`, `NEXT_PUBLIC_SITE_URL`, `REVALIDATE_SECRET`, `NEXT_PUBLIC_GTM_ID`.
- **Webhook PHP en WP**: añadir el snippet del README (`save_post` + `acf/save_post`) para que cambios en WP propaguen a prod en <10 s sin esperar el ISR de 5 min.

### 💤 Deuda aceptada (no urgente)

- CSP usa `'unsafe-inline'` en `script-src` por GTM. Refactor a nonce-based queda como deuda futura (no recomendado hasta que un cliente B2B exija SOC2/PCI strict).
- 2 imágenes residuales en `/public` (`dashboard-preview.png` 107 KB, `premium-plans-icon.png` 2.3 KB) — `next/image` las sirve en AVIF/WebP, OK.

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
