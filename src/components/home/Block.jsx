import { Scramble } from './motion'

// Dashed box with corner crosses, the basic container of the home page.
export function Frame({ as = 'div', className = '', children, ...rest }) {
    const Tag = as
    return (
        <Tag className={`frame ${className}`} {...rest}>
            <span className="x tl" aria-hidden="true" /><span className="x tr" aria-hidden="true" />
            <span className="x bl" aria-hidden="true" /><span className="x br" aria-hidden="true" />
            {children}
        </Tag>
    )
}

// A home page section: large light heading, then content.
export default function Block({ id, title, aside, children }) {
    return (
        <section id={id} className="mt-14 sm:mt-16 scroll-mt-20">
            <div className="reveal flex items-end justify-between gap-4 mb-4 px-0.5">
                <h2 className="text-[1.9rem] sm:text-[2.1rem] font-light tracking-[-0.02em] leading-none"><Scramble text={title} /></h2>
                {aside}
            </div>
            {children}
        </section>
    )
}

// "See all" pill centred between two dashed rules.
export function MoreLink({ href, onClick, children }) {
    const Tag = href ? 'a' : 'button'
    return (
        <div className="reveal mt-6 flex items-center gap-4">
            <span className="flex-1 border-t border-dashed border-line" aria-hidden="true" />
            <Tag href={href} onClick={onClick} type={href ? undefined : 'button'} className="inline-flex items-center gap-1.5 rounded-[9px] border border-line bg-raised/70 px-3.5 py-1.5 text-[13px] text-muted hover:text-fg transition-colors">
                {children}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
            </Tag>
            <span className="flex-1 border-t border-dashed border-line" aria-hidden="true" />
        </div>
    )
}

// Renders "**bold**" segments inside a plain string.
export function Rich({ text }) {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="font-semibold text-fg">{part.slice(2, -2)}</strong> : part,
    )
}
