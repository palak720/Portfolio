import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Finds the hero photo automatically: any image sitting directly in public/ or public/images/.
// Files whose name looks like a profile picture are tried first. Restart `npm run dev` after adding one.
function findPhotos(): string[] {
  const found: string[] = []
  for (const dir of ['', 'images']) {
    const abs = path.resolve('public', dir)
    if (!fs.existsSync(abs)) continue
    for (const f of fs.readdirSync(abs)) {
      if (/\.(png|jpe?g|webp|avif)$/i.test(f) && !/^(favicon|logo|icon)/i.test(f)) {
        found.push(encodeURI('/' + [dir, f].filter(Boolean).join('/')))
      }
    }
  }
  const rank = (u: string) => (/palak|profile|portrait|photo|hero|selfie|dp/i.test(u) ? 0 : 1)
  return found.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
}

export default defineConfig({
  plugins: [react()],
  define: { __PHOTOS__: JSON.stringify(findPhotos()) },
})
