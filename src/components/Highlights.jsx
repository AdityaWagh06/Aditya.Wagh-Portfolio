import { useEffect, useMemo, useState } from 'react'
import { HIGHLIGHTS } from '../content'

function formatTimeAgo(isoDate) {
    const ts = new Date(isoDate).getTime()
    if (Number.isNaN(ts)) return 'Recently'

    const minutes = Math.max(0, Math.floor((Date.now() - ts) / 60000))
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes} min${minutes === 1 ? '' : 's'} ago`

    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hr${hours === 1 ? '' : 's'} ago`

    const days = Math.floor(hours / 24)
    return `${days} day${days === 1 ? '' : 's'} ago`
}

export default function Highlights() {
    const publications = Array.isArray(HIGHLIGHTS?.publications) ? HIGHLIGHTS.publications : []
    const achievements = Array.isArray(HIGHLIGHTS?.achievements) ? HIGHLIGHTS.achievements : []

    const [activeAchievement, setActiveAchievement] = useState(null)
    const [github, setGithub] = useState({
        loading: true,
        contributions: HIGHLIGHTS.github.fallbackContributions,
        commits: HIGHLIGHTS.github.fallbackCommits,
        status: HIGHLIGHTS.github.fallbackStatus,
    })

    const username = useMemo(() => {
        const url = HIGHLIGHTS.github.profileUrl || ''
        return url.split('/').filter(Boolean).pop() || 'AdityaWagh06'
    }, [])

    useEffect(() => {
        let active = true

        const loadGithubStats = async () => {
            try {
                const eventCalls = [1, 2, 3].map((page) =>
                    fetch(`https://api.github.com/users/${username}/events/public?per_page=100&page=${page}`)
                        .then((res) => (res.ok ? res.json() : []))
                        .catch(() => [])
                )
                const batches = await Promise.all(eventCalls)
                const events = batches.flat()

                if (events.length === 0) throw new Error('No GitHub events returned')

                const days365 = 365 * 24 * 60 * 60 * 1000
                const cutoff = Date.now() - days365
                const contributionEvents = events.filter((event) => {
                    const isRecent = new Date(event.created_at).getTime() >= cutoff
                    const trackedTypes = ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'PullRequestReviewEvent', 'CreateEvent']
                    return isRecent && trackedTypes.includes(event.type)
                })

                const days180 = 180 * 24 * 60 * 60 * 1000
                const commitsCutoff = Date.now() - days180
                const recentPushEvents = events.filter(
                    (event) => event.type === 'PushEvent' && new Date(event.created_at).getTime() >= commitsCutoff
                )
                const commitTotal = recentPushEvents.reduce((sum, event) => {
                    const count = Number(event.payload?.size || 0)
                    return sum + count
                }, 0)

                let status = HIGHLIGHTS.github.fallbackStatus
                if (recentPushEvents.length > 0) {
                    const latestPush = recentPushEvents[0]
                    const pushAgo = formatTimeAgo(latestPush.created_at)
                    const pushRepo = latestPush.repo?.name || 'repository'
                    status = `${pushAgo} · Last push to ${pushRepo}`
                }

                try {
                    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=1`)
                    if (reposRes.ok) {
                        const repos = await reposRes.json()
                        const latestRepo = repos[0]
                        if (latestRepo?.full_name) {
                            const commitRes = await fetch(`https://api.github.com/repos/${latestRepo.full_name}/commits?per_page=1`)
                            if (commitRes.ok) {
                                const [latestCommit] = await commitRes.json()
                                if (latestCommit?.commit) {
                                    const commitDate = latestCommit.commit.author?.date || Date.now()
                                    const timeAgo = formatTimeAgo(commitDate)
                                    const message = (latestCommit.commit.message || 'Recent commit').split('\n')[0]
                                    status = `${timeAgo} · ${latestRepo.name}: ${message}`
                                }
                            }
                        }
                    }
                } catch {
                    // Keep fallback status when commit details cannot be loaded.
                }

                const commitsDisplay = commitTotal > 0 ? `${commitTotal} (180d)` : HIGHLIGHTS.github.fallbackCommits

                if (active) {
                    setGithub({
                        loading: false,
                        contributions: `${contributionEvents.length}+ (365d)`,
                        commits: commitsDisplay,
                        status,
                    })
                }
            } catch {
                if (active) {
                    setGithub((prev) => ({ ...prev, loading: false }))
                }
            }
        }

        loadGithubStats()
        return () => { active = false }
    }, [username])

    return (
        <div id="highlights" className="w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Beyond the code</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Achievements</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">
                {HIGHLIGHTS.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 my-10">
                <div className="md:col-span-7 rounded-3xl border border-gray-200/80 dark:border-white/10 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef6ff] dark:from-[#0f1623] dark:via-[#101a2a] dark:to-[#0a1422] p-5 sm:p-6 relative overflow-hidden shadow-[0_12px_40px_-20px_rgba(59,130,246,0.5)]">
                    <div className="absolute -top-16 right-6 w-40 h-40 bg-sky-300/25 dark:bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-indigo-300/20 dark:bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10 flex items-start justify-between gap-4 flex-wrap">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300">
                                Live from GitHub
                            </span>
                            <h3 className="mt-3 text-2xl sm:text-3xl font-Ovo font-bold text-gray-900 dark:text-white">GitHub Pulse</h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Real activity, recent commits, and momentum.</p>
                        </div>

                        <a
                            href={HIGHLIGHTS.github.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-sky-200 dark:border-sky-400/25 px-3 py-2 text-xs sm:text-sm text-sky-700 dark:text-sky-300 bg-white/70 dark:bg-sky-900/20 hover:-translate-y-0.5 duration-300"
                        >
                            Profile
                            <span>↗</span>
                        </a>
                    </div>

                    <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-[#121d2d]/75 backdrop-blur p-3">
                            <p className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Contributions</p>
                            <p className="mt-1 text-xl font-semibold font-Ovo text-gray-900 dark:text-white">{github.loading ? 'Loading...' : github.contributions}</p>
                        </div>
                        <div className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-[#121d2d]/75 backdrop-blur p-3">
                            <p className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Commits</p>
                            <p className="mt-1 text-xl font-semibold font-Ovo text-gray-900 dark:text-white">{github.loading ? 'Loading...' : github.commits}</p>
                        </div>
                        <div className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-[#121d2d]/75 backdrop-blur p-3 col-span-2 sm:col-span-1">
                            <p className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Current State</p>
                            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{github.loading ? 'Syncing data...' : 'Actively shipping'}</p>
                        </div>
                    </div>

                    <div className="relative z-10 mt-4 rounded-xl border border-dashed border-sky-200 dark:border-sky-400/25 px-3 py-2 bg-white/50 dark:bg-sky-950/20">
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 truncate">{github.status}</p>
                    </div>
                </div>

                <div className="md:col-span-5 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-5 sm:p-6">
                    <h3 className="text-xl font-bold font-Ovo dark:text-white mb-4">Research Papers ({publications.length})</h3>
                    <ul className="space-y-4">
                        {publications.map((pub, idx) => (
                            <li key={pub.title} className="relative pl-5 text-sm text-gray-700 dark:text-gray-300">
                                <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                                {idx !== publications.length - 1 && (
                                    <span className="absolute left-[4px] top-4 w-[2px] h-8 bg-gray-200 dark:bg-white/10" />
                                )}
                                <p className="font-semibold dark:text-white leading-snug">{pub.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{pub.venue} · {pub.footer}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <a
                    href={HIGHLIGHTS.blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group md:col-span-12 rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-r from-amber-50 via-white to-rose-50 dark:from-[#1c1210] dark:via-[#15110f] dark:to-[#1d0f14] p-5 sm:p-6 hover:-translate-y-1 duration-500 cursor-pointer"
                >
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-orange-600 dark:text-orange-400 font-semibold">Blog</p>
                            <h3 className="text-lg sm:text-xl font-bold font-Ovo dark:text-white">{HIGHLIGHTS.blog.title}</h3>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{HIGHLIGHTS.blog.displayUrl}</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{HIGHLIGHTS.blog.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{HIGHLIGHTS.blog.author}</span>
                        <span className="text-xs text-orange-600 dark:text-orange-400 group-hover:underline">Read article →</span>
                    </div>
                </a>

                <div className="md:col-span-12 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold font-Ovo dark:text-white mb-1">Key Achievements</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">Click on an item to view details, certificates, and photos.</p>

                    <ul className="space-y-3">
                        {achievements.map((item, idx) => {
                            const isOpen = activeAchievement === item.id
                            const hasDetails = Boolean(item.details)
                            const docs = Array.isArray(item?.details?.certificates) ? item.details.certificates : []

                            return (
                                <li key={item.id} className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
                                    <button
                                        type="button"
                                        onClick={() => setActiveAchievement(isOpen ? null : item.id)}
                                        className="w-full text-left p-4 sm:p-5 bg-white dark:bg-[#111] hover:bg-gray-50 dark:hover:bg-[#161616] transition"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
                                                {idx + 1}
                                            </span>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">{item.period}</span>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                                {hasDetails && (
                                                    <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">{isOpen ? 'Hide details ↑' : 'View details ↓'}</p>
                                                )}
                                            </div>
                                        </div>
                                    </button>

                                    {hasDetails && isOpen && (
                                        <div className="p-4 sm:p-5 border-t border-gray-200 dark:border-white/10 bg-gradient-to-r from-blue-50/70 via-white to-cyan-50/70 dark:from-[#0e1724] dark:via-[#0f141d] dark:to-[#0f1d25]">
                                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                                <div className="md:col-span-4">
                                                    <img
                                                        src={item.details.photo}
                                                        alt={item.details.photoAlt}
                                                        className="w-full h-48 object-cover rounded-xl border border-gray-200 dark:border-white/10"
                                                    />
                                                </div>
                                                <div className="md:col-span-8">
                                                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Documents</h5>
                                                    <ul className="space-y-2">
                                                        {docs.map((cert) => (
                                                            <li key={cert.name}>
                                                                <a
                                                                    href={cert.file}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300 hover:underline"
                                                                >
                                                                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                                                                    {cert.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
