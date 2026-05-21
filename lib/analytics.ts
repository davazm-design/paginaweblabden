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

// Predefined event functions for type safety
export const analytics = {
    ctaHomeHeroClick: () => trackEvent('cta_home_hero_click'),
    ctaHomeFinalClick: () => trackEvent('cta_home_final_click'),
    ctaProductoFinalClick: () => trackEvent('cta_producto_final_click'),
    pageViewRegister: () => trackEvent('page_view_register'),
    registrationComplete: () => trackEvent('registration_complete'),
};
