import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter9({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_nine.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 8,
  slug: 'chapter-9',
  title: `chapter_nine.title`,
  image: '/assets/images/chapter-9-cover.jpg',
  theme: 'bg-gradient-to-tl from-[#3074be] to-[#726a65]',
  secondaryTheme: 'bg-[#517092]',
  intros: ['intro-1', 'intro-2'],
  lessons: [
    'opcodes-1',
    'opcodes-2',
    'opcodes-3',
    'opcodes-4',
    'opcodes-5',
    'opcodes-6',
    'opcodes-7',
    'opcodes-8',
    'opcodes-9',
    'opcodes-10',
    'proposal-1',
    'proposal-2',
    'proposal-3',
    'proposal-4',
  ],
  outros: ['outro-1'],
  challenges: ['opcodes-1', 'proposal-1'],
}
