import { useEffect } from 'react'

// Fades `.reveal` elements in the first time they scroll into view.
// Elements already on screen at load animate immediately with their --d delay.
// Without JS (or with reduced motion) everything stays visible.
export default function useReveal(deps = []) {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        if (!('IntersectionObserver' in window)) return
        const els = [...document.querySelectorAll('.reveal:not([data-seen])')]
        els.forEach((el) => el.classList.add('pre'))
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.remove('pre')
                    e.target.setAttribute('data-seen', '')
                    io.unobserve(e.target)
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })
        // let the browser paint the hidden state first
        requestAnimationFrame(() => requestAnimationFrame(() => els.forEach((el) => io.observe(el))))
        return () => io.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}
