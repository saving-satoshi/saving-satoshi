import { Chapter, Text } from 'ui'
import { useTranslations } from 'hooks'

export default function Chapter1() {
  const t = useTranslations()

  return (
    <Chapter metadata={metadata}>
      <Text>{t('chapter_one.paragraph_one')}</Text>
      <Text>{t('chapter_one.paragraph_two')}</Text>
      <Text>{t('chapter_one.paragraph_three')}</Text>
    </Chapter>
  )
}

export const translations = {
  en: {
    chapter_one: {
      paragraph_one:
        'The year is 2139. The very last bitcoin is slated to be mined in two weeks. For months, a final countdown has been taking place in Times Square for the last block when there will be officially no more bitcoin issued.',
      paragraph_two: `And then suddenly, the network comes to a crawl. Instead of the normal ten-minute block interval, blocks are coming in just a few times a day, if not longer. Your mom's bitcoin node stops syncing. The media starts reporting on the situation. It's everywhere on social media.`,
      paragraph_three: `The price of bitcoin is falling. There is a knock at your door, and when you open it, a yellowed, age-weathered envelope has been left for you. There's no name or return address. What could be inside?`,
      tooltip: 'abc',
    },
  },
}

export const metadata = {
  position: 0,
  slug: 'chapter-1',
  intro: 'reaping-rewards',
  title: 'Secrets in plain sight',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch1.png',
  lessons: [
    'genesis',
    'genesis-2',
    'transacting',
    'transacting-1',
    'transacting-2',
    'done',
  ],
  challenges: ['genesis', 'transacting'],
}
