import { useRef } from 'react'
import { site } from '../data/site'
import { useFitFont } from '../hooks/useFitFont'
import { ArrowUpRight, Asterisk } from './Icons'
import HeroPhoto from './HeroPhoto'

const nameClass = 'inline-block whitespace-nowrap font-display font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-ink [font-stretch:88%]'
const roleClass = 'block whitespace-nowrap font-display font-bold uppercase tracking-tight text-cocoa-light [font-stretch:88%]'

export default function Hero() {
  // desktop refs
  const dLeft = useRef<HTMLDivElement>(null)
  const dRight = useRef<HTMLDivElement>(null)
  const dFirst = useRef<HTMLSpanElement>(null)
  const dLast = useRef<HTMLSpanElement>(null)
  // mobile refs
  const mBox = useRef<HTMLDivElement>(null)
  const mFirst = useRef<HTMLSpanElement>(null)
  const mLast = useRef<HTMLSpanElement>(null)

  // One size per layout, picked so the LONGEST name fits its column → no overlap with the photo.
  const dSize = useFitFont(() => [
    { text: dFirst, box: dLeft },
    { text: dLast, box: dRight },
  ])
  const mSize = useFitFont(() => [
    { text: mFirst, box: mBox },
    { text: mLast, box: mBox },
  ])

  const { hero } = site

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-16"
      style={{ background: 'linear-gradient(90deg,#ddd7cb 0%,#c3bcb1 30%,#aca59b 50%,#c3bcb1 70%,#ddd7cb 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_50%_40%,rgba(255,255,255,.16),transparent_70%)]" />

      {/* ───────────── DESKTOP / TABLET ───────────── */}
      <div className="relative hidden min-h-[max(40rem,calc(100svh-4rem))] md:block">
        {/* names — left & right columns, centre column is reserved for the photo */}
        <div className="grid grid-cols-[1fr_var(--photo-w)_1fr] gap-x-[2.5vw] px-[3vw] pt-[7vh]">
          <div ref={dLeft} className="min-w-0 animate-fade-up">
            <span ref={dFirst} className={nameClass} style={{ fontSize: dSize }}>
              {site.first}
            </span>
            <span className={`${roleClass} mt-[5vh] text-center`} style={{ fontSize: dSize * 0.42 }}>
              {site.roleTop}
            </span>
          </div>
          <div aria-hidden />
          <div ref={dRight} className="min-w-0 animate-fade-up text-right [animation-delay:120ms]">
            <span ref={dLast} className={nameClass} style={{ fontSize: dSize }}>
              {site.last}
            </span>
            <span className={`${roleClass} mt-[5vh] text-center`} style={{ fontSize: dSize * 0.42 }}>
              {site.roleBottom}
            </span>
          </div>
        </div>

        {/* photo — same width token as the middle column */}
        <div className="absolute inset-y-0 left-1/2 z-10 w-[var(--photo-w)] -translate-x-1/2 pt-4">
          <HeroPhoto className="h-full w-full rounded-t-[1.75rem] shadow-[0_30px_80px_-20px_rgba(42,31,23,.45)]" />
        </div>

        {/* bottom copy — lives in the side columns, never under the photo */}
        <div className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-[1fr_var(--photo-w)_1fr] gap-x-[2.5vw] px-[3vw] pb-10">
          <div className="animate-fade-up [animation-delay:240ms]">
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em]">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              {hero.kicker}
            </p>
            <h1 className="text-[clamp(1.5rem,2.3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.04em]">
              {hero.lineOne}
              <br />
              <span className="text-cocoa-light">{hero.lineTwo}</span>
            </h1>
            <p className="mt-4 max-w-[24rem] text-[0.95rem] leading-relaxed text-ink/75">{hero.body}</p>
            <a
              href="#work"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-white"
            >
              {hero.cta} <ArrowUpRight />
            </a>
          </div>
          <div aria-hidden />
          <div className="flex animate-fade-up flex-col items-start justify-end [animation-delay:320ms] lg:pl-[18%]">
            <Asterisk className="mb-5 h-7 w-7 text-cocoa-light" />
            <p className="text-[clamp(1rem,1.5vw,1.45rem)] leading-snug text-ink/90">
              {hero.rightLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p className="mt-2 font-semibold">{hero.rightSmall}</p>
            <a
              href="#about"
              className="mt-5 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium transition hover:border-ink"
            >
              A little about me <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      {/* ───────────── MOBILE ───────────── */}
      <div className="px-5 pb-12 pt-10 md:hidden">
        <div ref={mBox} className="min-w-0">
          <span ref={mFirst} className={`${nameClass} block`} style={{ fontSize: mSize }}>
            {site.first}
          </span>
          <span ref={mLast} className={`${nameClass} block`} style={{ fontSize: mSize }}>
            {site.last}
          </span>
        </div>
        <p className="mt-3 font-display text-sm font-bold uppercase tracking-wider text-cocoa-light">
          {site.roleTop} {site.roleBottom}
        </p>

        <HeroPhoto className="mx-auto mt-8 aspect-[4/5] w-[72%] max-w-xs rounded-3xl shadow-[0_24px_60px_-20px_rgba(42,31,23,.45)]" />

        <p className="mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          {hero.kicker}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-[-0.04em]">
          {hero.lineOne}
          <br />
          <span className="text-cocoa-light">{hero.lineTwo}</span>
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/75">{hero.body}</p>
        <a
          href="#work"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3 text-sm font-semibold shadow-sm"
        >
          {hero.cta} <ArrowUpRight />
        </a>
      </div>
    </section>
  )
}
