import { Frame } from './Block'
import { CountUp } from './motion'
import { useGitHubStats } from './github'

// Real numbers only, counted up when they scroll into view.
// The GitHub ones are live from the GitHub API.
export default function Highlights() {
    const gh = useGitHubStats()
    const items = [
        { to: gh.total, label: 'GitHub contributions' },
        { to: gh.streak, label: `day streak, longest ${gh.longest}` },
        { to: gh.active, label: 'repos active this year' },
        { to: gh.prs, label: 'pull requests to open source' },
        { to: 3, label: 'papers in IEEE Xplore' },
        { to: 8.42, decimals: 2, label: 'CGPA, B.Tech' },
    ]
    return (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((it, i) => (
                <Frame key={i} className="reveal px-4 py-4 group" style={{ '--d': `${(i % 3) * 70}ms` }}>
                    <p className="pixel text-[1.9rem] sm:text-[2.1rem] leading-none text-accent"><CountUp to={it.to} decimals={it.decimals} /></p>
                    <p className="mt-2 text-[12.5px] text-muted leading-snug">{it.label}</p>
                </Frame>
            ))}
        </div>
    )
}
