'use client'

import { useTranslations, useProceed, useMediaQuery } from 'hooks'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { Card, HashFrequency, Text, HashrateChallenge, BoxDisplayer } from 'ui'
import { sleep } from 'utils'
import Profile from 'ui/common/Profile'
import ProfileChip, { ProfileChipVariant } from 'components/ProfileChip'
import clsx from 'clsx'
import { cssVarThemeChange } from 'lib/themeSelector'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'

export const metadata = {
  title: 'chapter_three.split_two.title',
  navigation_title: 'chapter_three.split_two.nav_title',
  theme: 'solo-1-theme',
  secondaryTheme: 'solo-1-secondary-theme',
  key: 'CH3SPL2',
}

export default function Split2({ lang }) {
  const [account] = useAtom(accountAtom)
  const t = useTranslations(lang)
  const isSmallScreen = useMediaQuery({ width: 767 })
  const [step, setStep] = useState(0)
  const [protagonistsBlockAmount, setProtagonistsBlockAmount] = useState([
    0, 0, 0, 0,
  ])
  const [antagonistsBlockAmount, setAntagonistsBlockAmount] = useState(0)
  const [protagonistHash, setProtagonistHash] = useState([0, 0, 0, 0])
  const [antagonistHash, setAntagonistHash] = useState(0)
  const [showText, setShowText] = useState(true)

  const proceed = useProceed()

  const outcome = JSON.parse(
    '{"protagonists": [15, 9, 4, 29], "antagonists": [43]}'
  )

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 40
  const TOTAL_REWARD = 7.41 // The total reward for mining this block

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: account?.avatar,
      hashpower: 4395,
      hashes: protagonistHash[0],
      color: '#F3AB29',
      value: Math.min(protagonistsBlockAmount[0], outcome.protagonists[0]),
    },
    {
      username: 'Mining Maniacs',
      avatar: '/assets/avatars/mining-maniacs.jpg',
      hashpower: 4054,
      hashes: protagonistHash[1],
      color: '#FE5329',
      value: Math.min(protagonistsBlockAmount[1], outcome.protagonists[1]),
    },
    {
      username: 'Coin Crunchers',
      avatar: '/assets/avatars/coin-crunchers.jpg',
      hashpower: 3857,
      hashes: protagonistHash[2],
      color: '#62BFB7',
      value: Math.min(protagonistsBlockAmount[2], outcome.protagonists[2]),
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/hash-hoppers.jpg',
      hashpower: 7911,
      hashes: protagonistHash[3],
      color: '#85BF09',
      value: Math.min(protagonistsBlockAmount[3], outcome.protagonists[3]),
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/bitrey.jpg',
      hashpower: 18599,
      hashes: antagonistHash,
      color: '#7E002E',
      value: Math.min(antagonistsBlockAmount, outcome.antagonists[0]),
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
            updatedHashes[i] += Math.floor(0.51 * PROTAGONISTS[i].hashpower)
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
    if (step >= 2) {
      window.scrollBy(0, 500)
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
    <div className="fade-in flex flex-col items-center gap-[30px] py-[30px] pl-[15px] md:px-[20px] md:py-10">
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
        profileContainerClassName="max-w-[1425px] mx-auto"
        contributionBarOpacity="fade-in-out opacity-[.2]"
        profiles={PROTAGONISTS.map((profile, i) => (
          <Profile
            key={i}
            className="min-w-[300px]"
            username={profile.username}
            avatar={profile.avatar}
            avatarSize={isSmallScreen ? 50 : 100}
            chip={
              <ProfileChip
                className="relative -top-4"
                image="/assets/avatars/holocat.jpg"
                variant={
                  step === 6
                    ? ProfileChipVariant.Balance
                    : ProfileChipVariant.Ranking
                }
                value={
                  step === 6
                    ? (
                        (profile.hashes / // This miners partial shares
                          (PROTAGONISTS[0].hashes + // Divided by the sum of all the partial shares
                            PROTAGONISTS[1].hashes +
                            PROTAGONISTS[2].hashes +
                            PROTAGONISTS[3].hashes)) *
                        TOTAL_REWARD
                      ) // total amount of rewards to be divided
                        .toFixed(2)
                    : i + 1
                }
              />
            }
          >
            <Card className="flex self-stretch py-[10px]">
              <span className="fade-in w-[103px] font-nunito text-[15px] font-bold text-[#EDA081]">
                {t('hashrate.hashrate')}
              </span>
              <div className="flex flex-row gap-x-2.5 md:gap-x-7">
                {step >= 3 && (
                  <BoxDisplayer
                    className="fade-in max-h-fit text-[13px]"
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
              </div>
            </Card>
            <Card className="flex self-stretch py-[10px]">
              <span
                className={clsx('fade-in font-nunito text-[15px] font-bold', {
                  'text-white text-opacity-25': step === 0,
                  'fade-in text-[#EDA081]': step !== 0,
                })}
              >
                {t('hashrate.blocks_found')}
              </span>
              <div className="flex flex-row gap-x-2.5 md:gap-x-7">
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
              </div>
            </Card>
            <Card className="flex self-stretch py-[10px]">
              <span
                className={clsx('fade-in font-nunito text-[15px] font-bold', {
                  'text-white text-opacity-25': step === 0,
                  'fade-in text-[#EDA081]': step !== 0,
                })}
              >
                {t('hashrate.partial_solutions')}
              </span>
              <div className="flex flex-row gap-x-2.5 md:gap-x-7">
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
                <span className="fade-in font-space-mono text-[15px] font-normal text-white text-opacity-25">
                  <div
                    className={clsx({
                      'text-white/25': step === 0 || profile.hashes === 0,
                      'fade-in text-white': step !== 0,
                    })}
                  >
                    {Math.floor(profile.hashes / 100).toLocaleString()}
                  </div>
                </span>
              </div>
            </Card>
          </Profile>
        ))}
      >
        <div
          className={`flex w-full justify-center ${
            showText ? 'fade-in' : 'fade-out'
          }`}
        >
          {step === 0 && (
            <span className="flex flex-col items-start gap-[10px] px-6 md:w-full md:max-w-[690px] md:px-0 md:pt-[20px]">
              <Text className="self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.split_two.step_zero_heading')}
              </Text>
              <Text className="self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.split_two.step_zero_paragraph')}
              </Text>
            </span>
          )}
          {step === 2 && (
            <span className="flex flex-col items-center gap-[10px] px-6 md:w-full md:max-w-[690px] md:px-0 md:pt-[20px]">
              <Text className="self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.split_two.step_two_heading')}
              </Text>
              <Text className="self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.split_two.step_two_paragraph')}
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
            <span className="flex flex-col items-center gap-[10px] px-6 md:w-full md:max-w-[690px] md:px-0 md:pt-[20px]">
              <Text className="self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.split_two.step_three_heading')}
              </Text>
              <Text className="self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.split_two.step_three_paragraph')}
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
            <span className="flex flex-col items-center gap-[10px] px-6 md:w-full md:max-w-[690px] md:px-0 md:pt-[20px]">
              <Text className="self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.split_two.step_four_heading')}
              </Text>
              <Text className="self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.split_two.step_four_paragraph')}
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
            <span className="flex flex-col items-center gap-[10px] px-6 md:w-full md:max-w-[690px] md:px-0 md:pt-[20px]">
              <Text className="self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.split_two.step_five_heading')}
              </Text>
              <Text className="self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.split_two.step_five_paragraph')}
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
            <span className="flex flex-col items-center gap-[10px] px-6 md:w-full md:max-w-[690px] md:px-0 md:pt-[20px]">
              <Text className="text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.split_two.step_six_heading')}
              </Text>
              <Text className="text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.split_two.step_six_paragraph')}
              </Text>
              <Button onClick={proceed} classes="w-full md:w-auto mt-[20px]">
                {t('shared.next')}
              </Button>
            </span>
          )}
        </div>
      </HashrateChallenge>
    </div>
  )
}
