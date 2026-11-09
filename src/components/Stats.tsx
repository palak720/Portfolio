import { useEffect, useState } from 'react'
import { site } from '../data/site'
import Reveal from './Reveal'

interface Repo {
  stargazers_count: number
  language: string | null
  fork: boolean
}
interface User {
  public_repos: number
  followers: number
}

type State = { status: 'loading' } | { status: 'error' } | { status: 'ok'; user: User; stars: number; langs: [string, number][] }

export default function Stats() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const ctrl = new AbortController()
    const api = `https://api.github.com/users/${site.githubUser}`
    Promise.all([
      fetch(api, { signal: ctrl.signal }).then((r) => (r.ok ? (r.json() as Promise<User>) : Promise.reject())),
      fetch(`${api}/repos?per_page=100`, { signal: ctrl.signal }).then((r) => (r.ok ? (r.json() as Promise<Repo[]>) : Promise.reject())),
    ])
      .then(([user, repos]) => {
        const own = repos.filter((r) => !r.fork)
        const tally = new Map<string, number>()
        own.forEach((r) => r.language && tally.set(r.language, (tally.get(r.language) ?? 0) + 1))
        const langs = [...tally.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5)
        setState({ status: 'ok', user, stars: own.reduce((s, r) => s + r.stargazers_count, 0), langs })
      })
      .catch(() => !ctrl.signal.aborted && setState({ status: 'error' }))
    return () => ctrl.abort()
  }, [])

  const cards =
    state.status === 'ok'
      ? [
          { label: 'Public repos', value: state.user.public_repos },
          { label: 'Followers', value: state.user.followers },
          { label: 'Stars earned', value: state.stars },
          { label: 'Top language', value: state.langs[0]?.[0] ?? '—' },
        ]
      : []
  const maxLang = state.status === 'ok' ? Math.max(...state.langs.map((l) => l[1]), 1) : 1

  return (
    <section id="stats" className="bg-sand-200 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/60">
            02 <span className="font-medium">/ Stats</span>
          </p>
          <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-none tracking-[-0.05em] text-[#3a2f28]">
            Code, by the <em className="font-serif font-normal italic text-cocoa-light">numbers.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {state.status === 'loading' &&
            Array.from({ length: 4 }, (_, i) => <div key={i} className="h-32 animate-pulse rounded-2xl bg-black/5" />)}
          {state.status === 'error' && (
            <p className="rounded-2xl bg-bone p-6 text-sm text-ink/70 sm:col-span-2 lg:col-span-4">
              Couldn’t reach the GitHub API right now. See everything live on{' '}
              <a className="font-semibold underline" href={site.github} target="_blank" rel="noreferrer">
                github.com/{site.githubUser}
              </a>
              .
            </p>
          )}
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <div className="h-full rounded-2xl border border-black/5 bg-bone p-6 shadow-sm">
                <p className="text-4xl font-bold tracking-[-0.04em] text-cocoa">{c.value}</p>
                <p className="mt-2 text-sm text-ink/60">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="min-w-0">
            <div className="h-full min-w-0 rounded-2xl border border-black/5 bg-bone p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold">Contribution graph</p>
              <div className="overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/5c4030/${site.githubUser}`}
                  alt={`${site.githubUser} GitHub contribution graph`}
                  loading="lazy"
                  className="min-w-[640px]"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="min-w-0">
            <div className="h-full min-w-0 rounded-2xl border border-black/5 bg-bone p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold">Languages (by repo)</p>
              {state.status === 'ok' ? (
                <ul className="space-y-3">
                  {state.langs.map(([name, n]) => (
                    <li key={name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{name}</span>
                        <span className="text-ink/50">{n}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-black/10">
                        <div className="h-full rounded-full bg-cocoa" style={{ width: `${(n / maxLang) * 100}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-ink/50">Loading…</p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
