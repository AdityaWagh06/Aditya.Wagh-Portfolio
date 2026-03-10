import { useState, useRef, useEffect } from 'react'
import { WORK } from '../content'

export default function Work() {
    const [flipped, setFlipped] = useState(null)
    const [showAll, setShowAll] = useState(false)
    const gridRef = useRef(null)

    const visibleProjects = showAll ? WORK.projects : WORK.projects.slice(0, 4)

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

    return (
        <div id="projects" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{WORK.subtitle}</p>

            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
                {visibleProjects.map((item) => (
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
                            {/* Front face */}
                            <div
                                className="absolute inset-0 bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden"
                                style={{
                                    backgroundImage: `url(${item.icon})`,
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

                            {/* Back face */}
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
                                        className="shrink-0 text-xs text-gray-500 dark:text-white/80 hover:text-gray-900 dark:hover:text-white underline underline-offset-2"
                                    >
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {WORK.projects.length > 4 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-6 sm:px-8 mx-auto my-10 sm:my-20 duration-300 dark:text-white text-sm sm:text-base"
                >
                    {showAll ? 'Show less' : 'Show more'}
                    <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                    <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
                </button>
            )}
        </div>
    )
}
