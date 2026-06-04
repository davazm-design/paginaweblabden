/**
 * Analytics utility for LABDEN conversion tracking
 * Pushes events to dataLayer for GTM consumption
 */

// Extend Window interface for dataLayer
declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

/**
 * Track an event by pushing to dataLayer
 * GTM will pick up these events and forward to GA4
 */
export function trackEvent(eventName: string, data?: Record<string, unknown>) {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: eventName,
            ...data
        });

        // Debug logging in development
        if (process.env.NODE_ENV === 'development') {
            console.log(`[Analytics] ${eventName}`, data || '');
        }
    }
}

// ---------------------------------------------------------------------------
// F7-T1 — GA4 canonical events (Fase 7 SEO plan, 2026-06-03)
// ---------------------------------------------------------------------------
//
// submit_trial_form (F7-T2): NOT implemented here.
// The trial registration form lives in app.labden.com.mx (repo app-labden),
// which is a separate Next.js project. Instrumenting that form requires
// changes in that repo. From this landing, the conversion proxy is
// click_prueba_gratis (the outbound click toward /auth/register).
// ---------------------------------------------------------------------------

export const analytics = {
    // Fired on every CTA that takes the user to /auth/register.
    // Covers: hero (primary), final-cta, footer CTA, pricing plan buttons.
    clickPruebaGratis: (source?: string) =>
        trackEvent('click_prueba_gratis', source ? { source } : undefined),

    // Fired on the "Ver cómo funciona" secondary CTA in the hero (→ #como-funciona).
    clickVerComoFunciona: () => trackEvent('click_ver_como_funciona'),

    // Fired on "Entrar" links (navbar desktop + mobile menu).
    clickLogin: () => trackEvent('click_login'),

    // Fired on "Precios" nav link.
    clickPrecios: () => trackEvent('click_precios'),

    // Fired on the WhatsApp icon/link in the footer.
    clickWhatsapp: () => trackEvent('click_whatsapp'),

    // Fired once per page load when the user reaches 50% scroll depth.
    scroll50: () => trackEvent('scroll_50'),

    // Fired once per page load when the user reaches 90% scroll depth.
    scroll90: () => trackEvent('scroll_90'),

    // --- Legacy events kept for backward compatibility ---
    // ctaProductoFinalClick is still used in components/producto/producto-final-cta.tsx.
    // The home-specific events (ctaHomeHeroClick, ctaHomeFinalClick) are now replaced
    // by click_prueba_gratis; they are kept as aliases to avoid breaking any GTM
    // triggers that may already reference the old names.
    ctaHomeHeroClick: () => trackEvent('cta_home_hero_click'),
    ctaHomeFinalClick: () => trackEvent('cta_home_final_click'),
    ctaProductoFinalClick: () => trackEvent('cta_producto_final_click'),
    pageViewRegister: () => trackEvent('page_view_register'),
    registrationComplete: () => trackEvent('registration_complete'),
};
