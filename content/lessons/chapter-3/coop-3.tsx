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
import { sleep } from 'utils'
import clsx from 'clsx'
import { useAuthContext } from 'providers/AuthProvider'
import { cssVarThemeChange } from 'lib/themeSelector'
import { usePathData } from 'hooks'
import { lessons } from 'content'

export const metadata = {
  title: 'chapter_three.coop_three.title',
  theme: 'solo-1-theme',
  secondaryTheme: 'solo-1-secondary-theme',
  key: 'CH3COO3',
}

export default function Coop3({ lang }) {
  const { account } = useAuthContext()
  const t = useTranslations(lang)
  const isSmallScreen = useMediaQuery({ width: 767 })
  const [step, setStep] = useState(0)
  const [protagonistsBlockAmount, setProtagonistsBlockAmount] = useState([
    0, 0, 0, 0,
  ])
  const [antagonistsBlockAmount, setAntagonistsBlockAmount] = useState([0])
  const [protagonistHash, setProtagonistHash] = useState([0, 0, 0, 0])
  const [antagonistHash, setAntagonistHash] = useState(0)
  const [showText, setShowText] = useState(true)

  const proceed = useProceed()
  const { chapterId, lessonId } = usePathData()

  const chapterLessons = lessons?.[chapterId]
  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = lesson?.key ?? 'CH1INT1'

  const TOTAL_BLOCKS = 100
  const BLOCK_RATIO = 40

  const outcome = JSON.parse(
    '{"protagonists": [15, 9, 29, 4], "antagonists": [43]}'
  )

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
      value: Math.min(protagonistsBlockAmount[2], outcome.protagonists[3]),
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/hash-hoppers.jpg',
      hashpower: 7911,
      hashes: protagonistHash[3],
      color: '#85BF09',
      value: Math.min(protagonistsBlockAmount[3], outcome.protagonists[2]),
    },
  ]

  const ANTAGONISTS = [
    {
      username: 'BitRey',
      avatar: '/assets/avatars/bitrey.jpg',
      hashpower: 18599,
      hashes: antagonistHash,
      color: '#7E002E',
      value: Math.min(antagonistsBlockAmount[0], outcome.antagonists[0]),
    },
  ]

  const PROFILES: ProfileWithHashPower[] = [...PROTAGONISTS, ...ANTAGONISTS]

  const handleStepUpdate = async (newStep: number) => {
    setShowText(false)
    await sleep(325)
    setStep(newStep)
    setShowText(true)

    if (step >= 1) {
      cssVarThemeChange({
        '--CH3SOL1-bg': '#3e7141',
        '--CH3SOL1-gradient-start': '#3e7141',
        '--CH3SOL1-gradient-stop': '#3e7141',
      })
    }
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
    setAntagonistsBlockAmount([newBlock])
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
    cssVarThemeChange({
      '--CH3SOL1-bg': '#411e4f',
      '--CH3SOL1-gradient-start': '#3C1843',
      '--CH3SOL1-gradient-stop': '#45235a',
    })
  }, [])

  return (
    <div className="px-[20px] py-[30px] md:py-10">
      <div className="fade-in mx-auto flex max-w-[1340px] flex-col items-center gap-5 2xl:gap-8">
        <HashrateChallenge
          totalBlocks={TOTAL_BLOCKS}
          blockRatio={BLOCK_RATIO}
          step={step}
          onStepUpdate={handleStepUpdate}
          onProtagonistUpdate={handleProtagonsitBlockUpdate}
          onAntagonistUpdate={handleAntagonsitBlockUpdate}
          protagonists={PROTAGONISTS}
          antagonists={ANTAGONISTS}
          speed={5}
          profiles={PROFILES.map((profile, i) => (
            <Profile
              key={i}
              username={profile.username}
              avatar={profile.avatar}
              avatarSize={isSmallScreen ? 50 : 100}
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
                  {profile.value}
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
                  <Exponent
                    className="font-space-mono font-normal"
                    step={step}
                    hashes={profile.hashes}
                  />
                </span>
              </Card>
            </Profile>
          ))}
        >
          <div className={`flex flex-col ${showText ? 'fade-in' : 'fade-out'}`}>
            {step === 0 && (
              <span className="flex flex-col items-start gap-[10px] font-nunito md:min-w-[490px] md:pt-[20px]">
                <Text className=" self-stretch text-center text-[24px] font-bold">
                  {t('chapter_three.coop_three.step_zero_heading')}
                </Text>
                <Text className="self-stretch text-center  text-[18px] font-semibold">
                  {t('chapter_three.coop_three.step_zero_paragraph_one')}
                </Text>
              </span>
            )}
            {step === 2 && (
              <span className="flex flex-col items-center gap-[10px] font-nunito md:w-[490px] md:min-w-[490px] md:pt-[20px]">
                <Text className="self-stretch text-center  text-[24px] font-bold">
                  {t('chapter_three.coop_three.step_two_heading')}
                </Text>
                <Text className="text-center text-[18px] font-semibold">
                  {t('chapter_three.coop_three.step_two_paragraph_one')}
                </Text>
                <Button onClick={proceed} classes="w-full md:w-auto mt-[20px]">
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
