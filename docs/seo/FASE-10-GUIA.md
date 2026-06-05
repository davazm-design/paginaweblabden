# Guía Fase 10 — Medición (GTM + GA4) y Search Console

> Estado al 2026-06-04: el código ya dispara 7 eventos al `dataLayer`, pero el proyecto Vercel
> `paginaweblabden` **NO tiene `NEXT_PUBLIC_GTM_ID`** y **GTM no se carga** en producción.
> Hasta completar la Parte A, GA4 no recibe nada.

---

## PARTE A — Conectar la medición (GTM → GA4)

### A1. Tener (o crear) una cuenta GA4 y una propiedad
1. Entra a https://analytics.google.com
2. Si ya tienes una propiedad GA4 para LabDen, sáltate al A2. Si no:
   - Admin (engrane abajo-izquierda) → **Crear → Propiedad**.
   - Nombre: `LabDen`. Zona horaria: México. Moneda: MXN. → Siguiente → crea un **flujo de datos web**.
   - URL del sitio: `https://www.labden.com.mx`. Nombre del flujo: `LabDen Web`.
   - Al crearlo te da un **ID de medición** con forma **`G-XXXXXXXXXX`**. Anótalo.

### A2. Tener (o crear) un contenedor de Google Tag Manager
1. Entra a https://tagmanager.google.com
2. Si ya tienes un contenedor para labden.com.mx, anota su ID y ve al A3. Si no:
   - **Crear cuenta** → Nombre de cuenta: `LabDen`. País: México.
   - Nombre del contenedor: `www.labden.com.mx`. Plataforma: **Web**. → Crear → acepta términos.
   - Arriba verás el **ID del contenedor** con forma **`GTM-XXXXXXX`**. Anótalo.

### A3. Poner el GTM-ID en Vercel (esto lo puedo hacer yo)
- **Opción rápida:** pásame tu `GTM-XXXXXXX` y yo lo configuro en Vercel (`paginaweblabden`, Production+Preview) y redepliego. Es 1 minuto.
- **Manual (si prefieres):** Vercel → proyecto **paginaweblabden** → Settings → Environment Variables →
  Add: `NEXT_PUBLIC_GTM_ID` = `GTM-XXXXXXX`, entornos Production + Preview → Save → **Redeploy** (sin caché).
- Tras el deploy, el sitio empezará a cargar GTM y a recibir los eventos del `dataLayer`.

### A4. En GTM: configurar GA4 + reenviar los eventos
Dentro de tu contenedor GTM:

**4.1 Tag base de GA4 (Configuration)**
1. **Etiquetas → Nueva** → Configuración de etiqueta → **Google Analytics: configuración de GA4** (o "Google Tag").
2. Pega tu **ID de medición** `G-XXXXXXXXXX`.
3. Activador: **Initialization - All Pages** (o "All Pages"). → Guardar como `GA4 - Config`.

**4.2 Un activador por cada evento del dataLayer**
Nuestros eventos del `dataLayer` se llaman exactamente:
`click_prueba_gratis`, `click_ver_como_funciona`, `click_login`, `click_precios`, `click_whatsapp`, `scroll_50`, `scroll_90`.

Para cada uno: **Activadores → Nuevo** → tipo **Evento personalizado** → "Nombre del evento" = el nombre exacto (ej. `click_prueba_gratis`) → Guardar.
(Tip: empieza solo con `click_prueba_gratis` y `click_whatsapp`, que son los importantes; los demás luego.)

**4.3 (Opcional) Variable para el `source` de click_prueba_gratis**
- Variables → Nueva → **Variable de capa de datos** → Nombre de la variable de capa de datos: `source` → Guardar como `dlv - source`.

**4.4 Un tag GA4 Event por cada evento**
Para cada evento: **Etiquetas → Nueva** → **Google Analytics: evento de GA4** →
- Etiqueta de configuración: `GA4 - Config`.
- Nombre del evento: el mismo (ej. `click_prueba_gratis`).
- (Opcional) Parámetro: nombre `source`, valor `{{dlv - source}}`.
- Activador: el activador del paso 4.2 con el mismo nombre. → Guardar.

**4.5 Publicar**
- Botón **Enviar** (arriba-derecha) → Publicar. Sin esto, nada surte efecto.

### A5. Verificar que fluye
1. En GTM, botón **Vista previa** → escribe `https://www.labden.com.mx` → conecta.
2. En el sitio, haz click en "Prueba gratis 30 días" y en el WhatsApp; haz scroll hasta abajo.
3. En el panel de GTM Preview deberías ver dispararse `click_prueba_gratis`, `click_whatsapp`, `scroll_50/90`.
4. En GA4 → Admin → **DebugView** deberías ver los eventos en tiempo real.

### A6. Marcar la conversión
1. GA4 → Admin → **Eventos** (o "Eventos clave" en versiones nuevas).
2. Espera a que `click_prueba_gratis` aparezca en la lista (tras recibir tráfico real) **o** créalo manualmente.
3. Activa el interruptor **Marcar como evento clave / conversión** en `click_prueba_gratis`.
   - (Cuando se instrumente el registro en el SaaS, marcar también `submit_trial_form`.)

---

## PARTE B — Google Search Console

### B1. Agregar la propiedad
1. Entra a https://search.google.com/search-console
2. **Agregar propiedad** → elige el tipo **Prefijo de URL** (no "Dominio") → escribe exactamente:
   `https://www.labden.com.mx`

### B2. Verificar la propiedad (la forma más fácil con GTM ya puesto)
- Si ya completaste la Parte A (GTM en el sitio), elige el método de verificación **Google Tag Manager** → Verificar. Listo.
- Alternativas si esa no funciona:
  - **Etiqueta HTML**: GSC te da un `<meta name="google-site-verification" ...>`. Pásamelo y lo añado al `<head>` por código (1 commit), o úsalo tú.
  - **Proveedor de dominio (DNS)**: añade el registro TXT que te dé GSC en tu proveedor del dominio.

### B3. Enviar el sitemap
1. Ya verificado: menú izquierdo → **Sitemaps**.
2. En "Agregar un sitemap nuevo" escribe: `sitemap.xml` → Enviar.
   (URL completa: `https://www.labden.com.mx/sitemap.xml`.)
3. Estado esperado en minutos/horas: "Correcto".

### B4. Revisión semanal (primeras semanas)
- **Páginas** (cobertura): que las URLs se vayan indexando; revisa errores.
- **Rendimiento**: impresiones, clics, CTR, posición media; vigila la consulta `sistema para laboratorios dentales` y derivadas.
- **Experiencia / Core Web Vitals**: que no aparezcan URLs "deficientes".

---

## Resumen de lo que necesito de ti para ayudarte más
- Tu **`GTM-XXXXXXX`** → yo pongo el env var en Vercel y redepliego.
- (Si eliges verificar GSC por etiqueta HTML) el **meta de verificación** → lo añado por código.
- El resto (crear GA4/GTM, configurar tags, marcar conversión, enviar sitemap) son clicks en las consolas de Google que solo tú puedes hacer con tu cuenta.
