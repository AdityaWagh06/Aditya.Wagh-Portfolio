import { useMemo } from 'react'
import { SITE } from '../../content'
import { Frame } from './Block'
import { useInView } from './hooks'
import { GH_USER, useCalendar } from './github'
import snapshot from '../../data/commits-snapshot.json'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const level = (n) => (n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 10 ? 3 : 4)

// The daily-activity grid from the GitHub profile, with the same data as the profile
// (see useCalendar). If that can't load, it falls back to a snapshot of public
// commits per day taken from the GitHub API.
export default function GitHubGraph() {
    const live = useCalendar()
    const [gridRef, seen] = useInView({ threshold: 0.2 })

    const days = useMemo(
        () => live ? live.map((d) => ({ ...d, level: d.level ?? level(d.count) })) : snapshot.days.map((d) => ({ ...d, level: level(d.count) })),
        [live],
    )
    const total = live ? live.reduce((a, d) => a + d.count, 0) : snapshot.days.reduce((a, d) => a + d.count, 0)
    const weeks = useMemo(() => {
        const pad = new Date(days[0].date).getDay()
        const cells = [...Array(pad).fill(null), ...days]
        const out = []
        for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7))
        return out
    }, [days])

    return (
        <Frame className="reveal mt-4 p-4 sm:p-5">
            <div className="mb-3 flex items-baseline justify-between gap-3">
                <p className="text-[13.5px]"><span className="font-medium">{total.toLocaleString('en-US')}</span> <span className="text-muted">{live ? 'contributions' : 'public commits'} in the last year</span></p>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="shrink-0 font-mono text-[12px] text-muted hover:text-fg">@{GH_USER} ↗</a>
            </div>
            <div className="overflow-x-auto no-scrollbar" dir="rtl">
                <div ref={gridRef} dir="ltr" className={`inline-flex gap-[3px] ${seen ? '' : 'grid-off'}`}>
                    {weeks.map((w, i) => {
                        const first = w.find(Boolean)
                        const d = first && new Date(first.date)
                        const label = d && d.getDate() <= 7 ? MONTHS[d.getMonth()] : ''
                        return (
                            <div key={i} className="flex flex-col gap-[3px]">
                                <span className="h-3 font-mono text-[9px] leading-3 text-muted whitespace-nowrap">{label}</span>
                                {Array.from({ length: 7 }, (_, j) => {
                                    const c = w[j]
                                    return <span key={j} title={c ? `${c.count} on ${c.date}` : undefined} style={{ transitionDelay: `${i * 12}ms` }} className={`cell w-[10px] h-[10px] rounded-[2px] ${c ? `gh-${c.level}` : 'bg-transparent'}`} />
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10.5px] text-muted" aria-hidden="true">
                Less {[0, 1, 2, 3, 4].map((l) => <span key={l} className={`w-[10px] h-[10px] rounded-[2px] gh-${l}`} />)} More
            </div>
        </Frame>
    )
}
