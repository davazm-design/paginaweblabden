/**
 * Canonical site URL — single source of truth for the entire repo.
 *
 * Normalisation rules applied at module load time:
 *   1. Force apex domain to www  (handles Vercel env propagation lag where
 *      NEXT_PUBLIC_SITE_URL resolves to the non-www variant).
 *   2. Upgrade http → https (defensive; should never happen in prod).
 *   3. Strip trailing slash.
 *
 * A value that is already correct (https://www.labden.com.mx) passes through
 * unchanged.  The regex replacements are idempotent.
 */
const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://www.labden.com.mx";

export const SITE_URL = raw
    .replace(/^http:\/\//, "https://")                          // http → https
    .replace("://labden.com.mx", "://www.labden.com.mx")        // apex → www
    .replace(/\/+$/, "");                                        // strip trailing slash
