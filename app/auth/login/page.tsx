import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLoginPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center p-4">
            <Link href="/" className="mb-8 transition-transform hover:scale-105">
                <BrandLogo imageClassName="w-20 h-20" textClassName="text-3xl" />
            </Link>

            <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-xl p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Acceso próximamente</h1>

                <p className="text-muted-foreground mb-8">
                    El acceso a la plataforma estará disponible pronto.
                </p>

                <Button variant="outline" className="w-full" href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al inicio
                </Button>
            </div>
        </main>
    );
}
