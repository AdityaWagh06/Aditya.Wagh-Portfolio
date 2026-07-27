import { useState, useRef, useEffect } from 'react'
import { WORK } from '../content'

export default function Work() {
    const [flipped, setFlipped] = useState(null)
    const [activeTab, setActiveTab] = useState('projects')
    const [showAllProjects, setShowAllProjects] = useState(false)
    const gridRef = useRef(null)

    const activeItems = activeTab === 'projects' ? WORK.projects : (WORK.freelance?.projects || [])
    const visibleItems = activeTab === 'projects' && !showAllProjects ? activeItems.slice(0, 4) : activeItems
    const hasMoreProjects = activeTab === 'projects' && WORK.projects.length > 4

    useEffect(() => {
        const handleClick = (e) => {
            if (gridRef.current && !gridRef.current.contains(e.target)) {
                setFlipped(null)
            }
        }
        document.addEventListener('mousedown', handleClick)
        document.addEventListener('touchstart', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('touchstart', handleClick)
        }
    }, [])

    useEffect(() => {
        setFlipped(null)
        setShowAllProjects(false)
    }, [activeTab])

    return (
        <div id="projects" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo text-sm sm:text-base">{WORK.subtitle}</p>

            <div className="flex items-center justify-center gap-3 mb-10">
                <button
                    onClick={() => setActiveTab('projects')}
                    className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 ${activeTab === 'projects'
                        ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white'
                        : 'bg-transparent text-gray-700 border-gray-300 hover:bg-lightHover dark:text-white dark:border-white/25 dark:hover:bg-darkHover'
                    }`}
                >
                    My projects
                </button>
                <button
                    onClick={() => setActiveTab('freelance')}
                    className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 ${activeTab === 'freelance'
                        ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white'
                        : 'bg-transparent text-gray-700 border-gray-300 hover:bg-lightHover dark:text-white dark:border-white/25 dark:hover:bg-darkHover'
                    }`}
                >
                    Freelance Work
                </button>
            </div>

            {activeTab === 'freelance' && (
                <div className="max-w-6xl mx-auto mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Freelance offering</p>
                        <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                            What I offer for freelance clients
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-6 text-gray-600 dark:text-gray-300">
                            {WORK.freelance?.subtitle}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Freelance services</p>
                        <div className="mt-4 space-y-4">
                            {WORK.freelance?.services?.map((service) => (
                                <div key={service.name} className="rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-black/20">
                                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{service.name}</h4>
                                    <p className="mt-1 text-xs sm:text-sm leading-5 text-gray-600 dark:text-gray-300">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
                {visibleItems.length > 0 ? (
                    visibleItems.map((item) => (
                        <div
                            key={item.name}
                            className="aspect-square cursor-pointer select-none"
                            style={{ perspective: '1000px' }}
                            onClick={() => setFlipped(flipped === item.name ? null : item.name)}
                        >
                            <div
                                className="relative w-full h-full"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transition: 'transform 0.55s cubic-bezier(0.4,0.2,0.2,1)',
                                    transform: flipped === item.name ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                }}
                            >
                                <div
                                    className="absolute inset-0 bg-no-repeat bg-center rounded-lg overflow-hidden"
                                    style={{
                                        backgroundImage: `url(${item.icon})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden',
                                    }}
                                >
                                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-b-lg px-4 py-3">
                                        <h2 className="font-semibold text-sm dark:text-white truncate">{item.name}</h2>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 truncate">{item.description}</p>
                                    </div>
                                    <div className="absolute top-3 right-3 bg-black/40 text-white text-[10px] px-2 py-1 rounded-full">
                                        Tap to flip
                                    </div>
                                </div>

                                <div
                                    className="absolute inset-0 rounded-lg p-5 flex flex-col justify-between
                                               bg-white border border-gray-200
                                               dark:bg-gradient-to-br dark:from-[#1e1b4b] dark:to-[#312e81] dark:border-0"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                    }}
                                >
                                    <div>
                                        <h3 className="font-bold text-sm sm:text-base mb-3 leading-snug text-gray-900 dark:text-white">{item.name}</h3>
                                        <p className="text-gray-600 dark:text-purple-100 text-xs sm:text-sm leading-relaxed line-clamp-5">{item.detailedDescription}</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-2 mt-3">
                                        <div className="flex flex-wrap gap-1">
                                            {item.tech?.slice(0, 3).map(t => (
                                                <span key={t} className="text-[10px] bg-gray-100 dark:bg-white/20 text-gray-700 dark:text-white px-2 py-0.5 rounded-full">{t}</span>
                                            ))}
                                        </div>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm sm:text-base font-semibold bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
                                        >
                                            {item.linkLabel || 'GitHub →'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white/70 p-10 text-center dark:border-white/15 dark:bg-white/5">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Freelance projects coming soon</h3>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            Add your freelance case studies in the content file and they will appear here automatically.
                        </p>
                    </div>
                )}
            </div>

            {hasMoreProjects && (
                <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-6 sm:px-8 mx-auto my-10 sm:my-20 duration-300 dark:text-white text-sm sm:text-base"
                >
                    {showAllProjects ? 'Show less' : 'Show more'}
                    <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                    <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
                </button>
            )}
        </div>
    )
}
