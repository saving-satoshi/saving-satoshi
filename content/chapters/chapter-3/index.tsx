import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_three.paragraph_one')}</Text>
      <Text>{t('chapter_three.paragraph_two')}</Text>
      <Text>{t('chapter_three.paragraph_three')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 2,
  slug: 'chapter-3',
  title: 'chapter_three.title',
  image: '/assets/images/chapter-3-cover.jpg',
  theme: 'bg-gradient-to-tl from-[#3C1843] to-[#45235A]',
  intros: ['intro-1', 'intro-2'],
  lessons: ['solo-1'],
  outros: ['outro-1'],
  challenges: ['solo-1'],
}
