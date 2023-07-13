'use client'

import { useTranslations } from 'hooks'
import { ProfileWithHashPower } from 'types'
import { Card, ContributionBar, HashFrequency, Text } from 'ui'
import Profile from 'ui/common/Profile'

export const metadata = {
  title: 'chapter_three.pool_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3POL1',
}

const TOTAL_BLOCKS = 100

const PROTAGONISTS = [
  {
    username: 'You',
    avatar: '/assets/avatars/1.png',
    hashpower: 4395,
    color: '#F3AB29',
    value: TOTAL_BLOCKS * 0.1,
  },
  {
    username: 'Mining Maniacs',
    avatar: '/assets/avatars/2.png',
    hashpower: 5054,
    color: '#FE5329',
    value: TOTAL_BLOCKS * 0.1,
  },
  {
    username: 'Hash Hoppers',
    avatar: '/assets/avatars/3.png',
    hashpower: 7911,
    color: '#62BFB7',
    value: TOTAL_BLOCKS * 0.1,
  },
  {
    username: 'Coin Crunchers',
    avatar: '/assets/avatars/4.png',
    hashpower: 2857,
    color: '#85BF09',
    value: TOTAL_BLOCKS * 0.1,
  },
]

const ANTAGONISTS = [
  {
    username: 'BitRey',
    avatar: '/assets/avatars/5.png',
    hashpower: 18599,
    color: '#7E002E',
    value: TOTAL_BLOCKS * 0.3,
  },
]

const PROFILES: ProfileWithHashPower[] = [...PROTAGONISTS, ...ANTAGONISTS]

export default function POL1({ lang }) {
  const t = useTranslations(lang)

  return (
    <div className="flex flex-col items-center gap-[30px] px-[15px] py-[30px] md:px-[75px] md:py-[75px]">
      <div className="flex h-full max-h-[69px] w-full max-w-[800px] flex-col items-start gap-[10px] text-white">
        <div className="flex items-center justify-between gap-[10px] self-stretch py-[2px]">
          <span className="h-[25px] text-left font-nunito text-[18px] font-semibold text-white">
            <span>
              {PROTAGONISTS.reduce((acc, profile) => acc + profile.value, 0)}
            </span>
            <span> blocks</span>
          </span>
          <span className="h-[25px] text-right font-nunito text-[18px] font-semibold text-white">
            <span>
              {ANTAGONISTS.reduce((acc, profile) => acc + profile.value, 0)}
            </span>
            <span> blocks</span>
          </span>
        </div>
        <ContributionBar
          total={TOTAL_BLOCKS}
          protagonists={PROTAGONISTS}
          antagonists={ANTAGONISTS}
        />
      </div>
      <div className="flex gap-[30px]">
        {PROFILES.map((profile, i) => (
          <Profile
            key={i}
            username={profile.username}
            avatar={profile.avatar}
            description={profile.description}
          >
            <Card className="flex">
              <span className="fade-in font-nunito text-[15px] font-bold text-white text-opacity-25">
                Blocks found
              </span>
              <span className="fade-in font-nunito text-[15px] font-bold text-white text-opacity-25">
                0
              </span>
            </Card>
            <Card className="flex gap-4">
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
      <span className="flex flex-col items-start gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
        <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
          {t('chapter_three.pool_one.heading')}
        </Text>
        <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
          {t('chapter_three.pool_one.paragraph_one')}
        </Text>
      </span>
    </div>
  )
}
