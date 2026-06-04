# LabDen — Proyecto SEO Home (carpeta de seguimiento)

Esta carpeta es la **memoria viva** del proyecto de posicionamiento de la home de LabDen
para la keyword principal **"sistema para laboratorios dentales"**.

Todo el trabajo se ejecuta en sesiones sucesivas. Antes de empezar cualquier sesión,
**lee `STATUS.md`** para saber en qué fase vamos y qué sigue.

## Archivos

| Archivo | Qué es | Cuándo se actualiza |
|---|---|---|
| `README.md` | Este índice y las reglas de operación. | Casi nunca. |
| `PLAN.md` | El plan completo dividido en **fases y tareas** con owner, criterio de aceptación y dependencias. Es el "qué hay que hacer". | Solo si cambia el alcance. |
| `STATUS.md` | **Tracker vivo**: estado de cada tarea, bitácora por sesión, y decisiones pendientes de David. Es el "en qué vamos". | **Cada sesión.** |
| `COPY.md` | El **copy canónico** (textos exactos en español) para cada sección, tarjeta y FAQ. Fuente única de verdad para que todas las sesiones usen el mismo texto. | Si David aprueba cambios de copy. |
| `ASSETS.md` | Especificación de **imágenes**: nombre de archivo, alt, title, caption, dimensiones, formato y loading. | Al definir/optimizar imágenes. |

## Reglas de operación (para cualquier agente/sesión)

1. **Fuente de verdad de mensajería:** este `COPY.md` (derivado del plan SEO aprobado por David el 2026-06-03) + `../../../marketing/` del workspace padre. No inventar copy nuevo sin OK de David.
2. **Gobernanza del repo:** la construcción la hace `landing-engineer`; el SEO técnico (metadata, schema, sitemap, robots, OG) lo hace `landing-seo-specialist`; todo diff que toque `middleware.ts`, `next.config.ts`, env vars, `app/api/**`, schema/metadata global o archivos de root **pasa por `landing-security-auditor` antes de merge**. Ver `../../CLAUDE.md`.
3. **Al cerrar una tarea:** marcar el checkbox en `STATUS.md`, anotar el commit (`hash + mensaje`) y dejar una línea en la bitácora de sesión.
4. **Validaciones obligatorias antes de declarar terminada una tarea de código:** `npm run lint`, `npm run typecheck`, `npm run build`. Si toca blog/WP: `npx playwright test`.
5. **No expandir el alcance** sin actualizar `PLAN.md` y avisar a David.
6. **Decisiones de David:** si una tarea está bloqueada por una decisión, NO adivinar: dejarla en `STATUS.md › Decisiones pendientes` y seguir con otra tarea desbloqueada.

## Objetivo de negocio

Posicionar y convertir para: *dueños de laboratorios dentales pequeños/medianos en México
(1–10 empleados, hasta 100 dentistas registrados) que necesitan ordenar trabajos, controlar
dentistas, reducir errores, mejorar entregas y controlar cobros.*

**Conversión principal:** registro a **prueba gratis de 30 días** (`https://app.labden.com.mx/auth/register`).
