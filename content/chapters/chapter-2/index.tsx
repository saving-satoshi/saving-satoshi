import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter2({ locale }) {
  const t = useTranslations(locale)

  return (
    <Chapter metadata={metadata} locale={locale}>
      <Text>{t('chapter_two.paragraph_one')}</Text>
      <Text>{t('chapter_two.paragraph_two')}</Text>
    </Chapter>
  )
}

export const metadata = {
  position: 1,
  slug: 'chapter-2',
  title: 'chapter_two.title',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch2.png',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
