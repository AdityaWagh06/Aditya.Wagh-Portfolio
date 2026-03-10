import { useState } from 'react'
import { WORK } from '../content'

export default function Work() {
    const [activeCard, setActiveCard] = useState(null)

    const work = WORK.projects

    return (
        <div id="work" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{WORK.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black">
                {work.map((item) => (
                    <div
                        key={item.name}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${item.icon})` }}
                        onClick={() => setActiveCard(activeCard === item.name ? null : item.name)}
                    >
                        <div className={`bg-white w-10/12 rounded-md absolute left-1/2 -translate-x-1/2 py-2.5 sm:py-3 px-3 sm:px-5 flex items-center justify-between duration-500 ${activeCard === item.name ? 'bottom-7' : 'bottom-4 sm:bottom-5 group-hover:bottom-7'}`}>
                            <div className="min-w-0 flex-1 mr-2">
                                <h2 className="font-semibold text-sm sm:text-base truncate">{item.name}</h2>
                                <p className="text-xs sm:text-sm text-gray-700 truncate">{item.description}</p>
                            </div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <a href={WORK.githubUrl} target="_blank" rel="noopener noreferrer" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-6 sm:px-8 mx-auto my-10 sm:my-20 duration-300 dark:text-white text-sm sm:text-base">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>
        </div>
    )
}
