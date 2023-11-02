import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter5({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_five.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 4,
  slug: 'chapter-5',
  title: 'chapter_five.title',
  image: '/assets/images/chapter-5-cover.jpg',
  intros: ['intro-1', 'intro-2', 'intro-3'],
  lessons: [
    'derive-message-1',
    'derive-message-2',
    'derive-message-3',
    'derive-message-4',
    'derive-message-5',
    'derive-message-6',
    'derive-message-7',
    'verify-signature-1',
    'verify-signature-2',
    'verify-signature-3',
    'verify-signature-4',
    'verify-signature-5',
    'verify-message-1',
    'verify-message-2',
    'verify-message-3',
    'verify-message-4',
  ],
  outros: ['outro-1'],
  challenges: ['derive-message-1', 'verify-signature-1', 'verify-message-1'],
}
