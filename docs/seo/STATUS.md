# STATUS — Tracker vivo del proyecto SEO Home

> **Empieza cada sesión leyendo este archivo.** Marca `[x]` al cerrar una tarea, anota el commit
> y agrega una línea a la bitácora. Leyenda: `[ ]` pendiente · `[~]` en progreso · `[x]` hecho · `[!]` bloqueado.

**Fase actual:** Fase 1 ✅ cerrada (commit `1e700e9`, gate SEC PASS) → **siguiente: Fase 2 (contenido home, landing-engineer).**
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

### Fase 2 — Contenido home
- [ ] F2-T1 Hero (H1 + subtítulo + CTAs + microcopy)
- [ ] F2-T2 Microbeneficios
- [ ] F2-T3 Diferenciador/origen (storytelling)
- [ ] F2-T4 Funcionalidades (6 tarjetas)
- [ ] F2-T5 Dolores
- [ ] F2-T6 Ideal 1–10 empleados
- [ ] F2-T7 Control financiero
- [ ] F2-T8 Tabla comparativa
- [ ] F2-T9 Academy
- [ ] F2-T10 Comunidad
- [ ] F2-T11 Prueba gratis 30 días
- [ ] F2-T12 Revisar "CRM"
- [ ] F2-T13 Hero mobile

### Fase 3 — FAQ
- [ ] F3-T1 Componente FAQ acordeón
- [ ] F3-T2 FAQPage schema en home

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
