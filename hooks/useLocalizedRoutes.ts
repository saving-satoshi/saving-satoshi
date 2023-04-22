import { usePathData } from 'hooks'

export default function useLocalizedRoutes() {
  const { lang } = usePathData()

  return {
    homeUrl: `/${lang}`,
    chaptersUrl: `/${lang}/chapters`,
    aboutUrl: `/${lang}/about`,
  }
}
