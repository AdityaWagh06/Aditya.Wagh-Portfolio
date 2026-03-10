import { useState } from 'react'
import { SKILLS } from '../content'

export default function Services() {
    const [openSkill, setOpenSkill] = useState(null)

    const activeItem = SKILLS.items.find(s => s.name === openSkill)

    return (
        <div id="skills" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I do</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My Skills</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{SKILLS.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 my-10">
                {SKILLS.items.map((skill) => (
                    <div
                        key={skill.name}
                        onClick={() => setOpenSkill(openSkill === skill.name ? null : skill.name)}
                        className={`border rounded-lg px-6 sm:px-8 py-8 sm:py-12 cursor-pointer hover:-translate-y-1 duration-500 select-none
                            ${openSkill === skill.name
                                ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/20 shadow-lg'
                                : 'border-gray-300 dark:border-white/30 hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white'
                            }`}
                    >
                        <img src={skill.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{skill.description}</p>
                        <span className={`flex items-center gap-1 text-sm mt-5 font-medium transition-colors ${openSkill === skill.name ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
                            {openSkill === skill.name ? 'Close ↑' : 'View skills →'}
                        </span>
                    </div>
                ))}
            </div>

            {/* Expanded skill detail panel */}
            {activeItem && (
                <div className="mb-10 rounded-2xl border border-purple-200 dark:border-purple-800/50 bg-purple-50/60 dark:bg-purple-900/10 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-5">
                        <img src={activeItem.icon} alt="" className="w-8" />
                        <h3 className="text-lg font-semibold font-Ovo dark:text-white">{activeItem.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {activeItem.skills.map(s => (
                            <span
                                key={s}
                                className="px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-white/10 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 shadow-sm"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
