import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter3({ locale }) {
  const t = useTranslations(locale)

  return (
    <Chapter metadata={metadata} locale={locale}>
      <Text>{t('chapter_three.paragraph_one')}</Text>
      <Text>{t('chapter_three.paragraph_two')}</Text>
      <Text>{t('chapter_three.paragraph_three')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 2,
  slug: 'chapter-3',
  title: 'chapter_three.title',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch3.png',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
