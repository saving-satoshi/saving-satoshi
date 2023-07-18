'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { useState } from 'react'
import { Button } from 'shared'
import { ProfileWithHashPower } from 'types'
import { Card, HashFrequency, Text, HashrateChallenge } from 'ui'
import Profile from 'ui/common/Profile'
import clsx from 'clsx'

export const metadata = {
  title: 'chapter_three.pool_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3POL1',
}

export default function Pool1({ lang }) {
  const t = useTranslations(lang)
  const [step, setStep] = useState(0)
  const [protagonistsBlockAmount, setProtagonistsBlockAmount] = useState(0)
  const [antagonistsBlockAmount, setAntagonistsBlockAmount] = useState(0)

  const saveAndProceed = useSaveAndProceed()

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 30

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: '/assets/avatars/1.png',
      hashpower: 4395,
      color: '#F3AB29',
      value: step === 0 ? 0 : 1,
    },
    {
      username: 'Mining Maniacs',
      avatar: '/assets/avatars/2.png',
      hashpower: 5054,
      color: '#FE5329',
      value: step === 0 ? 0 : 1,
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/3.png',
      hashpower: 7911,
      color: '#62BFB7',
      value: step === 0 ? 0 : protagonistsBlockAmount,
    },
    {
      username: 'Coin Crunchers',
      avatar: '/assets/avatars/4.png',
      hashpower: 2857,
      color: '#85BF09',
      value: step === 0 ? 0 : 1,
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/5.png',
      hashpower: 18599,
      color: '#7E002E',
      value: step === 0 ? 0 : antagonistsBlockAmount,
    },
  ]

  const PROFILES: ProfileWithHashPower[] = [...PROTAGONISTS, ...ANTAGONISTS]

  const handleStepUpdate = (newStep: number) => {
    setStep(newStep)
  }

  const handleProtagonsitBlockUpdate = (newBlock: number) => {
    setProtagonistsBlockAmount(newBlock)
  }

  const handleAntagonsitBlockUpdate = (newBlock: number) => {
    setAntagonistsBlockAmount(newBlock)
  }

  return (
    <div className="flex flex-col items-center gap-[30px] py-[30px] px-[15px] md:py-[75px] md:px-[75px]">
      <HashrateChallenge
        totalBlocks={TOTAL_BLOCKS}
        blockRatio={BLOCK_RATIO}
        step={step}
        onStepUpdate={handleStepUpdate}
        onProtagonistUpdate={handleProtagonsitBlockUpdate}
        onAntagonistUpdate={handleAntagonsitBlockUpdate}
        protagonists={PROTAGONISTS}
        antagonists={ANTAGONISTS}
        profiles={PROFILES.map((profile, i) => (
          <Profile
            key={i}
            username={profile.username}
            avatar={profile.avatar}
            description={profile.description}
          >
            <Card className="flex">
              <span
                className={clsx('fade-in font-nunito text-[15px] font-bold', {
                  'text-white text-opacity-25': step === 0,
                  'fade-in text-[#EDA081]': step !== 0,
                })}
              >
                Blocks found
              </span>
              <span
                className={clsx(
                  'fade-in font-space-mono text-[15px] font-normal text-white',
                  {
                    'text-opacity-25': step === 0,
                  }
                )}
              >
                {PROFILES[i].value}
              </span>
            </Card>
            <Card className="flex gap-4">
              <span className="fade-in w-[103px] font-nunito text-[15px] font-bold text-[#EDA081]">
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
              <span
                className={clsx('fade-in font-nunito text-[15px] font-bold', {
                  'text-white text-opacity-25': step === 0,
                  'fade-in text-[#EDA081]': step !== 0,
                })}
              >
                Hashes
              </span>
              <span className="fade-in font-nunito text-[15px] font-bold text-white text-opacity-25">
                <div
                  className={clsx('font-space-mono font-normal', {
                    'text-white/25': step === 0,
                    'fade-in text-white': step !== 0,
                  })}
                >
                  {step === 0
                    ? 0
                    : (
                        profile.hashpower /
                        10 ** (profile.hashpower.toString().length - 2)
                      ).toFixed(2)}
                  {step !== 0 && (
                    <span className="fade-in text-white/50">
                      *10<sup>{profile.hashpower.toString().length + 11}</sup>
                    </span>
                  )}
                </div>
              </span>
            </Card>
          </Profile>
        ))}
      >
        {step === 0 && (
          <span className="flex flex-col items-start gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
            <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
              {t('chapter_three.pool_one.step_zero_heading')}
            </Text>
            <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
              {t('chapter_three.pool_one.step_zero_paragraph_one')}
            </Text>
          </span>
        )}
        {step === 2 && (
          <>
            <span className="flex flex-col items-start gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.pool_one.step_two_heading')}
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.pool_one.step_two_paragraph_one')}
              </Text>
            </span>
            <Button onClick={saveAndProceed} classes="max-md:w-full">
              {t('shared.next')}
            </Button>
          </>
        )}
      </HashrateChallenge>
    </div>
  )
}
