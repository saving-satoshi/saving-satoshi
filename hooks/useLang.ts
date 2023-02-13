import { usePathname } from 'next/navigation'

export const useLang = () => {
  const pathName = usePathname()
  const parts = pathName.split('/').filter((p) => p)

  return parts.shift()
}
