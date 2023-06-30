'use client'

import { useTranslations } from 'hooks'
import { HashrateChallenge, Text } from 'ui'

export const metadata = {
  title: 'chapter_three.solo_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3SOL1',
}

const profiles = Array.from({ length: 2 }, (_, index) => (
  <span
    key={index}
    className="flex h-[263px] w-full self-stretch bg-black text-white md:w-[290px]"
  >
    Profile {index}
  </span>
))

export default function SOL1({ lang }) {
  const t = useTranslations(lang)

  return (
    <div className="my-auto flex flex-col flex-wrap items-center justify-center gap-[30px] self-stretch py-[20px] px-[20px] md:flex-row-reverse md:py-0 md:px-[200px]">
      <HashrateChallenge profiles={profiles} verticalProfiles>
        <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
          <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
            {t('chapter_three.solo_one.heading')}
          </Text>
          <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
            {t('chapter_three.solo_one.paragraph_one')}
          </Text>
        </span>
      </HashrateChallenge>
    </div>
  )
}
