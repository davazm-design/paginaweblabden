import Image from "next/image"

interface BrandLogoProps {
    className?: string;
    textClassName?: string;
    imageClassName?: string;
    showText?: boolean;
}

export function BrandLogo({ className = "", textClassName = "", imageClassName = "w-10 h-10", showText = true }: BrandLogoProps) {
    return (
        <div className={`inline-flex items-center gap-2 ${className}`}>
            <div className={`relative shrink-0 ${imageClassName}`}>
                <Image
                    src="/labden-icon.png"
                    alt="LabDen"
                    fill
                    className="object-contain rounded-lg"
                    priority
                />
            </div>

            {showText && (
                <span
                    className={`font-bold text-xl tracking-tight ${textClassName}`}
                >
                    <span className="text-foreground">Lab</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Den</span>
                </span>
            )}
        </div>
    )
}
