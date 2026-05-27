# 07 — Plan de Sprints

> Plan de ejecución del refactor de labden.com.mx.
> Basado en 27 decisiones tomadas y 7 docs de referencia.
> Creado: 2026-05-27. **Completado: 2026-05-27.**
>
> **Todos los 7 sprints ejecutados en una sesión.**

---

## Resumen del alcance

| Área | Qué cambia |
|------|-----------|
| Navegación | Navbar nueva (8 items) + Footer nuevo (4 columnas + social) |
| Rutas | /producto → /plataforma + 3 páginas nuevas (/academy, /talks, /aliados) |
| Home | Rediseño completo: 8 secciones nuevas según wireframe |
| /empresa | Rewrite con storytelling de origen + "Lo que somos y lo que no" |
| /plataforma | Rewrite (antes /producto) con nueva estructura |
| /precios | Suavizar lenguaje + alinear con decisiones |
| Copy global | Suavizar lenguaje técnico en todo el sitio |
| IA Assistant | Widget flotante MVP |
| SEO | Metadata, JSON-LD, sitemap para páginas nuevas |

---

## Sprint 1 — Estructura y navegación
> Sin dependencias de contenido. Puro trabajo estructural.

- [ ] **Navbar nueva**: Plataforma · Academy · Talks · Blog · Aliados · Precios · Empresa · Contacto + [Prueba gratis 14 días] + Ingresar (discreto)
- [ ] **Footer nuevo**: 4 columnas (Plataforma, Academy, Recursos, Empresa) + redes sociales (Facebook, Instagram, YouTube, LinkedIn) + frase del embudo. Sin newsletter.
- [ ] **Renombrar /producto → /plataforma**: nueva ruta + redirect 301 de /producto
- [ ] **Crear /academy** (coming soon con estructura): Cursos especializados, Expertos del sector, Técnicas y mejores prácticas, Contenido actualizado. Badge "Muy pronto".
- [ ] **Crear /talks** (coming soon con estructura): Lives en vivo, Tips y consejos, Tendencias del sector, Casos de éxito, Videos on demand.
- [ ] **Crear /aliados** (coming soon con estructura): Marcas aliadas, Congresos y eventos, Beneficios exclusivos, Comunidad.
- [ ] Actualizar todos los links internos del sitio a las nuevas rutas.

**Entregable**: Sitio navegable con la nueva estructura. Todas las rutas funcionando.

---

## Sprint 2 — Home: Hero + Problemas
> Dependencia: screenshots del SaaS para mockups (David). Se puede arrancar con placeholders.

- [ ] **Hero completo**:
  - Badge: "HECHO PARA LABORATORIOS DENTALES"
  - Headline: "Recupera el control de tu laboratorio."
  - Subtítulo: "Centraliza órdenes, seguimiento y comunicación en un solo lugar para trabajar con más claridad y menos desgaste."
  - CTA primario: "Prueba gratis 14 días →"
  - CTA secundario: "Ver cómo funciona" (ancla a sección)
  - Sin prueba social (se agrega cuando haya datos reales)
  - Lado derecho: mockup del dashboard (placeholder → screenshots reales)
- [ ] **Sección "Problemas reales"** (antes/después):
  - Izquierda: "Así se pierde tiempo y dinero" con lista de dolores (✘)
  - Derecha: "Con LabDen, todo está en orden" con lista de beneficios (✔)
  - Visual: foto caos → mockup LabDen
- [ ] Eliminar sección actual "Tu laboratorio hoy vs Tu laboratorio con LABDEN" (reemplazada)

**Entregable**: Parte superior del home rediseñada.

---

## Sprint 3 — Home: Features + Flujo + Financiero
> Se puede ejecutar en paralelo con Sprint 2 si son componentes independientes.

- [ ] **Features grid** — "Todo lo que necesitas para tener el control":
  - Grupo 1 "ORGANIZA Y DA SEGUIMIENTO": Órdenes claras, Seguimiento por estatus, Historial completo, Comunicación organizada
  - Grupo 2 "CONTROLA Y HAZ CRECER TU LABORATORIO": Control de cobros e ingresos, Reportes y métricas, Accesos y seguridad, Desde cualquier lugar
- [ ] **Cómo funciona** — "Así de fácil funciona LabDen":
  - 4 pasos: Dentista envía orden → Recibes y organizas → Elaboras el trabajo → Entregas y cierras
  - CTA: "Ver recorrido completo →" (lleva a /plataforma)
- [ ] **Control financiero** — "Control financiero al día, sin complicaciones":
  - Mockup de cuentas por cobrar (placeholder → screenshot real)
  - CTA: "Ver más reportes →"
- [ ] **Comunicación antes/después** — "Comunicación que sí funciona":
  - Antes: WhatsApp mockup con mensajes dispersos
  - Después: LabDen mockup con orden organizada
  - CTA: "Ver cómo mejora →"

**Entregable**: Secciones centrales del home completas.

---

## Sprint 4 — Home: Cierre + Páginas de contenido

- [ ] **Academy teaser** en home: Badge "Muy pronto" + 4 pilares + CTA "Quiero saber más →"
- [ ] **Beneficio emocional**: Bloque de cierre con fondo destacado — "Menos carga mental. Más claridad para trabajar."
- [ ] **CTA final**: "¿Listo para recuperar el control de tu laboratorio?" + frase del embudo + botón + garantías (sin tarjeta, sin compromiso, cancela cuando quieras)
- [ ] **"La calidad no falla. La información sí."** integrada como frase recurrente (footer, entre secciones, cierres)
- [ ] **Rewrite /empresa**:
  - Storytelling de origen (3 fundadores: programador, técnico dental, especialista UX)
  - Sección "Lo que somos y lo que no" (guardrails visibles)
  - Esencia de LabDen (creencias, lo que queremos provocar)
- [ ] **Rewrite /plataforma** (antes /producto):
  - ¿Qué es LabDen?, Funciones principales, Gestión de órdenes, Seguimiento, Historial, Seguridad, Integraciones futuras
  - CTA: "Solicitar demo" / "Probar gratis 14 días"

**Entregable**: Home completo + páginas de contenido reescritas.

---

## Sprint 5 — Lenguaje + Precios + Primera Generación

- [ ] **Suavizar lenguaje técnico** en todo el sitio:
  - "Dashboard financiero" → "Control de cobros e ingresos"
  - "Métricas de productividad" → "Reportes y métricas" o similar
  - "Digitalización Operativa" → revisar subtítulo Plan Base
  - Aplicar vocabulario oficial: "orden de trabajo", "historial del caso", "seguimiento del trabajo"
- [ ] **Actualizar /precios**: alinear copy con decisiones, verificar que Primera Generación 2.0 esté al día
- [ ] **Screenshots reales del SaaS**: David provee capturas de app.labden.com.mx → reemplazar todos los placeholders del home
- [ ] **Refinar bloque Primera Generación 2.0** cuando David pase el contenido de Notion

**Bloqueador**: Screenshots dependen de David. El resto se puede avanzar.

---

## Sprint 6 — IA Assistant MVP

- [ ] **Widget flotante** en esquina inferior derecha, presente en todas las páginas
- [ ] **Personalidad**: cercano, claro, conoce el sector dental. Habla como colega. Nombre TBD.
- [ ] **Flujos mínimos**:
  - "¿Qué es LabDen?" → resumen + link a /plataforma
  - "¿Cómo funciona?" → 4 pasos + link a sección del home
  - "¿Cuánto cuesta?" → resumen de planes + link a /precios
  - "Quiero probar" → redirige a registro (app.labden.com.mx/auth/register)
  - "Tengo dudas" → abre formulario de contacto o redirige a /contacto
- [ ] **Escalamiento**: si la pregunta no está cubierta → "Te conecto con el equipo" → /contacto
- [ ] **Tecnología**: evaluar opciones (Chatbot rule-based simple vs API de Claude vs tercero como Intercom/Crisp)

**Propuesta técnica del IA Assistant**: Se detalla en sprint cuando se ejecute. Puede ser un chatbot rule-based (más rápido, sin costo de API) o un wrapper de Claude API (más inteligente, con costo).

---

## Sprint 7 — SEO + QA + Deploy

- [ ] **Metadata** de todas las páginas nuevas (/plataforma, /academy, /talks, /aliados) — generateMetadata + openGraph
- [ ] **JSON-LD** actualizado: Organization, SoftwareApplication, FAQPage donde aplique
- [ ] **Sitemap** actualizado con las nuevas rutas
- [ ] **Redirects**: /producto → /plataforma (301)
- [ ] **Security audit**: landing-security-auditor sobre el diff completo
- [ ] **Performance check**: Lighthouse, Core Web Vitals
- [ ] **QA cross-browser**: verificar en móvil + desktop
- [ ] **Deploy final** a producción

**Entregable**: Sitio refactorizado completo, live en labden.com.mx.

---

## Dependencias de David

| Qué necesito | Para cuándo | Sprint |
|-------------|-------------|--------|
| Screenshots reales de app.labden.com.mx (dashboard, órdenes, cuentas por cobrar, orden individual) | Sprint 2-3 (se puede arrancar con placeholders) | 2, 3, 5 |
| Contenido de Primera Generación 2.0 (de Notion) | Sprint 5 | 5 |
| Contenido de IA Assistant: personalidad, FAQs, nombre del asistente | Sprint 6 (o lo definimos juntos) | 6 |
| Redes sociales: URLs de Facebook, Instagram, YouTube, LinkedIn | Sprint 1 | 1 |
| Validación visual de cada sprint antes de pasar al siguiente | Continuo | Todos |

---

## Estimación de esfuerzo

| Sprint | Estimación | Dependencias |
|--------|-----------|--------------|
| 1. Estructura y navegación | 1 sesión | Ninguna |
| 2. Home: Hero + Problemas | 1 sesión | Screenshots (puede usar placeholders) |
| 3. Home: Features + Flujo | 1 sesión | Ninguna |
| 4. Home: Cierre + Páginas | 1-2 sesiones | Ninguna |
| 5. Lenguaje + Precios | 1 sesión | Screenshots reales |
| 6. IA Assistant | 1-2 sesiones | Decisión de tecnología |
| 7. SEO + QA + Deploy | 1 sesión | Todo lo anterior |

**Total estimado: 7-9 sesiones de trabajo.**
