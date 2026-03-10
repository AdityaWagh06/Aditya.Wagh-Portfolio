import { useRef, useEffect, useState } from 'react'
import { EXPERIENCE } from '../content'

function useInView(threshold = 0.2) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [threshold])
    return [ref, inView]
}

function ExperienceCard({ item, index }) {
    const [ref, inView] = useInView(0.15)
    const isLeft = index % 2 === 0

    return (
        <div
            ref={ref}
            className={`relative flex items-start gap-0 w-full
                ${isLeft ? 'flex-row' : 'flex-row-reverse'}
                transition-all duration-700 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Card — takes 45% on each side */}
            <div className={`w-[calc(50%-28px)] ${isLeft ? 'pr-0 text-right' : 'pl-0 text-left'}`}>
                <div className={`inline-block w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden`}>
                    {/* Gradient top bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                    <div className="p-5 sm:p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">{item.period}</span>
                        <h3 className="text-base sm:text-lg font-bold font-Ovo dark:text-white mt-1">{item.role}</h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>{item.company}</p>
                        <ul className={`space-y-2 ${isLeft ? 'text-right' : 'text-left'}`}>
                            {item.points.map((pt, i) => (
                                <li key={i} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {pt}
                                </li>
                            ))}
                        </ul>
                        <div className={`flex flex-wrap gap-1.5 mt-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            {item.tags.map(t => (
                                <span key={t} className={`px-2.5 py-1 rounded-full text-[11px] font-medium bg-gradient-to-r ${item.color} bg-opacity-10 text-white bg-clip-border border border-white/10`}
                                    style={{ background: 'rgba(139,92,246,0.12)', color: 'inherit' }}>
                                    <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold`}>{t}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Centre spine — dot + line */}
            <div className="relative flex flex-col items-center w-14 shrink-0 self-stretch">
                {/* Vertical line segment */}
                <div className="absolute inset-0 flex justify-center">
                    <div className="w-px bg-gray-200 dark:bg-white/10 h-full" />
                </div>
                {/* Dot */}
                <div className={`relative z-10 mt-5 w-5 h-5 rounded-full ${item.dot} ring-4 ring-white dark:ring-[#111] shadow-lg`} />
            </div>

            {/* Empty spacer on the other side */}
            <div className="w-[calc(50%-28px)]" />
        </div>
    )
}

export default function Experience() {
    return (
        <div id="experience" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Where I've worked</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Experience</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-sm sm:text-base">
                A journey through my professional roles — research, development, and real-world impact.
            </p>

            {/* Timeline container */}
            <div className="relative hidden sm:block">
                {/* Full-height spine */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />

                <div className="flex flex-col gap-10">
                    {EXPERIENCE.map((item, i) => (
                        <ExperienceCard key={item.company} item={item} index={i} />
                    ))}
                </div>

                {/* End cap dot */}
                <div className="flex justify-center mt-8">
                    <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-white/20 ring-4 ring-white dark:ring-[#111]" />
                </div>
            </div>

            {/* Mobile: single column stacked cards */}
            <div className="sm:hidden flex flex-col gap-6">
                {EXPERIENCE.map((item, i) => {
                    const [ref, inView] = [useRef(null), true] // always visible on mobile
                    return (
                        <div key={item.company} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] shadow-sm overflow-hidden">
                            <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                            <div className="p-5">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">{item.period}</span>
                                <h3 className="text-base font-bold font-Ovo dark:text-white mt-1">{item.role}</h3>
                                <p className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>{item.company}</p>
                                <ul className="space-y-2">
                                    {item.points.map((pt, j) => (
                                        <li key={j} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{pt}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {item.tags.map(t => (
                                        <span key={t} className="px-2.5 py-1 rounded-full text-[11px] border border-gray-200 dark:border-white/10">
                                            <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold`}>{t}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
