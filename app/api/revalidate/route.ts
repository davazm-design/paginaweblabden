import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Endpoint de revalidación on-demand.
 *
 * Llamado por WordPress (vía plugin de webhook) cuando cambian posts o ACF.
 * Requiere REVALIDATE_SECRET configurado en el entorno.
 *
 * Uso desde WP:
 *   POST https://labden.com/api/revalidate
 *   Header: x-revalidate-secret: <secret>
 *   Body: { "paths": ["/", "/blog/mi-slug"] }
 */
export async function POST(request: NextRequest) {
    const secret = process.env.REVALIDATE_SECRET;
    if (!secret) {
        return NextResponse.json(
            { ok: false, error: "REVALIDATE_SECRET no configurado en el servidor." },
            { status: 500 }
        );
    }

    const provided = request.headers.get("x-revalidate-secret");
    if (provided !== secret) {
        return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    let payload: { paths?: unknown };
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Body inválido (JSON esperado)." }, { status: 400 });
    }

    const paths = Array.isArray(payload.paths)
        ? payload.paths.filter((p): p is string => typeof p === "string")
        : [];

    if (paths.length === 0) {
        return NextResponse.json(
            { ok: false, error: "Especifica 'paths' (array de strings) en el body." },
            { status: 400 }
        );
    }

    for (const path of paths) revalidatePath(path, "page");

    return NextResponse.json({
        ok: true,
        revalidated: { paths },
        timestamp: new Date().toISOString(),
    });
}
