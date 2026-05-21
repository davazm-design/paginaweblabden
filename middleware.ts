import { NextResponse, type NextRequest } from "next/server";

const CSP_DIRECTIVES = [
    "default-src 'self'",
    // GTM/GA usan inline + eval. Sin nonce, 'unsafe-inline' es lo realista hasta refactorizar a nonce-based CSP.
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.googletagservices.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://*.hostingersite.com https://*.wp.com https://images.unsplash.com https://www.googletagmanager.com https://*.google-analytics.com",
    "connect-src 'self' https://*.hostingersite.com https://www.google-analytics.com https://*.google-analytics.com https://*.googletagmanager.com",
    "frame-src https://www.googletagmanager.com https://*.doubleclick.net",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS: Record<string, string> = {
    "Content-Security-Policy": CSP_DIRECTIVES,
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
};

export function middleware(_request: NextRequest) {
    const response = NextResponse.next();
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
        response.headers.set(key, value);
    }
    return response;
}

export const config = {
    matcher: [
        // Excluye assets estáticos y rutas internas de Next.
        "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|icon.svg|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|woff2?)$).*)",
    ],
};
