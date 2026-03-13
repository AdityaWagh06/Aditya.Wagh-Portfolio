import { SKILLS } from '../content'
import { useState, useRef, useEffect } from 'react'

export default function Services() {
    const [openSkill, setOpenSkill] = useState(null)
    const gridRef = useRef(null)

    const toggle = (name) => setOpenSkill(prev => prev === name ? null : name)

    useEffect(() => {
        const handleClick = (e) => {
            if (gridRef.current && !gridRef.current.contains(e.target)) {
                setOpenSkill(null)
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
        <div id="skills" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Skillset</h4>
           
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My Skills</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{SKILLS.subtitle}</p>

            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 my-10">
                {SKILLS.items.map((skill) => {
                    const isOpen = openSkill === skill.name
                    return (
                        <div key={skill.name} className="flex flex-col">
                            {/* Card */}
                            <div
                                onClick={() => toggle(skill.name)}
                                className={`border rounded-lg px-6 sm:px-8 py-8 sm:py-10 flex flex-col cursor-pointer select-none duration-300
                                    ${isOpen
                                        ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-b-none border-b-0'
                                        : 'border-gray-300 dark:border-white/30 hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 bg-white dark:bg-[#0d0d0d]'
                                    }`}
                            >
                                <img src={skill.icon} alt="" className="w-10" />
                                <h3 className="text-lg my-4 text-gray-700 dark:text-white">{skill.name}</h3>
                                <p className="text-sm text-gray-600 leading-5 dark:text-white/80 flex-1">{skill.description}</p>
                                <span className={`flex items-center gap-1 text-sm mt-5 font-medium transition-colors duration-300 ${isOpen ? 'text-purple-600 dark:text-purple-400' : 'text-gray-400 dark:text-gray-500'}`}>
                                    {isOpen ? 'Close ↑' : 'View skills ↓'}
                                </span>
                            </div>

                            {/* Inline drawer — slides out below the card */}
                            <div
                                className="overflow-hidden"
                                style={{
                                    maxHeight: isOpen ? '400px' : '0px',
                                    opacity: isOpen ? 1 : 0,
                                    transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease',
                                }}
                            >
                                <div className="border border-t-0 border-purple-400 dark:border-purple-700 rounded-b-lg bg-purple-50 dark:bg-purple-900/20 px-6 py-5">
                                    <div className="flex flex-wrap gap-2">
                                        {skill.skills.map(s => (
                                            <span
                                                key={s}
                                                className="px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-white/10 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 shadow-sm"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


