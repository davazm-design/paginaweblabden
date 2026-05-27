'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ProductShowcaseProps {
    title: string;
    description: string;
}

const DASHBOARD_IMG = "/dashboard-preview.png";
const DASHBOARD_W = 1024;
const DASHBOARD_H = 641;

export function ProductShowcase({ title, description }: ProductShowcaseProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        if (!isLightboxOpen) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isLightboxOpen]);

    return (
        <>
            <div className="relative flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-muted text-lg">{description}</p>
                </div>

                <div className="relative w-full max-w-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 blur-3xl -z-10" />
                    <button
                        type="button"
                        onClick={() => setIsLightboxOpen(true)}
                        className="block w-full rounded-xl overflow-hidden border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label="Ampliar imagen del dashboard"
                    >
                        <Image
                            src={DASHBOARD_IMG}
                            alt="Dashboard LabDen — Vista de órdenes"
                            width={DASHBOARD_W}
                            height={DASHBOARD_H}
                            sizes="(max-width: 768px) 100vw, 640px"
                            className="w-full h-auto"
                        />
                    </button>
                </div>
            </div>

            {isLightboxOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Dashboard LabDen ampliado"
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            onClick={() => setIsLightboxOpen(false)}
                            aria-label="Cerrar vista ampliada"
                        >
                            <X className="w-7 h-7" />
                        </button>
                        <Image
                            src={DASHBOARD_IMG}
                            alt="Dashboard LabDen — Vista completa"
                            width={DASHBOARD_W}
                            height={DASHBOARD_H}
                            sizes="100vw"
                            className="w-full h-auto rounded-lg"
                            priority
                        />
                    </div>
                </div>
            )}
        </>
    )
}
