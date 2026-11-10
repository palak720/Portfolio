import { useState } from 'react'

/** Tries each candidate URL in order; returns undefined once all have failed. */
export function useImageCascade(candidates: readonly string[]) {
  const [i, setI] = useState(0)
  return { src: candidates[i] as string | undefined, onError: () => setI((n) => n + 1) }
}
