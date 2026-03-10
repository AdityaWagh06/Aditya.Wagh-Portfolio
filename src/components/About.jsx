import { useEffect, useRef } from 'react'
import { ABOUT } from '../content'

export default function About() {
    const photos = ABOUT.photos

    const photoStripRef = useRef();
    const lastScrollY = useRef(0);
    const offsetX = useRef(-280);
    // 7 images × 160px + 6 gaps × 12px = 1192px, +12px trailing gap = 1204px per cycle
    const CYCLE = 1204;

    useEffect(() => {
        const strip = photoStripRef.current;
        if (!strip) return;
        lastScrollY.current = window.scrollY;
        strip.style.transition = 'none';
        strip.style.transform = `translateX(${offsetX.current}px)`;

        const onScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;
            offsetX.current -= delta * 1.8;

            // seamless infinite wrap — keep offsetX in [-CYCLE, 0)
            if (offsetX.current < -CYCLE) {
                offsetX.current += CYCLE;
                strip.style.transition = 'none';
                strip.style.transform = `translateX(${offsetX.current}px)`;
                strip.getBoundingClientRect(); // force reflow
            } else if (offsetX.current >= 0) {
                offsetX.current -= CYCLE;
                strip.style.transition = 'none';
                strip.style.transform = `translateX(${offsetX.current}px)`;
                strip.getBoundingClientRect(); // force reflow
            }

            strip.style.transition = 'transform 0.12s cubic-bezier(0.25,0.1,0.25,1)';
            strip.style.transform = `translateX(${offsetX.current}px)`;
            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const tools = ABOUT.tools
    const data   = ABOUT.stats

    return (
        <div id="about" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20">
                {/* ── Scroll-driven Photo Strip ── */}
                <div className="relative overflow-hidden rounded-3xl h-64 sm:h-72 w-full max-w-xs mx-auto lg:mx-0 lg:w-72 flex-shrink-0">
                    {/* left fade */}
                    <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />
                    {/* right fade */}
                    <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-darkTheme to-transparent z-10 pointer-events-none" />
                    {/* scrolling strip — will-change for GPU layer */}
                    <div
                        ref={photoStripRef}
                        className="flex h-full items-center gap-3 pr-3 will-change-transform"
                    >
                        {[...photos, ...photos, ...photos].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt=""
                                className="h-56 sm:h-64 w-40 sm:w-44 object-cover rounded-2xl flex-shrink-0 shadow-md"
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-6 sm:mb-10 max-w-2xl font-Ovo text-sm sm:text-base">{ABOUT.bio}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li key={item.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
