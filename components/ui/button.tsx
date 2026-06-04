import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg" | "icon"
    href?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            primary: "bg-accent text-accent-foreground hover:opacity-90 shadow-lg",
            secondary: "bg-transparent text-accent hover:bg-accent/10 border border-transparent",
            outline: "border-2 border-accent text-accent hover:bg-accent/10",
            ghost: "hover:bg-surface-elevated text-muted hover:text-foreground"
        }

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
            icon: "h-11 w-11"
        }

        const classes = cn(baseStyles, variants[variant], sizes[size], className)

        if (href) {
            // onClick typed for <button> but safe to call on any element event
            const handleClick = props.onClick
                ? (e: React.MouseEvent<HTMLAnchorElement>) => {
                      props.onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>)
                  }
                : undefined

            // Use regular anchor for hash links (smooth scroll)
            if (href.startsWith('#') || href.startsWith('/#')) {
                return (
                    <a href={href} className={classes} onClick={handleClick}>
                        {children}
                    </a>
                )
            }

            // Use Next.js Link for regular navigation
            return (
                <Link href={href} className={classes} onClick={handleClick}>
                    {children}
                </Link>
            )
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"
