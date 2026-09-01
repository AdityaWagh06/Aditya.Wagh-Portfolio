import { SITE } from '../content'

export default function Footer() {
    return (
        <div className="mt-12 sm:mt-20">
            <div className="text-center">

            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[5%] sm:mx-[10%] mt-8 sm:mt-12 py-3">
                <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
                <ul className="flex items-center gap-6 sm:gap-10 justify-center mt-4 sm:mt-0 text-sm">
                    <li><a target='_blank' rel='noopener noreferrer' href={SITE.github}>GitHub</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href={SITE.linkedin}>LinkedIn</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href={SITE.instagram}>Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}
