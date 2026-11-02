import { SITE } from '../content'

export default function Footer({ page = "home", narrow = false }) {
    return (
        <footer className={`mx-auto px-4 pb-10 ${narrow ? "max-w-[46rem]" : "max-w-page sm:px-6"}`}>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between border-t border-line pt-6 text-sm text-muted">
                <p>© {new Date().getFullYear()} {SITE.name}</p>
                {page === 'home' ? (
                    <a href="/freelance" className="hover:text-fg">Need a website? See my freelance work →</a>
                ) : (
                    <a href="/" className="hover:text-fg">← Back to the AI portfolio</a>
                )}
            </div>
        </footer>
    )
}
