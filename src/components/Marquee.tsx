import { useCallback, useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from 'react'
import { tech, type TechItem } from '../data/site'
import { ArrowRight, Pause, Play } from './Icons'

const SPEED = 60 // auto-scroll speed, px per second
const RESUME_DELAY = 1500 // ms to wait after the user last scrolled before auto-scroll resumes
const COPIES = 3 // list is rendered 3x so it can loop in both directions

function GraphMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#5c4030]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="8" r="2.4" />
      <circle cx="9" cy="18" r="2.4" />
      <path d="M8.2 7 15.8 7.7M7.2 8.2l1 7.5M16.8 10l-6 6.2" />
    </svg>
  )
}

function Item({ t, hidden }: { t: TechItem; hidden: boolean }) {
  return (
    <li className="flex shrink-0 items-center gap-3 px-8 text-lg font-medium text-[#2a1f17]/90" aria-hidden={hidden || undefined}>
      {t.icon ? <img src={t.icon} alt="" draggable={false} loading="lazy" className="h-6 w-6" /> : <GraphMark />}
      {t.name}
    </li>
  )
}

const ctrl =
  'flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-[#f7f3ea] text-sm shadow-sm transition hover:bg-white active:scale-95'

export default function Marquee() {
  const viewport = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [dragging, setDragging] = useState(false)

  const pausedRef = useRef(paused)
  pausedRef.current = paused
  const hovering = useRef(false)
  const keyFocus = useRef(false)
  const drag = useRef<{ x: number; left: number } | null>(null)
  const pos = useRef(0) // float scroll position (scrollLeft alone rounds, which would stall slow auto-scroll)
  const lastManual = useRef(0)
  const wrapTimer = useRef(0)

  // auto-scroll loop
  useEffect(() => {
    const el = viewport.current
    if (!el) return
    el.scrollLeft = pos.current = el.scrollWidth / COPIES
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000
      last = now
      const idle = now - lastManual.current > RESUME_DELAY
      if (!pausedRef.current && !hovering.current && !keyFocus.current && !drag.current && idle && !document.hidden) {
        const set = el.scrollWidth / COPIES
        pos.current += SPEED * dt
        if (pos.current >= set * 2) pos.current -= set
        el.scrollLeft = pos.current
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // user moved it (swipe / wheel / drag / buttons) → remember, and keep the loop seamless
  const onScroll = useCallback(() => {
    const el = viewport.current
    if (!el) return
    if (Math.abs(el.scrollLeft - pos.current) > 1.5) {
      pos.current = el.scrollLeft
      lastManual.current = performance.now()
    }
    window.clearTimeout(wrapTimer.current)
    wrapTimer.current = window.setTimeout(() => {
      const set = el.scrollWidth / COPIES
      if (el.scrollLeft >= set * 2) el.scrollLeft -= set
      else if (el.scrollLeft < set) el.scrollLeft += set
      pos.current = el.scrollLeft
    }, 140)
  }, [])

  const nudge = (dir: 1 | -1, fraction = 0.5) => {
    const el = viewport.current
    if (!el) return
    lastManual.current = performance.now() // stop auto-scroll first, or its next frame would cancel the smooth scroll
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * fraction), behavior: 'smooth' })
  }

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return // touch/pen already scroll natively
    drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft }
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (drag.current) e.currentTarget.scrollLeft = drag.current.left - (e.clientX - drag.current.x)
  }
  const endDrag = () => {
    if (!drag.current) return
    drag.current = null
    lastManual.current = performance.now()
    setDragging(false)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      nudge(e.key === 'ArrowRight' ? 1 : -1, 0.3)
    }
  }
  const onFocus = (e: FocusEvent<HTMLDivElement>) => {
    keyFocus.current = e.currentTarget.matches(':focus-visible') // only keyboard focus pauses, not a mouse click
  }

  return (
    <div role="region" aria-label="Technologies I work with" className="flex items-stretch border-y border-black/10 bg-[#f6f2ea]">
      <div
        ref={viewport}
        tabIndex={0}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={(e) => (hovering.current = e.pointerType === 'mouse')}
        onPointerLeave={() => (hovering.current = false)}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={() => (keyFocus.current = false)}
        className={`min-w-0 flex-1 select-none overflow-x-auto overscroll-x-contain py-5 [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)] [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#5c4030]/40 [&::-webkit-scrollbar]:hidden ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <ul className="flex w-max">
          {Array.from({ length: COPIES }, (_, c) => tech.map((t) => <Item key={`${c}-${t.name}`} t={t} hidden={c > 0} />))}
        </ul>
      </div>

      <div className="flex shrink-0 items-center gap-2 border-l border-black/10 bg-[#f6f2ea] px-3 md:px-4">
        <button type="button" aria-label="Scroll left" onClick={() => nudge(-1)} className={ctrl}>
          <ArrowRight className="rotate-180" />
        </button>
        <button type="button" aria-label="Scroll right" onClick={() => nudge(1)} className={ctrl}>
          <ArrowRight />
        </button>
        <button type="button" aria-label={paused ? 'Play auto-scroll' : 'Pause auto-scroll'} onClick={() => setPaused((p) => !p)} className={ctrl}>
          {paused ? <Play /> : <Pause />}
        </button>
      </div>
    </div>
  )
}
