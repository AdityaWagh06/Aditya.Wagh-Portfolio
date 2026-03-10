import { useState } from 'react'
import { HIGHLIGHTS } from '../content'

export default function Highlights() {
    const [expanded, setExpanded] = useState(null)
    const toggle = (id) => setExpanded(expanded === id ? null : id)

    return (
        <div id="highlights" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Beyond the code</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Highlights</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">
                {HIGHLIGHTS.subtitle}
            </p>

            {/* ───── BENTO GRID ───── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-5 my-10 md:auto-rows-[200px]">

                {/* ── Card 1 — Featured Publication (large, spans 4 cols & 2 rows) ── */}
                <a
                    href={HIGHLIGHTS.featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => { e.preventDefault(); toggle(1); }}
                    className="group sm:col-span-2 md:col-span-4 md:row-span-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-white via-white to-purple-50 dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#1a0a2e] p-3 sm:p-5 md:p-8 flex flex-col justify-between overflow-hidden relative hover:-translate-y-1 duration-500 cursor-pointer"
                >
                    <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-pink-500 text-white mb-4">
                            IEEE Publication · {HIGHLIGHTS.featured.venue}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-Ovo leading-tight dark:text-white">
                            {HIGHLIGHTS.featured.title}
                        </h3>
                        <p className={`mt-3 text-gray-600 dark:text-gray-400 max-w-xl text-sm leading-relaxed ${expanded === 1 ? '' : 'line-clamp-2 md:line-clamp-none'}`}>
                            {HIGHLIGHTS.featured.description}
                        </p>
                    </div>

                    <div className={`flex items-center gap-2 sm:gap-3 mt-4 flex-wrap ${expanded === 1 ? '' : 'hidden md:flex'}`}>
                        {HIGHLIGHTS.featured.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-300">{tag}</span>
                        ))}
                        <span className="hidden sm:inline-block text-xs text-gray-400 dark:text-gray-500 ml-auto group-hover:text-purple-500 transition">
                            Published →
                        </span>
                    </div>
                    <div className="md:hidden mt-2 flex items-center justify-end">
                        <span className="text-[10px] text-purple-500 font-medium">{expanded === 1 ? 'Show less ↑' : 'Read more ↓'}</span>
                    </div>
                </a>

                {/* ── Cards 2 & 3 — smaller publications ── */}
                {HIGHLIGHTS.publications.slice(0, 2).map((pub, i) => {
                    const id = i + 2
                    const styles = [
                        { bg: 'bg-indigo-500/10', icon: 'text-indigo-500', glow: 'bg-gradient-to-tl from-indigo-400/20', pos: '-bottom-6 -right-6', label: 'text-indigo-600 dark:text-indigo-400' },
                        { bg: 'bg-emerald-500/10', icon: 'text-emerald-500', glow: 'bg-gradient-to-br from-emerald-400/20', pos: '-top-6 -left-6', label: 'text-emerald-600 dark:text-emerald-400' },
                    ][i]
                    return (
                        <div key={pub.venue} onClick={() => toggle(id)} className="sm:col-span-1 md:col-span-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-3 sm:p-4 md:p-6 flex flex-col justify-between hover:-translate-y-1 duration-500 relative overflow-hidden cursor-pointer">
                            <div className={`absolute ${styles.pos} w-28 h-28 ${styles.glow} to-transparent rounded-full blur-2xl pointer-events-none`} />
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className={`w-8 h-8 rounded-lg ${styles.bg} flex items-center justify-center`}>
                                        <svg className={`w-4 h-4 ${styles.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <span className={`text-xs font-semibold uppercase tracking-wider ${styles.label}`}>{pub.venue}</span>
                                </div>
                                <h3 className={`font-bold text-lg font-Ovo dark:text-white leading-snug ${expanded === id ? '' : 'line-clamp-2 md:line-clamp-none'}`}>
                                    {pub.title}
                                </h3>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{pub.footer}</p>
                        </div>
                    )
                })}

                {/* ── Card 4 — Blog post ── */}
                <a
                    href={HIGHLIGHTS.blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => { if (window.innerWidth < 768) { e.preventDefault(); toggle(4); } }}
                    className="group sm:col-span-2 md:col-span-3 md:row-span-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] overflow-hidden hover:-translate-y-1 duration-500 cursor-pointer flex flex-col"
                >
                    <div className="bg-gray-100 dark:bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-white/10">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="bg-white dark:bg-[#111] rounded-md px-3 py-1 text-[10px] text-gray-400 dark:text-gray-500 text-center truncate">
                                {HIGHLIGHTS.blog.displayUrl}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between relative">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-orange-500 to-rose-500 text-white mb-4">Blog</span>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-Ovo dark:text-white leading-tight">
                                {HIGHLIGHTS.blog.title}
                            </h3>
                            <p className={`mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed ${expanded === 4 ? '' : 'line-clamp-2 md:line-clamp-none'}`}>
                                {HIGHLIGHTS.blog.description}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 flex items-center justify-center text-white text-[10px] font-bold">A</div>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{HIGHLIGHTS.blog.author}</span>
                            </div>
                            <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-orange-500 transition">Read article →</span>
                        </div>
                    </div>
                </a>

                {/* ── Card 5 — 3rd smaller publication ── */}
                {(() => { const pub = HIGHLIGHTS.publications[2]; return (
                <div onClick={() => toggle(5)} className="sm:col-span-2 md:col-span-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-3 sm:p-4 md:p-6 flex flex-col justify-between hover:-translate-y-1 duration-500 relative overflow-hidden cursor-pointer">
                    <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-tl from-rose-400/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">{pub.venue}</span>
                        </div>
                        <h3 className={`font-bold text-base font-Ovo dark:text-white leading-snug ${expanded === 5 ? '' : 'line-clamp-2 md:line-clamp-none'}`}>
                            {pub.title}
                        </h3>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{pub.footer}</p>
                </div>
                )})()}

                {/* ── Cert cards (certifications[]) ── */}
                {HIGHLIGHTS.certifications.map((cert, i) => {
                    const certStyles = [
                        { glow: 'bg-gradient-to-tl from-green-400/20',   pos: '-bottom-4 -right-4', bg: 'bg-green-500/10',  icon: 'text-green-500',  label: 'text-green-600 dark:text-green-400'   },
                        { glow: 'bg-gradient-to-br from-blue-400/20',    pos: '-top-4 -left-4',    bg: 'bg-blue-500/10',   icon: 'text-blue-500',   label: 'text-blue-600 dark:text-blue-400'     },
                        { glow: 'bg-gradient-to-tl from-violet-400/20',  pos: '-bottom-4 -right-4', bg: 'bg-violet-500/10', icon: 'text-violet-500', label: 'text-violet-600 dark:text-violet-400' },
                        { glow: 'bg-gradient-to-br from-amber-400/20',   pos: '-top-4 -left-4',    bg: 'bg-amber-500/10',  icon: 'text-amber-500',  label: 'text-amber-600 dark:text-amber-400'   },
                    ][i] || { glow: 'bg-gradient-to-tl from-gray-400/20', pos: '-bottom-4 -right-4', bg: 'bg-gray-500/10', icon: 'text-gray-500', label: 'text-gray-600 dark:text-gray-400' }
                    return (
                        <div key={cert.name} className="sm:col-span-1 md:col-span-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-2.5 sm:p-4 md:p-5 flex flex-col justify-between hover:-translate-y-1 duration-500 relative overflow-hidden">
                            <div className={`absolute ${certStyles.pos} w-20 h-20 ${certStyles.glow} to-transparent rounded-full blur-xl pointer-events-none`} />
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={`w-7 h-7 rounded-lg ${certStyles.bg} flex items-center justify-center`}>
                                        <svg className={`w-3.5 h-3.5 ${certStyles.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${certStyles.label}`}>Cert</span>
                                </div>
                                <h3 className="font-bold text-sm font-Ovo dark:text-white leading-snug">{cert.name}</h3>
                            </div>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{cert.issuer} · {cert.date}</p>
                        </div>
                    )
                })}


                {/* ── Combined cert card ── */}
                <div className="sm:col-span-1 md:col-span-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-r from-purple-50 via-white to-pink-50 dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#1a0a1e] p-2.5 sm:p-4 md:p-5 flex flex-col justify-center relative overflow-hidden hover:-translate-y-1 duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" />
                    <div className="relative z-10 space-y-2">
                        {HIGHLIGHTS.combinedCerts.map((cert, i) => (
                            <div key={cert.name}>
                                <div className="flex items-center gap-2">
                                    <svg className={`w-3.5 h-3.5 ${i === 0 ? 'text-purple-500' : 'text-pink-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="text-xs font-bold dark:text-white">{cert.name}</span>
                                </div>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 ml-5">{cert.issuer} · {cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
