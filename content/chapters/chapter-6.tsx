import { Chapter, Text } from 'ui'

export default function Chapter6() {
  return (
    <Chapter metadata={metadata}>
      <Text>
        You get a phone call. It’s the reporter. He tracked down Vanderpoole who
        is hiding on one of his private islands and plotting his revenge.
      </Text>

      <Text>
        Ever since you discredited Vanderpoole, investors have been selling
        Amestris shares en masse and decreasing his net worth. He’s really not
        that rich, after all, and now he is trying to claim your UTXOs belong to
        him.
      </Text>

      <Text>
        The reporter tells you to stay safe, but you’re not too worried. You
        hang up the phone, but there’s a problem: it’s been hacked.
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 5,
  slug: 'chapter-6',
  title: 'Offense is the best defense',
  image: '/assets/images/chapter-6-cover.jpg',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
