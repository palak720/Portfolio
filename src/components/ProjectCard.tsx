import type { Project, Variant } from '../data/projects'
import { useImageCascade } from '../hooks/useImageCascade'
import { ArrowRight, ArrowUpRight, Expand } from './Icons'

interface Theme {
  card: string
  muted: string
  rule: string
  chip: string
  btn: string
  link: string
  bar: string
}

const themes: Record<Variant, Theme> = {
  forest: { card: 'bg-[#1f3324] text-[#eef4e2]', muted: 'text-[#eef4e2]/70', rule: 'border-white/15', chip: 'bg-white/10 text-[#eef4e2]', btn: 'bg-[#cadb9f] text-[#1f3324] hover:bg-[#d6e5ad]', link: 'text-[#eef4e2]', bar: 'bg-[#2b4430]' },
  slate: { card: 'bg-[#1d2433] text-[#e9edf6]', muted: 'text-[#e9edf6]/70', rule: 'border-white/15', chip: 'bg-white/10 text-[#e9edf6]', btn: 'bg-[#b9c8f0] text-[#1d2433] hover:bg-[#cbd7f6]', link: 'text-[#e9edf6]', bar: 'bg-[#283249]' },
  lavender: { card: 'bg-[#e9e1ef] text-[#3a2f48]', muted: 'text-[#3a2f48]/70', rule: 'border-[#3a2f48]/15', chip: 'bg-[#3a2f48]/10 text-[#3a2f48]', btn: 'bg-[#5a4670] text-white hover:bg-[#6a5582]', link: 'text-[#3a2f48]', bar: 'bg-[#d9cde6]' },
  tan: { card: 'bg-[#efe3d4] text-[#4a3828]', muted: 'text-[#4a3828]/70', rule: 'border-[#4a3828]/15', chip: 'bg-[#4a3828]/10 text-[#4a3828]', btn: 'bg-[#6b4a30] text-white hover:bg-[#7b5a40]', link: 'text-[#4a3828]', bar: 'bg-[#e0cfba]' },
  sage: { card: 'bg-[#e1e8d6] text-[#2f3d2a]', muted: 'text-[#2f3d2a]/70', rule: 'border-[#2f3d2a]/15', chip: 'bg-[#2f3d2a]/10 text-[#2f3d2a]', btn: 'bg-[#3f5a35] text-white hover:bg-[#4d6a42]', link: 'text-[#2f3d2a]', bar: 'bg-[#cfdabf]' },
  sky: { card: 'bg-[#dde7f0] text-[#26384a]', muted: 'text-[#26384a]/70', rule: 'border-[#26384a]/15', chip: 'bg-[#26384a]/10 text-[#26384a]', btn: 'bg-[#2f5173] text-white hover:bg-[#3c6188]', link: 'text-[#26384a]', bar: 'bg-[#c6d6e6]' },
  cream: { card: 'bg-[#f0e9dc] text-[#43362a]', muted: 'text-[#43362a]/70', rule: 'border-[#43362a]/15', chip: 'bg-[#43362a]/10 text-[#43362a]', btn: 'bg-[#5c4030] text-white hover:bg-[#7b5a45]', link: 'rounded-xl border border-[#43362a]/30 bg-[#43362a]/5 px-5 py-3 text-[#43362a] transition hover:border-[#5c4030] hover:bg-[#5c4030] hover:text-white', bar: 'bg-[#e4d9c5]' },
}

const shot = (url: string) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1400&h=900`

function Mock({ p, theme, onOpen }: { p: Project; theme: Theme; onOpen: (src: string, title: string) => void }) {
  const candidates = [
    `${import.meta.env.BASE_URL}images/projects/${p.id}.png`,
    `${import.meta.env.BASE_URL}images/projects/${p.id}.jpg`,
    ...(p.live ? [shot(p.live)] : []),
  ]
  const { src, onError } = useImageCascade(candidates)
  const host = p.live ? p.live.replace(/^https?:\/\//, '').replace(/\/$/, '') : p.repo?.replace('https://', '') ?? p.id

  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/5 shadow-[0_18px_50px_-25px_rgba(0,0,0,.5)]">
        <div className={`flex items-center gap-2 px-4 py-2.5 ${theme.bar}`}>
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="mx-auto truncate px-2 text-xs opacity-80">{host}</span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
        </div>
        <div className="group relative aspect-[16/10] bg-black/10">
          {src ? (
            <img
              src={src}
              onError={onError}
              alt={`${p.name} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="font-serif text-5xl opacity-80">{p.name}</span>
              <span className="text-[11px] uppercase tracking-widest opacity-60">
                Add screenshot → public/images/projects/{p.id}.png
              </span>
            </div>
          )}
          {src && (
            <button
              type="button"
              onClick={() => onOpen(src, p.name)}
              className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-xl bg-[#5c4030]/90 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-[#5c4030]"
            >
              <Expand /> View screenshot
            </button>
          )}
        </div>
      </div>
      <figcaption className={`mt-3 flex items-center gap-2 text-sm ${theme.muted}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {p.caption}
      </figcaption>
    </figure>
  )
}

interface Props {
  p: Project
  index: number
  wide: boolean
  onOpen: (src: string, title: string) => void
}

export default function ProjectCard({ p, index, wide, onOpen }: Props) {
  const t = themes[p.variant]
  const num = String(index + 1).padStart(2, '0')

  const info = (
    <div className="flex min-w-0 flex-col">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
          <span className={`flex h-9 w-9 items-center justify-center rounded-full border text-[11px] ${t.rule}`}>{num}</span>
          {p.kicker}
        </p>
        <span className={`text-right text-[11px] font-medium uppercase tracking-[0.14em] ${t.muted}`}>{p.label}</span>
      </div>

      <h3 className="mt-8 font-serif text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] tracking-tight">{p.name}</h3>
      <p className="mt-4 text-xl font-medium leading-snug tracking-tight md:text-2xl">{p.tagline}</p>
      <p className={`mt-4 max-w-xl text-[0.95rem] leading-relaxed ${t.muted}`}>{p.description}</p>
    </div>
  )

  const footer = (
    <div className={`mt-8 border-t pt-6 ${t.rule}`}>
      <ul className="flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <li key={s} className={`rounded-md px-3 py-1.5 text-xs font-medium ${t.chip}`}>
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${t.btn}`}>
            Visit website <ArrowUpRight />
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold ${
              p.live ? t.link : `rounded-xl px-5 py-3 transition ${t.btn}`
            }`}
          >
            Project details <ArrowRight />
          </a>
        )}
      </div>
    </div>
  )

  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] p-7 shadow-[0_1px_0_rgba(255,255,255,.4)_inset] md:p-10 ${t.card} ${
        wide ? 'md:col-span-2' : ''
      }`}
    >
      {wide ? (
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div className="flex min-w-0 flex-col justify-between self-stretch">
            {info}
            {footer}
          </div>
          <Mock p={p} theme={t} onOpen={onOpen} />
        </div>
      ) : (
        <div className="flex h-full flex-col">
          {info}
          <div className="mt-8">
            <Mock p={p} theme={t} onOpen={onOpen} />
          </div>
          <div className="mt-auto">{footer}</div>
        </div>
      )}
    </article>
  )
}
