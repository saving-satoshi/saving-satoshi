import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter8({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_eight.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 7,
  slug: 'chapter-8',
  title: 'chapter_eight.title',
  image: '/assets/images/chapter-8-cover.jpg',
  theme: 'bg-gradient-to-br from-[#516543] to-[#486c72]',
  secondaryTheme: 'bg-[#4c685a]',
  intros: ['intro-1', 'intro-2', 'intro-3'],
  lessons: [
    'building-blocks-1',
    'building-blocks-2',
    'building-blocks-3',
    'building-blocks-4',
    'building-blocks-5',
    'building-blocks-6',
    'building-blocks-7',
    'building-blocks-8',
  ],
  outros: ['outro-1'],
  challenges: ['building-blocks-1'],
}
