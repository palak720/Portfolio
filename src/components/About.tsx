import { site } from '../data/site'
import Reveal from './Reveal'

export default function About() {
  const [lead, ...rest] = site.about.paragraphs
  return (
    <section id="about" className="bg-[#ecebe4] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#4b5a50]">
            01 <span className="font-medium">/ About</span>
          </p>
          <h2 className="mt-6 text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[1] tracking-[-0.05em] text-[#3a2f28]">
            A little more about me.
          </h2>
          <hr className="mt-10 border-black/15" />
        </Reveal>

        <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#4b5a50]">
              {site.about.kicker}
            </p>
            <p className="mt-8 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.12] tracking-[-0.045em] text-[#2f3d36]">
              I like understanding the <em className="font-serif text-[1.15em] font-normal italic text-[#6c7357]">why.</em>
              <br />
              Then building the <em className="font-serif text-[1.15em] font-normal italic text-[#6c7357]">how.</em>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-[clamp(1.2rem,2vw,1.7rem)] leading-[1.45] tracking-tight text-[#2f3d36]">{lead}</p>
            <div className="mt-8 space-y-5 text-base leading-[1.9] text-[#4d5a52]">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
