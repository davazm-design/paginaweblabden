import { redirect } from "next/navigation";

// Redirige al portal de login del SaaS.
// Mantener esta ruta (no borrarla) para preservar CTAs existentes y backlinks.
export default function AuthLoginPage() {
    redirect("https://app.labden.com.mx/auth/login");
}
