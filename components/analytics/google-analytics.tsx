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
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script
                id="ga4-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`,
                }}
            />
        </>
    );
}
