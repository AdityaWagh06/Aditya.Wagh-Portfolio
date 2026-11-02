import { PAPERS, FREELANCE, ABOUT } from '../../content'
import Block, { Frame, MoreLink } from './Block'

export function Papers() {
    return (
        <Block id="papers" title="Papers">
            <Frame as="ol" className="px-5 sm:px-6">
                {PAPERS.map((p, i) => (
                    <li key={p.title} className="reveal py-5 border-b border-dashed border-line last:border-0" style={{ '--d': `${i * 50}ms` }}>
                        <div className="flex items-center justify-between gap-3 font-mono text-[12px] text-muted">
                            <span>{p.venue}</span>
                            <span className={p.status === 'Accepted' ? 'text-warn' : 'text-accent'}>{p.status}</span>
                        </div>
                        <p className="mt-2 text-[16px] leading-snug">{p.title}</p>
                    </li>
                ))}
            </Frame>
        </Block>
    )
}

export function Stack() {
    return (
        <Block id="stack" title="Stack">
            <Frame className="reveal py-5 overflow-hidden">
                {[ABOUT.stack, [...ABOUT.stack].reverse()].map((row, r) => (
                    <div key={r} className={`flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${r ? 'mt-2.5' : ''}`}>
                        <ul className="marquee flex shrink-0 gap-2 pr-2" style={r ? { animationDirection: 'reverse', animationDuration: '46s' } : undefined}>
                            {[...row, ...row].map((s, i) => (
                                <li key={i} aria-hidden={i >= row.length} className="shrink-0 rounded-md border border-line bg-raised/60 px-2.5 py-1 font-mono text-[12.5px] text-fg/85 transition-colors hover:border-accent/50 hover:text-accent">{s}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Frame>
        </Block>
    )
}

export function Freelance() {
    return (
        <Block id="freelance" title="Freelance">
            <p className="reveal -mt-1 mb-4 px-0.5 text-[14.5px] text-muted">{FREELANCE.line}</p>
            <ul className="flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {FREELANCE.items.map((f) => (
                    <li key={f.name} className="reveal snap-start shrink-0 w-[15rem]">
                        <a href={f.link} target="_blank" rel="noopener noreferrer" className="group frame block p-2">
                            <div className="rounded-[10px] overflow-hidden border border-line bg-raised">
                                <img src={f.image} alt={`Screenshot of ${f.name}`} loading="lazy" className="w-full aspect-[16/10] object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]" />
                            </div>
                            <div className="px-1.5 pt-2.5 pb-1">
                                <p className="text-[15px] truncate group-hover:text-accent transition-colors">{f.name} <span className="text-muted" aria-hidden="true">↗</span></p>
                                <p className="text-[13px] text-muted">{f.note}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            <MoreLink href="/freelance">See all freelance work</MoreLink>
        </Block>
    )
}
