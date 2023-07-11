'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import {
  Title,
  ProgressBar,
  Card,
  BlockCounter,
  NonceCounter,
  HashDisplayer,
  TitleCard,
  HashFrequency,
  StartButton,
} from 'ui'
import { useState, useEffect } from 'react'
import { Button } from 'shared'
import clsx from 'clsx'
import { sleep } from 'utils'

export const metadata = {
  title: 'chapter_two.mining_one.title',
  key: 'CH2MIN1',
}

export default function Mining1({ lang }) {
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
        setBitcoinMined(currentBlock * 0.061)
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
        currentBlock = currentBlock + 1
        setBlocks(currentBlock)
        setTransactionsConfirmed(currentBlock * 3500)
        setBitcoinMined(currentBlock * 0.061)
      }, Math.floor(Math.random() * 1000))
    }
    return () => clearInterval(interval)
  }, [finalMining])

  useEffect(() => {
    if (blocks === 100) {
      explanationStep()
    }
  }, [blocks])

  const explanationStep = async () => {
    setShowText(false)
    setRandomNonce(false)
    setFinalMining(false)
    await sleep(325)
    setStep(4)
    setShowText(true)
    setNonceHighlight(true)
    setHashPowerHighlight(true)
  }

  const transactionStep = async () => {
    setShowText(false)
    await sleep(325)
    setStep(5)
    setShowText(true)
    setNonceHighlight(false)
    setHashPowerHighlight(false)
    setTransactionsConfirmedHighlight(true)
  }

  const bitcoinStep = async () => {
    setShowText(false)
    await sleep(325)
    setStep(6)
    setShowText(true)
    setTransactionsConfirmedHighlight(false)
    setBitcoinMinedHighlight(true)
  }

  const finalStep = async () => {
    setShowText(false)
    await sleep(325)
    setStep(7)
    setShowText(true)
    setBitcoinMinedHighlight(false)
  }

  const turnOnButton = async () => {
    if (step === 0) {
      setShowText(false)
      await sleep(325)
      setStep(1)
      setShowText(true)
      const time = 15 * 1000
      displayRandomNumbers(1760, time)
      setTimeout(async () => {
        setShowText(false)
        await sleep(325)
        setStep(2)
        setShowText(true)
        setBlocks(1)
        setTransactionsConfirmed(3500)
        setBitcoinMined(0.061)
      }, time)
    }

    if (step === 2) {
      setShowText(false)
      await sleep(325)
      setStep(3)
      setShowText(true)
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
      <div className="grid grid-cols-1 justify-center justify-items-center md:my-auto md:flex md:flex-row">
        <div className="fade-in grid w-full grid-cols-1 items-center px-[15px] py-[25px] md:order-last md:mx-[30px] md:my-0 md:w-[405px] md:p-[25px]">
          <Card
            className="font-nunito text-lg font-semibold"
            transparent
            firstItem
          >
            <div className="mb-2.5 flex">
              <span
                className={clsx({
                  'fade-in text-black/50': blocks === 0,
                  'fade-in text-[#EDA081]': blocks !== 0,
                })}
              >
                {t('chapter_two.mining_one.progress_bar_title')}
              </span>
              <BlockCounter blocks={blocks} total={100} className="ml-auto" />
            </div>
            <ProgressBar progress={blocks} />
          </Card>
          <Card className="flex" highlight={nonceHighlight}>
            <div className="flex-1">
              <TitleCard
                title={t('chapter_two.mining_one.progress_bar_one')}
                disabled={nonce === 0}
              />
              <NonceCounter
                content={nonce}
                disabled={nonce === 0}
              ></NonceCounter>
            </div>
            <HashDisplayer
              content={nonce}
              disabled={nonce === 0}
              step={step}
              finalHash={
                '000000000072947e2f22250fac0ddd882fcbf37cf6e2340a41129b6r23a2823a'
              }
              blockFound={blocks}
            ></HashDisplayer>
          </Card>
          <Card className="flex-row" highlight={hashPowerHighlight}>
            <div className="flex">
              <div className="flex-1">
                <TitleCard
                  title={t('chapter_two.mining_one.progress_bar_two')}
                  disabled={nonce === 0}
                />
                <HashFrequency
                  disabled={nonce === 0}
                  step={step}
                  hashPower={hashPower}
                />
              </div>
              <StartButton
                hashPower={hashPower}
                setHashPower={setHashPower}
                onButtonClick={turnOnButton}
                step={step}
              ></StartButton>
            </div>
            <ProgressBar progress={hashPower / 440} variant={'bars'} />{' '}
            {/* progress = hashPower * 100/maxHashPower */}
          </Card>
          <div className="flex items-center justify-between gap-x-2.5 text-center font-space-mono">
            <Card
              className="w-full py-2.5"
              highlight={transactionsConfirmedHighlight}
              dual
            >
              <div
                className={clsx('font-space-mono text-2xl', {
                  'text-black/25': transactionsConfirmed === 0,
                  'fade-in text-white': transactionsConfirmed !== 0,
                })}
              >
                {Intl.NumberFormat().format(transactionsConfirmed)}
              </div>
              <TitleCard
                title={t('chapter_two.mining_one.progress_bar_three')}
                disabled={transactionsConfirmed === 0}
                size={'small'}
              />
            </Card>
            <Card
              className="w-full py-2.5"
              highlight={bitcoinMinedHighlight}
              dual
            >
              <div
                className={clsx('font-space-mono text-2xl', {
                  'text-black/25': bitcoinMined === 0,
                  'fade-in text-white': bitcoinMined !== 0,
                })}
              >
                {bitcoinMined.toFixed(4)}
              </div>
              <TitleCard
                title={t('chapter_two.mining_one.progress_bar_four')}
                disabled={bitcoinMined === 0}
                size={'small'}
              />
            </Card>
          </div>
        </div>
        <div
          className={`mb-5 flex w-full items-center px-[15px] transition-opacity md:mx-0 md:mb-0 md:mt-0 md:w-1/2 md:max-w-[405px] md:pl-[15px] md:pr-0 ${
            showText ? 'fade-in' : 'fade-out'
          }`}
        >
          {step === 0 && (
            <div className={clsx('font-nunito text-white ')}>
              <Title>{t('chapter_two.mining_one.heading_one')}</Title>
              <div className="mt-2 text-lg">
                {t('chapter_two.mining_one.paragraph_one')}
              </div>
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_two')}
              </div>

              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_two_one')}
              </div>
            </div>
          )}
          {step === 1 && (
            <div className={clsx('font-nunito text-white ')}>
              <Title>{t('chapter_two.mining_one.heading_two')}</Title>
              <div className="mt-2 text-lg">
                {t('chapter_two.mining_one.paragraph_three')}
              </div>

              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_four')}
              </div>

              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_five')}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="font-nunito text-white">
              <Title>{t('chapter_two.mining_one.heading_three')}</Title>
              <div className="mt-2 text-lg">
                {t('chapter_two.mining_one.paragraph_six')}
              </div>
              <div className="mt-2 border border-dashed border-white p-2.5 font-space-mono text-[15px] font-normal">
                {Intl.NumberFormat().format(nonce * 10 ** 13 + 2352853282471)}
              </div>
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_seven')}
              </div>
              <div className="mt-2 break-all border border-dashed border-white p-2.5 font-space-mono text-[15px] font-normal">
                0000 0000 00
                <span className="break-keep text-white text-opacity-50">
                  72 947e 2f22 250f ac0d dd88 2fcb f37c f6e2 340a 4112 9b6r 23a2
                  823a
                </span>
              </div>
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_eight')}
              </div>
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_eight_one')}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="font-nunito text-white">
              <Title>{t('chapter_two.mining_one.heading_four')}</Title>
              <div className="mt-2 text-lg">
                {t('chapter_two.mining_one.paragraph_nine')}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="font-nunito text-white">
              <Title>{t('chapter_two.mining_one.heading_five')}</Title>
              <div className="mt-2 text-lg">
                {t('chapter_two.mining_one.paragraph_ten')}
              </div>
              <Button
                onClick={transactionStep}
                style="outline"
                classes="mt-10 max-md:w-full"
              >
                {t('hero.tell_more')}
              </Button>
            </div>
          )}
          {step === 5 && (
            <div className="font-nunito text-white">
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_eleven')}
              </div>
              <Button
                onClick={bitcoinStep}
                style="outline"
                classes="mt-10 max-md:w-full"
              >
                {t('hero.tell_more')}
              </Button>
            </div>
          )}
          {step === 6 && (
            <div className="font-nunito text-white">
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_twelve')}
              </div>
              <Button
                onClick={finalStep}
                style="outline"
                classes="mt-10 max-md:w-full"
              >
                {t('hero.tell_more')}
              </Button>
            </div>
          )}
          {step === 7 && (
            <div className="font-nunito text-white">
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_thirteen')}
              </div>
              <div className="mt-8 text-lg">
                {t('chapter_two.mining_one.paragraph_fourteen')}
              </div>
              <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
                {t('shared.next')}
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  )
}
