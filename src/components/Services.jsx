import { useState, useEffect } from 'react'
import { SKILLS } from '../content'

export default function Services() {
    const [openSkill, setOpenSkill] = useState(null)
    const [visible, setVisible] = useState(false)

    const activeItem = SKILLS.items.find(s => s.name === openSkill)

    const openDrawer = (name) => {
        setOpenSkill(name)
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    }
    const closeDrawer = () => {
        setVisible(false)
        setTimeout(() => setOpenSkill(null), 350)
    }

    // close on backdrop click or Escape
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') closeDrawer() }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [])

    return (
        <div id="skills" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I do</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My Skills</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{SKILLS.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 my-10">
                {SKILLS.items.map((skill) => (
                    <div
                        key={skill.name}
                        onClick={() => openDrawer(skill.name)}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-6 sm:px-8 py-8 sm:py-10 flex flex-col cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 duration-300 bg-white dark:bg-[#0d0d0d] select-none"
                    >
                        <img src={skill.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80 flex-1">{skill.description}</p>
                        <span className="flex items-center gap-1 text-sm mt-5 font-medium text-gray-400 dark:text-gray-500">
                            Tap to see skills →
                        </span>
                    </div>
                ))}
            </div>

            {/* ── Bottom Drawer ── */}
            {openSkill && (
                <>
                    {/* backdrop */}
                    <div
                        onClick={closeDrawer}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease' }}
                    />
                    {/* drawer panel */}
                    <div
                        className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white dark:bg-[#111] shadow-2xl px-6 sm:px-10 pt-5 pb-10"
                        style={{
                            transform: visible ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'transform 0.35s cubic-bezier(0.32,0.72,0,1)',
                            maxHeight: '70vh',
                            overflowY: 'hidden',
                        }}
                    >
                        {/* drag handle */}
                        <div className="w-10 h-1 bg-gray-300 dark:bg-white/20 rounded-full mx-auto mb-5" />
                        {activeItem && (
                            <>
                                <div className="flex items-center gap-3 mb-6">
                                    <img src={activeItem.icon} alt="" className="w-8" />
                                    <h3 className="text-xl font-bold font-Ovo dark:text-white">{activeItem.name}</h3>
                                    <button
                                        onClick={closeDrawer}
                                        className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-white text-2xl leading-none"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {activeItem.skills.map(s => (
                                        <span
                                            key={s}
                                            className="px-3 py-1.5 rounded-full text-sm font-medium bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
