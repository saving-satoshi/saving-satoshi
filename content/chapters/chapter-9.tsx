import { Chapter, Text } from 'ui'

export default function Chapter9() {
  return (
    <Chapter metadata={metadata}>
      <Text>
        At last, the moment has arrived. The final block has been mined to much
        celebration.
      </Text>

      <Text>
        During the festivities, you get a strange text. It’s from a number you
        don’t recognize. The message tells you to run and hide. Vanderpoole and
        his henchmen have figured where you are, and they’re coming to steal
        your bitcoin.
      </Text>

      <Text>
        Don’t panic, you tell yourself. Think. What kind of trap can you set for
        them?
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 8,
  slug: 'chapter-9',
  title: `Don't compute, verify.`,
  image: '/assets/images/chapter-9-cover.jpg',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
