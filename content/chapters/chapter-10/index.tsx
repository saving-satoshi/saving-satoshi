import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter10({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>
        Trust has been reestablished and more and more of the miners that were
        attacked are coming back online. The halving passes, and the fee market
        is stable.
      </Text>

      <Text>
        There’s just one last question: what to do with all this bitcoin? You
        don’t really need it. What matters to you is the network. We are all
        Satoshi. You decide to release the bitcoin back into the world, starting
        with donating to charities. How can you do that as efficiently as
        possible?
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 9,
  slug: 'chapter-10',
  title: `chapter_ten.title`,
  image: '/assets/images/chapter-10-cover.jpg',
  intros: [],
  lessons: [],
  outros: [],
  challenges: [],
}
