import { useEffect, useState } from 'react'
import { SITE } from '../../content'

export const GH_USER = SITE.github.split('/').pop()

// Last known numbers, shown until live data arrives (or if it can't load).
// Contributions and streak: from Aditya's GitHub streak stats on 2 Nov 2026
// (1,601 since 23 Jul 2024, current and longest streak 23 days, 10 Oct to 1 Nov).
// Repos and pull requests: from the GitHub search API on the same day.
export const GH_SNAPSHOT = { total: 1601, streak: 23, longest: 23, active: 27, prs: 7 }

const DAY = 864e5
const iso = (t) => new Date(t).toISOString().slice(0, 10)

// Every day's contribution count, from the public github-contributions-api.jogruber.de
// service, which reads the same calendar as the GitHub profile. Fetched once per page.
let calendar
const loadCalendar = () => (calendar ??= fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=all`)
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((d) => {
        const today = iso(Date.now())
        const days = (d.contributions || []).filter((c) => c.date <= today).sort((a, b) => a.date.localeCompare(b.date))
        if (!days.length) throw new Error('empty')
        return days
    }))

function summarise(days) {
    const total = days.reduce((a, c) => a + c.count, 0)
    let longest = 0, run = 0
    for (const c of days) { run = c.count > 0 ? run + 1 : 0; longest = Math.max(longest, run) }
    // Current streak: today counts if it has activity; otherwise start from yesterday.
    let i = days.length - 1
    if (days[i].count === 0) i--
    let streak = 0
    while (i >= 0 && days[i].count > 0) { streak++; i-- }
    return { total, streak, longest }
}

// The last year of days, for the activity grid. null until loaded or if it fails.
export function useCalendar() {
    const [days, setDays] = useState(null)
    useEffect(() => {
        let alive = true
        loadCalendar()
            .then((all) => { const from = iso(Date.now() - 364 * DAY); if (alive) setDays(all.filter((c) => c.date >= from)) })
            .catch(() => {})
        return () => { alive = false }
    }, [])
    return days
}

const count = (q, kind) =>
    fetch(`https://api.github.com/search/${kind}?q=${encodeURIComponent(q)}&per_page=1`)
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((d) => d.total_count)

export function useGitHubStats() {
    const [stats, setStats] = useState(GH_SNAPSHOT)
    useEffect(() => {
        let alive = true
        const merge = (part) => { if (alive) setStats((s) => ({ ...s, ...part })) }
        loadCalendar().then((days) => merge(summarise(days))).catch(() => {})
        Promise.all([
            count(`user:${GH_USER} pushed:>${iso(Date.now() - 365 * DAY)}`, 'repositories'),
            count(`type:pr author:${GH_USER} -user:${GH_USER}`, 'issues'),
        ]).then(([active, prs]) => merge({ active, prs })).catch(() => {})
        return () => { alive = false }
    }, [])
    return stats
}
