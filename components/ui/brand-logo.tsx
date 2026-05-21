import Image from "next/image"

interface BrandLogoProps {
    className?: string;
    textClassName?: string;
    imageClassName?: string;
    showText?: boolean;
}

export function BrandLogo({ className = "", textClassName = "", imageClassName = "w-12 h-12", showText = true }: BrandLogoProps) {
    return (
        <div className={`inline-flex items-center gap-1.5 ${className}`}>
            <div className={`relative shrink-0 ${imageClassName}`}>
                <Image
                    src="/icon.svg"
                    alt="LABDEN"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* HTML Text */}
            {showText && (
                <span
                    className={`font-semibold text-2xl tracking-[0.02em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 ${textClassName}`}
                >
                    LABDEN
                </span>
            )}
        </div>
    )
}
