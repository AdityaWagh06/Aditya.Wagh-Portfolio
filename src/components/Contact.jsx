import { useState } from 'react'
import { SITE, CONTACT } from '../content'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", SITE.web3formsKey);
        formData.append("from_name", CONTACT.fromName);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setResult(res.message);
            event.target.reset();
        } else {
            setResult(res.message);
        }
    };

    return (
        <div id="contact" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">{CONTACT.subtitle}</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value={CONTACT.formSubject} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="w-full px-3 py-2.5 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30 text-sm sm:text-base" required name="name" />

                    <input type="email" placeholder="Enter your email" className="w-full px-3 py-2.5 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30 text-sm sm:text-base" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2.5 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30 text-sm sm:text-base" required name="message"></textarea>
                <button type='submit' className="py-2.5 px-6 sm:px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover text-sm sm:text-base">
                    Submit now
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className='mt-4 text-center'>{result}</p>
            </form>
        </div>
    )
}
