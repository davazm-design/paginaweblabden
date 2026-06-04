"use client"

import { useEffect, useRef } from "react"
import { analytics } from "@/lib/analytics"

/**
 * Mounts a passive scroll listener that fires scroll_50 and scroll_90
 * exactly once per page load.
 *
 * Mounted in app/page.tsx (home only). If scroll depth is needed on other
 * routes in the future, mount there as well — or move to the root layout.
 *
 * Uses requestAnimationFrame for throttling instead of a fixed interval,
 * so it reads scroll position at most once per paint frame.
 */
export function ScrollTracker() {
    const fired50 = useRef(false)
    const fired90 = useRef(false)
    const rafPending = useRef(false)

    useEffect(() => {
        function checkDepth() {
            rafPending.current = false

            const scrolled = window.scrollY + window.innerHeight
            const total = document.documentElement.scrollHeight

            if (total === 0) return

            const pct = (scrolled / total) * 100

            if (!fired50.current && pct >= 50) {
                fired50.current = true
                analytics.scroll50()
            }

            if (!fired90.current && pct >= 90) {
                fired90.current = true
                analytics.scroll90()
            }
        }

        function onScroll() {
            if (!rafPending.current) {
                rafPending.current = true
                requestAnimationFrame(checkDepth)
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return null
}
