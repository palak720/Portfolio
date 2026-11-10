import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const ArrowUp = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...p}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
)
export const Send = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...p}><path d="m21 3-9.5 18-2.5-7.5L1.5 11 21 3ZM9 13.5 21 3" /></svg>
)
export const Mail = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
)
export const Pause = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
)
export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" /></svg>
)
export const Expand = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...p}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
)
export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Github = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)
export const Linkedin = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)
export const Asterisk = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} strokeWidth={2} {...p}>
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
  </svg>
)
