import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_three.paragraph_one')}</Text>
      <Text className="mt-2">{t('chapter_three.paragraph_two')}</Text>
      <Text className="mt-2">{t('chapter_three.paragraph_three')}</Text>
      <Text className="mt-2">{t('chapter_three.paragraph_four')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 2,
  slug: 'chapter-3',
  title: 'chapter_three.title',
  image: '/assets/images/chapter-3-cover.jpg',
  theme: 'bg-gradient-to-tl from-[#3C1843] to-[#553360]',
  intros: ['intro-1'],
  lessons: [
    'solo-1',
    'pool-1',
    'pool-2',
    'coop-1',
    'coop-2',
    'coop-3',
    'split-1',
    'split-2',
  ],
  outros: ['outro-1'],
  challenges: ['solo-1', 'pool-1', 'coop-1', 'split-1'],
}
