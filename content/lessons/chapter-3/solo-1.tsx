'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { HashrateChallenge, Text } from 'ui'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { sleep } from 'utils'

export const metadata = {
  title: 'chapter_three.solo_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3SOL1',
}

const profiles = Array.from({ length: 2 }, (_, index) => (
  <span
    key={index}
    className="flex h-[263px] w-full self-stretch bg-black text-white md:w-[290px]"
  >
    Profile {index}
  </span>
))

export default function Solo1({ lang }) {
  const t = useTranslations(lang)
  const [nonce, setNonce] = useState(0)
  const [transactionsConfirmed, setTransactionsConfirmed] = useState(0)
  const [bitcoinMined, setBitcoinMined] = useState(0)
  const [step, setStep] = useState(0)
  const [blocks1, setBlocks1] = useState(0)
  const [blocks2, setBlocks2] = useState(0)
  const [nonceHighlight, setNonceHighlight] = useState(false)
  const [hashPowerHighlight, setHashPowerHighlight] = useState(false)
  const [transactionsConfirmedHighlight, setTransactionsConfirmedHighlight] =
    useState(false)
  const [bitcoinMinedHighlight, setBitcoinMinedHighlight] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [ramdomNonce, setRandomNonce] = useState(false)
  const [finalMining, setFinalMining] = useState(false)
  const [showText, setShowText] = useState(true)
  const [hashPower, setHashPower] = useState(0)

  const contributionInfo = [
    {
      username: 'player',
      avatar: '1',
      color: 'F3AB29',
      percentage: 5 + blocks1 / 20,
      side: 1,
    },
    {
      username: 'enemy',
      avatar: '3',
      color: '7E002E',
      percentage: 5 + blocks2 / 20,
      side: 0,
    },
  ]

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
          profiles={profiles}
          blocks1={blocks1}
          blocks2={blocks2}
          verticalProfiles
        >
          {step === 0 && (
            <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
                {t('chapter_three.solo_one.heading')}
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
                {t('chapter_three.solo_one.paragraph_one')}
              </Text>
            </span>
          )}
          {step === 1 && (
            <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
                {t('chapter_three.solo_one.heading')}
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
                {t('chapter_three.solo_one.paragraph_one')}
              </Text>
            </span>
          )}
          {step === 2 && (
            <span className="flex flex-col items-start gap-[10px] md:w-[400px] md:min-w-[400px]">
              <Text className="flex flex-col self-stretch text-center font-nunito text-[24px] font-bold md:text-left">
                {t('chapter_three.solo_one.heading')}
              </Text>
              <Text className="flex flex-col self-stretch text-center font-nunito text-[18px] font-semibold md:text-left">
                {t('chapter_three.solo_one.paragraph_one')}
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
