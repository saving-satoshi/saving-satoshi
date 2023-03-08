export default function url(path: string, lang: string) {
  const p = path.startsWith('/') ? path : `/${path}`

  const l = lang || 'en'

  return `/${l}${p}`
}
