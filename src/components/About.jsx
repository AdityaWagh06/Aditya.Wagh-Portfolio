import { useEffect, useRef } from 'react'
import { ABOUT } from '../content'

export default function About() {
    const photos = ABOUT.photos

    const photoStripRef = useRef()
    const containerRef  = useRef()
    const offsetX    = useRef(-280)
    const CYCLE      = 1204
    const SPEED      = 0.4
    const rafId      = useRef()
    const isHover    = useRef(false)
    const lastMouseX = useRef(null)
    // touch swipe state
    const touchLastX = useRef(null)
    const touchVel   = useRef(0)

    useEffect(() => {
        const strip     = photoStripRef.current
        const container = containerRef.current
        if (!strip || !container) return

        strip.style.transition = 'none'
        strip.style.transform  = `translateX(${offsetX.current}px)`

        const wrap = () => {
            if (offsetX.current < -CYCLE) offsetX.current += CYCLE
            else if (offsetX.current > 0)  offsetX.current -= CYCLE
        }

        // ── RAF loop: auto-scroll when mouse is not over strip ─────────────
        const tick = () => {
            if (!isHover.current) {
                offsetX.current -= SPEED
                wrap()
                strip.style.transform = `translateX(${offsetX.current}px)`
            }
            rafId.current = requestAnimationFrame(tick)
        }
        rafId.current = requestAnimationFrame(tick)

        // ── Mouse: hover = track cursor delta directly (fast, 1:1) ─────────
        const onMouseEnter = () => { isHover.current = true; lastMouseX.current = null }
        const onMouseLeave = () => { isHover.current = false; lastMouseX.current = null }
        const onMouseMove  = (e) => {
            if (!isHover.current) return
            if (lastMouseX.current === null) { lastMouseX.current = e.clientX; return }
            const delta = e.clientX - lastMouseX.current
            offsetX.current += delta
            wrap()
            strip.style.transform = `translateX(${offsetX.current}px)`
            lastMouseX.current = e.clientX
        }

        // ── Touch: swipe with momentum ─────────────────────────────────────
        const onTouchStart = (e) => {
            touchLastX.current = e.touches[0].clientX
            touchVel.current   = 0
            isHover.current    = true
        }
        const onTouchMove = (e) => {
            const x = e.touches[0].clientX
            const delta = x - touchLastX.current
            touchVel.current  = delta
            offsetX.current  += delta
            wrap()
            strip.style.transform = `translateX(${offsetX.current}px)`
            touchLastX.current = x
        }
        const onTouchEnd = () => {
            isHover.current = false
            let mom = touchVel.current * 8
            const glide = () => {
                if (Math.abs(mom) < 0.3) return
                offsetX.current += mom; mom *= 0.92; wrap()
                strip.style.transform = `translateX(${offsetX.current}px)`
                requestAnimationFrame(glide)
            }
            requestAnimationFrame(glide)
        }

        container.addEventListener('mouseenter', onMouseEnter)
        container.addEventListener('mouseleave', onMouseLeave)
        container.addEventListener('mousemove',  onMouseMove)
        container.addEventListener('touchstart', onTouchStart, { passive: true })
        container.addEventListener('touchmove',  onTouchMove,  { passive: true })
        container.addEventListener('touchend',   onTouchEnd)

        return () => {
            cancelAnimationFrame(rafId.current)
            container.removeEventListener('mouseenter', onMouseEnter)
            container.removeEventListener('mouseleave', onMouseLeave)
            container.removeEventListener('mousemove',  onMouseMove)
            container.removeEventListener('touchstart', onTouchStart)
            container.removeEventListener('touchmove',  onTouchMove)
            container.removeEventListener('touchend',   onTouchEnd)
        }
    }, [])

    const tools = ABOUT.tools
    const data  = ABOUT.stats

    return (
        <div id="about" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20">
                {/* ── Photo Strip ── */}
                <div
                    ref={containerRef}
                    className="relative overflow-hidden rounded-3xl h-64 sm:h-72 w-full max-w-xs mx-auto lg:mx-0 lg:w-72 flex-shrink-0 cursor-ew-resize select-none"
                >
                    {/* left fade */}
                    <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />
                    {/* right fade */}
                    <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />
                    <div
                        ref={photoStripRef}
                        className="flex h-full items-center gap-3 pr-3 will-change-transform"
                    >
                        {[...photos, ...photos, ...photos].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt=""
                                draggable={false}
                                className="h-56 sm:h-64 w-40 sm:w-44 object-cover rounded-2xl flex-shrink-0 shadow-md"
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-6 sm:mb-10 max-w-2xl font-Ovo text-sm sm:text-base">{ABOUT.bio}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li key={item.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
