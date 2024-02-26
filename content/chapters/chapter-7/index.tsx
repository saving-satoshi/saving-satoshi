import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter7({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_seven.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 6,
  slug: 'chapter-7',
  title: 'chapter_seven.title',
  image: '/assets/images/chapter-7-cover.jpg',
  theme: 'bg-gradient-to-br from-[#0A1952] to-[#1B3D98]',
  intros: ['intro-1', 'intro-2', 'intro-3'],
  lessons: ['mempool-transaction-1'],
  outros: ['outro-1'],
  challenges: ['mempool-transaction-1'],
}
