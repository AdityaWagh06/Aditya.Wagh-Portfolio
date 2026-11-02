import { ORGS, EDUCATION } from '../../content'
import Block, { Frame } from './Block'
import { useInView } from './hooks'

function Entry({ o, i }) {
    const Title = o.link ? 'a' : 'span'
    const props = o.link ? { href: o.link, target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
        <li className="reveal relative pl-6 pb-8 last:pb-1" style={{ '--d': `${(i % 3) * 60}ms` }}>
            <span aria-hidden="true" className="absolute z-10 left-0 top-[0.4rem] w-[9px] h-[9px] rounded-full border border-accent bg-bg" />
            <p className="font-mono text-[12px] text-muted">{o.period}</p>
            <h3 className="mt-1.5 text-[17px] font-normal tracking-[0.01em]">{o.role}</h3>
            <Title {...props} className={`mt-0.5 inline-block text-[14px] text-muted ${o.link ? 'hover:text-fg transition-colors' : ''}`}>
                {o.name}{o.link && <span aria-hidden="true"> ↗</span>}
            </Title>
            <p className="mt-2.5 text-[14.5px] text-muted leading-relaxed">{o.line}</p>
            {o.tags && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                    {o.tags.map((t) => (
                        <li key={t} className="flex items-center gap-1.5 rounded-md border border-line bg-raised/60 px-2 py-0.5 font-mono text-[11.5px] text-fg/80">
                            <span className="w-1.5 h-1.5 rounded-[2px] bg-accent" aria-hidden="true" />{t}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

const line = 'relative before:absolute before:left-[4px] before:top-2 before:bottom-2 before:w-px before:border-l before:border-dashed before:border-line'

// Solid accent line that draws down over the dashed one when the list is seen.
function Draw() {
    const [ref, seen] = useInView({ threshold: 0.15 })
    return <span ref={ref} aria-hidden="true" className={`absolute left-[4px] top-2 bottom-2 w-px bg-accent/70 origin-top transition-transform duration-[1800ms] ease-out ${seen ? 'scale-y-100' : 'scale-y-0'}`} />
}

export default function Timeline() {
    return (
        <Block id="experience" title="Experience">
            <Frame className="p-5 sm:p-7">
                <ol className={line}>
                    <Draw />
                    {ORGS.map((o, i) => <Entry key={o.name} o={o} i={i} />)}
                </ol>
                <p className="reveal mt-8 mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Education</p>
                <ol className={line}>
                    {EDUCATION.map((o, i) => <Entry key={o.name} o={o} i={i} />)}
                </ol>
            </Frame>
        </Block>
    )
}
