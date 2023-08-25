'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { Card, HashFrequency, Text, HashrateChallenge, BoxDisplayer } from 'ui'
import { sleep } from 'utils'
import Profile from 'ui/common/Profile'
import ProfileChip, { ProfileChipVariant } from 'components/ProfileChip'
import clsx from 'clsx'
import { useAuthContext } from 'providers/AuthProvider'
import { cssVarThemeChange } from 'lib/themeSelector'
import { getData } from 'api/data'

export const metadata = {
  title: 'chapter_three.pool_two.title',
  theme: 'solo-1-theme',
  secondaryTheme: 'solo-1-secondary-theme',
  key: 'CH3SPL2',
}

export default function Split2({ lang }) {
  const { account } = useAuthContext()
  const t = useTranslations(lang)
  const [step, setStep] = useState(0)
  const [outcome, setOutcome] = useState({ protagonists: [], antagonists: [] })
  const [protagonistsBlockAmount, setProtagonistsBlockAmount] = useState([
    0, 0, 0, 0,
  ])
  const [antagonistsBlockAmount, setAntagonistsBlockAmount] = useState(0)
  const [protagonistHash, setProtagonistHash] = useState([0, 0, 0, 0])
  const [antagonistHash, setAntagonistHash] = useState(0)
  const [showText, setShowText] = useState(true)

  const saveAndProceed = useSaveAndProceed()

  async function previousLessonOutcome(lessonKey) {
    const PoolThreeOutcome = await getData(lessonKey)

    setOutcome(PoolThreeOutcome.data)
  }

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 40

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: account?.avatar,
      hashpower: 4395,
      hashes: protagonistHash[0],
      color: '#F3AB29',
      value:
        step === 0
          ? 0
          : Math.min(protagonistsBlockAmount[0], outcome.protagonists[0]),
    },
    {
      username: 'Mining Maniacs',
      avatar: '/assets/avatars/2.png',
      hashpower: 4054,
      hashes: protagonistHash[1],
      color: '#FE5329',
      value:
        step === 0
          ? 0
          : Math.min(protagonistsBlockAmount[1], outcome.protagonists[1]),
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/3.png',
      hashpower: 7911,
      hashes: protagonistHash[2],
      color: '#62BFB7',
      value:
        step === 0
          ? 0
          : Math.min(protagonistsBlockAmount[2], outcome.protagonists[2]),
    },
    {
      username: 'Coin Crunchers',
      avatar: '/assets/avatars/4.png',
      hashpower: 3857,
      hashes: protagonistHash[3],
      color: '#85BF09',
      value:
        step === 0
          ? 0
          : Math.min(protagonistsBlockAmount[3], outcome.protagonists[3]),
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/bitrey.png',
      hashpower: 18599,
      hashes: antagonistHash,
      color: '#7E002E',
      value:
        step === 0
          ? 0
          : Math.min(antagonistsBlockAmount, outcome.antagonists[0]),
    },
  ]

  const handleStepUpdate = async (newStep: number) => {
    setShowText(false)
    await sleep(325)
    setStep(newStep)
    setShowText(true)
  }

  const handleProtagonsitBlockUpdate = () => {
    for (let i = 0; i < PROTAGONISTS.length; i++) {
      setProtagonistsBlockAmount((newBlock) => {
        const updatedBlocks = [...newBlock]
        updatedBlocks[i] += Math.floor(
          Math.round(Math.random() * (PROTAGONISTS[i].hashpower * 0.00015))
        )
        return updatedBlocks
      })
    }
  }

  const handleAntagonsitBlockUpdate = (newBlock: number) => {
    setAntagonistsBlockAmount(newBlock)
  }

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
    previousLessonOutcome('CH3POL3')
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
        speed={1}
        contributionBarOpacity="fade-in-out opacity-[.2]"
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
            <Card className="flex self-stretch py-[10px]">
              <span className="fade-in w-[103px] font-nunito text-[15px] font-bold text-[#EDA081]">
                Hashrate
              </span>
              {step >= 3 && (
                <BoxDisplayer
                  className="fade-in text-[13px]"
                  transparent={step !== 3}
                >
                  {(
                    100 *
                    (profile.hashpower /
                      (PROTAGONISTS[0].hashpower +
                        PROTAGONISTS[1].hashpower +
                        PROTAGONISTS[2].hashpower +
                        PROTAGONISTS[3].hashpower))
                  ).toFixed(2)}
                  %
                </BoxDisplayer>
              )}
              <HashFrequency
                className="font-space-mono text-[15px]"
                disabled={false}
                step={0}
                hashPower={profile.hashpower}
              />
            </Card>
            <Card className="flex self-stretch py-[10px]">
              <span
                className={clsx('fade-in font-nunito text-[15px] font-bold', {
                  'text-white text-opacity-25': step === 0,
                  'fade-in text-[#EDA081]': step !== 0,
                })}
              >
                Blocks found
              </span>
              {step >= 4 && (
                <BoxDisplayer
                  className="fade-in text-[13px]"
                  transparent={step !== 4}
                >
                  {(
                    100 *
                    (profile.value /
                      (PROTAGONISTS[0].value +
                        PROTAGONISTS[1].value +
                        PROTAGONISTS[2].value +
                        PROTAGONISTS[3].value))
                  ).toFixed(2)}
                  %
                </BoxDisplayer>
              )}
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
            <Card className="flex self-stretch py-[10px]">
              <span
                className={clsx('fade-in font-nunito text-[15px] font-bold', {
                  'text-white text-opacity-25': step === 0,
                  'fade-in text-[#EDA081]': step !== 0,
                })}
              >
                Shares
              </span>
              {step >= 5 && (
                <BoxDisplayer
                  className="fade-in text-[13px]"
                  transparent={step !== 5}
                >
                  {(
                    100 *
                    (profile.hashes /
                      (PROTAGONISTS[0].hashes +
                        PROTAGONISTS[1].hashes +
                        PROTAGONISTS[2].hashes +
                        PROTAGONISTS[3].hashes))
                  ).toFixed(2)}
                  %
                </BoxDisplayer>
              )}
              <span className="fade-in font-nunito text-[15px] font-bold text-white text-opacity-25">
                <div
                  className={clsx({
                    'text-white/25': step === 0 || profile.hashes === 0,
                    'fade-in text-white': step !== 0,
                  })}
                >
                  {Math.floor(profile.hashes / 100).toLocaleString()}
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