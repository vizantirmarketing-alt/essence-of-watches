import sharp from 'sharp'
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'

const SIZES = [640, 1280, 1920]
const QUALITY = { 640: 60, 1280: 65, 1920: 70 }
const MIN_BYTES = 200 * 1024

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory() && basename(full) !== 'optimized') walk(full, files)
    else if (stat.isFile() && /\.(jpe?g|png)$/i.test(entry) && stat.size > MIN_BYTES) {
      files.push(full)
    }
  }
  return files
}

const files = walk('public')
console.log(`Converting ${files.length} images...`)

let ok = 0, skip = 0, fail = 0

for (const file of files) {
  const name = basename(file, extname(file))
  const dir = file.replace(basename(file), '')
  const outDir = join(dir, 'optimized')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  for (const width of SIZES) {
    const out = join(outDir, `${name}-${width}.avif`)
    if (existsSync(out)) { skip++; continue }
    try {
      await sharp(file)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: QUALITY[width], effort: 4 })
        .toFile(out)
      ok++
      console.log(`✓ ${basename(out)}`)
    } catch (e) {
      fail++
      console.error(`✗ ${file} @ ${width}w:`, e.message)
    }
  }
}

console.log(`\nDone. ok=${ok} skipped=${skip} failed=${fail}`)
