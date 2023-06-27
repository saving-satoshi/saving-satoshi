'use client'

import { useTranslations } from 'hooks'
import { MiningProfiles, Text } from 'ui'

export const metadata = {
  title: 'chapter_two.pool_one.title',
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
      <div className="flex h-full max-h-[69px] w-full max-w-[800px] flex-col items-start gap-[10px] text-white">
        <div className="flex items-center justify-between gap-[10px] self-stretch py-[2px]">
          <span className="h-[25px] text-left font-nunito text-[18px] font-semibold text-white">
            10 blocks
          </span>
          <span className="h-[25px] text-right font-nunito text-[18px] font-semibold text-white">
            10 blocks
          </span>
        </div>
        {/*Contribution Bar added below*/}
        <div className="h-[30px] w-full bg-red">~</div>
      </div>
      <MiningProfiles profiles={profiles} />
      <span className="flex flex-col items-start gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
        <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
          Here we go
        </Text>
        <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
          When you combine your hash rate with the other pool operator’s, can
          you stand up against Bitrey?
        </Text>
      </span>
    </div>
  )
}
