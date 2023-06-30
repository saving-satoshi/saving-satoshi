'use client'

import { useTranslations, useSaveAndProceed, useLang } from 'hooks'
import { ProfilesContainer, StartButton } from 'ui'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import clsx from 'clsx'
import { sleep } from 'utils'

export const metadata = {
  title: 'chapter_two.mining_one.title',
  key: 'CH2MIN1',
}

export default function HashrateChallenge({
  profiles,
  children,
  verticalProfiles,
}: {
  children: any
  profiles: any
  verticalProfiles?: boolean
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  const [nonce, setNonce] = useState(0)
  const [transactionsConfirmed, setTransactionsConfirmed] = useState(0)
  const [bitcoinMined, setBitcoinMined] = useState(0)
  const [blocks, setBlocks] = useState(0)
  const [step, setStep] = useState(0)
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

  const saveAndProceed = useSaveAndProceed()

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    setShowText(true)
  }, [step])

  /*
  function displayRandomNumbers(NonceStepSize: number, time: number): void {
    let currentNonce = nonce
    const startTime = new Date().getTime()
    const endTime = startTime + time

    const intervalId = setInterval(async () => {
      const currentTime = new Date().getTime()
      if (currentTime >= endTime) {
        clearInterval(intervalId)
        return
      }
      currentNonce = currentNonce + Math.floor(Math.random() * NonceStepSize)
      setNonce(currentNonce)
    }, 40)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentNonce = nonce
    if (ramdomNonce) {
      interval = setInterval(() => {
        currentNonce = currentNonce + Math.floor(Math.random() * 1760)
        setNonce(currentNonce)
      }, 40)
    }
    return () => clearInterval(interval)
  }, [ramdomNonce])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentBlock = blocks
    if (ramdomNonce) {
      interval = setInterval(() => {
        currentBlock = currentBlock + 1
        setBlocks(currentBlock)
        setTransactionsConfirmed(currentBlock * 3500)
        setBitcoinMined(currentBlock * 0.0061)
      }, 8 * 1000)
    }
    return () => clearInterval(interval)
  }, [ramdomNonce])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentNonce = nonce
    if (finalMining) {
      interval = setInterval(() => {
        currentNonce = currentNonce + Math.floor(Math.random() * 17600)
        setNonce(currentNonce)
      }, 40)
    }
    return () => clearInterval(interval)
  }, [finalMining])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentBlock = blocks
    if (finalMining) {
      interval = setInterval(() => {
        currentBlock = Math.min(
          currentBlock + Math.floor(Math.random() * 3),
          1000
        )
        setBlocks(currentBlock)
        setTransactionsConfirmed(currentBlock * 3500)
        setBitcoinMined(currentBlock * 0.0061)
      }, 40)
    }
    return () => clearInterval(interval)
  }, [finalMining])

  useEffect(() => {
    if (blocks === 1000) {
      setStep(4)
      setNonceHighlight(true)
      setHashPowerHighlight(true)
      setRandomNonce(false)
      setFinalMining(false)
    }
  }, [blocks])

  const transactionStep = async () => {
    setShowText(false)
    await sleep(300)
    setStep(5)
    setNonceHighlight(false)
    setHashPowerHighlight(false)
    setTransactionsConfirmedHighlight(true)
  }

  const bitcoinStep = async () => {
    setShowText(false)
    await sleep(300)
    setStep(6)
    setTransactionsConfirmedHighlight(false)
    setBitcoinMinedHighlight(true)
  }

  const finalStep = async () => {
    setShowText(false)
    await sleep(300)
    setStep(7)
    setBitcoinMinedHighlight(false)
  }
*/
  const turnOnButton = async () => {
    if (step === 0) {
      setShowText(false)
      await sleep(300)
      setStep(1)
      const time = 15 * 1000
      setTimeout(async () => {
        setShowText(false)
        await sleep(300)
        setStep(2)
        setBlocks(1)
        setTransactionsConfirmed(3500)
        setBitcoinMined(0.0061)
      }, time)
    }

    if (step === 2) {
      setShowText(false)
      await sleep(300)
      setStep(3)
      setRandomNonce(true)
    }

    if (step === 3) {
      setRandomNonce(false)
      setFinalMining(true)
    }
  }

  if (!hydrated) {
    return null
  }

  return (
    hydrated && (
      <>
        <ProfilesContainer
          profiles={profiles}
          verticalProfiles={verticalProfiles}
        >
          {/*text and contribution bar*/}
          <div className="flex h-full max-h-[69px] w-full max-w-[800px] flex-col gap-[10px] text-white">
            {/*Top Text*/}
            <div className="flex items-center justify-between gap-[10px] self-stretch py-[2px]">
              <span className="h-[25px] text-left font-nunito text-[18px] font-semibold text-white">
                10 blocks
              </span>
              <div>
                <StartButton
                  startText="Start"
                  className="font-space-mono"
                  hashPower={hashPower}
                  setHashPower={setHashPower}
                  step={step}
                  onButtonClick={turnOnButton}
                />
              </div>
              <span className="h-[25px] text-right font-nunito text-[18px] font-semibold text-white">
                10 blocks
              </span>
            </div>
            {/*Contribution Bar added below*/}
            <div className="h-[30px] w-full bg-red">Contribution Bar</div>
          </div>
        </ProfilesContainer>
        {children}
        {step === 2 && (
          <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
            {t('shared.next')}
          </Button>
        )}
      </>
    )
  )
}
