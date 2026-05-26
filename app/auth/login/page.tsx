import { redirect } from "next/navigation";

// Redirige al portal de registro del SaaS.
// Mantener esta ruta (no borrarla) para preservar CTAs existentes y backlinks.
export default function AuthLoginPage() {
    redirect("https://app.labden.com.mx/auth/register");
}
