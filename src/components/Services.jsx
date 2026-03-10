import { SERVICES } from '../content'

export default function Services() {
    const services = SERVICES.items

    return (
        <div id="services" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{SERVICES.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-6 sm:px-8 py-8 sm:py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}
