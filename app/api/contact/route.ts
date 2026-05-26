import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "notificaciones@labden.com.mx";

function getResend() {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY no está configurada.");
    return new Resend(key);
}

interface ContactPayload {
    nombre: string;
    email: string;
    laboratorio: string;
    telefono?: string;
    mensaje: string;
}

function validate(body: unknown): ContactPayload | string {
    if (!body || typeof body !== "object") return "Cuerpo inválido.";
    const b = body as Record<string, unknown>;

    const nombre = (b.nombre as string)?.trim();
    const email = (b.email as string)?.trim();
    const laboratorio = (b.laboratorio as string)?.trim();
    const telefono = (b.telefono as string)?.trim() || undefined;
    const mensaje = (b.mensaje as string)?.trim();

    if (!nombre || nombre.length < 2) return "El nombre es requerido.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Email inválido.";
    if (!laboratorio || laboratorio.length < 2) return "El nombre del laboratorio es requerido.";
    if (!mensaje || mensaje.length < 10) return "El mensaje debe tener al menos 10 caracteres.";
    if (mensaje.length > 2000) return "El mensaje es demasiado largo (máx. 2000 caracteres).";

    return { nombre, email, laboratorio, telefono, mensaje };
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = validate(body);

        if (typeof result === "string") {
            return NextResponse.json({ error: result }, { status: 400 });
        }

        const { nombre, email, laboratorio, telefono, mensaje } = result;

        await getResend().emails.send({
            from: "LABDEN Web <noreply@labden.com.mx>",
            to: TO_EMAIL,
            replyTo: email,
            subject: `Contacto web: ${nombre} — ${laboratorio}`,
            text: [
                `Nombre: ${nombre}`,
                `Email: ${email}`,
                `Laboratorio: ${laboratorio}`,
                telefono ? `Teléfono: ${telefono}` : null,
                ``,
                `Mensaje:`,
                mensaje,
            ]
                .filter(Boolean)
                .join("\n"),
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("[contact] Error al enviar email:", err);
        return NextResponse.json(
            { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
            { status: 500 }
        );
    }
}
