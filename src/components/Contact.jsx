import { useState } from 'react'
import { SITE, CONTACT } from '../content'

const field = 'w-full rounded-[10px] bg-bg border border-line px-3.5 py-2.5 text-[15px] placeholder:text-muted/70 focus:outline-none focus:border-accent transition-colors'

export default function Contact({ narrow = false, title = CONTACT.title, text = CONTACT.text }) {
    const [status, setStatus] = useState('')
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(SITE.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        } catch { /* clipboard blocked; the address is still selectable */ }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setStatus('Sending…')
        const formData = new FormData(event.target)
        formData.append('access_key', SITE.web3formsKey)
        formData.append('from_name', CONTACT.fromName)
        try {
            const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData }).then((r) => r.json())
            if (res.success) {
                setStatus('Sent. I will get back to you soon.')
                event.target.reset()
            } else {
                setStatus("That didn't go through. Please email me instead.")
            }
        } catch {
            setStatus("That didn't go through. Please email me instead.")
        }
    }

    return (
        <section id="contact" className={narrow ? 'mt-16 sm:mt-20 scroll-mt-24' : 'relative mx-auto max-w-page px-4 sm:px-6 py-16 sm:py-24'}>
            <div className={`reveal tile grid gap-10 p-6 sm:p-10 overflow-hidden relative ${narrow ? '' : 'lg:grid-cols-2'}`}>
                <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-60 [mask-image:radial-gradient(circle_at_0%_0%,black,transparent_60%)]" />
                <div className="relative">
                    <p className="label">Contact</p>
                    <h2 className={`mt-2 font-semibold tracking-[-0.04em] leading-[1.02] ${narrow ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-5xl'}`}>{title}</h2>
                    <p className="mt-4 max-w-md text-muted text-lg leading-relaxed">{text}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-2">
                        <a href={`mailto:${SITE.email}`} className="btn btn-primary">{SITE.email}</a>
                        <button type="button" onClick={copy} className="btn btn-ghost">{copied ? 'Copied' : 'Copy'}</button>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                        {[['LinkedIn', SITE.linkedin], ['GitHub', SITE.github], ['X', SITE.x], ['Medium', SITE.medium]].map(([label, href]) => (
                            <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">{label} ↗</a></li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={onSubmit} className="relative space-y-3">
                    <input type="hidden" name="subject" value={CONTACT.formSubject} />
                    <div className="grid gap-3 sm:grid-cols-2">
                        <label className="block">
                            <span className="sr-only">Name</span>
                            <input id="contact-name" type="text" name="name" required autoComplete="name" placeholder="Name" className={field} />
                        </label>
                        <label className="block">
                            <span className="sr-only">Email</span>
                            <input id="contact-email" type="email" name="email" required autoComplete="email" placeholder="Email" className={field} />
                        </label>
                    </div>
                    <label className="block">
                        <span className="sr-only">Message</span>
                        <textarea id="contact-message" name="message" rows="5" required placeholder="What are you working on?" className={`${field} resize-y`} />
                    </label>
                    <button type="submit" className="btn btn-primary w-full sm:w-auto">Send message</button>
                    {status && <p className="text-sm text-muted" role="status">{status}</p>}
                </form>
            </div>
        </section>
    )
}
