import { FREELANCE } from '../content'
import Contact from './Contact'

export default function FreelancePage() {
    return (
        <>
            <header className="relative">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[28rem] dot-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="relative mx-auto max-w-page px-4 sm:px-6 pt-12 sm:pt-20 pb-10">
                    <p className="reveal label">Freelance</p>
                    <h1 className="reveal mt-3 text-5xl sm:text-7xl font-semibold tracking-[-0.045em] leading-[0.95] max-w-3xl" style={{ '--d': '60ms' }}>
                        Websites for businesses.
                    </h1>
                    <p className="reveal mt-6 max-w-xl text-lg sm:text-xl text-muted leading-snug" style={{ '--d': '120ms' }}>{FREELANCE.line}</p>
                    <ul className="reveal mt-8 flex flex-wrap gap-2" style={{ '--d': '180ms' }}>
                        {FREELANCE.services.map((s) => <li key={s} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm">{s}</li>)}
                    </ul>
                </div>
            </header>

            <section id="work" className="mx-auto max-w-page px-4 sm:px-6 pb-8">
                <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {FREELANCE.items.map((f, i) => (
                        <li key={f.name} className="reveal" style={{ '--d': `${(i % 3) * 70}ms` }}>
                            <a href={f.link} target="_blank" rel="noopener noreferrer" className="group tile block overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-fg/25 hover:shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)]">
                                <div className="m-2 rounded-[14px] overflow-hidden border border-line bg-raised">
                                    <img src={f.image} alt={`Screenshot of ${f.name}`} loading="lazy" className="w-full aspect-[16/10] object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]" />
                                </div>
                                <div className="px-5 pt-3 pb-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <h2 className="font-semibold tracking-[-0.01em] group-hover:text-accent transition-colors">{f.name}</h2>
                                        <span aria-hidden="true" className="text-muted group-hover:text-accent">↗</span>
                                    </div>
                                    <p className="text-sm text-muted mt-0.5">{f.note}</p>
                                    <p className="mt-3 font-mono text-[11px] text-muted">{f.tech}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <Contact title={FREELANCE.cta} text="Tell me about your business and what the site needs to do." />
        </>
    )
}
