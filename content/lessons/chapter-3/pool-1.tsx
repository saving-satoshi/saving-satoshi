'use client'

import { useTranslations } from 'hooks'
import { HashrateChallenge, ProfilesContainer, Text } from 'ui'

export const metadata = {
  title: 'chapter_three.pool_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3POL1',
}

export default function POL1({ lang }) {
  const t = useTranslations(lang)

  const profiles = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className="h-[230px] w-[250px] min-w-[234px] bg-black text-white md:h-[323px] md:w-[234px]"
    >
      Profile {index}
    </span>
  ))

  return (
    <div className="flex flex-col items-center gap-[30px] py-[30px] px-[15px] md:py-[75px] md:px-[75px]">
      <HashrateChallenge profiles={profiles}>
        <span className="flex flex-col items-start gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
          <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
            {t('chapter_three.pool_one.heading')}
          </Text>
          <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
            {t('chapter_three.pool_one.paragraph_one')}
          </Text>
        </span>
      </HashrateChallenge>
    </div>
  )
}
