import { useEffect, useRef } from 'react'
import { SITE, NAV_LINKS } from '../content'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const applyTheme = (theme) => {
        const root = document.documentElement;
        const body = document.body;

        root.classList.toggle('dark', theme === 'dark');

        body.classList.toggle('bg-black', theme === 'dark');
        body.classList.toggle('text-white', theme === 'dark');
        body.classList.toggle('bg-white', theme === 'light');
        body.classList.toggle('text-black', theme === 'light');

        localStorage.theme = theme;
    }

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const toggleTheme = () => {
        applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
    }

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            }
        };

        window.addEventListener('scroll', handleScroll);

        applyTheme(localStorage.theme === 'light' ? 'light' : 'dark');

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">

                <a href="#top" className="cursor-pointer mr-4 sm:mr-14 text-xl sm:text-2xl font-bold font-Ovo dark:text-white">
                    {SITE.logoText}
                </a>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href={link.href}>{link.label}</a></li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme}>
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30">
                        Contact
                        <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                        <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>
                </div>

                {/* Mobile menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}><a href={link.href} onClick={closeMenu}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
