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
  secondaryTheme: 'bg-[#7a4e4c]',
  intros: ['intro-1', 'intro-2'],
  lessons: [
    'in-out-1',
    'in-out-2',
    'in-out-3',
    'in-out-4-normal',
    'in-out-4-hard',
    'in-out-5',
    'put-it-together-1-normal',
    'put-it-together-1-hard',
    'put-it-together-2-normal',
    'put-it-together-2-hard',
    'put-it-together-3-normal',
    'put-it-together-3-hard',
    'put-it-together-4-hard',
    'put-it-together-5-hard',
    'put-it-together-6-hard',
  ],
  outros: ['outro-1', 'book-a-call-1'],
  challenges: [
    'in-out-1',
    'put-it-together-1-normal',
    'put-it-together-1-hard',
  ],
}
