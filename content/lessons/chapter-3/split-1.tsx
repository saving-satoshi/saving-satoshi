'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { Card, HashFrequency, Text, HashrateChallenge } from 'ui'
import { sleep } from 'utils'
import Profile from 'ui/common/Profile'
import ProfileChip, { ProfileChipVariant } from 'components/ProfileChip'
import clsx from 'clsx'
import { useAuthContext } from 'providers/AuthProvider'
import { cssVarThemeChange } from 'lib/themeSelector'

export const metadata = {
  title: 'chapter_three.pool_two.title',
  theme: 'solo-1-theme',
  secondaryTheme: 'solo-1-secondary-theme',
  key: 'CH3SPL1',
}

export default function Split1({ lang }) {
  const { account } = useAuthContext()
  const t = useTranslations(lang)
  const [step, setStep] = useState(0)
  const [protagonistHash, setProtagonistHash] = useState([0, 0, 0, 0])
  const [antagonistHash, setAntagonistHash] = useState(0)
  const [showText, setShowText] = useState(true)

  const saveAndProceed = useSaveAndProceed()

  const poolThreeOutcome = {
    blocks: [13, 6, 29, 10, 42],
  }

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 40

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: account?.avatar,
      hashpower: 4395,
      nonce: protagonistHash[0],
      color: '#F3AB29',
      value: step === 0 ? 0 : poolThreeOutcome.blocks[0],
    },
    {
      username: 'Mining Maniacs',
      avatar: '/assets/avatars/2.png',
      hashpower: 4054,
      nonce: protagonistHash[1],
      color: '#FE5329',
      value: step === 0 ? 0 : poolThreeOutcome.blocks[1],
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/3.png',
      hashpower: 7911,
      nonce: protagonistHash[2],
      color: '#62BFB7',
      value: step === 0 ? 0 : poolThreeOutcome.blocks[2],
    },
    {
      username: 'Coin Crunchers',
      avatar: '/assets/avatars/4.png',
      hashpower: 3857,
      nonce: protagonistHash[3],
      color: '#85BF09',
      value: step === 0 ? 0 : poolThreeOutcome.blocks[3],
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/bitrey.png',
      hashpower: 18599,
      nonce: antagonistHash,
      color: '#7E002E',
      value: step === 0 ? 0 : poolThreeOutcome.blocks[4],
    },
  ]

  const handleStepUpdate = async (newStep: number) => {
    setShowText(false)
    await sleep(325)
    setStep(newStep)
    setShowText(true)
  }

  const handleProtagonsitBlockUpdate = () => {}

  const handleAntagonsitBlockUpdate = () => {}

  useEffect(() => {
    let intervals: NodeJS.Timeout[] = []

    if (step === 1) {
      // Set up intervals for each protagonist
      for (let i = 0; i < PROTAGONISTS.length; i++) {
        const interval: NodeJS.Timeout = setInterval(() => {
          setProtagonistHash((prevHashes) => {
            const updatedHashes = [...prevHashes]
            updatedHashes[i] += Math.floor(
              Math.random() * PROTAGONISTS[i].hashpower
            )
            return updatedHashes
          })
        }, 40)
        intervals.push(interval)
      }
    }

    return () => {
      // Clear all intervals when the component unmounts or step changes
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [step])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentAntagonistHash = antagonistHash
    if (step === 1) {
      interval = setInterval(() => {
        currentAntagonistHash =
          currentAntagonistHash +
          Math.floor(Math.random() * ANTAGONISTS[0].hashpower)
        setAntagonistHash(currentAntagonistHash)
      }, 40)
    }
    return () => clearInterval(interval)
  }, [step])

  useEffect(() => {
    cssVarThemeChange({
      '--CH3SOL1-bg': '#411e4f',
      '--CH3SOL1-gradient-start': '#3C1843',
      '--CH3SOL1-gradient-stop': '#45235a',
    })
  }, [])

  return (
    <div className="flex flex-col items-center gap-[30px] px-[15px] py-[30px] md:px-[75px] md:py-[75px]">
      <HashrateChallenge
        step={step}
        totalBlocks={TOTAL_BLOCKS}
        blockRatio={BLOCK_RATIO}
        onStepUpdate={handleStepUpdate}
        onProtagonistUpdate={handleProtagonsitBlockUpdate}
        onAntagonistUpdate={handleAntagonsitBlockUpdate}
        protagonists={PROTAGONISTS}
        antagonists={ANTAGONISTS}
        contributionBarOpacity="fade-in-out opacity-[.2]"
        fixedData={poolThreeOutcome}
        profiles={PROTAGONISTS.map((profile, i) => (
          <Profile
            key={i}
            username={profile.username}
            avatar={profile.avatar}
            chip={
              <ProfileChip
                className="relative -top-4"
                image="/assets/images/chapter-1-holocat-cropped.jpg"
                variant={ProfileChipVariant.Ranking}
                value={i + 1}
              />
            }
          >
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
                {profile.value}
              </span>
            </Card>
            <Card className="flex">
              <span
                className={clsx('fade-in font-nunito text-[15px] font-bold', {
                  'text-white text-opacity-25': step === 0,
                  'fade-in text-[#EDA081]': step !== 0,
                })}
              >
                Partial solutions
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
                        profile.nonce! /
                        10 ** (profile.nonce!.toString().length - 2)
                      ).toFixed(2)}
                  {step !== 0 && (
                    <span className="fade-in text-white/50">
                      *10
                      <sup>
                        {(profile.nonce! * profile.hashpower).toString()
                          .length + 6}
                      </sup>
                    </span>
                  )}
                </div>
              </span>
            </Card>
          </Profile>
        ))}
      >
        <div className={`flex flex-col ${showText ? 'fade-in' : 'fade-out'}`}>
          {step === 0 && (
            <span className="flex flex-col items-start gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                Let's review everyone's efforts
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                We will re-run the battle. This time we will only focus on our
                pool, specfifcally on the number of partial solutions each miner
                found.
              </Text>
            </span>
          )}
          {step === 2 && (
            <span className="flex flex-col items-center gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                Let's do the math
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                Take a look at the numbers above and see if you can find a fair
                way to split up the rewards. Figured it out? Let's go over it
                step by step.
              </Text>
              <Button
                onClick={() => handleStepUpdate(3)}
                style="outline"
                classes="w-full md:w-auto mt-[20px]"
              >
                {t('hero.tell_more')}
              </Button>
            </span>
          )}
          {step === 3 && (
            <span className="flex flex-col items-center gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                Hash rate percentage
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                Take a look at the numbers above and see if you can find a fair
                way to split up the rewards. Figured it out? Let's go over it
                step by step.
              </Text>
              <Button
                onClick={() => handleStepUpdate(4)}
                style="outline"
                classes="w-full md:w-auto mt-[20px]"
              >
                {t('hero.tell_more')}
              </Button>
            </span>
          )}
          {step === 4 && (
            <span className="flex flex-col items-center gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                Block found percentage
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                Take a look at the numbers above and see if you can find a fair
                way to split up the rewards. Figured it out? Let's go over it
                step by step.
              </Text>
              <Button
                onClick={() => handleStepUpdate(5)}
                style="outline"
                classes="w-full md:w-auto mt-[20px]"
              >
                {t('hero.tell_more')}
              </Button>
            </span>
          )}
          {step === 5 && (
            <span className="flex flex-col items-center gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                Partial solution percentage
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                Take a look at the numbers above and see if you can find a fair
                way to split up the rewards. Figured it out? Let's go over it
                step by step.
              </Text>
              <Button
                onClick={() => handleStepUpdate(6)}
                style="outline"
                classes="w-full md:w-auto mt-[20px]"
              >
                {t('hero.tell_more')}
              </Button>
            </span>
          )}
          {step === 6 && (
            <span className="flex flex-col items-center gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                Splitting the rewards
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                Take a look at the numbers above and see if you can find a fair
                way to split up the rewards. Figured it out? Let's go over it
                step by step.
              </Text>
              <Button
                onClick={saveAndProceed}
                classes="w-full md:w-auto mt-[20px]"
              >
                {t('shared.next')}
              </Button>
            </span>
          )}
        </div>
      </HashrateChallenge>
    </div>
  )
}
