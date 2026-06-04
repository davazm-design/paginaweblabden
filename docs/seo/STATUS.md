# STATUS — Tracker vivo del proyecto SEO Home

> **Empieza cada sesión leyendo este archivo.** Marca `[x]` al cerrar una tarea, anota el commit
> y agrega una línea a la bitácora. Leyenda: `[ ]` pendiente · `[~]` en progreso · `[x]` hecho · `[!]` bloqueado.

**Fase actual:** Fase 3 ✅ implementada (landing-engineer, 2026-06-03) → **siguiente: Fase 4 (schemas Organization/SoftwareApplication/Breadcrumb — landing-seo-specialist + gate SEC).**
**Última actualización:** 2026-06-03

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

### Fase 4 — Schemas
- [ ] F4-T1 Organization (areaServed)
- [ ] F4-T2 SoftwareApplication (areaServed)
- [ ] F4-T3 BreadcrumbList home

### Fase 5 — Imágenes
- [ ] F5-T1 Set final + specs (ASSETS.md)
- [ ] F5-T2 Imagen hero real (D4 ✅ → `story/resumen-general.jpg`)
- [ ] F5-T3 Renombrar story a nombres SEO

### Fase 6 — Nav & footer
- [x] F6-T1 Menú — **D2 ✅ sin cambios** (se mantiene "Aliados")
- [ ] F6-T2 Footer SEO

### Fase 7 — GA4
- [ ] F7-T1 Eventos dataLayer
- [ ] F7-T2 submit_trial_form (límite documentado)
- [!] F7-T3 WhatsApp CTA — **bloqueado por D3**
- [ ] F7-T4 Conversiones GA4 (David)

### Fase 8 — Performance
- [ ] F8-T1 Hero LCP
- [ ] F8-T2 lazy + dimensiones
- [ ] F8-T3 qa-seo + Lighthouse

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
| **D3** | Número de WhatsApp para el CTA "Hablar por WhatsApp". | Pendiente número. | ⏳ |
| **D4** | Qué captura usar como **imagen hero**. | ✅ **"Resumen general"** (foto técnico + monitor, `story/resumen-general.jpg`). Optimizar a `sistema-para-laboratorios-dentales-labden.webp`. | ✅ 2026-06-03 |
| **D5** | SoftwareApplication: ¿mantener precios (AggregateOffer 550–850)? | Recomendado: sí. | ⏳ |

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
