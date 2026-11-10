import { site } from '../data/site'
import { ArrowUp, ArrowUpRight, Asterisk, Github, Linkedin } from './Icons'

const linkCls = 'inline-flex items-center gap-2 text-ink/70 transition hover:text-ink'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#e8dfd2] to-[#ddd0bb] px-5 pt-16 md:px-10">
      <div className="mx-auto grid max-w-[1300px] gap-12 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5 text-3xl font-bold tracking-[-0.04em]">
            <Asterisk className="h-7 w-7 text-cocoa" />
            {site.name}.
          </a>
          <p className="mt-6 max-w-xs leading-relaxed text-ink/70">
            A developer’s mind. A builder’s hands.
            <br />
            Curious about everything in between.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.github, label: 'GitHub', Icon: Github },
              { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 transition hover:bg-bone"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-5 space-y-3">
            {[
              ['Home', '#home'],
              ['About me', '#about'],
              ['What I’ve done', '#work'],
              ['GitHub Stats', '#stats'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className={linkCls}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Say hello</h4>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={`mailto:${site.email}`} className={linkCls}>
                Start a conversation <ArrowUpRight />
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer" className={linkCls}>
                <Github className="h-4 w-4" /> GitHub <ArrowUpRight />
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className={linkCls}>
                <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight />
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-ink/60">Always up for a good idea.</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1300px] flex-col gap-3 border-t border-black/10 py-6 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Made with care. And a lot of curiosity.</p>
        <a href="#home" className="inline-flex items-center gap-2 hover:text-ink">
          Back to top <ArrowUp />
        </a>
      </div>
    </footer>
  )
}
