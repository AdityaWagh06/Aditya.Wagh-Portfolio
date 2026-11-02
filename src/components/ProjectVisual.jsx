// Small animated diagrams of what each project does. Illustrations only: no made-up results.
// Parts animate in with .seq / .grow; remount the visual (change its key) to replay.

const Box = ({ children, className = '' }) => (
    <div className={`h-full rounded-[12px] border border-line bg-raised/60 p-4 font-mono text-[11.5px] leading-relaxed overflow-hidden ${className}`}>
        {children}
    </div>
)

const To = ({ i = 0 }) => <span className="text-accent/80 px-1 pulse-soft" style={{ animationDelay: `${i * 200}ms` }} aria-hidden="true">→</span>
const at = (i) => ({ '--i': i })

function DocExtract() {
    return (
        <Box className="flex items-center gap-3">
            <div className="relative w-[38%] shrink-0 rounded-md bg-surface border border-line p-2.5 space-y-1.5 overflow-hidden">
                <p className="text-[10px] text-muted">TAX INVOICE</p>
                {[90, 70, 80, 55].map((w, i) => <span key={w} className="grow-x block h-1.5 rounded bg-line" style={{ width: `${w}%`, '--dl': `${i * 120}ms` }} />)}
                <span className="block h-1.5 w-1/3 ml-auto rounded bg-fg/30" />
                <span className="doc-scan absolute inset-x-0 h-6 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/25 to-transparent border-y border-accent/30" />
            </div>
            <To />
            <div className="seq min-w-0 flex-1">
                <p style={at(0)} className="text-muted">{'{'}</p>
                <p style={at(1)} className="pl-3 truncate"><span className="text-accent">"gstin"</span>: str,</p>
                <p style={at(2)} className="pl-3 truncate"><span className="text-accent">"items"</span>: [...],</p>
                <p style={at(3)} className="pl-3 truncate"><span className="text-accent">"total"</span>: num</p>
                <p style={at(4)} className="text-muted">{'}'}</p>
                <p style={at(6)} className="mt-1 text-ok">✓ GSTIN checksum</p>
            </div>
        </Box>
    )
}

function RagBench() {
    const stages = [['chunks', 'sizes'], ['embeds', 'models'], ['rerank', 'on, off']]
    return (
        <Box className="flex flex-col justify-between">
            <div className="seq flex items-stretch gap-1.5">
                {stages.map(([s, o], i) => (
                    <div key={s} style={at(i * 2)} className="flex items-center gap-1.5 min-w-0 flex-1">
                        <div className="flex-1 min-w-0 rounded-md bg-surface border border-line px-1.5 py-1.5">
                            <p className="truncate text-[10.5px] sm:text-[11px]">{s}</p>
                            <p className="truncate text-[10px] text-muted">{o}</p>
                        </div>
                        {i < stages.length - 1 && <To i={i} />}
                    </div>
                ))}
            </div>
            <div className="mt-3 space-y-1.5" aria-hidden="true">
                {[['config A', 78], ['config B', 62], ['config C', 88]].map(([n, w], i) => (
                    <div key={n} className="flex items-center gap-2">
                        <span className="w-14 shrink-0 text-[10px] text-muted">{n}</span>
                        <span className="grow-x h-1.5 rounded bg-accent/60" style={{ width: `${w}%`, '--dl': `${700 + i * 150}ms` }} />
                    </div>
                ))}
            </div>
        </Box>
    )
}

function NeuroCode() {
    return (
        <Box>
            <div className="seq">
                <p style={at(0)}>module <span className="text-muted">app.py</span></p>
                <div style={at(1)} className="ml-1.5 border-l border-line pl-3">
                    <p className="pt-1">class <span className="text-accent">Indexer</span></p>
                    <div className="seq ml-1.5 border-l border-line pl-3">
                        <p style={at(3)} className="pt-1">def <span className="text-accent">parse()</span></p>
                        <p style={at(4)} className="pt-1">def <span className="text-accent">search()</span></p>
                    </div>
                </div>
                <p style={at(5)} className="ml-1.5 border-l border-line pl-3 pt-1">def <span className="text-accent">main()</span></p>
                <p style={at(7)} className="mt-3 inline-block rounded-md bg-surface border border-line px-2 py-0.5 text-muted">tree-sitter → symbols → index</p>
            </div>
        </Box>
    )
}

function NeuroQuery() {
    return (
        <Box className="flex flex-col justify-center gap-2.5">
            <p className="rounded-md bg-surface border border-line px-2.5 py-1.5 font-sans text-[13px] flex items-center min-w-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 w-3.5 h-3.5 mr-1.5 text-accent pulse-soft" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
                <span className="typed">show orders from last week</span>
            </p>
            <p className="pl-1 text-accent pulse-soft" aria-hidden="true">↓</p>
            <div className="seq">
                <p style={{ '--i': 14 }} className="rounded-md bg-fg text-bg px-2.5 py-1.5 truncate">
                    SELECT * FROM orders WHERE date &gt;= …
                </p>
            </div>
        </Box>
    )
}

function NewsGenie() {
    return (
        <Box className="flex items-center gap-3">
            <div className="w-[42%] shrink-0 space-y-1.5">
                {[100, 92, 96, 88, 94, 70].map((w, i) => <span key={i} className="grow-x block h-1.5 rounded bg-line" style={{ width: `${w}%`, '--dl': `${i * 80}ms` }} />)}
            </div>
            <To />
            <div className="seq flex-1 min-w-0 rounded-md bg-surface border border-line p-2.5">
                <p style={at(4)} className="text-[10px] text-muted">SUMMARY</p>
                <span style={at(5)} className="mt-1.5 block h-1.5 rounded bg-accent/60" />
                <span style={at(6)} className="mt-1.5 block h-1.5 w-3/4 rounded bg-accent/60" />
                <p style={at(8)} className="mt-2 text-[10px] text-muted">for you: tech, AI</p>
            </div>
        </Box>
    )
}

function BlindReader() {
    const bars = [4, 9, 14, 7, 16, 11, 5, 13, 18, 9, 6, 12, 15, 8, 4, 10, 14, 6]
    return (
        <Box className="flex items-center gap-3">
            <div className="relative w-16 h-16 shrink-0 rounded-md border border-line bg-surface grid place-items-center overflow-hidden" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-muted">
                    <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M21 16l-5-5-8 8" />
                </svg>
                <span className="doc-scan absolute inset-x-0 h-4 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
            </div>
            <To />
            <div className="flex-1 min-w-0">
                <p className="font-sans text-[13px] min-w-0"><span className="typed">"A dog on a park bench"</span></p>
                <div className="wave mt-2 flex items-center gap-[3px] h-6" aria-hidden="true">
                    {bars.map((h, i) => <span key={i} className="w-[3px] rounded-full bg-accent/70" style={{ height: `${h + 4}px`, '--i': i }} />)}
                </div>
            </div>
        </Box>
    )
}

function Verdicts() {
    const v = [['PASS', 'bg-ok/10 text-ok'], ['FAIL', 'bg-bad/10 text-bad'], ['BLOCKED', 'bg-warn/10 text-warn'], ['UNKNOWN', 'bg-fg/5 text-muted']]
    return (
        <Box className="flex flex-col justify-between">
            <div className="seq space-y-1">
                <p style={at(0)} className="text-muted">agent: "done, all fixed"</p>
                <p style={at(1)}><span className="text-accent">veriflow</span> → pytest · ruff · build</p>
            </div>
            <div className="seq mt-3 grid grid-cols-2 gap-2">
                {v.map(([t, c], i) => <span key={t} style={at(i + 3)} className={`rounded-lg px-2.5 py-1.5 ${c}`}>{t}</span>)}
            </div>
        </Box>
    )
}

const MAP = { verdicts: Verdicts, docextract: DocExtract, ragbench: RagBench, neurocode: NeuroCode, neuroquery: NeuroQuery, newsgenie: NewsGenie, blindreader: BlindReader }

export default function ProjectVisual({ kind }) {
    const V = MAP[kind]
    return V ? <V /> : null
}
