# PLAN SEO — Home LabDen

> Plan maestro. El "en qué vamos" está en `STATUS.md`. El "con qué texto" está en `COPY.md`.
> Convención de IDs: `F<fase>-T<tarea>` (ej. `F1-T2`). Owners: **ENG** = landing-engineer,
> **SEO** = landing-seo-specialist, **SEC** = landing-security-auditor (gate), **DAVID** = humano.

## Estado del repo al iniciar (2026-06-03, recon)

- Title actual: `LabDen | Gestión para Laboratorios Dentales Modernos` (`app/layout.tsx:17`).
- H1 actual: `Recupera el control de tu laboratorio.` (`components/home/hero.tsx:25`).
- `NEXT_PUBLIC_SITE_URL` default = `https://labden.com.mx` (**sin www**) → el plan exige **www**.
- "CRM": 1 sola aparición, como diferenciador negativo en `app/empresa/page.tsx:33` (alineado, no urge).
- Schemas existentes: Organization + SoftwareApplication (AggregateOffer 550–850 MXN — *refrescado a 699–1099 MXN el 2026-07-01, ver STATUS.md*) en `app/layout.tsx:74-112`; BreadcrumbList en `components/ui/breadcrumbs.tsx`; FAQPage en `components/blog/faq-schema.tsx` (usado en /precios y blog, **no en home**).
- Sitemap (`app/sitemap.ts`) y robots (`app/robots.ts`) existen; host sale de `SITE_URL`. No hay ruta `/comunidad`.
- Analytics: `lib/analytics.ts` → `trackEvent(name, data)` + objeto `analytics` con 5 eventos (nombres `cta_home_hero_click`, etc.). GTM vía `NEXT_PUBLIC_GTM_ID`.
- Home (`app/page.tsx`): Navbar · Hero · StorySections · HowItWorks · SocialProof · PricingSection · AcademyTeaser · EmotionalBlock · FinalCta · Footer.
- Imágenes story ya optimizadas (trabajo previo). Hero usa `hero-dashboard.png` (1.3 MB) — pesado.

---

## FASE 0 — Setup & seguimiento  ✅ (sesión 2026-06-03)

- **F0-T1** Crear `docs/seo/` con README, PLAN, STATUS, COPY, ASSETS. — ENG
- **F0-T2** Recon del estado actual del repo. — ENG
- **Criterio:** carpeta creada y commiteada; David puede leer el plan.

---

## FASE 1 — Fundamentos de metadata y SEO técnico
*Bajo riesgo, alto valor. Hacer primero. Gate SEC obligatorio (toca metadataBase/env/robots/sitemap).*

- **F1-T1** Definir dominio canónico **con www** (`https://www.labden.com.mx/`). Actualizar default de `SITE_URL` en `app/layout.tsx` y `app/robots.ts`; documentar en `.env.example`. **Coordinar con David** para fijar `NEXT_PUBLIC_SITE_URL=https://www.labden.com.mx` en Vercel. — SEO/ENG · dep: D1
- **F1-T2** Meta title → `Sistema para Laboratorios Dentales en México | LabDen`. — SEO
- **F1-T3** Meta description → ver `COPY.md › Metadatos`. — SEO
- **F1-T4** `keywords` → mapa semántico (keyword principal + secundarias prioritarias, sin spamear). — SEO
- **F1-T5** OpenGraph + Twitter card → nuevos title/description/url/image (apuntar a imagen hero SEO de F5). — SEO
- **F1-T6** Canonical home `/` validado contra base www; confirmar sin `noindex`. — SEO
- **F1-T7** `robots.ts`: host=www, `Allow: /`, sitemap correcto; mantener disallow `/auth/`. — SEO · gate SEC
- **F1-T8** `sitemap.ts`: validar rutas; añadir `/comunidad` cuando exista (F-EpicB). — SEO
- **Criterio:** Rich Results / metadata válidos; build limpio; SEC = PASS.

---

## FASE 2 — Reestructura de contenido del home (H1/H2/H3 + copy)
*La fase más grande. Texto canónico en `COPY.md`. Orden de bloques: hero → microbeneficios → diferenciador → funcionalidades → dolores → ideal-para → finanzas → tabla comparativa → Academy → Comunidad → prueba gratis → FAQ (F3) → footer (F6).*

- **F2-T1** **Hero**: nuevo H1 (`Sistema para laboratorios dentales que ordena tus trabajos, dentistas y cobros`), subtítulo, 2 CTAs (`Prueba gratis 30 días` + `Ver cómo funciona`), microcopy (`Sin tarjeta de crédito. Sin compromiso. Diseñado para laboratorios dentales.`). Mantener evento del CTA. — ENG
- **F2-T2** Barra de **microbeneficios / confianza** bajo el hero. — ENG
- **F2-T3** Sección **diferenciador/origen** (storytelling): H2 `Hecho para laboratorios dentales que quieren trabajar con más orden` + copy de origen (construido con un laboratorio real). — ENG
- **F2-T4** Sección **funcionalidades**: H2 `Todo lo que tu laboratorio puede controlar con LabDen` + **6 tarjetas** (H3) con copy de `COPY.md › Tarjetas`. — ENG
- **F2-T5** Sección **dolores**: H2 `Menos errores entre dentistas y laboratorio dental` + 3 H3 (WhatsApp / reclamos / evidencia). — ENG
- **F2-T6** Sección **ideal para 1–10 empleados**: H2 + 2 H3. — ENG
- **F2-T7** Sección **control financiero**: H2 + 3 H3 (cuentas por cobrar / ingresos por dentista / historial). — ENG
- **F2-T8** **Tabla comparativa** "Antes de LabDen / Con LabDen" (6 filas). — ENG
- **F2-T9** Sección **Academy** (storytelling) — adaptar `AcademyTeaser` o nueva sección. — ENG
- **F2-T10** Sección **Comunidad** (storytelling) — H2 `Comunidad LabDen: el sistema evoluciona con los laboratorios`. — ENG
- **F2-T11** Sección **Prueba gratis 30 días** (CTA grande) — adaptar `FinalCta`. — ENG
- **F2-T12** Revisar `app/empresa/page.tsx:33` ("CRM"): mantener como diferenciador negativo (OK), no liderar con CRM en ningún lado. — ENG
- **F2-T13** **Versión mobile del hero** (H1 corto `Sistema para laboratorios dentales` + subtítulo corto). — ENG
- **Criterio:** un solo H1, jerarquía H2/H3 según `COPY.md`; 1.500–2.500 palabras distribuidas; "CRM" no lidera; copy solo para laboratorios; build limpio.

---

## FASE 3 — FAQ visible + FAQPage schema

- **F3-T1** Construir **componente FAQ acordeón** en el home con las 10 FAQs de `COPY.md › FAQ`. — ENG
- **F3-T2** **FAQPage JSON-LD** en home (reusar/extender `components/blog/faq-schema.tsx`) con las 10 (o subset coherente). — SEO
- **Criterio:** FAQs visibles + schema válido en Rich Results Test.

---

## FASE 4 — Datos estructurados (mejoras)

- **F4-T1** **Organization**: añadir `areaServed: México`, alinear `description` al copy nuevo. — SEO · gate SEC
- **F4-T2** **SoftwareApplication**: añadir `areaServed: México`; mantener AggregateOffer (550–850 MXN); description nueva. — SEO · gate SEC
- **F4-T3** **BreadcrumbList** del home (Inicio). — SEO
- **Criterio:** 4 schemas válidos (Organization, SoftwareApplication, FAQPage, BreadcrumbList).

---

## FASE 5 — Imágenes SEO

- **F5-T1** Definir set final de imágenes home en `ASSETS.md`: nombres descriptivos, **WebP <150 KB** (hero <250 KB), alt único, title, caption, `width`/`height`, `loading="lazy"` salvo hero, `fetchpriority="high"` en hero. — ENG
- **F5-T2** **Imagen hero real** (decisión D4: qué captura) → `sistema-para-laboratorios-dentales-labden.webp`. — ENG · dep: D4
- **F5-T3** Mapear/renombrar imágenes story actuales a nombres SEO (o referenciar con nombres nuevos). — ENG
- **Criterio:** todas las imágenes con nombre descriptivo + alt único + dimensiones; hero sin lazy; pesos OK; build limpio.

---

## FASE 6 — Navegación y footer SEO

- **F6-T1** Menú: decisión D2 (¿`Aliados` → `Comunidad`?). CTA `Prueba gratis 30 días` ya visible en navbar (hecho en sesión previa). — ENG · dep: D2
- **F6-T2** **Footer SEO**: texto corto descriptivo + enlaces internos con anchors descriptivos (no "clic aquí"). — ENG
- **Criterio:** footer con texto SEO + enlaces; menú aprobado por David.

---

## FASE 7 — Analítica GA4

- **F7-T1** Añadir eventos dataLayer: `click_prueba_gratis`, `click_ver_como_funciona`, `click_login`, `click_precios`, `click_whatsapp`, `scroll_50`, `scroll_90`. Alinear/aliasar con los 3 existentes (`cta_home_hero_click`…). — ENG
- **F7-T2** `submit_trial_form`: el form de trial vive en `app.labden.com.mx` (otro repo) → **documentar límite**; aquí solo se mide el click de salida. — ENG/DAVID
- **F7-T3** CTA **WhatsApp** + número (decisión D3) + evento `click_whatsapp`. — ENG · dep: D3
- **F7-T4** Marcar conversiones en GA4 (`click_prueba_gratis`) — config externa. — DAVID
- **Criterio:** eventos visibles en GTM Preview / GA4 DebugView.

---

## FASE 8 — Performance / Core Web Vitals

- **F8-T1** Hero LCP: imagen optimizada + `fetchpriority="high"`, sin video pesado. — ENG
- **F8-T2** `loading="lazy"` en imágenes secundarias; `width`/`height` en todas; minimizar JS no crítico. — ENG
- **F8-T3** Pasar `qa-seo/` validators + Lighthouse CI. — ENG
- **Criterio:** Lighthouse mobile sano; CWV sin regresiones.

---

## FASE 9 — QA & checklist de lanzamiento

- **F9-T1** Recorrer el **checklist final** (26 ítems, `COPY.md › Checklist`). — ENG
- **F9-T2** **Gate SEC** del diff acumulado (metadataBase, schema, sitemap, robots, env). — SEC
- **F9-T3** `lint` + `typecheck` + `build` + `playwright` + Lighthouse. — ENG
- **Criterio:** checklist 100% ✅; SEC = PASS.

---

## FASE 10 — Search Console & medición (externo / David)

- **F10-T1** Verificar propiedad **www** en Google Search Console; enviar `sitemap.xml`. — DAVID
- **F10-T2** Marcar conversiones en GA4; revisar semanalmente (consultas, indexación, CTR, posición). — DAVID
- **Criterio:** GSC recibiendo datos; sitemap aceptado.

---

## EPIC B — Páginas internas (Prioridad 2, post-home)
Crear, cada una con su metadata/schema/enlazado:
- `/sistema-para-laboratorios-dentales/`
- `/software-para-laboratorios-dentales/`
- `/control-ordenes-laboratorio-dental/`
- `/comunidad/`

## EPIC C — Blog (Prioridad 3)
5 artículos semilla (ver `COPY.md › Blog backlog`).

---

## Dependencias / decisiones de David (detalle en `STATUS.md › Decisiones pendientes`)
- **D1** Dominio canónico **www** y fijar env en Vercel.
- **D2** Menú: ¿renombrar `Aliados` → `Comunidad`?
- **D3** Número de WhatsApp para CTA + evento.
- **D4** Qué captura usar como imagen hero.
- **D5** ¿Mantener AggregateOffer con precios en SoftwareApplication? (recomendado: sí).
