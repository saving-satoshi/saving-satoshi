'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { sleep } from 'utils'
import { ProfileWithHashPower } from 'types'
import { Card, HashFrequency, Text, HashrateChallenge } from 'ui'
import Profile from 'ui/common/Profile'

export const metadata = {
  title: 'chapter_three.pool_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3POL1',
}

export default function Pool1({ lang }) {
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
    if (blocks2 === 226) {
      setStep(2)
      setNonceHighlight(true)
      setHashPowerHighlight(true)
      setRandomNonce(false)
      setFinalMining(false)
    }
  }, [blocks2])

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

  return (
    <div className="flex flex-col items-center gap-[30px] py-[30px] px-[15px] md:py-[75px] md:px-[75px]">
      <HashrateChallenge
        setHashPower={setHashPower}
        totalBlocks={TOTAL_BLOCKS}
        turnOnButton={turnOnButton}
        step={step}
        hashPower={hashPower}
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
        blocks1={PROTAGONISTS.reduce((acc, profile) => acc + profile.value, 0)}
        blocks2={ANTAGONISTS.reduce((acc, profile) => acc + profile.value, 0)}
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
                {t('chapter_three.pool_one.step_one_heading')}
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold">
                {t('chapter_three.pool_one.step_one_paragraph_one')}
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
