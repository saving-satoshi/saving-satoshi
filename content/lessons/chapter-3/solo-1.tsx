'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { useState } from 'react'
import { Button } from 'shared'
import { ProfileWithHashPower } from 'types'
import { Card, HashFrequency, Text, HashrateChallenge } from 'ui'
import Profile from 'ui/common/Profile'
import clsx from 'clsx'

export const metadata = {
  title: 'chapter_three.solo_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3SOL1',
}

export default function Solo1({ lang }) {
  const t = useTranslations(lang)
  const [step, setStep] = useState(0)
  const [protagonistsBlockAmount, setProtagonistsBlockAmount] = useState(0)
  const [antagonistsBlockAmount, setAntagonistsBlockAmount] = useState(0)

  const saveAndProceed = useSaveAndProceed()

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 11

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: '/assets/avatars/1.png',
      hashpower: 4395,
      color: '#F3AB29',
      value: step === 0 ? 0 : protagonistsBlockAmount,
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/5.png',
      hashpower: 34421,
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
    <div className="my-auto flex flex-col flex-wrap items-center justify-center gap-[30px] self-stretch py-[20px] px-[20px] md:flex-row-reverse md:py-0 md:px-[200px]">
      <HashrateChallenge
        step={step}
        onStepUpdate={handleStepUpdate}
        onProtagonistUpdate={handleProtagonsitBlockUpdate}
        onAntagonistUpdate={handleAntagonsitBlockUpdate}
        profiles={PROFILES.map((profile, i) => (
          <Profile
            key={i}
            username={profile.username}
            avatar={profile.avatar}
            description={profile.description}
          >
            <Card className="flex gap-4">
              <span className="fade-in w-[159px] font-nunito text-[15px] font-bold text-[#EDA081]">
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
                  {/*This code below is what turns numbers into scientific notation.
                  Perhaps we could create a new component to clean this up as we use this quite often*/}
                  {step === 0
                    ? 0
                    : (
                        profile.hashpower /
                        5 ** (profile.hashpower.toString().length - 2)
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
        verticalProfiles
        protagonists={PROTAGONISTS}
        antagonists={ANTAGONISTS}
        totalBlocks={TOTAL_BLOCKS}
        blockRatio={BLOCK_RATIO}
      >
        {step === 0 && (
          <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
            <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
              {t('chapter_three.solo_one.step_zero_heading')}
            </Text>
            <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
              {t('chapter_three.solo_one.step_zero_paragraph_one')}
            </Text>
          </span>
        )}
        {step === 1 && (
          <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
            <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
              {t('chapter_three.solo_one.step_one_heading')}
            </Text>
            <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
              {t('chapter_three.solo_one.step_one_paragraph_one')}
            </Text>
          </span>
        )}
        {step === 2 && (
          <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
            <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
              {t('chapter_three.solo_one.step_two_heading')}
            </Text>
            <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
              {t('chapter_three.solo_one.step_two_paragraph_one')}
            </Text>
            <Button onClick={saveAndProceed} classes="max-md:w-full mt-[20px]">
              {t('shared.next')}
            </Button>
          </span>
        )}
      </HashrateChallenge>
    </div>
  )
}
