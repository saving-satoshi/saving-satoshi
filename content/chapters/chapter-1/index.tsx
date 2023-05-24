import { Chapter, Text } from 'ui'
import { useTranslations } from 'hooks'

export default function Chapter1({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_one.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 0,
  slug: 'chapter-1',
  title: 'chapter_one.title',
  image: '/assets/images/chapter-1-cover.jpg',
  theme: 'bg-gradient-to-tl from-[#243654] to-[#3D5163]',
  secondaryTheme: 'bg-[#30435b]',
  intros: ['intro-1', 'intro-2'],
  lessons: [
    'genesis-1',
    'genesis-2',
    'genesis-3',
    'genesis-4',
    'transacting-1',
    'transacting-2',
    'transacting-3',
  ],
  outros: ['outro-1, outro-2'],
  challenges: ['genesis-1', 'transacting-1'],
}
