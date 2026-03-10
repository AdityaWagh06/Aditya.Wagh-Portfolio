import { useState } from 'react'
import { SKILLS } from '../content'

export default function Services() {
    const [flipped, setFlipped] = useState(null)

    return (
        <div id="skills" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I do</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My Skills</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{SKILLS.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 my-10">
                {SKILLS.items.map((skill) => (
                    <div
                        key={skill.name}
                        className="min-h-[220px] sm:min-h-[260px] cursor-pointer select-none"
                        style={{ perspective: '1000px' }}
                        onClick={() => setFlipped(flipped === skill.name ? null : skill.name)}
                    >
                        <div
                            className="relative w-full h-full"
                            style={{
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s ease',
                                transform: flipped === skill.name ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                minHeight: 'inherit',
                            }}
                        >
                            {/* Front */}
                            <div
                                className="absolute inset-0 border border-gray-300 dark:border-white/30 rounded-lg px-6 sm:px-8 py-8 sm:py-10 flex flex-col bg-white dark:bg-[#0d0d0d] hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 duration-300"
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                            >
                                <img src={skill.icon} alt="" className="w-10" />
                                <h3 className="text-lg my-4 text-gray-700 dark:text-white">{skill.name}</h3>
                                <p className="text-sm text-gray-600 leading-5 dark:text-white/80 flex-1">{skill.description}</p>
                                <span className="flex items-center gap-1 text-sm mt-5 font-medium text-gray-400 dark:text-gray-500">
                                    Tap to see skills →
                                </span>
                            </div>

                            {/* Back */}
                            <div
                                className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-900 dark:to-indigo-900 p-5 sm:p-6 flex flex-col"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <img src={skill.icon} alt="" className="w-7 brightness-0 invert" />
                                    <h3 className="text-white font-bold text-sm sm:text-base">{skill.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5 content-start overflow-y-auto flex-1">
                                    {skill.skills.map(s => (
                                        <span
                                            key={s}
                                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-purple-200 text-xs mt-3">Tap to go back ↩</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
