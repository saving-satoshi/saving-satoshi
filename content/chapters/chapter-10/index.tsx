import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter10({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>{t('chapter_ten.paragraph_one')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 9,
  slug: 'chapter-10',
  title: `chapter_ten.title`,
  image: '/assets/images/chapter-9-cover.jpg',
  intros: ['intro-1', 'intro-2'],
  lessons: [
    'opening-a-channel-1',
    'opening-a-channel-2',
    'opening-a-channel-3',
    'opening-a-channel-4',
    'opening-a-channel-5',
    'making-a-payment-1',
    'making-a-payment-2',
    'making-a-payment-3',
    'making-a-payment-4',
    'making-a-payment-5',
  ],
  outros: ['outro-1'],
  challenges: ['opening-a-channel-1', 'making-a-payment-1'],
}
