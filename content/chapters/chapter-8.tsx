import { Chapter, Text } from 'ui'

export default function Chapter8() {
  return (
    <Chapter metadata={metadata}>
      <Text>
        Worries about the bitcoin supply have been mostly laid to rest, but one
        concern still lingers in the public mind. While you’ve managed to
        restore confidence in the network, the block subsidy will run out next
        week. Without it, is the network still sustainable or has too much
        damage been done?
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 7,
  slug: 'chapter-8',
  title: 'A matter of sustainability',
  image: '/assets/images/chapter-8-cover.jpg',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
