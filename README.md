# LABDEN Landing

Landing pública del SaaS **LABDEN** — plataforma de gestión de órdenes para laboratorios dentales en Latinoamérica.

Stack: **Next.js 16 (App Router, SSR/ISR)** · React 19 · Tailwind 4 · WordPress headless (WPGraphQL + ACF) · GTM · Playwright.

---

## Quickstart

```bash
# 1. Variables de entorno
cp .env.example .env.local   # si existe; si no, crea uno con las vars de la sección "Environment"

# 2. Instalar y arrancar
npm install
npm run dev                  # http://localhost:8000
```

## Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Dev server en puerto 8000 (corre `verify-sandbox.js` antes) |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build en puerto 8000 |
| `npm run lint` | ESLint con reglas de Next + jsx-a11y + `no-console` |
| `npm run typecheck` | `tsc --noEmit` sobre todo el repo |
| `npm run test:e2e` | Playwright completo (incluye contract WP si hay endpoint) |
| `npm run test:smoke` | Solo smoke del funnel — sin dependencia de WP |

## Environment

Variables de entorno usadas por la app. Sin las marcadas como **requeridas**, el build falla.

| Variable | Tipo | Requerida | Propósito |
|----------|------|-----------|-----------|
| `WORDPRESS_API_URL` | server-only | **sí** | Endpoint GraphQL de WP (no exponer en cliente — sin prefijo `NEXT_PUBLIC_`). |
| `NEXT_PUBLIC_SITE_URL` | public | recomendada | Dominio canónico. Default `https://labden.com.mx`. Útil para staging. |
| `REVALIDATE_SECRET` | server-only | sí en prod | Token para que WP llame al endpoint `/api/revalidate`. Generar con `openssl rand -base64 32`. |
| `NEXT_PUBLIC_GTM_ID` | public | opcional | Container ID de Google Tag Manager. Si vacío, no se inyecta GTM (ideal para dev/staging). |
| `BLOG_TEST_SLUG` | CI-only | opcional | Override del slug de blog que usa `playwright-seo.spec.ts`. |

El script `scripts/verify-sandbox.js` corre antes de `dev` y `build` y aborta si detecta variables peligrosas en el ambiente (`DATABASE_URL`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `RESEND_API_KEY`) — esta landing es frontend público, no debe manejar credenciales del SaaS core.

---

## Arquitectura

```
LABDEN-LANDING
├── app/                   # App Router (rutas + layouts + metadata)
│   ├── layout.tsx         # metadataBase, OG global, JSON-LD Organization, viewport, GTM
│   ├── page.tsx           # Home, async, revalidate 300s, lee de WP
│   ├── blog/[slug]/       # SSG con generateStaticParams + revalidate 300s + DOMPurify
│   ├── api/revalidate/    # POST endpoint para webhook de WP
│   ├── sitemap.ts         # sitemap.xml dinámico (rutas estáticas + posts WP)
│   ├── robots.ts          # robots.txt
│   ├── opengraph-image.tsx # OG image generada con ImageResponse
│   ├── error.tsx          # Error boundary por ruta
│   ├── global-error.tsx   # Fallback de último recurso
│   └── not-found.tsx      # 404 con noindex
├── components/            # UI dividido por dominio (home/, layout/, blog/, producto/, ui/)
├── lib/
│   ├── wordpress.ts       # Cliente GraphQL + adapter ACF → dominio (HomePageDomain)
│   ├── wordpress-blog.ts  # Queries de posts, envueltos en React.cache()
│   ├── analytics.ts       # Wrapper sobre dataLayer (GTM)
│   ├── blog-data.ts       # Posts locales (fallback si WP cae o para contenido editorial)
│   └── types.ts           # Tipos de dominio (NO el shape de WP)
├── middleware.ts          # CSP + HSTS + X-Frame-Options + Permissions-Policy
├── next.config.ts         # Image opt activo, remotePatterns para WP/Unsplash
├── tests/                 # Playwright (smoke, SEO, contract WP)
├── qa-seo/                # Scripts manuales de validación de FAQ schema vs DOM
├── wp-plugins/            # Plugin de WordPress (prepublish checker)
└── scripts/verify-sandbox.js  # Guard de secretos en frontend público
```

### Flujo de contenido (WordPress headless)

```
Editor edita en WP/ACF
      │
      ├─► save_post hook ──► POST /api/revalidate
      │                       (con x-revalidate-secret)
      │                          │
      │                          └─► revalidatePath(["/", "/blog", "/blog/<slug>"])
      │
      └─► ISR fallback de 300s (revalidate en cada server component)
```

- Cambios en WP → propagación inmediata vía webhook (recomendado).
- Sin webhook → propagación en <5 min por ISR.
- Si WP está caído, los componentes hacen `try/catch` con fallback vacío y la home tira a `app/error.tsx`.

### Sanitización de HTML

Todo HTML que viene de WordPress pasa por `isomorphic-dompurify` antes de renderizarse con `dangerouslySetInnerHTML`. Aplica a:
- Título del post (`app/blog/[slug]/page.tsx`).
- Contenido del post (`app/blog/[slug]/page.tsx`).
- Respuestas de FAQ (`components/blog/faq-section.tsx`).

Si añades nuevos campos rich-text desde WP, **sanitízalos** antes de usar `dangerouslySetInnerHTML`.

---

## Deploy

`output: "export"` ya **no está** activo. Requiere host con Node.js.

| Plataforma | Notas |
|------------|-------|
| **Vercel** (recomendado) | ISR, revalidate, middleware funcionan out-of-the-box. Conectar el repo y configurar las env vars en el dashboard. |
| Netlify | Funciona con el adapter de Next. ISR limitada respecto a Vercel. |
| Cloud Run / Fly.io / Render | Funciona con `npm run start`. Asegurar que el puerto 8000 está expuesto. |
| Hosting estático puro (Hostinger shared, S3+CloudFront sin Lambda) | **No funciona** — el sitio ya no es export estático. |

Antes del primer deploy, configurar en el host:
- `WORDPRESS_API_URL`, `NEXT_PUBLIC_SITE_URL`, `REVALIDATE_SECRET`, `NEXT_PUBLIC_GTM_ID`.

### Webhook desde WordPress

Añade este snippet a `functions.php` o un mu-plugin:

```php
add_action('save_post', function ($post_id) {
    if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) return;
    $slug = get_post_field('post_name', $post_id);
    $site = 'https://labden.com.mx';
    wp_remote_post("{$site}/api/revalidate", [
        'headers' => [
            'Content-Type' => 'application/json',
            'x-revalidate-secret' => getenv('LABDEN_REVALIDATE_SECRET'),
        ],
        'body' => json_encode(['paths' => ['/', '/blog', "/blog/{$slug}"]]),
        'timeout' => 5,
        'blocking' => false,
    ]);
});

// Cambios en ACF de la página "home"
add_action('acf/save_post', function ($post_id) {
    if (get_post_field('post_name', $post_id) !== 'home') return;
    $site = 'https://labden.com.mx';
    wp_remote_post("{$site}/api/revalidate", [
        'headers' => [
            'Content-Type' => 'application/json',
            'x-revalidate-secret' => getenv('LABDEN_REVALIDATE_SECRET'),
        ],
        'body' => json_encode(['paths' => ['/']]),
        'timeout' => 5,
        'blocking' => false,
    ]);
});
```

---

## Tests

- `tests/smoke-funnel.spec.ts` — funnel home → precios, no placeholders, headers de seguridad, sitemap/robots, JSON-LD, 404. **No depende de WP.**
- `tests/wp-contract.spec.ts` — contract test del shape de `getHomeFields` en WP. Skip si no hay `WORDPRESS_API_URL`.
- `tests/playwright-seo.spec.ts` — blog post SEO/A11y. Necesita el slug en `BLOG_TEST_SLUG` o el default existe en WP.

```bash
# Smoke (rápido, sin WP)
npm run test:smoke

# Todo
npm run test:e2e
```

## CI

`.github/workflows/ci.yml` corre en cada PR a `main` / `develop`:

1. **checks** — lint + typecheck.
2. **e2e** — build + smoke funnel (necesita `WORDPRESS_API_URL` en secrets).
3. **lighthouse** — build + start + Lighthouse CI con thresholds (`.lighthouserc.json`: Performance ≥ 80, A11y ≥ 90, SEO ≥ 95).

Secrets requeridos en GitHub Settings:
- `WORDPRESS_API_URL`
- (opcional) `BLOG_TEST_SLUG`

---

## Utilidades

### `qa-seo/`

Scripts manuales en TS standalone (con `dotenv`, `axios`, `cheerio`) que validan que el JSON-LD FAQ schema coincida con el DOM visible de un post. Útil cuando se publica un post nuevo y se quiere confirmar que la sección de FAQs renderiza igual que el schema.

```bash
# Ejecución manual (no en CI)
cd qa-seo && npx tsx seo-validator.ts <url>
```

### `wp-plugins/labden-prepublish-checker/`

Plugin de WordPress (PHP, no incluido en el build de Next) que muestra un aviso en el admin si un post no tiene contenido en ACF o FAQs definidas. Subir al WordPress en `wp-content/plugins/` y activar.

---

## Troubleshooting

| Síntoma | Causa probable | Fix |
|---------|----------------|-----|
| Build falla con `WORDPRESS_API_URL no está configurada` | Falta env var | Crear `.env.local` con `WORDPRESS_API_URL=...` |
| Home muestra "Algo no salió como esperábamos" en prod | WP cayó o el query devolvió `null` | Revisar logs de WP, validar la query GraphQL con `wp-contract.spec.ts` |
| Cambios en WP no aparecen en prod | Webhook no configurado o secret mal | Verificar `REVALIDATE_SECRET` coincide; testear `curl -X POST` al endpoint con paths |
| `npm run lint` falla con warnings de `console.log` | `no-console` rule activada | Quitar el log o usar `console.warn`/`console.error` |
| `next/image` da error de hostname no permitido | Dominio no en `remotePatterns` | Añadir el dominio a `next.config.ts:images.remotePatterns` |
| Playwright falla "WORDPRESS_API_URL no configurado" en CI | Falta secret en GitHub | Settings → Secrets → añadir |

---

## Decisiones de arquitectura relevantes

- **Server-only WP endpoint.** `WORDPRESS_API_URL` no lleva prefijo `NEXT_PUBLIC_` a propósito: el endpoint del CMS no debe entrar en el bundle del cliente.
- **ISR sobre static export.** Permite editar copy desde WP sin redeploy. Trade-off: hosting Node-only.
- **CSP con `'unsafe-inline'` en scripts.** Necesario por GTM (que inyecta scripts inline). Refactor a nonce-based CSP queda como deuda futura.
- **Defaults internos en `SecuritySection`.** Mientras WP no tenga campos ACF para Security, el componente renderiza con valores hardcodeados sensatos. Cuando ACF tenga los campos, actualizar `GET_HOME_FIELDS` y `getHomeDataStruct` en `lib/wordpress.ts`.
- **Blog dual local + WP.** `app/blog/[slug]` acepta posts de `lib/blog-data.ts` (markdown) y de WP (HTML). Útil para casos sin acceso a WP o para contenido editorial estable.

---

## Comercialización

LABDEN se comercializa a laboratorios dentales en LATAM (MXN). Las decisiones de UX/SEO de esta landing están optimizadas para conversión B2B:

- Pricing visible en home y en `/precios`.
- Páginas legales completas (`/privacidad` cubre LFPDPPP México, `/terminos`).
- `/seguridad` con DPA disponible bajo demanda.
- JSON-LD Organization para search engines.

Si planeas correr ads, conecta GTM con tu cuenta de Google Ads y Meta Pixel, y verifica que `analytics.ts` emite los eventos esperados (`cta_home_hero_click`, `cta_home_final_click`, etc.).
