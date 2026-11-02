import { useEffect, useRef, useState } from 'react'
import { SITE } from '../../content'
import { reduced } from './hooks'

const LINES = [
    ['$ modeldiff compare baseline.json candidate.json', 'text-white/60'],
    ['ticket-json         pass → fail', 'text-[#ff8a8a]'],
    ['intent-billing      pass → fail', 'text-[#ff8a8a]'],
    ['sentiment-positive  fail → pass', 'text-[#6fdca2]'],
    ['summary-length      output changed', 'text-[#f3c470]'],
    ['9 cases · 4 regressed · 1 fixed', 'text-white/45'],
]
const FULL = LINES.reduce((n, [t]) => n + t.length, 0)

// Live-wallpaper banner. A muted, looping background video is smoothest, but some
// devices refuse to autoplay video (iPhone Low Power Mode, data savers, some
// embedded browsers). If the video hasn't actually started moving within a couple
// of seconds, the same loop is shown as an animated image instead.
function AnimatedBanner() {
    const ref = useRef(null)
    const [fallback, setFallback] = useState(false)

    useEffect(() => {
        const v = ref.current
        if (!v) return
        // React doesn't write the muted attribute, and iOS only autoplays muted video.
        v.muted = true
        v.defaultMuted = true
        v.setAttribute('muted', '')
        v.setAttribute('webkit-playsinline', '')
        const play = () => {
            if (!v.paused || document.visibilityState !== 'visible') return
            v.play().catch(() => setFallback(true))
        }
        play()
        const check = setTimeout(() => { if (v.currentTime < 0.1) setFallback(true) }, 2500)
        v.addEventListener('pause', play)
        document.addEventListener('visibilitychange', play)
        return () => {
            clearTimeout(check)
            v.removeEventListener('pause', play)
            document.removeEventListener('visibilitychange', play)
        }
    }, [])

    const cover = 'absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none'
    return (
        <>
            {fallback ? (
                <img src={SITE.bannerAnimated} alt="" draggable="false" style={{ backgroundImage: `url(${SITE.bannerPoster})` }} className={`${cover} bg-cover bg-top`} />
            ) : (
                <video
                    ref={ref} src={SITE.bannerVideo} poster={SITE.bannerPoster}
                    autoPlay muted loop playsInline preload="auto" controls={false}
                    disablePictureInPicture disableRemotePlayback controlsList="nodownload nofullscreen noremoteplayback"
                    tabIndex={-1} aria-hidden="true" className={`bg-video ${cover}`}
                />
            )}
            {/* Sits over the banner so taps and long-presses never reach it. */}
            <div className="absolute inset-0" aria-hidden="true" onContextMenu={(e) => e.preventDefault()} />
        </>
    )
}

// Banner at the top of the page. Plays SITE.bannerVideo when one is set;
// until then it types out an example ModelDiff run, on a loop.
export default function Banner() {
    const [n, setN] = useState(reduced() ? FULL : 0)

    useEffect(() => {
        if (SITE.bannerVideo || reduced()) return
        const done = n >= FULL
        const id = setTimeout(() => setN(done ? 0 : n + (n < LINES[0][0].length ? 1 : 3)), done ? 3200 : n === 0 ? 600 : 28)
        return () => clearTimeout(id)
    }, [n])

    let left = n
    return (
        <div className="reveal relative aspect-[16/6.4] sm:aspect-[16/5.9] rounded-[16px] overflow-hidden border border-line bg-[#0b0c10]">
            {SITE.bannerVideo ? (
                <AnimatedBanner />
            ) : (
                <div aria-hidden="true" className="absolute inset-0">
                    <div className="absolute inset-0 banner-grid" />
                    <div className="absolute inset-x-0 h-24 banner-scan" />
                    <div className="absolute left-4 sm:left-auto right-4 sm:right-6 top-4 sm:top-6 font-mono text-[10px] sm:text-[11.5px] leading-[1.8] whitespace-pre overflow-hidden">
                        {LINES.map(([t, c]) => {
                            const shown = t.slice(0, Math.max(0, left))
                            const typing = left > 0 && left < t.length
                            left -= t.length
                            return <p key={t} className={c}>{shown}{typing && <span className="caret inline-block w-[0.55em] h-[1em] align-middle bg-white/70" />}{'​'}</p>
                        })}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" />
                </div>
            )}
        </div>
    )
}
