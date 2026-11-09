import { useState } from 'react'
import { site } from '../data/site'
import { ArrowUpRight, Asterisk } from './Icons'

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'stats', label: 'Stats' },
  { id: 'contact', label: 'Contact' },
] as const

export default function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#ddd7cb]/85 backdrop-blur-md">
      <nav className="mx-auto grid h-16 max-w-[1700px] grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[1fr_auto_1fr] md:px-10">
        <a href="#home" className="flex items-center gap-2 text-[1.05rem] font-semibold tracking-tight">
          <Asterisk className="h-5 w-5 text-cocoa" />
          {site.name}.
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? 'bg-bone text-ink shadow-sm' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden justify-end md:flex">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-white"
          >
            Resume <ArrowUpRight />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`h-0.5 w-5 bg-ink transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-black/10 bg-[#ddd7cb] transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-transparent'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {[...NAV_LINKS, { id: '', label: 'Resume' }].map((l) => (
            <li key={l.label}>
              <a
                href={l.id ? `#${l.id}` : site.resume}
                target={l.id ? undefined : '_blank'}
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-lg font-semibold text-ink/80 active:bg-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
