import { useEffect, useState } from 'react'
import { reduced, useInView } from './hooks'

// Counts from 0 to `to` when it comes into view.
export function CountUp({ to, decimals = 0, ms = 1100 }) {
    const [ref, seen] = useInView()
    const [v, setV] = useState(reduced() ? to : 0)
    useEffect(() => {
        if (!seen || reduced()) return
        let raf; const t0 = performance.now()
        const tick = (t) => {
            const k = Math.min(1, (t - t0) / ms)
            setV(to * (1 - Math.pow(1 - k, 3)))
            if (k < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [seen, to, ms])
    return <span ref={ref} className="tabular-nums">{decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-US')}</span>
}

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=<>/'

// Text that decodes from random characters the first time it is seen.
export function Scramble({ text }) {
    const [ref, seen] = useInView({ threshold: 0.6 })
    const [out, setOut] = useState(text)
    useEffect(() => {
        if (!seen || reduced()) return
        let frame = 0
        const total = text.length * 2 + 6
        const id = setInterval(() => {
            frame++
            setOut(text.split('').map((c, i) => (c === ' ' || i < (frame - 4) / 2 ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join(''))
            if (frame >= total) { clearInterval(id); setOut(text) }
        }, 32)
        return () => clearInterval(id)
    }, [seen, text])
    return <span ref={ref} aria-label={text}><span aria-hidden="true">{out}</span></span>
}

// Cycles through a list of short phrases with a soft slide.
export function Cycler({ items, ms = 2400 }) {
    const [i, setI] = useState(0)
    useEffect(() => {
        if (reduced()) return
        const id = setInterval(() => setI((n) => (n + 1) % items.length), ms)
        return () => clearInterval(id)
    }, [items.length, ms])
    return (
        <span className="relative inline-grid overflow-hidden align-bottom">
            {items.map((t, n) => (
                <span key={t} aria-hidden={n !== i} className={`col-start-1 row-start-1 transition-all duration-500 ease-out ${n === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>{t}</span>
            ))}
        </span>
    )
}
