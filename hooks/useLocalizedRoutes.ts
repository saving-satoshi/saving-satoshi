import { usePathData } from 'hooks'

export const useLocalizedRoutes = () => {
  const { lang } = usePathData()

  return {
    homeUrl: `/${lang}`,
    chaptersUrl: `/${lang}/chapters`,
    aboutUrl: `/${lang}/about`,
  }
}
