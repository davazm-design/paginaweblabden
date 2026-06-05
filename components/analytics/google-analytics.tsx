'use client';

import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Loads GA4 (gtag.js) directly — no GTM container required.
 * Renders nothing when NEXT_PUBLIC_GA_ID is unset (safe in dev/staging).
 * Exposes window.gtag so lib/analytics.ts can call it after load.
 */
export function GoogleAnalytics() {
    // Solo IDs de medición GA4 bien formados (G-XXXX). Evita que un valor mal
    // configurado rompa el src o el script inline. (Hardening recomendado por el gate.)
    if (!GA_ID || !/^G-[A-Z0-9]+$/.test(GA_ID)) return null;

    return (
        <>
            {/* Librería gtag.js (~el grueso del peso) diferida a idle. Al cargar procesa
                la cola de dataLayer, así no se pierden los comandos js/config ni eventos. */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="lazyOnload"
            />
            {/* Bootstrap mínimo (~4 líneas, no impacta TBT): define window.gtag y encola
                js + config de inmediato. Garantiza que un clic temprano se encole en
                dataLayer aunque la librería aún no haya cargado. */}
            <Script
                id="ga4-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');
`,
                }}
            />
        </>
    );
}
