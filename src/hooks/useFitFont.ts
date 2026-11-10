import { useCallback, useLayoutEffect, useRef, useState, type RefObject } from 'react'

export interface FitPair {
  text: RefObject<HTMLElement | null>
  box: RefObject<HTMLElement | null>
}

/**
 * Returns ONE font-size (px) at which every `text` fits inside its `box`.
 * Text width scales linearly with font-size, so a single measure converges.
 * This is what stops long names (KASAUDHAN) from running into the photo.
 */
export function useFitFont(getPairs: () => FitPair[], max = 360): number {
  const [size, setSize] = useState(48)
  const pairsRef = useRef(getPairs)
  pairsRef.current = getPairs

  const measure = useCallback(() => {
    let ratio = Number.POSITIVE_INFINITY
    for (const { text, box } of pairsRef.current()) {
      const t = text.current
      const b = box.current
      if (!t || !b) continue
      const w = t.getBoundingClientRect().width
      const avail = b.clientWidth
      if (w > 0 && avail > 0) ratio = Math.min(ratio, avail / w)
    }
    if (!Number.isFinite(ratio)) return
    setSize((prev) => {
      const next = Math.min(max, Math.floor(prev * ratio * 0.99 * 10) / 10)
      return Math.abs(next - prev) < 0.4 ? prev : next
    })
  }, [max])

  useLayoutEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    pairsRef.current().forEach((p) => p.box.current && ro.observe(p.box.current))
    window.addEventListener('resize', measure)
    const fonts = document.fonts
    fonts?.ready.then(measure)
    fonts?.addEventListener?.('loadingdone', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
      fonts?.removeEventListener?.('loadingdone', measure)
    }
  }, [measure])

  return size
}
