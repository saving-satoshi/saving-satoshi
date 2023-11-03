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
  theme: 'bg-gradient-to-tl from-[#646353] to-[#5f5350]',
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
    'valiate-signature-1',
    'valiate-signature-2',
    'valiate-signature-3',
    'valiate-signature-4',
  ],
  outros: ['outro-1'],
  challenges: [
    'derive-message-1',
    'verify-signature-1',
    'validate-signature-1',
  ],
}
