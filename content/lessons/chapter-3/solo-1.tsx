'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { sleep } from 'utils'
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

  const [transactionsConfirmed, setTransactionsConfirmed] = useState(0)
  const [bitcoinMined, setBitcoinMined] = useState(0)
  const [step, setStep] = useState(0)
  const [blocks1, setBlocks1] = useState(0)
  const [blocks2, setBlocks2] = useState(0)
  const [nonceHighlight, setNonceHighlight] = useState(false)
  const [hashPowerHighlight, setHashPowerHighlight] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [ramdomNonce, setRandomNonce] = useState(false)
  const [finalMining, setFinalMining] = useState(false)
  const [showText, setShowText] = useState(true)
  const [hashPower, setHashPower] = useState(0)

  const saveAndProceed = useSaveAndProceed()

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    setShowText(true)
  }, [step])

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    setShowText(true)
  }, [step])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentBlock1 = blocks1
    if (finalMining) {
      interval = setInterval(() => {
        currentBlock1 = Math.min(
          currentBlock1 + Math.floor(Math.random() * 3),
          170
        )
        setBlocks1(currentBlock1)
        setTransactionsConfirmed(currentBlock1 * 3500)
        setBitcoinMined(currentBlock1 * 0.0061)
      }, 40)
    }
    return () => clearInterval(interval)
  }, [finalMining])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentBlock2 = blocks2
    if (finalMining) {
      interval = setInterval(() => {
        currentBlock2 = Math.min(
          currentBlock2 + Math.floor(Math.random() * 3),
          226
        )
        setBlocks2(currentBlock2)
        setTransactionsConfirmed(currentBlock2 * 3500)
        setBitcoinMined(currentBlock2 * 0.0061)
      }, 30)
    }
    return () => clearInterval(interval)
  }, [finalMining])

  useEffect(() => {
    if (blocks1 + blocks2 === 396) {
      setStep(2)
      setNonceHighlight(true)
      setHashPowerHighlight(true)
      setRandomNonce(false)
      setFinalMining(false)
    }
  }, [blocks1, blocks2])

  const turnOnButton = async () => {
    if (step === 0) {
      setShowText(false)
      await sleep(100)
      setStep(1)
      setFinalMining(true)
    }
  }

  const TOTAL_BLOCKS = 100

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: '/assets/avatars/1.png',
      hashpower: 4395,
      color: '#F3AB29',
      value: step === 0 ? 0 : TOTAL_BLOCKS * 0.11,
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/5.png',
      hashpower: 34421,
      color: '#7E002E',
      value: step === 0 ? 0 : TOTAL_BLOCKS * 0.89,
    },
  ]

  const PROFILES: ProfileWithHashPower[] = [...PROTAGONISTS, ...ANTAGONISTS]

  if (!hydrated) {
    return null
  }

  return (
    hydrated && (
      <div className="my-auto flex flex-col flex-wrap items-center justify-center gap-[30px] self-stretch py-[20px] px-[20px] md:flex-row-reverse md:py-0 md:px-[200px]">
        <HashrateChallenge
          setHashPower={setHashPower}
          turnOnButton={turnOnButton}
          step={step}
          hashPower={hashPower}
          profiles={PROFILES.map((profile, i) => (
            <Profile
              key={i}
              username={profile.username}
              avatar={profile.avatar}
              description={profile.description}
            >
              {/*<Card className="flex">
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
                    'fade-in font-nunito text-[15px] font-bold text-white',
                    {
                      'text-opacity-25': step === 0,
                    }
                  )}
                >
                  {i === 2 || i === 4
                    ? (i === 2 && PROTAGONISTS[2].value) ||
                      (i === 4 && ANTAGONISTS[0].value)
                    : 0}
                </span>
              </Card>*/}
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
          blocks1={PROTAGONISTS.reduce(
            (acc, profile) => acc + profile.value,
            0
          )}
          blocks2={ANTAGONISTS.reduce((acc, profile) => acc + profile.value, 0)}
          verticalProfiles
          protagonists={PROTAGONISTS}
          antagonists={ANTAGONISTS}
          totalBlocks={TOTAL_BLOCKS}
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
              <Button
                onClick={saveAndProceed}
                classes="max-md:w-full mt-[20px]"
              >
                {t('shared.next')}
              </Button>
            </span>
          )}
        </HashrateChallenge>
      </div>
    )
  )
}
