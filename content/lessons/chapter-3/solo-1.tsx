'use client'

import { useTranslations, useProceed, useMediaQuery } from 'hooks'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { ProfileWithHashPower } from 'types'
import {
  Card,
  HashFrequency,
  Text,
  HashrateChallenge,
  Profile,
  Exponent,
} from 'ui'
import clsx from 'clsx'
import { sleep } from 'utils'
import { cssVarThemeChange } from 'lib/themeSelector'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'

export const metadata = {
  title: 'chapter_three.solo_one.title',
  navigation_title: 'chapter_three.pool_three.nav_title',
  theme: 'solo-1-theme',
  secondaryTheme: 'solo-1-secondary-theme',
  key: 'CH3SOL1',
}

export default function Solo1({ lang }) {
  const [account] = useAtom(accountAtom)
  const t = useTranslations(lang)
  const [step, setStep] = useState(0)
  const [showText, setShowText] = useState(true)
  const [protagonistHash, setProtagonistHash] = useState(0)
  const [antagonistHash, setAntagonistHash] = useState(0)
  const [protagonistsBlockAmount, setProtagonistsBlockAmount] = useState(0)
  const [antagonistsBlockAmount, setAntagonistsBlockAmount] = useState(0)

  const isSmallScreen = useMediaQuery({ width: 767 })
  const isMediumScreen = useMediaQuery({ width: 1098 })

  const proceed = useProceed()

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 11

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: account?.avatar,
      hashpower: 4395,
      hashes: protagonistHash,
      color: '#F3AB29',
      value: protagonistsBlockAmount,
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/bitrey.jpg',
      hashpower: 18599,
      hashes: antagonistHash,
      color: '#7E002E',
      value: Math.min(antagonistsBlockAmount, TOTAL_BLOCKS - BLOCK_RATIO + 5),
    },
  ]

  const PROFILES: ProfileWithHashPower[] = [...PROTAGONISTS, ...ANTAGONISTS]

  const handleStepUpdate = async (newStep: number) => {
    setShowText(false)
    await sleep(325)
    setStep(newStep)
    setShowText(true)

    if (step >= 1) {
      const rootStyles = document.documentElement.style
      rootStyles.setProperty('--CH3SOL1-bg', '#691947')
      rootStyles.setProperty('--CH3SOL1-gradient-start', '#691947')
      rootStyles.setProperty('--CH3SOL1-gradient-stop', '#691947')
    }
  }

  const handleProtagonsitBlockUpdate = (newBlock: number) => {
    setProtagonistsBlockAmount(newBlock)
  }

  const handleAntagonsitBlockUpdate = (newBlock: number) => {
    setAntagonistsBlockAmount(newBlock)
  }

  useEffect(() => {
    let protagonistInterval: NodeJS.Timeout
    let antagonistInterval: NodeJS.Timeout
    let currentProtagonistHash = protagonistHash
    let currentAntagonistHash = antagonistHash
    if (step === 1) {
      protagonistInterval = setInterval(() => {
        currentProtagonistHash =
          currentProtagonistHash +
          Math.floor(Math.random() * PROTAGONISTS[0].hashpower)
        setProtagonistHash(currentProtagonistHash)
      }, 40)

      antagonistInterval = setInterval(() => {
        currentAntagonistHash =
          currentAntagonistHash +
          Math.floor(Math.random() * ANTAGONISTS[0].hashpower)
        setAntagonistHash(currentAntagonistHash)
      }, 40)
    }
    return () => {
      clearInterval(protagonistInterval)
      clearInterval(antagonistInterval)
    }
  }, [step])

  useEffect(() => {
    cssVarThemeChange({
      '--CH3SOL1-bg': '#411e4f',
      '--CH3SOL1-gradient-start': '#3C1843',
      '--CH3SOL1-gradient-stop': '#45235a',
    })
  }, [])

  return (
    <div className="fade-in px-[20px] py-[30px] md:my-auto md:py-[75px]">
      <div className="mx-auto flex max-w-[1340px] flex-col items-center justify-center gap-5 md:flex-row-reverse md:flex-wrap 2xl:gap-8">
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
              avatarSize={isSmallScreen ? 50 : 100}
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
                  <Exponent
                    className="font-space-mono font-normal"
                    step={step}
                    hashes={profile.hashes}
                  />
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
          <div className={`flex ${showText ? 'fade-in' : 'fade-out'}`}>
            {step === 0 && (
              <span className="flex flex-col gap-[10px] md:max-w-[600px] lg:max-w-[400px] ">
                <Text
                  className={`font-nunito text-[24px] font-bold ${
                    isMediumScreen ? 'text-center' : 'text-left'
                  }`}
                >
                  {t('chapter_three.solo_one.step_zero_heading')}
                </Text>
                <Text
                  className={`font-nunito text-[18px] font-semibold ${
                    isMediumScreen ? 'text-center' : 'text-left'
                  }`}
                >
                  {t('chapter_three.solo_one.step_zero_paragraph_one')}
                </Text>
              </span>
            )}
            {step === 1 && (
              <span className="flex flex-col gap-[10px] md:max-w-[600px] lg:max-w-[400px]">
                <Text
                  className={`self-stretch font-nunito text-[24px] font-bold ${
                    isMediumScreen ? 'text-center' : 'text-left'
                  }`}
                >
                  {t('chapter_three.solo_one.step_one_heading')}
                </Text>
                <Text
                  className={`self-stretch font-nunito text-[18px] font-semibold ${
                    isMediumScreen ? 'text-center' : 'text-left'
                  }`}
                >
                  {t('chapter_three.solo_one.step_one_paragraph_one')}
                </Text>
              </span>
            )}
            {step === 2 && (
              <span className="flex flex-col gap-[10px] md:max-w-[600px] lg:max-w-[400px]">
                <Text
                  className={`font-nunito text-[24px] font-bold ${
                    isMediumScreen ? 'text-center' : 'text-left'
                  }`}
                >
                  {t('chapter_three.solo_one.step_two_heading')}
                </Text>
                <Text
                  className={`font-nunito text-[18px] font-semibold ${
                    isMediumScreen ? 'text-center' : 'text-left'
                  }`}
                >
                  {t('chapter_three.solo_one.step_two_paragraph_one')}
                </Text>
                <Button
                  onClick={proceed}
                  classes={`${
                    isMediumScreen ? 'self-center' : 'self-start'
                  } w-full md:w-auto max-w-[192px] mt-[20px]`}
                >
                  {t('shared.next')}
                </Button>
              </span>
            )}
          </div>
        </HashrateChallenge>
      </div>
    </div>
  )
}
