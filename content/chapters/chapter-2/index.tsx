import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_two.paragraph_one')}</Text>
      <Text>{t('chapter_two.paragraph_two')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 1,
  slug: 'chapter-2',
  title: 'chapter_two.title',
  image: '/assets/images/chapter-2-cover.jpg',
  intros: [],
  lessons: ['hashing-1'],
  outros: [],
  challenges: ['hashing-1'],
}
