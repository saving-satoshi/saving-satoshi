import { Chapter, Text } from 'ui'

export default function Chapter10() {
  return (
    <Chapter metadata={metadata}>
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
  title: `10 billion connections`,
  image: '/assets/images/chapter-10-cover.jpg',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
