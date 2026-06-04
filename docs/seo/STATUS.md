# STATUS — Tracker vivo del proyecto SEO Home

> **Empieza cada sesión leyendo este archivo.** Marca `[x]` al cerrar una tarea, anota el commit
> y agrega una línea a la bitácora. Leyenda: `[ ]` pendiente · `[~]` en progreso · `[x]` hecho · `[!]` bloqueado.

**Fase actual:** Fase 0 cerrada → **siguiente: Fase 1 (metadata) tras resolver D1.**
**Última actualización:** 2026-06-03

---

## Tablero de tareas

### Fase 0 — Setup ✅
- [x] F0-T1 Crear `docs/seo/` (README, PLAN, STATUS, COPY, ASSETS) — *commit pendiente en esta sesión*
- [x] F0-T2 Recon del estado del repo — *documentado en PLAN.md*

### Fase 1 — Metadata & técnico
- [!] F1-T1 Dominio canónico www + env Vercel — **bloqueado por D1**
- [ ] F1-T2 Meta title
- [ ] F1-T3 Meta description
- [ ] F1-T4 keywords
- [ ] F1-T5 OpenGraph + Twitter (img de F5)
- [ ] F1-T6 Canonical + sin noindex
- [ ] F1-T7 robots host www (gate SEC)
- [ ] F1-T8 sitemap validar

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
- [!] F5-T2 Imagen hero real — **bloqueado por D4**
- [ ] F5-T3 Renombrar story a nombres SEO

### Fase 6 — Nav & footer
- [!] F6-T1 Menú (Aliados→Comunidad) — **bloqueado por D2**
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

| # | Decisión | Recomendación | Estado |
|---|---|---|---|
| **D1** | Dominio canónico: ¿`www.labden.com.mx` o `labden.com.mx`? Hoy el env default es **sin www** pero producción redirige a **www**. | **www** (coincide con el plan y con el 200 actual). Fijar `NEXT_PUBLIC_SITE_URL=https://www.labden.com.mx` en Vercel. | ⏳ |
| **D2** | ¿Renombrar el menú `Aliados` → `Comunidad`? | Sí, si Comunidad será pieza central. | ⏳ |
| **D3** | Número de WhatsApp para el CTA "Hablar por WhatsApp". | Pendiente número. | ⏳ |
| **D4** | Qué captura usar como **imagen hero** (debe ser pantalla real de la plataforma). | Reusar/recortar la del dashboard "Resumen general" o el panel de órdenes. | ⏳ |
| **D5** | SoftwareApplication: ¿mantener precios (AggregateOffer 550–850)? | Sí, da rich result más completo. | ⏳ |

---

## Bitácora por sesión

### Sesión 2026-06-03 (apertura del proyecto)
- Recon completo del repo (metadata, schema, sitemap, robots, analytics, CRM, imágenes).
- Creada la carpeta de seguimiento `docs/seo/` con 5 documentos.
- Definidas 10 fases + 2 epics + 5 decisiones (D1–D5).
- **Pendiente:** que David resuelva D1–D5 para desbloquear Fase 1 y arrancar implementación.
- **Próximo paso sugerido:** resolver D1 (www) y ejecutar Fase 1 completa (metadata) en una sola sesión, con gate SEC al final.
