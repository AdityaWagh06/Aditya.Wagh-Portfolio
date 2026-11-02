import { SITE } from '../../content'
import { Frame } from './Block'

const GROUPS = [
    ['Navigate', [['Home', '#top'], ['Projects', '#projects'], ['Experience', '#experience']]],
    ['Explore', [['Papers', '#papers'], ['Freelance', '/freelance'], ['Résumé', SITE.resume]]],
    ['Social', [['X', SITE.x], ['LinkedIn', SITE.linkedin]]],
    ['Work', [['GitHub', SITE.github], ['OpenWave India', 'https://github.com/OpenWave-India']]],
    ['Writing', [['Medium', SITE.medium]]],
]

export default function HomeFooter() {
    return (
        <footer className="mx-auto max-w-[46rem] px-4 pb-10 mt-16">
            <Frame className="p-6 sm:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-7">
                    {GROUPS.map(([title, links]) => (
                        <div key={title}>
                            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">{title}</p>
                            <ul className="mt-3 space-y-2 text-[14px]">
                                {links.map(([label, href]) => {
                                    const ext = /^https?:/.test(href)
                                    return (
                                        <li key={label}>
                                            <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...(label === 'Résumé' ? { download: 'Aditya_Wagh_Resume.pdf' } : {})} className="text-fg/80 hover:text-fg transition-colors">{label}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="mt-9 pt-5 border-t border-dashed border-line text-center font-mono text-[11.5px] text-muted">
                    © {new Date().getFullYear()} <span className="pixel text-fg">ADITYA</span>. All rights reserved.
                </p>
            </Frame>
        </footer>
    )
}
