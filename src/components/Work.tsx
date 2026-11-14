import { useEffect, useMemo, useState } from 'react'
import { projects, type Filter } from '../data/projects'
import { Close } from './Icons'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

const count = (f: Filter) => (f === 'all' ? projects.length : projects.filter((p) => p.filter === f).length)

const tabs: { id: Filter; label: string }[] = [
  { id: 'all', label: `All projects (${count('all')})` },
  { id: 'ai', label: 'AI & Full-Stack' },
  { id: 'web', label: 'Web & Motion' },
]

export default function Work() {
  const [filter, setFilter] = useState<Filter>('all')
  const [shot, setShot] = useState<{ src: string; title: string } | null>(null)

  // A card is "wide" if featured, or if it would otherwise sit alone in a row.
  const layout = useMemo(() => {
    const list = projects.filter((p) => filter === 'all' || p.filter === filter)
    let col = 0
    return list.map((p, i) => {
      const next = list[i + 1]
      if (p.featured) {
        col = 0
        return { p, wide: true }
      }
      const alone = col === 0 && (!next || next.featured)
      if (alone) return { p, wide: true }
      col = (col + 1) % 2
      return { p, wide: false }
    })
  }, [filter])

  useEffect(() => {
    if (!shot) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShot(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [shot])

  return (
    <section id="work" className="bg-[#f3efe8] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5c4030]" />
              Selected works / Development &amp; experiments
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1] tracking-tight">
              Platforms built with editorial rigor &amp; intent.
            </h2>
          </div>

          <div role="tablist" className="flex shrink-0 gap-1 self-start rounded-2xl border border-[#5c4030]/25 bg-[#e9e0d3] p-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={filter === t.id}
                onClick={() => setFilter(t.id)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  filter === t.id ? 'bg-[#5c4030] text-white shadow' : 'text-[#3a2f28] hover:bg-[#5c4030]/10 hover:text-[#5c4030]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {layout.map(({ p, wide }, i) => (
            <ProjectCard key={p.id} p={p} index={i} wide={wide} onOpen={(src, title) => setShot({ src, title })} />
          ))}
        </div>
      </div>

      {shot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${shot.title} screenshot`}
          onClick={() => setShot(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl text-white hover:bg-white/25"
          >
            <Close />
          </button>
          <img src={shot.src} alt={shot.title} className="max-h-[90vh] max-w-full rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
