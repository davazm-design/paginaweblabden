# ASSETS — Especificación de imágenes Home

> Reglas: nombres en minúsculas, sin acentos, sin espacios, con-guiones, descriptivos.
> Formato preferente **WebP** (jpg/png/svg aceptados). Pesos: grandes <150 KB · hero <250 KB · iconos <30 KB.
> Siempre `width`+`height`. `loading="lazy"` en todas **excepto hero**; hero con `fetchpriority="high"`.
> Cada imagen lleva **alt único** (describe imagen + función, sin keyword-stuffing).

## Set objetivo de la home

| # | Archivo | Sección | alt | title | caption | dims |
|---|---|---|---|---|---|---|
| 1 (hero) | `sistema-para-laboratorios-dentales-labden.webp` | Hero | Pantalla de LabDen, sistema para laboratorios dentales con control de órdenes, dentistas y cobros | Sistema para laboratorios dentales LabDen | Organiza órdenes, producción, dentistas y cuentas por cobrar desde una sola plataforma. | 1400×900 |
| 2 | `control-ordenes-trabajo-laboratorio-dental.webp` | Órdenes | Control de órdenes de trabajo para laboratorio dental dentro de LabDen | Control de órdenes de trabajo dental | Cada trabajo dental puede registrarse, consultarse y seguirse desde el sistema. | 1200×800 |
| 3 | `dentistas-registrados-sistema-laboratorio-dental.webp` | Dentistas | Dentistas registrados en sistema para laboratorio dental | Dentistas registrados en LabDen | Da de alta a los dentistas que trabajan con tu laboratorio y organiza sus solicitudes. | 1200×800 |
| 4 | `seguimiento-produccion-laboratorio-dental.webp` | Producción | Seguimiento de producción de trabajos en laboratorio dental | Seguimiento de producción dental | Consulta en qué etapa se encuentra cada trabajo dentro del laboratorio. | 1200×800 |
| 5 | `comunicacion-dentistas-laboratorio-dental.webp` | Comunicación | Comunicación organizada entre dentistas y laboratorio dental | Comunicación entre dentistas y laboratorio | Reduce mensajes perdidos y centraliza la información de cada orden. | 1200×800 |
| 6 | `control-financiero-laboratorio-dental.webp` | Finanzas | Control financiero para laboratorio dental con ingresos y cuentas por cobrar | Control financiero para laboratorio dental | Consulta ingresos, cuentas por cobrar y dentistas que generan más trabajos. | 1200×800 |
| 7 | `labden-academy-cursos-tecnicos-dentales.webp` | Academy | LabDen Academy con cursos para técnicos y laboratorios dentales | LabDen Academy para técnicos dentales | Capacitación creada a partir de necesidades reales de laboratorios dentales. | 1200×800 |
| 8 | `comunidad-laboratorios-dentales-labden.webp` | Comunidad | Comunidad de laboratorios dentales que participan en la evolución de LabDen | Comunidad LabDen de laboratorios dentales | La comunidad ayuda a definir nuevas funciones, cursos y mejoras del sistema. | 1200×800 |
| logo | `logo-labden-sistema-laboratorios-dentales.svg` | Header/Footer | LabDen | — | — | vector |

## Mapeo desde imágenes actuales

Las capturas reales ya colocadas en sesiones previas (`public/images/story/*`) pueden **reusarse**
re-exportándolas a WebP con los nombres SEO de arriba. Correspondencias sugeridas:

| Nombre SEO objetivo | Origen actual |
|---|---|
| `control-ordenes-trabajo-laboratorio-dental.webp` | `story/ordenes-detalle.png` o `story/paso-1-orden.png` |
| `seguimiento-produccion-laboratorio-dental.webp` | `story/seguimiento-orden.png` / `story/paso-3-seguimiento.png` |
| `comunicacion-dentistas-laboratorio-dental.webp` | `story/comunicacion.png` |
| `control-financiero-laboratorio-dental.webp` | `story/dashboard-financiero.png` |
| `sistema-para-laboratorios-dentales-labden.webp` (hero) | `story/resumen-general.jpg` (recortar/optimizar) — **decisión D4** |
| `dentistas-registrados-sistema-laboratorio-dental.webp` | falta captura — pedir a David |
| `labden-academy-cursos-tecnicos-dentales.webp` | falta — pedir a David |
| `comunidad-laboratorios-dentales-labden.webp` | falta — pedir a David |

## Nota técnica
- El proyecto usa `next/image`, que ya sirve AVIF/WebP automáticamente. El nombre de archivo SEO importa
  para `src` y para la señal semántica; el formato fuente puede ser PNG/JPG optimizado y `next/image`
  lo reconvierte. Aun así, exportar a `.webp` con nombre descriptivo cumple el plan al 100%.
- No hay `cwebp`/`pngquant` instalados en el entorno; usar Python/PIL (`Image.save(..., "WEBP", quality=82)`)
  o `quantize(256)` para PNG, como en sesiones previas.
