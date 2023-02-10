import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter5({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>
        Wow, you proved Vanderpoole wrong. Everyone’s talking about it and
        you’re famous. Meanwhile, Vanderpoole has disappeared and he’s silent on
        social media. Amidst the fracas, a reporter reaches out to you. They’ve
        received a tip about Vanderpoole and what he’s planning.
      </Text>
      <Text>
        The only problem is they are running low on funds and need to pay for
        travel. Luckily, they have an emergency fund in a geographically
        distributed multisig, but they’ve never used it before. Can you help
        them recover their funds?
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 4,
  slug: 'chapter-5',
  title: 'chapter_five.title',
  image: '/assets/images/chapter-5-cover.jpg',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
