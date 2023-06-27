'use client'

import { useTranslations } from 'hooks'
import { MiningProfiles, Text } from 'ui'

export const metadata = {
  title: 'chapter_two.intro_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3SOL1',
}

export default function SOL1({ lang }) {
  const t = useTranslations(lang)

  const profiles = Array.from({ length: 2 }, (_, index) => (
    <span
      key={index}
      className="flex h-[263px] w-full self-stretch bg-black text-white md:w-[290px]"
    >
      Profile {index}
    </span>
  ))

  return (
    <div className="my-auto flex flex-col flex-wrap items-center justify-center gap-[30px] self-stretch py-[20px] px-[20px] md:flex-row-reverse md:py-0 md:px-[200px]">
      <MiningProfiles profiles={profiles} verticalProfiles>
        <div className="flex h-full max-h-[69px] w-full max-w-[800px] flex-col gap-[10px] text-white">
          <div className="flex items-center justify-between gap-[10px] self-stretch py-[2px]">
            <span className="h-[25px] text-left font-nunito text-[18px] font-semibold text-white">
              10 blocks
            </span>
            <span className="h-[25px] text-right font-nunito text-[18px] font-semibold text-white">
              10 blocks
            </span>
          </div>
          {/*Contribution Bar added below*/}
          <div className="h-[30px] w-full bg-red">Contribution Bar</div>
        </div>
      </MiningProfiles>
      <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
        <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
          Let's give it a try
        </Text>
        <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
          While you’re waiting for the pool operators, you decide to fend off
          BitRey by yourself. Here’s how your hash rate stacks up. How do you
          think this will go?
        </Text>
      </span>
    </div>
  )
}
