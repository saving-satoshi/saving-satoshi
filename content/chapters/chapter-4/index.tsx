import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter4({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_four.paragraph_one')}</Text>
      <Text>{t('chapter_four.paragraph_two')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 3,
  slug: 'chapter-4',
  title: 'chapter_four.title',
  image: '/assets/images/chapter-4-cover.jpg',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
