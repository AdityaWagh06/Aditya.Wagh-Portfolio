import { useEffect, useState } from 'react'
import { PROJECTS, PROJECT_GROUPS, SITE, TERMINAL } from '../../content'
import Block, { MoreLink } from './Block'
import ProjectVisual from '../ProjectVisual'
import { IconBranch, IconGlobe, IconStar } from './Icons'

// A big, numbered index of projects. Names first; open a row to see a
// picture of what it does and the links. Filter by kind of work.

function useRepo(link, on) {
    const [repo, setRepo] = useState(null)
    useEffect(() => {
        const m = link?.match(/github\.com\/([^/]+\/[^/#?]+)/)
        if (!m || !on || repo) return
        let alive = true
        fetch(`https://api.github.com/repos/${m[1]}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => { if (alive && d) setRepo(d) })
            .catch(() => {})
        return () => { alive = false }
    }, [link, on, repo])
    return repo
}

const ROWS = TERMINAL.lines.filter((l) => l.t === 'row').slice(0, 4)
const TONE = { REGRESSED: ['pass → fail', 'text-[#ff8a8a]'], FIXED: ['fail → pass', 'text-[#6fdca2]'], CHANGED: ['changed', 'text-[#f3c470]'] }

// ModelDiff's picture: a short report that fills in line by line.
function MiniRun() {
    return (
        <div className="seq h-full rounded-[12px] bg-[#0b0c10] text-white p-4 font-mono text-[11px] sm:text-[11.5px] flex flex-col justify-center gap-1.5">
            <p style={{ '--i': 0 }} className="text-white/45 truncate">baseline → candidate</p>
            {ROWS.map((r, i) => (
                <p key={r.name} style={{ '--i': i + 1 }} className="flex justify-between gap-3">
                    <span className="truncate text-white/85">{r.name}</span>
                    <span className={`shrink-0 ${TONE[r.status][1]}`}>{TONE[r.status][0]}</span>
                </p>
            ))}
        </div>
    )
}

const label = (id) => PROJECT_GROUPS.find((g) => g.id === id)?.label

function Row({ p, n, open, dim, onToggle, onEnter }) {
    const repo = useRepo(p.link, open)
    const id = `proj-${n}`
    return (
        <li onMouseEnter={onEnter} className={`border-b border-dashed border-line transition-opacity duration-300 ${dim ? 'sm:opacity-40' : ''}`}>
            <button
                type="button" onClick={onToggle} aria-expanded={open} aria-controls={id}
                className="group w-full flex items-baseline gap-3 sm:gap-5 py-4 sm:py-5 text-left"
            >
                <span className={`pixel text-[11px] w-6 shrink-0 transition-colors ${open ? 'text-accent' : 'text-muted/60'}`}>{String(n).padStart(2, '0')}</span>
                <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2.5">
                        <span className={`text-[1.55rem] sm:text-[2.1rem] font-light tracking-[-0.025em] leading-none transition-transform duration-300 group-hover:translate-x-1 ${open ? 'text-fg' : 'text-fg/85'}`}>{p.name}</span>
                        {n === 1 && <span className="rounded-md bg-accent/15 px-1.5 py-px font-mono text-[10.5px] text-accent">Lead</span>}
                        {p.status && <span className="rounded-md bg-warn/15 px-1.5 py-px font-mono text-[10.5px] text-warn whitespace-nowrap">{p.status}</span>}
                    </span>
                    <span className="mt-1.5 block text-[14px] text-muted leading-snug">{p.short}</span>
                </span>
                <span className="hidden sm:block shrink-0 font-mono text-[11px] text-muted/70">{label(p.group)}</span>
                <span className={`shrink-0 grid place-items-center w-7 h-7 rounded-md border border-line text-muted transition-all duration-300 group-hover:text-fg ${open ? 'border-accent/50 text-accent' : ''}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}><path d="M12 5v14M5 12h14" /></svg>
                </span>
            </button>

            <div id={id} className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="pb-6 sm:pl-11 grid gap-4 sm:grid-cols-[1.2fr_1fr] sm:items-end">
                        <div className="h-44">{open && (n === 1 ? <MiniRun /> : <ProjectVisual kind={p.visual || p.panel} />)}</div>
                        <div>
                            <p className="font-mono text-[11.5px] text-muted">{p.tags.join(' · ')}</p>
                            {repo && (
                                <p className="mt-2 flex items-center gap-1.5 font-mono text-[12px] text-muted">
                                    <IconStar className="w-3.5 h-3.5 text-warn" />{repo.stargazers_count} {repo.stargazers_count === 1 ? 'star' : 'stars'}{repo.language ? ` · ${repo.language}` : ''}
                                </p>
                            )}
                            <div className="mt-4 flex gap-2">
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-[9px] bg-fg text-bg px-3 py-1.5 text-[13px] hover:bg-accent hover:text-black transition-colors">
                                    <IconBranch className="w-3.5 h-3.5" />Code
                                </a>
                                {repo?.homepage && (
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-[9px] border border-line px-3 py-1.5 text-[13px] text-muted hover:text-fg transition-colors">
                                        <IconGlobe className="w-3.5 h-3.5" />Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default function ProjectList() {
    const [group, setGroup] = useState('all')
    const [open, setOpen] = useState('ModelDiff')
    const [hover, setHover] = useState(null)
    const list = PROJECTS.map((p, i) => ({ p, n: i + 1 })).filter(({ p }) => group === 'all' || p.group === group)

    const filters = [{ id: 'all', label: 'All' }, ...PROJECT_GROUPS]
    const count = (id) => (id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.group === id).length)

    return (
        <Block id="projects" title="Projects">
            <div className="reveal -mx-1 px-1 flex gap-1.5 overflow-x-auto no-scrollbar" role="group" aria-label="Filter projects">
                {filters.map((f) => (
                    <button
                        key={f.id} type="button" onClick={() => setGroup(f.id)} aria-pressed={group === f.id}
                        className={`shrink-0 rounded-[9px] border px-3 py-1.5 text-[13px] transition-colors ${group === f.id ? 'border-fg bg-fg text-bg' : 'border-line text-muted hover:text-fg'}`}
                    >
                        {f.label} <span className="font-mono text-[11px] opacity-60">{count(f.id)}</span>
                    </button>
                ))}
            </div>

            <ul className="reveal mt-3 border-t border-dashed border-line" onMouseLeave={() => setHover(null)}>
                {list.map(({ p, n }) => (
                        <Row
                            key={p.name} p={p} n={n} onEnter={() => setHover(p.name)}
                            open={open === p.name}
                            dim={hover !== null && hover !== p.name && open !== p.name}
                            onToggle={() => setOpen(open === p.name ? null : p.name)}
                        />
                ))}
            </ul>
            <MoreLink href={SITE.github}>All repositories on GitHub</MoreLink>
        </Block>
    )
}
