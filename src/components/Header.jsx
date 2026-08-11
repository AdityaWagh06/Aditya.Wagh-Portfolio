import { HEADER } from '../content'

export default function Header() {
    return (
        <div id="top" className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20 pb-10">
            <img src={HEADER.profileImg} alt={HEADER.greeting} className="rounded-full w-24 sm:w-32" />
            <h3 className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo">
                {HEADER.greeting}
                <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-2xl sm:text-5xl lg:text-[66px] font-Ovo leading-tight">{HEADER.headline}</h1>
            <p className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base">{HEADER.bio}</p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
                <a href="#contact"
                    className="px-7 sm:px-9 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 text-sm sm:text-base dark:border-transparent hover:opacity-90 transition">
                    contact me <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="#freelance"
                    className="px-7 sm:px-9 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 text-sm sm:text-base bg-white dark:bg-transparent dark:text-white transition">
                    freelance work <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                </a>

                <a href={HEADER.resume} download
                    className="px-7 sm:px-9 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 text-sm sm:text-base bg-white dark:bg-transparent dark:text-white transition">
                    my resume <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}
