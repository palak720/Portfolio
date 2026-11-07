import { site } from '../data/site'
import { useImageCascade } from '../hooks/useImageCascade'

function Placeholder() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#cdbfa5] to-[#a8936f]">
      <svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="92" r="40" fill="#d8b998" />
        <path d="M10 300c0-72 40-118 90-118s90 46 90 118Z" fill="#efe6d8" />
      </svg>
      <p className="absolute inset-x-0 bottom-4 px-4 text-center text-[11px] font-semibold uppercase tracking-widest text-black/40">
        Add your photo → public/images/palak.png
      </p>
    </div>
  )
}

export default function HeroPhoto({ className = '' }: { className?: string }) {
  const { src, onError } = useImageCascade(site.photoCandidates)
  return (
    <div className={`overflow-hidden ${className}`}>
      {src ? (
        <img src={src} onError={onError} alt={site.name} className="h-full w-full object-cover object-top" />
      ) : (
        <Placeholder />
      )}
    </div>
  )
}
