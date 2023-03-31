const baseUrl =
  process.env.NEXT_PUBLIC_API_ENDPOINT || 'https://api.savingsatoshi.com'

export default function url(path: string) {
  const p = path.startsWith('/') ? path : `/${path}`

  return `${baseUrl}${p}`
}
