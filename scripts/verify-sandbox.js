/**
 * LANDING SANDBOX GUARD — FASE 0.1
 * Bloqueo de fuga de secretos en frontend estático.
 */
const validateSandbox = () => {
    const forbidden = ['DATABASE_URL', 'JWT_SECRET', 'STRIPE_SECRET_KEY', 'RESEND_API_KEY'];
    const keys = Object.keys(process.env);

    const violation = forbidden.find(key => process.env[key]);

    if (violation) {
        console.error('\x1b[31m[SANDBOX VIOLATION] Secreto detectado en dominio publico/estatico.\x1b[0m');
        console.error(`\x1b[33m[REGLA] La variable ${violation} es prohíbida en apps/landing.\x1b[0m`);
        console.error('\x1b[36m[NOTICE] apps/landing es un frontend no-productivo y no debe manejar credenciales.\x1b[0m');
        process.exit(1);
    }

    const nonNextPublic = keys.filter(k =>
        !k.startsWith('NEXT_PUBLIC_') &&
        !['NODE_ENV', 'PATH', 'PWD', 'HOME', 'TERM', 'SHELL', 'USER', 'LANG', 'npm_package_name', 'npm_lifecycle_event'].some(p => k.includes(p)) &&
        k.length < 50 // Filtro básico para evitar ruido de sistema, pero atrapar secrets largos
    );

    // Preventive heuristic warning.
    // This does NOT indicate a violation by itself.
    // It exists to surface suspicious env density in public/static frontends.
    if (nonNextPublic.length > 20) {
        console.warn(`\x1b[35m[GOVERNANCE WARNING] Alta densidad de variables privadas (${nonNextPublic.length}).\x1b[0m`);
    }

    console.log('\x1b[32m[SANDBOX OK] apps/landing is clean and secure.\x1b[0m');
};

validateSandbox();
