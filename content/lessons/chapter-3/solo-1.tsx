'use client'

import { useTranslations } from 'hooks'
import { ProfileWithHashPower } from 'types'
import { Card, HashFrequency, Text } from 'ui'
import Profile from 'ui/common/Profile'

export const metadata = {
  title: 'chapter_three.solo_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3SOL1',
}

const PROFILES: ProfileWithHashPower[] = [
  { name: 'You', avatar: '/assets/avatars/1.png', hashpower: 4395 },
  { name: 'BitRey', avatar: '/assets/avatars/5.png', hashpower: 34421 },
]

export default function SOL1({ lang }) {
  const t = useTranslations(lang)

  return (
    <div className="my-auto flex flex-col items-center justify-center gap-[30px] self-stretch px-[20px] py-[20px] md:flex-row-reverse md:py-0 lg:px-[200px]">
      <div className="flex w-full flex-col">
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

        <div className="mt-[30px] flex gap-[30px]">
          {PROFILES.map((profile, i) => (
            <Profile
              key={i}
              name={profile.name}
              avatar={profile.avatar}
              description={profile.description}
            >
              <Card className="flex">
                <span className="fade-in font-nunito text-[15px] font-bold text-[#EDA081]">
                  Hashrate
                </span>
                <HashFrequency
                  className="font-space-mono text-[15px]"
                  disabled={false}
                  step={0}
                  hashPower={profile.hashpower}
                />
              </Card>
              <Card className="flex">
                <span className="fade-in font-nunito text-[15px] font-bold text-white text-opacity-25">
                  Hashes
                </span>
                <span className="fade-in font-nunito text-[15px] font-bold text-white text-opacity-25">
                  0
                </span>
              </Card>
            </Profile>
          ))}
        </div>
      </div>

      <span className="flex w-full flex-col items-start gap-[10px]">
        <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
          {t('chapter_three.solo_one.heading')}
        </Text>
        <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
          {t('chapter_three.solo_one.paragraph_one')}
        </Text>
      </span>
    </div>
  )
}
