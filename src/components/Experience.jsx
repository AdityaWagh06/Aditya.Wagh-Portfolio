import { useRef, useEffect, useState } from 'react'
import { EXPERIENCE, HEADER } from '../content'

// ── inline SVG icons ─────────────────────────────────────────────────────────
const MapPin = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
        <path d="M12 2a7 7 0 0 0-7 7c0 4.9 7 13 7 13s7-8.1 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
    </svg>
)
const Briefcase = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
        <path d="M20 7h-3V6a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM10 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V6Z"/>
    </svg>
)

// ── mobile entry: scroll-triggered fade-in, no card border ─────────────────
function MobileEntry({ item }) {
    const ref     = useRef(null)
    const [vis, setVis] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVis(true) },
            { threshold: 0.18 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return (
        <div
            ref={ref}
            className={`relative pl-8 pb-12 transition-all duration-700 ease-out
                        ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* spine line */}
            <div className="absolute left-[11px] top-3 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
            {/* colored dot */}
            <div className={`absolute left-0 top-2 w-[22px] h-[22px] rounded-full ${item.dot}
                            ring-[3px] ring-white dark:ring-[#111] shadow-md z-10`} />
            {/* content — no card box */}
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-1">
                {item.period}
            </p>
            <h3 className={`text-lg font-bold italic leading-tight bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.company}
            </h3>
            {item.location && (
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500 dark:text-gray-500">
                    <MapPin /> {item.location}
                </div>
            )}
            {item.type && (
                <div className="flex items-center gap-1.5 mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                    <Briefcase /> {item.type}
                </div>
            )}
            <h4 className="text-sm font-bold dark:text-white text-gray-900 mt-3 mb-3">{item.role}</h4>
            <div className="space-y-2">
                {item.points.map((pt, j) => (
                    <p key={j} className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{pt}</p>
                ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tags.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                        <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{t}</span>
                    </span>
                ))}
            </div>
        </div>
    )
}

// ── scroll-driven animated timeline ─────────────────────────────────────────
export default function Experience() {
    const containerRef = useRef(null)
    const [fillPx, setFillPx] = useState(0)
    const [totalH, setTotalH] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            if (!containerRef.current) return
            const el   = containerRef.current
            const rect = el.getBoundingClientRect()
            const h    = el.offsetHeight
            setTotalH(h)
            // fill starts when section top crosses 60 % down the viewport,
            // completes when section scrolls fully past that point
            const scrolled = window.innerHeight * 0.6 - rect.top
            setFillPx(Math.min(h, Math.max(0, scrolled)))
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // keep dot centre inside the container bounds
    const dotCY = Math.min(totalH - 22, Math.max(22, fillPx))

    return (
        <section
            id="experience"
            className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-20 scroll-mt-20"
        >
            {/* heading */}
            <h4 className="text-center font-Ovo text-lg mb-2 text-gray-500 dark:text-gray-400">
                Where I've worked
            </h4>
            <h2 className="text-center font-Ovo text-3xl sm:text-5xl dark:text-white">
                Experience
            </h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-20 font-Ovo text-sm sm:text-base text-gray-600 dark:text-gray-400">
                A journey through my professional roles — research, development, and real-world impact.
            </p>

            {/* ══ DESKTOP — 3-column timeline ══════════════════════════════════
                [left: company info] │ [animated spine] │ [right: role detail]
            ══════════════════════════════════════════════════════════════════ */}
            <div ref={containerRef} className="relative hidden sm:block">

                {/* grey full-height background line */}
                <div className="absolute top-0 bottom-0 left-[260px] w-px bg-gray-200 dark:bg-white/10 pointer-events-none" />

                {/* red scroll-progress fill */}
                <div
                    className="absolute top-0 left-[260px] w-[2px] bg-gradient-to-b from-rose-500 to-rose-400 pointer-events-none"
                    style={{ height: fillPx }}
                />

                {/* moving avatar dot — travels with scroll */}
                <div
                    className="absolute left-[260px] -translate-x-1/2
                               w-[44px] h-[44px] rounded-full overflow-hidden
                               ring-[3px] ring-rose-500
                               shadow-[0_0_18px_5px_rgba(244,63,94,0.35)]
                               pointer-events-none z-20"
                    style={{ top: dotCY - 22 }}
                >
                    <img
                        src={HEADER.profileImg}
                        alt="Aditya"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* experience entries */}
                <div className="flex flex-col gap-16 pb-8">
                    {EXPERIENCE.map((item, i) => (
                        <div key={i} className="flex items-start">

                            {/* ── left: company meta ── */}
                            <div className="w-[252px] pr-10 shrink-0 text-right">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500 mb-2">
                                    {item.period}
                                </p>
                                <h3 className={`text-xl font-bold italic leading-tight bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                    {item.company}
                                </h3>
                                {item.location && (
                                    <div className="flex items-center justify-end gap-1.5 mt-2 text-[11px] text-gray-500 dark:text-gray-500">
                                        <MapPin /> {item.location}
                                    </div>
                                )}
                                {item.type && (
                                    <div className="flex items-center justify-end gap-1.5 mt-1 text-[11px] text-gray-500 dark:text-gray-500">
                                        <Briefcase /> {item.type}
                                    </div>
                                )}
                            </div>

                            {/* ── right: role details ── */}
                            <div className="flex-1 pl-14">
                                <h4 className="text-xl sm:text-2xl font-bold font-Ovo dark:text-white mb-4">
                                    {item.role}
                                </h4>
                                <div className="space-y-3">
                                    {item.points.map((pt, j) => (
                                        <p key={j} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {pt}
                                        </p>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {item.tags.map(t => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 rounded-full text-[11px] font-medium
                                                       border border-gray-200 dark:border-white/15
                                                       text-gray-600 dark:text-gray-300
                                                       bg-gray-50/80 dark:bg-white/5"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* end-cap dot */}
                <div
                    className="absolute left-[260px] -translate-x-1/2 bottom-0
                               w-2.5 h-2.5 rounded-full
                               bg-gray-300 dark:bg-white/20
                               ring-4 ring-white dark:ring-[#111]"
                />
            </div>

            {/* ══ MOBILE — borderless left-spine scroll-animated entries ═══════ */}
            <div className="sm:hidden relative ml-2 mt-2">
                {EXPERIENCE.map((item, i) => (
                    <MobileEntry key={i} item={item} />
                ))}
                {/* end-cap dot */}
                <div className="absolute left-[11px] bottom-0 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20 ring-4 ring-white dark:ring-[#111] -translate-x-1/2" />
            </div>
        </section>
    )
}
