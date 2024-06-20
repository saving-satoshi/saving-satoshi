import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter9({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_nine.paragraph_one')}</Text>
      <Text className="mt-4">{t('chapter_nine.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 8,
  slug: 'chapter-9',
  title: `chapter_nine.title`,
  image: '/assets/images/chapter-9-cover.jpg',
  intros: ['intro-1'],
  lessons: ['splits-1', 'splits-2', 'splits-3'],
  outros: ['outro-1'],
  challenges: ['splits-1'],
}
