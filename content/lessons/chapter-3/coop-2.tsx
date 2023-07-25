'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { ProfileWithHashPower } from 'types'
import { Card, HashFrequency, Text, HashrateChallenge } from 'ui'
import { sleep } from 'utils'
import Profile from 'ui/common/Profile'
import clsx from 'clsx'
import { useAuthContext } from 'providers/AuthProvider'

export const metadata = {
  title: 'chapter_three.coop_vs_bitrey_loose.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  theme: 'solo-1-theme',
  secondaryTheme: 'solo-1-secondary-theme',
  key: 'CH3COO2',
}

export default function Coop2({ lang }) {
  const { account } = useAuthContext()
  const t = useTranslations(lang)
  const [step, setStep] = useState(0)
  const [protagonistsBlockAmount, setProtagonistsBlockAmount] = useState(0)
  const [antagonistsBlockAmount, setAntagonistsBlockAmount] = useState(0)
  const [protagonistHash, setProtagonistHash] = useState([0, 0, 0, 0])
  const [antagonistHash, setAntagonistHash] = useState(0)
  const [showText, setShowText] = useState(true)

  const saveAndProceed = useSaveAndProceed()

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 30

  const PROTAGONISTS = [
    {
      username: 'You',
      avatar: account?.avatar,
      hashpower: 4395,
      nonce: protagonistHash[0],
      color: '#F3AB29',
      value: step === 0 ? 0 : 1,
    },
    {
      username: 'Mining Maniacs',
      avatar: '/assets/avatars/2.png',
      hashpower: 4054,
      nonce: protagonistHash[1],
      color: '#FE5329',
      value: step === 0 ? 0 : 1,
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/3.png',
      hashpower: 7911,
      nonce: protagonistHash[2],
      color: '#62BFB7',
      value: step === 0 ? 0 : protagonistsBlockAmount,
    },
    {
      username: 'Coin Crunchers',
      avatar: '/assets/avatars/4.png',
      hashpower: 3857,
      nonce: protagonistHash[3],
      color: '#85BF09',
      value: step === 0 ? 0 : 1,
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/bitrey.png',
      hashpower: 18599,
      nonce: antagonistHash,
      color: '#7E002E',
      value: step === 0 ? 0 : antagonistsBlockAmount,
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
    const rootStyles = document.documentElement.style
    rootStyles.setProperty('--CH3SOL1-bg', '#411e4f')
    rootStyles.setProperty('--CH3SOL1-gradient-start', '#3C1843')
    rootStyles.setProperty('--CH3SOL1-gradient-stop', '#45235a')
  }, [])

  return (
    <div className="fade-in flex flex-col items-center gap-[20px] px-[15px] py-[30px] md:px-[75px] md:pt-[40px]">
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
        <div
          className={`flex flex-col transition-opacity ${
            showText ? 'fade-in' : 'fade-out'
          }`}
        >
          {step === 0 && (
            <span className="flex flex-col items-start gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.coop_two.step_zero_heading')}
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.coop_two.step_zero_paragraph_one')}
              </Text>
            </span>
          )}
          {step === 2 && (
            <span className="flex flex-col items-center gap-[10px] md:w-[490px] md:min-w-[490px] md:pt-[20px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold">
                {t('chapter_three.coop_two.step_two_heading')}
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.coop_two.step_two_paragraph_one')}
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
