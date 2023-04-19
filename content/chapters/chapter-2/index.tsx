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
  theme: 'bg-gradient-to-tl from-[#7b1810d9] to-[#432a43d9]',
  intros: ['intro-1', 'intro-2'],
  lessons: [
    'hashing-1',
    'hashing-2',
    'hashing-3',
    'hashing-4',
    'hashing-5',
    'scripting-1',
  ],
  outros: [],
  challenges: ['hashing-1', 'scripting-1'],
}
