import { HERO, SITE } from '../../content'
import Banner from './Banner'
import { Cycler } from './motion'
import { IconX, IconLinkedIn, IconGitHub, IconMedium } from './Icons'

const LINKS = [['X', SITE.x, IconX], ['LinkedIn', SITE.linkedin, IconLinkedIn], ['GitHub', SITE.github, IconGitHub], ['Medium', SITE.medium, IconMedium]]

// Banner, round photo overlapping it, pixel-type name and icon links.
export default function Profile() {
    return (
        <header>
            <Banner />
            <div className="flex items-end gap-3.5 sm:gap-5 px-2 sm:px-3">
                <img
                    src={SITE.profileImg}
                    alt="Aditya Wagh"
                    className="reveal relative z-10 -mt-16 sm:-mt-20 shrink-0 w-[6.75rem] h-[6.75rem] sm:w-36 sm:h-36 rounded-full object-cover object-[50%_20%] border-[3px] border-bg ring-2 ring-accent/70 bg-raised"
                />
                <div className="reveal flex-1 min-w-0 pb-1.5 sm:pb-3" style={{ '--d': '60ms' }}>
                    <h1 className="pixel text-[1.4rem] sm:text-[2.1rem] leading-none tracking-[0.01em] uppercase">{HERO.title}</h1>
                    <p className="mt-2 font-mono text-[12.5px] sm:text-[13.5px] text-muted"><span className="text-accent">&gt;</span> <Cycler items={HERO.roles} /></p>
                    <p className="mt-2.5 flex items-center flex-wrap gap-y-1">
                        {LINKS.map(([label, href, LinkIcon], i) => { const I = LinkIcon; return (
                            <span key={label} className="flex items-center">
                                {i > 0 && <span className="mx-2 text-muted/50" aria-hidden="true">/</span>}
                                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="text-fg/85 hover:text-accent transition-colors">
                                    <I className="w-[18px] h-[18px]" />
                                </a>
                            </span>
                        ) })}
                    </p>
                </div>
            </div>

            <div className="reveal mt-5 px-1 flex flex-wrap items-center justify-between gap-3" style={{ '--d': '120ms' }}>
                <p className="inline-flex items-center gap-2 text-[13.5px] text-ok">
                    <span className="relative flex w-2 h-2" aria-hidden="true">
                        <span className="ping absolute inset-0 rounded-full bg-ok/70" />
                        <span className="relative w-2 h-2 rounded-full bg-ok" />
                    </span>
                    {HERO.status}
                </p>
                <div className="flex gap-2">
                    <a href={SITE.resume} download="Aditya_Wagh_Resume.pdf" className="btn btn-ghost !py-1.5 !px-3 !text-[13px]">Résumé</a>
                    <a href="#contact" className="btn btn-primary !py-1.5 !px-3 !text-[13px]">Contact</a>
                </div>
            </div>
        </header>
    )
}
