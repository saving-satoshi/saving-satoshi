import { usePathData } from 'hooks'

export const useLocalizedRoutes = () => {
  const { lang } = usePathData()

  return {
    chaptersUrl: `/${lang}/chapters`,
  }
}
