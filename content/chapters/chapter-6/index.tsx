import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter6({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_six.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 5,
  slug: 'chapter-6',
  title: 'chapter_six.title',
  image: '/assets/images/chapter-6-cover.jpg',
  theme: 'bg-gradient-to-br from-[#644953] to-[#975442]',
  intros: ['intro-1', 'intro-2'],
  lessons: [
    'in-out-1',
    'in-out-2',
    'in-out-3',
    'in-out-4',
    'in-out-5',
    'put-it-together-1',
    'put-it-together-2',
    'put-it-together-3',
  ],
  outros: ['outro-1'],
  challenges: ['in-out-1', 'put-it-together-1'],
}
