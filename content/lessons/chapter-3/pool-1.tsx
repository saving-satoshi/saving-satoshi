'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { HashrateChallenge, Text } from 'ui'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { sleep } from 'utils'

export const metadata = {
  title: 'chapter_three.pool_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3POL1',
}

export default function Pool1({ lang }) {
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
      username: 'friend',
      avatar: '2',
      color: '62BFB7',
      percentage: 10 + blocks1 / 20,
      side: 1,
    },
    {
      username: 'player',
      avatar: '4',
      color: 'FE5329',
      percentage: 9 + blocks1 / 20,
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

  const profiles = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className="h-[230px] w-[250px] min-w-[234px] bg-black text-white md:h-[323px] md:w-[234px]"
    >
      Profile {index}
    </span>
  ))

  if (!hydrated) {
    return null
  }

  return (
    hydrated && (
      <div className="flex flex-col items-center gap-[30px] py-[30px] px-[15px] md:py-[75px] md:px-[75px]">
        <HashrateChallenge
          setHashPower={setHashPower}
          turnOnButton={turnOnButton}
          step={step}
          hashPower={hashPower}
          profiles={profiles}
          blocks1={blocks1}
          blocks2={blocks2}
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
  )
}
