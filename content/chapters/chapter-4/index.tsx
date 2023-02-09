import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter4({ locale }) {
  const t = useTranslations(locale)

  return (
    <Chapter metadata={metadata} locale={locale}>
      <Text>{t('chapter_four.paragraph_one')}</Text>
      <Text>{t('chapter_four.paragraph_two')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 3,
  slug: 'chapter-4',
  title: 'chapter_four.title',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch4.png',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
