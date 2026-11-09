import { useState } from 'react'
import { tech, type TechItem } from '../data/site'
import { Pause, Play } from './Icons'

function Item({ t }: { t: TechItem }) {
  return (
    <li className="flex shrink-0 items-center gap-3 px-8 text-lg font-medium text-ink/90">
      {t.icon ? (
        <img src={t.icon} alt="" loading="lazy" className="h-6 w-6" />
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cocoa text-[10px] font-bold text-bone">
          {t.name.slice(0, 2)}
        </span>
      )}
      {t.name}
    </li>
  )
}

export default function Marquee() {
  const [paused, setPaused] = useState(false)
  const loop = [...tech, ...tech]

  return (
    <div className="relative border-y border-black/10 bg-[#f6f2ea]" aria-label="Technologies I work with">
      <div className="overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_92%,transparent)]">
        <ul
          className={`flex w-max animate-marquee ${paused ? '[animation-play-state:paused]' : ''}`}
        >
          {loop.map((t, i) => (
            <Item key={`${t.name}-${i}`} t={t} />
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? 'Play marquee' : 'Pause marquee'}
        className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-bone text-sm shadow-sm transition hover:bg-white"
      >
        {paused ? <Play /> : <Pause />}
      </button>
    </div>
  )
}
