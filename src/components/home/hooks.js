import { useEffect, useRef, useState } from 'react'

export const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// True once the element has scrolled into view.
export function useInView(options = { threshold: 0.3 }) {
    const ref = useRef(null)
    const [seen, setSeen] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el || seen) return
        if (!('IntersectionObserver' in window)) { setSeen(true); return }
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, options)
        io.observe(el)
        return () => io.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seen])
    return [ref, seen]
}

