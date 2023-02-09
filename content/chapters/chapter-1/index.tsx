import { Chapter, Text } from 'ui'
import { useTranslations } from 'hooks'

export default function Chapter1({ locale }) {
  const t = useTranslations(locale)

  return (
    <Chapter metadata={metadata} locale={locale}>
      <Text>{t('chapter_one.paragraph_one')}</Text>
      <Text>{t('chapter_one.paragraph_two')}</Text>
      <Text>{t('chapter_one.paragraph_three')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 0,
  slug: 'chapter-1',
  intro: 'reaping-rewards',
  title: 'chapter_one.title',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch1.png',
  lessons: [
    'genesis-1',
    'genesis-2',
    'transacting-1',
    'transacting-2',
    'transacting-3',
    'done',
  ],
  challenges: ['genesis-1', 'transacting-1'],
}
