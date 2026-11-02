import { useEffect, useRef, useState } from 'react'
import { SITE } from '../../content'

import { IconHome, IconCode, IconBriefcase, IconSearch, IconSun, IconMoon } from './Icons'

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

// Top bar for both pages, with a quick menu on Cmd/Ctrl+K and the D key to switch theme.
export default function Topbar({ page = 'home' }) {
    const home = page === 'home'
    const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [sel, setSel] = useState(0)
    const input = useRef(null)

    const toggleTheme = () => {
        const next = !document.documentElement.classList.contains('dark')
        document.documentElement.classList.toggle('dark', next)
        try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* storage blocked */ }
        setDark(next)
    }

    const base = home ? '' : '/'
    const items = [
        { group: 'Go to', label: 'Projects', href: `${base}#projects` },
        { group: 'Go to', label: 'Experience', href: `${base}#experience` },
        { group: 'Go to', label: 'Papers', href: `${base}#papers` },
        { group: 'Go to', label: 'Freelance work', href: '/freelance' },
        { group: 'Go to', label: 'Contact', href: '#contact' },
        { group: 'Links', label: 'GitHub', href: SITE.github, ext: true },
        { group: 'Links', label: 'LinkedIn', href: SITE.linkedin, ext: true },
        { group: 'Links', label: 'X', href: SITE.x, ext: true },
        { group: 'Links', label: 'Medium', href: SITE.medium, ext: true },
        { group: 'Actions', label: 'Download résumé', href: SITE.resume, download: true },
        { group: 'Actions', label: 'Copy email address', run: () => navigator.clipboard?.writeText(SITE.email).catch(() => {}) },
        { group: 'Actions', label: 'Switch theme', hint: 'D', run: toggleTheme },
    ]
    const shown = items.filter((it) => it.label.toLowerCase().includes(query.trim().toLowerCase()))

    useEffect(() => {
        const onKey = (e) => {
            const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((o) => !o); return }
            if (e.key === 'Escape') { setOpen(false); return }
            if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey && e.key.toLowerCase() === 'd') toggleTheme()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    useEffect(() => {
        if (open) { setQuery(''); setSel(0); requestAnimationFrame(() => input.current?.focus()) }
    }, [open])

    const choose = (it) => {
        setOpen(false)
        if (!it) return
        if (it.run) return it.run()
        if (it.download) { const a = document.createElement('a'); a.href = it.href; a.download = 'Aditya_Wagh_Resume.pdf'; a.click(); return }
        if (it.ext) window.open(it.href, '_blank', 'noopener')
        else window.location.href = it.href
    }

    const onListKey = (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, shown.length - 1)) }
        if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)) }
        if (e.key === 'Enter') { e.preventDefault(); choose(shown[sel]) }
    }

    const tab = 'flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-muted hover:text-fg transition-colors'
    const iconBtn = 'grid place-items-center w-8 h-8 rounded-full border border-line text-muted hover:text-fg transition-colors'

    return (
        <>
            <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-xl">
                <nav className="relative mx-auto max-w-[46rem] px-4 h-14 flex items-center justify-between gap-2 text-[14px]">
                    <a href={home ? '#top' : '/'} aria-label="Aditya Wagh, home" className="pixel text-[15px] tracking-tight">aw</a>

                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex items-center px-2 sm:px-3 rounded-b-2xl border-x border-b border-line bg-surface">
                        <a href={home ? '#top' : '/'} className={`${tab} ${home ? 'text-fg' : ''}`}><IconHome className="w-4 h-4" />Home</a>
                        <a href={home ? '#projects' : '/#projects'} className={tab}><IconCode className="w-4 h-4" /><span className="hidden min-[400px]:inline">Projects</span></a>
                        <a href={home ? '/freelance' : '/'} className={`${tab} ${home ? '' : 'text-fg'}`}><IconBriefcase className="w-4 h-4" /><span className="hidden min-[400px]:inline">{home ? 'Freelance' : 'AI work'}</span></a>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <button type="button" onClick={() => setOpen(true)} title={`Search (${isMac ? '⌘' : 'Ctrl'} K)`} aria-label="Open quick menu" className={iconBtn}><IconSearch className="w-4 h-4" /></button>
                        <button type="button" onClick={toggleTheme} title="Switch theme (D)" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className={iconBtn}>
                            {dark ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
                        </button>
                    </div>
                </nav>
            </header>

            {open && (
                <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] px-4 pt-[14vh]" onMouseDown={() => setOpen(false)}>
                    <div role="dialog" aria-label="Quick menu" className="mx-auto max-w-md rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-20px_rgb(0_0_0/0.5)] overflow-hidden" onMouseDown={(e) => e.stopPropagation()}>
                        <input
                            ref={input}
                            value={query}
                            onChange={(e) => { setQuery(e.target.value); setSel(0) }}
                            onKeyDown={onListKey}
                            placeholder="Type a command or search"
                            className="w-full bg-transparent px-4 h-12 border-b border-line text-[15px] placeholder:text-muted focus:outline-none"
                        />
                        <ul className="max-h-[50vh] overflow-y-auto p-1.5 text-[14px]">
                            {shown.length === 0 && <li className="px-3 py-6 text-center text-muted">No results</li>}
                            {shown.map((it, i) => (
                                <li key={it.label}>
                                    {(i === 0 || shown[i - 1].group !== it.group) && <p className="px-3 pt-2.5 pb-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">{it.group}</p>}
                                    <button type="button" onMouseEnter={() => setSel(i)} onClick={() => choose(it)} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left ${i === sel ? 'bg-raised text-fg' : 'text-fg/85'}`}>
                                        <span>{it.label}</span>
                                        <span className="font-mono text-[11px] text-muted">{it.hint || (it.ext ? '↗' : '')}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
