import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { ArrowUpRight, Github, Linkedin, Mail, Send } from './Icons'
import Reveal from './Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full rounded-xl border border-black/10 bg-[#fdfbf6] px-4 py-3.5 text-[0.95rem] outline-none transition placeholder:text-ink/40 focus:border-[#5c4030] focus:ring-2 focus:ring-[#5c4030]/15'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('bad response')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#e8dfd2] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/60">
            03 <span className="font-medium">/ Contact</span>
          </p>
          <h2 className="mt-6 font-display text-[clamp(3.4rem,11vw,9rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-[#3a2f28] [font-stretch:88%]">
            Let’s talk.
          </h2>
          <hr className="mt-10 border-black/15" />
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-cocoa-light">
              A project, a role, or a hello
            </p>
            <h3 className="mt-6 text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.05em] text-[#4a3a2e]">
              Have something
              <br />
              <em className="font-serif font-normal italic text-cocoa-light">in mind?</em>
            </h3>
            <p className="mt-6 max-w-sm leading-relaxed text-ink/70">
              I’d love to hear about it. Leave a message and I’ll get back to you.
            </p>

            <div className="mt-10 border-t border-black/15 pt-8">
              <p className="text-sm text-ink/60">Prefer email?</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-flex flex-wrap items-center gap-3 text-xl font-medium tracking-tight hover:text-cocoa md:text-2xl"
              >
                <Mail /> {site.email} <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin },
                  { href: site.github, label: 'GitHub', Icon: Github },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-black/15 px-5 py-3 text-sm transition hover:bg-bone"
                  >
                    <Icon className="h-5 w-5" /> {label} <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-[1.75rem] border border-black/10 bg-[#faf6ee] p-7 shadow-[0_30px_70px_-40px_rgba(74,50,37,.5)] md:p-10"
            >
              <h3 className="text-3xl font-bold tracking-[-0.04em] text-[#4a3a2e]">Send a message</h3>
              <p className="mt-2 text-sm text-ink/60">I’ll reply to the email you leave below.</p>

              <input type="hidden" name="_subject" value="New message from your portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Your name
                  <input required name="name" placeholder="Your name" className={`${field} mt-2 font-normal`} />
                </label>
                <label className="block text-sm font-semibold">
                  Email address
                  <input required type="email" name="email" placeholder="you@example.com" className={`${field} mt-2 font-normal`} />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold">
                Your message
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about what you have in mind…"
                  className={`${field} mt-2 resize-y font-normal`}
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#5c4030] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7b5a45] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'} <Send />
                </button>
                <p className="text-xs text-ink/50">Delivered through FormSubmit.</p>
              </div>

              <p role="status" aria-live="polite" className="mt-4 min-h-5 text-sm font-medium">
                {status === 'sent' && <span className="text-[#2f6b3c]">Thank you! Your message is on its way.</span>}
                {status === 'error' && (
                  <span className="text-[#a3392c]">
                    Something went wrong. Please email me directly at {site.email}.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
