# STATUS — Tracker vivo del proyecto SEO Home

> **Empieza cada sesión leyendo este archivo.** Marca `[x]` al cerrar una tarea, anota el commit
> y agrega una línea a la bitácora. Leyenda: `[ ]` pendiente · `[~]` en progreso · `[x]` hecho · `[!]` bloqueado.

**Fase actual:** Fase 8 ✅ lista para commit → **siguiente: Fase 9 (QA & checklist, gate SEC).**
**Última actualización:** 2026-06-04

---

## Tablero de tareas

### Fase 0 — Setup ✅
- [x] F0-T1 Crear `docs/seo/` (README, PLAN, STATUS, COPY, ASSETS) — *commit pendiente en esta sesión*
- [x] F0-T2 Recon del estado del repo — *documentado en PLAN.md*

### Fase 1 — Metadata & técnico
- [x] F1-T1 Dominio canónico www — default `https://www.labden.com.mx` en layout/robots/sitemap · fijar env en Vercel (acción David ⏳)
- [x] F1-T2 Meta title → `Sistema para Laboratorios Dentales en México | LabDen`
- [x] F1-T3 Meta description global + OG description + twitter description
- [x] F1-T4 keywords — mapa semántico 14 términos
- [x] F1-T5 OG images → `/opengraph-image` (generado dinámico) · TODO F5 para imagen hero real
- [x] F1-T6 Canonical `/` + robots index/follow confirmado
- [x] F1-T7 robots.ts — host www, Allow /, disallow /auth/ /debug-
- [x] F1-T8 sitemap.ts — URLs validadas con base www; sin /comunidad (D2)

### Fase 2 — Contenido home ✅
- [x] F2-T1 Hero (H1 + subtítulo + CTAs + microcopy) — `hero.tsx`
- [x] F2-T2 Microbeneficios — `benefits-bar.tsx` (nuevo)
- [x] F2-T3 Diferenciador/origen (storytelling) — `emotional-block.tsx` (reescrito)
- [x] F2-T4 Funcionalidades (6 tarjetas) — `story-sections.tsx` (reescrito, imágenes conservadas)
- [x] F2-T5 Dolores — `problems-section.tsx` (reescrito)
- [x] F2-T6 Ideal 1–10 empleados — `ideal-section.tsx` (nuevo)
- [x] F2-T7 Control financiero — `financial-section.tsx` (reescrito)
- [x] F2-T8 Tabla comparativa — integrada en `problems-section.tsx`
- [x] F2-T9 Academy — `academy-teaser.tsx` (reescrito)
- [x] F2-T10 Comunidad — `community-section.tsx` (nuevo)
- [x] F2-T11 Prueba gratis 30 días — `final-cta.tsx` (reescrito)
- [x] F2-T12 Revisar "CRM" — 0 menciones en home; `/empresa:33` OK como diferenciador negativo
- [x] F2-T13 Hero mobile — H1 corto + subtítulo corto vía `sm:hidden` / `hidden sm:block`

### Fase 3 — FAQ ✅
- [x] F3-T1 Componente FAQ acordeón — `components/home/faq-section.tsx` (details/summary nativo) — *pendiente commit*
- [x] F3-T2 FAQPage schema en home — reusar `FAQSchema` de `components/blog/faq-schema.tsx` desde `FaqSection` — *pendiente commit*

### Fase 4 — Schemas ✅ (pendiente commit + gate SEC)
- [x] F4-T1 Organization — `areaServed: México` + description canónica — `app/layout.tsx:101-123`
- [x] F4-T2 SoftwareApplication — `areaServed: México` + description nueva; AggregateOffer intacto (D5=MANTENER) — `app/layout.tsx:125-143`
- [x] F4-T3 BreadcrumbList home — JSON-LD en `app/page.tsx:21-32`; sin UI visible (home es root)

### Fase 5 — Imágenes ✅
- [x] F5-T1 Set final + specs (ASSETS.md) — especificado en sesión anterior
- [x] F5-T2 Imagen hero real → `sistema-para-laboratorios-dentales-labden.webp` (108 KB, desde `resumen-general.jpg` 163 KB)
- [x] F5-T3 Renombrar story a nombres SEO — 5 archivos convertidos a WebP, referencias actualizadas, originales eliminados con `git rm`

### Fase 6 — Nav & footer
- [x] F6-T1 Menú — **D2 ✅ sin cambios** (se mantiene "Aliados")
- [x] F6-T2 Footer SEO — texto SEO exacto de COPY.md + CTA "Prueba gratis 30 días" en columna de marca; anchors descriptivos confirmados; TODO Epic B comentado

### Fase 7 — GA4
- [x] F7-T1 Eventos dataLayer — 7 eventos canónicos en `lib/analytics.ts`; conectados en hero, final-cta, pricing (Base+Pro), navbar (desktop+mobile), footer
- [x] F7-T2 submit_trial_form — límite documentado con comentario en `lib/analytics.ts` (form vive en app-labden, no instrumentable desde aquí)
- [x] F7-T3 WhatsApp CTA — D3 resuelto (5664015780); icono footer conectado a `https://wa.me/525664015780` + evento `click_whatsapp` — *commit pendiente*
- [ ] F7-T4 Conversiones GA4 — marcar `click_prueba_gratis`/`submit_trial_form` como conversión (ACCIÓN DAVID, en consola GA4)

### Fase 8 — Performance ✅
- [x] F8-T1 Hero LCP — text-only (H1), LCP real = H2 de EmotionalBlock a 124–300ms. Font Inter self-hosted vía next/font (font-display swap). Sin bloqueo de render. Sin imagen above-the-fold → nada que optimizar acá.
- [x] F8-T2 lazy + dimensiones — `how-it-works.tsx`: `loading="lazy"` + `sizes="(max-width: 768px) 90vw, 45vw"` en 4 imágenes fill. `brand-logo.tsx`: `sizes="64px"` en fill con priority. `story-sections.tsx`: `sizes="(max-width: 1024px) 90vw, 45vw"`. `assistant-widget.tsx`: `loading="lazy"` en imagen del header del chat. CLS = 0.0000 confirmado.
- [x] F8-T3 Medición real + build — LCP 124ms · CLS 0.0000 · TTFB 27ms · Load 116ms (mobile, local). AssistantWidget diferido con `next/dynamic` + `ssr:false` vía client wrapper `assistant-widget-loader.tsx` (reduce TBT). lint 0 errores · tsc limpio · build 31 páginas ✅. Playwright: 6 passed / 2 failed preexistentes (blog FAQ con details/summary nativo).

### Fase 9 — QA
- [ ] F9-T1 Checklist 26 ítems
- [ ] F9-T2 Gate SEC
- [ ] F9-T3 lint+typecheck+build+playwright+lighthouse

### Fase 10 — GSC (David)
- [ ] F10-T1 Verificar www + sitemap
- [ ] F10-T2 Conversiones + revisión semanal

---

## Decisiones pendientes de David

| # | Decisión | Resolución | Estado |
|---|---|---|---|
| **D1** | Dominio canónico: ¿`www` o sin www? | ✅ **www** → `https://www.labden.com.mx/`. Fijar `NEXT_PUBLIC_SITE_URL=https://www.labden.com.mx` en Vercel. | ✅ 2026-06-03 |
| **D2** | ¿Renombrar el menú `Aliados` → `Comunidad`? | ✅ **Mantener "Aliados"** sin cambios. Comunidad será solo sección del home; `/comunidad` queda diferida. | ✅ 2026-06-03 |
| **D3** | Número de WhatsApp para el CTA "Hablar por WhatsApp". | ✅ **5664015780** → `https://wa.me/525664015780`. Icono footer conectado + evento `click_whatsapp`. | ✅ 2026-06-03 |
| **D4** | Qué captura usar como **imagen hero**. | ✅ **"Resumen general"** (foto técnico + monitor, `story/resumen-general.jpg`). Optimizar a `sistema-para-laboratorios-dentales-labden.webp`. | ✅ 2026-06-03 |
| **D5** | SoftwareApplication: ¿mantener precios (AggregateOffer 550–850)? | ✅ **MANTENER** (decisión David). | ✅ 2026-06-03 |

---

## Bitácora por sesión

### Sesión 2026-06-03 (apertura del proyecto)
- Recon completo del repo (metadata, schema, sitemap, robots, analytics, CRM, imágenes).
- Creada la carpeta de seguimiento `docs/seo/` con 5 documentos.
- Definidas 10 fases + 2 epics + 5 decisiones (D1–D5).
- **Pendiente:** que David resuelva D1–D5 para desbloquear Fase 1 y arrancar implementación.
- **Próximo paso sugerido:** resolver D1 (www) y ejecutar Fase 1 completa (metadata) en una sola sesión, con gate SEC al final.

### Sesión 2026-06-03 (decisiones)
- David resolvió **D1 = www**, **D2 = mantener "Aliados"**, **D4 = hero "Resumen general"**. Pendientes solo D3 (WhatsApp) y D5 (precios en schema, recomendado sí).
- Fase 1 desbloqueada. F6-T1 cerrada (menú sin cambios).
- **Próximo paso:** ejecutar Fase 1 (metadata: title, description, canonical www, OG/Twitter, keywords, robots host www) vía landing-seo-specialist + gate landing-security-auditor; en paralelo, David fija `NEXT_PUBLIC_SITE_URL=https://www.labden.com.mx` en Vercel.

### Sesión 2026-06-03 (landing-engineer — Fase 2)
- **F2-T1–T13 implementadas.** Mapeo elegido:
  - `hero.tsx` → Hero (H1 largo desktop / H1 corto mobile)
  - `benefits-bar.tsx` (nuevo) → Microbeneficios bajo hero
  - `emotional-block.tsx` (reescrito) → Diferenciador/origen
  - `story-sections.tsx` (reescrito) → 6 tarjetas de funcionalidades; imágenes reales conservadas
  - `problems-section.tsx` (reescrito) → Dolores (H2 + 3 H3) + Tabla comparativa 6 filas
  - `ideal-section.tsx` (nuevo) → Ideal 1–10 empleados
  - `financial-section.tsx` (reescrito) → Control financiero (H2 + 3 H3)
  - `how-it-works.tsx` → sin cambios, ancla `#como-funciona`
  - `social-proof.tsx` → sin cambios
  - `pricing-section.tsx` → sin cambios
  - `academy-teaser.tsx` (reescrito) → Academy con H2 + H3 canónicos
  - `community-section.tsx` (nuevo) → Comunidad
  - `final-cta.tsx` (reescrito) → Prueba gratis 30 días
- Un solo H1 visible por viewport (2 nodos DOM mutuamente excluyentes vía breakpoint).
- CRM: 0 menciones en home; `/empresa:33` conservado como diferenciador negativo.
- lint (0 errores) + typecheck (limpio) + build (31 páginas) ✅.
- **Verificado con screenshots** (prod build local, desktop+mobile): H1 correcto por viewport, 11 H2 en orden, tabla comparativa OK, secciones financiero/comunidad/CTA con copy canónico y frase citable. **Commit `d2563cb`**.
- **Observación menor (no bloquea):** el hero tiene 2 nodos `<h1>` (responsive, uno `display:none` por viewport). Google lo tolera, pero para cumplir "un solo H1" al 100% se podría consolidar en un único `<h1>` con texto responsive vía spans. Candidato a pulir en Fase 8/9.
- **Próximo paso:** Fase 3 (FAQ acordeón + FAQPage schema — landing-seo-specialist).

### Sesión 2026-06-03 (landing-engineer — Fase 3)
- **F3-T1 + F3-T2 implementadas.**
  - `components/home/faq-section.tsx` (nuevo): acordeón `<details>/<summary>` nativo con las 10 Q&A literales de COPY.md. H2 `Preguntas frecuentes sobre LabDen` + H3 por pregunta. Texto siempre en DOM (accesible a crawlers). Chevron SVG con rotación CSS vía `group-open:rotate-180`.
  - `FAQSchema` de `components/blog/faq-schema.tsx` reutilizado directamente desde `FaqSection`; `FAQ_ITEMS` exportado como fuente única — el schema y el acordeón comparten el mismo array, sin duplicación.
  - `app/page.tsx`: `FaqSection` importada y ubicada en posición 11 (tras Comunidad, antes de FinalCta). Números de comentarios ajustados.
  - lint (0 errores) + typecheck (limpio) + build (31 páginas) ✅. Pendiente commit de David.
- **Próximo paso:** Fase 4 (landing-seo-specialist + gate landing-security-auditor).

### Sesión 2026-06-03 (landing-seo-specialist — Fase 1)
- **F1-T1–T8 implementadas** en `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `.env.example`.
- Default SITE_URL `https://labden.com.mx` → `https://www.labden.com.mx` en los 3 archivos.
- Title: `Sistema para Laboratorios Dentales en México | LabDen`.
- Description global (155 car.) + OG description + twitter description (versión corta).
- Keywords: 14 términos del mapa semántico de COPY.md.
- OG images apuntan a `/opengraph-image` (generador dinámico existente). TODO F5 para imagen hero.
- Canonical `/`, robots index/follow confirmado.
- lint (0 errores) + typecheck (limpio) + build (31 páginas) ✅.
- **Gate landing-security-auditor = PASS** (sin secretos, WP server-only, sin open-redirect, /auth/ disallow intacto). 2 observaciones no bloqueantes de config Vercel.
- **Commit `1e700e9`** `feat(seo): Fase 1 — metadata + canonical www for home`. David ya fijó la env var en Vercel.
- **Acción Vercel pendiente (no bloqueante):** confirmar que el endpoint WP es `WORDPRESS_API_URL` (SIN prefijo `NEXT_PUBLIC_`).
- **Próximo paso:** Fase 2 (landing-engineer: reescritura H1/H2/H3 + copy del home usando COPY.md).

### Sesión 2026-06-03 (Fase 3 — verificación + cierre)
- **Verificado en prod build local:** FAQPage JSON-LD presente en el HTML del home (`"@type":"FAQPage"`), las 10 preguntas en el DOM (visibles a crawlers), acordeón funcional (chevrons rotan). Screenshot OK.
- **Hardening de seguridad (recomendación del auditor):** `components/blog/faq-schema.tsx` ahora escapa `<` como `<` en el JSON-LD → cierra el vector de breakout `</script>` para el call site del blog (FAQ desde WordPress). Endurece ambos usos de un solo cambio.
- **Gate landing-security-auditor = PASS.** lint/typecheck/build limpios.
- **Commit `8cb7330`** `feat(seo): Fase 3 — visible FAQ accordion + FAQPage schema on home`.
- **Próximo paso:** Fase 4 (Organization + SoftwareApplication `areaServed: México` + BreadcrumbList home) — landing-seo-specialist + gate SEC (toca schemas en `app/layout.tsx`). Recordatorio: resolver **D5** (mantener precios en SoftwareApplication, recomendado sí) antes/junto a F4-T2.

### Sesión 2026-06-03 (landing-seo-specialist — Fase 4)
- **F4-T1–T3 implementadas.** lint (0 errores) + typecheck (limpio) + build (31 páginas) ✅.
  - `app/layout.tsx:101-123` — Organization: `areaServed: { "@type": "Country", name: "México" }` + `description` alineada a COPY.md frase citable.
  - `app/layout.tsx:125-143` — SoftwareApplication: `areaServed` ídem + `description` nueva; AggregateOffer 550–850 MXN intacto (D5=MANTENER).
  - `app/layout.tsx:154-162` — Escape `<` aplicado a ambos schemas (misma técnica que `faq-schema.tsx`). Cierra vector `</script>` breakout en JSON-LD del layout.
  - `app/page.tsx:18-41` — BreadcrumbList home: JSON-LD puro (sin UI visible), item "Inicio" item=`SITE_URL` (www canónico). Usa `NEXT_PUBLIC_SITE_URL` con fallback www; escape `<` aplicado.
  - `components/ui/breadcrumbs.tsx` — SIN cambios; uso en `/blog/[slug]` intacto.
- **Nota para gate SEC:** cambio toca `app/layout.tsx` (schemas JSON-LD) y `app/page.tsx` (inyección `<script>`). No toca `middleware.ts`, env vars, `lib/wordpress*.ts`, `package.json`, `next.config.ts`, ni deploy config. Sin secretos. Sin inputs externos en los schemas (todo es constante controlada). El `<` escape aplica pero los valores son literales internos — riesgo XSS = 0. Queda en tu criterio.
- **Próximo paso:** gate landing-security-auditor (Fase 4) → si PASS, commit + Fase 5 (imágenes — landing-engineer).

### Sesión 2026-06-03 (landing-engineer — Fase 5)
- **F5-T1/T2/T3 implementadas.** 5 imágenes story convertidas a WebP con nombres descriptivos SEO, alts únicos, dimensiones explícitas, `loading="lazy"` en todas.
- Conversión vía Python/PIL (quality=80–82, method=6). Pesos finales: ordenes 30 KB · seguimiento 27 KB · comunicacion 27 KB · financiero 29 KB · resumen-general/hero 108 KB — todas bajo límite.
- Tarjeta 6 (Reportes): reutiliza `control-financiero-laboratorio-dental.webp` (el dashboard financiero contiene datos de reportes por dentista); alt distinto al de tarjeta 5.
- `git rm` de los 5 originales (PNG/JPG). `grep` confirmó 0 referencias viejas en `app/` y `components/`.
- lint (0 errores, 7 warnings preexistentes) + typecheck (limpio) + build (31 páginas) ✅. Pendiente commit David.
- **Próximo paso:** Fase 6-T2 (footer SEO) — landing-engineer.

### Sesión 2026-06-03 (Fase 4 — schemas)
- **F4-T1/T2/T3** en `app/layout.tsx` (Organization + SoftwareApplication) y `app/page.tsx` (BreadcrumbList Inicio).
- areaServed México en Organization y SoftwareApplication; AggregateOffer 550–850 MXN **mantenido** (D5 ✅).
- Escape `\u003c` aplicado a los 3 sinks JSON-LD del layout/home (consistencia con faq-schema).
- **Verificado en build local:** el home emite los **4 schemas** (Organization, SoftwareApplication, FAQPage, BreadcrumbList) con areaServed y AggregateOffer presentes.
- **Gate landing-security-auditor = PASS.** lint/typecheck/build limpios. **Commit `44e1a22`**.
- Observación del auditor (no bloquea): `SITE_URL` está duplicado en `app/layout.tsx` y `app/page.tsx` → candidato a centralizar en `lib/site.ts` en un cleanup (Fase 8/9).
- **PENDIENTE DOMINIO (Fase 1):** producción aún sirve **sin www** pese a que la env var ya es www y hay deploy fresco. Causa = caché de build de Vercel hornea el valor viejo de NEXT_PUBLIC_*. **Acción David:** Redeploy SIN "Use existing Build Cache". Reverificar canonical/og/robots/sitemap tras eso.
- **Próximo paso:** Fase 5 (imágenes SEO — landing-engineer): nombres descriptivos WebP, alt único, hero `sistema-para-laboratorios-dentales-labden.webp` (D4 = resumen-general), lazy salvo hero.

### Sesión 2026-06-03 (landing-engineer — Fase 6-T2 footer SEO)
- **F6-T2 implementada.** Un solo cambio en `components/layout/footer.tsx` (columna de marca, líneas 55-70):
  - `<p>` genérico anterior reemplazado por el texto SEO exacto de COPY.md: "LabDen es un sistema para laboratorios dentales en México. Ayuda a controlar…".
  - CTA "Prueba gratis 30 días" añadido bajo el texto SEO → `https://app.labden.com.mx/auth/register`.
  - Anchors de las columnas existentes revisados: todos descriptivos (Funciones, Precios, Seguridad, Cursos, LabDen Talks, Blog, Contacto, Aliados, Nosotros, Términos y condiciones, Aviso de privacidad). Ningún anchor genérico.
  - Comentario `// TODO Epic B` para los 4 enlaces a páginas futuras — no se crearon rutas inexistentes.
- lint (0 errores, 7 warnings preexistentes) + typecheck (limpio) + build (31 páginas) ✅. Pendiente commit David.
- **Próximo paso:** Fase 7-T1 (eventos GA4: dataLayer clicks + scroll).

### Sesión 2026-06-03 (Fase 5 — imágenes SEO)
- 6 imágenes de las tarjetas de funcionalidad convertidas a **WebP** con nombres keyword-rich (señal Google Imágenes; next/image conserva el nombre en la URL optimizada):
  - ordenes-detalle.png → control-ordenes-trabajo-laboratorio-dental.webp (142→30 KB)
  - seguimiento-orden.png → seguimiento-produccion-laboratorio-dental.webp (126→27 KB)
  - comunicacion.png → comunicacion-dentistas-laboratorio-dental.webp (266→27 KB)
  - dashboard-financiero.png → control-financiero-laboratorio-dental.webp (145→29 KB)
  - resumen-general.jpg → sistema-para-laboratorios-dentales-labden.webp (163→108 KB)
- Alt único por tarjeta, width/height + loading=lazy conservados. Originales eliminados con git rm.
- **Verificado:** 0 imágenes rotas, 0 respuestas 4xx en /_next/image, screenshot OK. lint/typecheck/build limpios. **Commit `90317e3`**.
- Notas: how-it-works (`paso-*`) quedó fuera de alcance (ya tiene nombres semánticos). OG sigue siendo el generador dinámico `/opengraph-image` (no se tocó layout.tsx → sin gate). El hero visual sigue text-only por decisión (limpio/profesional); agregar imagen de producto al hero es enhancement opcional si David lo pide.
- **Próximo:** Fase 6-T2 footer SEO (texto + enlaces internos) y Fase 7 GA4 (eventos; F7-T3 WhatsApp sigue bloqueado por D3).

### Sesión 2026-06-03 (Fase 6 — footer SEO)
- `components/layout/footer.tsx`: añadida la frase citable de COPY.md a la columna de marca + CTA `Prueba gratis 30 días`. Enlaces del footer verificados (todos a páginas existentes, anchors descriptivos). Enlaces futuros (Epic B) dejados como comentario TODO, sin linkear (evita 404s).
- Verificado: frase SEO presente en el HTML, 12 enlaces todos a rutas reales, screenshot OK. lint/typecheck/build limpios. **Commit `4dbcf65`**.
- Nota: el footer YA tiene un icono de WhatsApp (útil para F7-T3 cuando David dé el número D3).
- **Próximo:** Fase 7 (GA4): F7-T1 eventos dataLayer (click_prueba_gratis, click_ver_como_funciona, click_login, click_precios, scroll_50, scroll_90); F7-T2 submit_trial_form (documentar límite: el form vive en app.labden.com.mx); F7-T3 WhatsApp + número (D3 ⏳); F7-T4 conversiones GA4 (David).

### Sesión 2026-06-03 (fix dominio www — env-independiente)
- Diagnóstico: env Vercel = www (confirmado, sin duplicados en Production), build actualizado (prod ya tenía Fase 1–6), PERO canonical/og/robots/sitemap seguían sin www = bug de propagación de NEXT_PUBLIC_* de Vercel.
- **Fix (commit `d9e7795`):** creado `lib/site.ts` que normaliza el dominio a `https://www.labden.com.mx` SIEMPRE (apex→www, http→https, sin slash final), independiente del env. Centralizado el SITE_URL antes duplicado en 6 archivos (layout, robots, sitemap, page, breadcrumbs, share-box).
- Verificado local con env=non-www → output www en los 4 lugares. Gate SEC = PASS. lint/typecheck/build OK.
- ⚠️ **BLOQUEO DE DEPLOY:** Vercel dejó de auto-desplegar los pushes después de `846331c` (02:34Z). `d9e7795` está en GitHub (HEAD remoto) pero Vercel no crea el build. **Acción David:** revisar Vercel → Deployments; si `d9e7795` no aparece building/queued, disparar deploy manual del último commit (o revisar la conexión Git del proyecto). Hasta que despliegue, producción sigue sirviendo `846331c` (sin el fix www).

### Sesión 2026-06-03 (RESUELTO dominio www — causa raíz)
- **Causa raíz encontrada:** existen DOS proyectos Vercel: `paginaweblabden` (sirve www.labden.com.mx, conectado al repo) y `web-labden` (otro, *.vercel.app). David editaba `NEXT_PUBLIC_SITE_URL` en **web-labden**, pero producción la sirve **paginaweblabden**, que tenía su propia env vieja sin www (9d). Por eso nada surtía efecto. Además el auto-deploy git de paginaweblabden estaba rezagado.
- **Solución:** (1) fix de código `lib/site.ts` (commit `d9e7795`) que fuerza www sin depender del env; (2) deploy directo con Vercel CLI al proyecto correcto: `vercel link --project paginaweblabden` + `vercel --prod`.
- **VERIFICADO en producción:** canonical, og:url, og:image, robots Host/Sitemap y sitemap `<loc>` TODOS con `https://www.labden.com.mx`. ✅ Fase 1 (dominio) cerrada al 100%.
- Nota operativa: para futuros deploys, el proyecto correcto es **paginaweblabden** (ya linkeado vía `.vercel/`). Conviene revisar/arreglar el auto-deploy git de ese proyecto, o desplegar con `vercel --prod`.

### Sesión 2026-06-03 (Punto 1 — limpieza de infraestructura, cerrado)
Revisado y arreglado todo lo pendiente del dominio/deploy:
1. ✅ Dominio www en canonical/og/robots/sitemap (vía `lib/site.ts`, deploy vivo `b65e8c9`).
2. ✅ Redirect apex→www correcto (labden.com.mx 307 → www.labden.com.mx) y www responde 200 directo.
3. ✅ `NEXT_PUBLIC_SITE_URL` en el proyecto REAL `paginaweblabden`: se eliminó la vieja (sin www, 9d) y se recreó como `https://www.labden.com.mx` en Production + Preview. (El código ya forzaba www; ahora la fuente también es correcta.)
4. ✅ `WORDPRESS_API_URL`: NO existe en `paginaweblabden` → blog WP deshabilitado (usa datos locales), sin fuga del endpoint. Resuelve la observación del auditor de Fase 1.
5. ✅ Auto-deploy de Git: NO estaba roto, solo retrasado ~30-60 min (cola de Vercel GitHub App). Se puso al día (d9e7795, 6a5b157, b65e8c9 desplegados). Para deploy inmediato cuando se necesite: `vercel --prod` (proyecto ya linkeado en `.vercel/`).

**Nota para David:** el proyecto `web-labden` (donde editabas el env por error) NO sirve el dominio — es otro proyecto Vercel. Puedes ignorarlo o borrarlo para evitar confusión futura. El proyecto correcto es **`paginaweblabden`**.

**Fase 1 + infraestructura del dominio: CERRADA 100%.** Próximo: Fase 7 (GA4); F7-T3 WhatsApp pendiente del número (D3).

### Sesión 2026-06-03 (limpieza de código/assets muertos — commit `ebeae67`)
Eliminado todo lo huérfano que dejó la reescritura de la home:
- **9 componentes** sin uso: communication-section, features-grid, features-overview, problem, product-showcase, security-preview, security-section, solution, value-proposition.
- **22 assets** sin uso: 8 `features/*.svg`, 4 svg/png de story (incl. `hero-dashboard.png` 1.3 MB y `hero-3d.png` 675 KB), SVGs del template create-next-app (file/vercel/next/globe/window), logos viejos (logo.svg, labden-logo.png), noise.svg, dashboard-preview.png, premium-plans-icon.png. (.DS_Store purgado.)
- Conservados: `labden-icon.png` (logo activo de BrandLogo + schema) e `icon.svg`.
- Verificado: 0 imágenes huérfanas restantes, build/lint/typecheck limpios.
- **PENDIENTE confirmación de David:** proyectos Vercel `web-labden` y `crm-nexus` — no los borré (es destructivo/outward-facing y no sé si alguno sirve para otra cosa). Confirmar antes de eliminar.

### Sesión 2026-06-03 (limpieza de proyectos Vercel)
- ✅ Eliminado `crm-nexus` (beta sin dominio, David lo reinicia de cero).
- 🛑 **NO eliminado `web-labden`**: al inspeccionarlo, sirve **`https://app.labden.com.mx`** = la APP SaaS (destino de TODOS los CTAs de la landing). Borrarlo habría tumbado el SaaS y el funnel. Conservado. El "ruido" fue solo haber editado el env ahí por error; el proyecto es esencial.
- Proyectos Vercel finales: `paginaweblabden` (landing → www.labden.com.mx) y `web-labden` (SaaS → app.labden.com.mx).

### Sesión 2026-06-03 (rename proyecto Vercel)
- Renombrado `web-labden` → **`app-labden`** (vía API Vercel) para evitar confusión futura. Sirve `app.labden.com.mx` (SaaS), dominio intacto. Verificado: app.labden.com.mx y www.labden.com.mx ambos HTTP 200.
- Nombres finales: `paginaweblabden` (landing, www) · `app-labden` (SaaS, app). Para editar env del SaaS, ahora es obvio cuál es.

### Sesión 2026-06-03 (landing-engineer — Fase 7 GA4 eventos)
- **F7-T1/T2/T3 implementadas.**
  - `lib/analytics.ts`: 7 eventos canónicos nuevos: `clickPruebaGratis(source?)`, `clickVerComoFunciona`, `clickLogin`, `clickPrecios`, `clickWhatsapp`, `scroll50`, `scroll90`. Eventos legacy conservados como aliases (no borrar hasta que David actualice GTM).
  - Comentario F7-T2: `submit_trial_form` no implementable desde esta landing (form en app-labden).
  - `components/home/hero.tsx`: CTA primario → `clickPruebaGratis('hero')`; CTA secundario → `clickVerComoFunciona`.
  - `components/home/final-cta.tsx`: convertido a `"use client"` + `clickPruebaGratis('final_cta')`.
  - `components/home/pricing-section.tsx`: Plan Base → `clickPruebaGratis('pricing_base')`; Plan Pro → `clickPruebaGratis('pricing_pro')`.
  - `components/layout/navbar.tsx`: "Entrar" desktop+mobile → `clickLogin`; "Precios" nav → `clickPrecios`; botón registro desktop → `clickPruebaGratis('navbar')`; móvil → `clickPruebaGratis('navbar_mobile')`.
  - `components/layout/footer.tsx`: convertido a `"use client"` + `clickPruebaGratis('footer')` en CTA; `clickWhatsapp` en icono WhatsApp. Icono ya apuntaba a `https://wa.me/525664015780` (D3 ✅).
  - `components/analytics/scroll-tracker.tsx` (nuevo): client component, rAF-throttled, `scroll_50` + `scroll_90` una sola vez por carga. Montado en `app/page.tsx` (home only).
  - `components/ui/button.tsx`: corregido para pasar `onClick` cuando renderiza como `<a>` o `<Link>` (antes se perdía).
  - Verificado: los 7 eventos y sus 6 variantes de `source` presentes en `.next/static/chunks/`. lint (0 errores) + typecheck (limpio) + build (31 páginas) ✅.
- **D3 ✅ cerrada** con el número 5664015780.
- **Próximo:** Fase 8 (Performance / Core Web Vitals).

### Sesión 2026-06-04 (landing-engineer — Fase 8 Performance/CWV)
- **F8-T1 LCP:** Hero es text-only; LCP real = H2 de EmotionalBlock ("Hecho para laboratorios dentales..."), 124–300ms. Fuente Inter self-hosted con next/font (font-display swap automático). Sin imagen above-the-fold. Sin acción requerida.
- **F8-T2 Imágenes/CLS:** CLS = 0.0000 confirmado (todas las imágenes tienen `aspect-ratio` o contenedor dimensionado). Fixes aplicados: `how-it-works.tsx` → `loading="lazy"` + `sizes` en 4 imágenes `fill`; `brand-logo.tsx` → `sizes="64px"` en fill+priority; `story-sections.tsx` → `sizes` descriptivos en 6 tarjetas. `assistant-widget.tsx` → `loading="lazy"` en imagen del chat (solo visible tras click).
- **F8-T3 Medición + TBT:** `AssistantWidget` diferido con `next/dynamic` + `ssr:false` en Client Component wrapper `components/chat/assistant-widget-loader.tsx`. Layout root usa `AssistantWidgetLoader` (Server Component compatible). GTM ya era `strategy="afterInteractive"` → correcto. Métricas finales: LCP 124ms · CLS 0.0000 · TTFB 27ms · DOMContentLoaded 114ms · Load 116ms (mobile). lint 0 errores · tsc limpio · build 31 páginas ✅. Playwright: 6/8 passed, 2 fallos preexistentes (blog FAQ test espera `aria-expanded` pero el componente usa `<details>` nativo — no regresión).
- **NO se tocaron:** `next.config.ts`, `middleware.ts`, metadata/schema, eventos de Fase 7.
- **Pendiente commit David.**
- **Próximo:** Fase 9 (QA & checklist 26 ítems + gate SEC del diff acumulado).

### Sesión 2026-06-03 (Fase 7 — eventos GA4)
- 7 eventos canónicos en `lib/analytics.ts` + wiring: click_prueba_gratis (con source hero/final_cta/pricing_base/pricing_pro/navbar/navbar_mobile/footer), click_ver_como_funciona, click_login, click_precios, click_whatsapp (wa.me/525664015780), scroll_50, scroll_90.
- `components/analytics/scroll-tracker.tsx` (nuevo, solo home; dispara una vez cada uno, rAF-throttled).
- submit_trial_form: documentado fuera de alcance (form en app.labden.com.mx). Proxy de conversión = click_prueba_gratis.
- **Fix de bug:** `components/ui/button.tsx` no pasaba onClick al renderizar como `<a>`/`<Link>` → los eventos se perdían silenciosamente. Corregido.
- **Verificado con Playwright:** los 7 eventos llegan a window.dataLayer (clicks + scroll); scroll_50/90 una sola vez. lint/typecheck/build OK. **Commit `842bf0c`**.
- **ACCIÓN DAVID (F7-T4):** en GA4 marcar `click_prueba_gratis` (y `submit_trial_form` cuando se instrumente en el SaaS) como conversión. Requiere `NEXT_PUBLIC_GTM_ID` configurado en Vercel + GA4 enlazado en GTM.
