import { Chapter, Text } from 'ui'

export default function Chapter2() {
  return (
    <Chapter metadata={metadata}>
      <Text>
        The network outage has to be related to the block subsidy. There’s no
        way this is a coincidence.
      </Text>

      <Text>
        You hop on your computer to do some research on mining when you notice
        something unusual about the few blocks that are being mined. They all
        seem to be coming from the same place, possibly even the same mining
        pool. What happened to the rest of the miners?
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 1,
  slug: 'chapter-2',
  title: 'The 51% attack',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch2.png',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
