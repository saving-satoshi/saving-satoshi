'use client'

import { useTranslations } from 'hooks'
import {
  Title,
  MiningStatistic,
  MiningStatisticNonce,
  MiningStatisticHash,
  ProgressBar,
} from 'ui'
import { useState } from 'react'
import { Button } from 'shared'
import clsx from 'clsx'

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

  function displayRandomNumbers(
    NonceStepSize: number,
    maxBlock: number,
    BlockStepSize: number,
    time: number
  ): void {
    let currentNonce = nonce
    let currentBlock = blocks
    const startTime = new Date().getTime()
    const endTime = startTime + time

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime()
      if (currentTime >= endTime) {
        clearInterval(intervalId)
        return
      }
      currentNonce = currentNonce + Math.floor(Math.random() * NonceStepSize)
      setNonce(currentNonce)

      if (maxBlock !== 0) {
        currentBlock = Math.min(
          currentBlock + Math.floor(Math.random() * BlockStepSize),
          maxBlock
        )
        setBlocks(currentBlock)
        setTransactionsConfirmed(currentBlock * 3500)
        setBitcoinMined(currentBlock * 0.0061)
        if (currentBlock === 1000) {
          setStep(4)
          setNonceHighlight(true)
          setHashPowerHighlight(true)
          clearInterval(intervalId)
          return
        }
      }
    }, 40)
  }

  const transactionStep = () => {
    setStep(5)
    setNonceHighlight(false)
    setHashPowerHighlight(false)
    setTransactionsConfirmedHighlight(true)
  }

  const bitcoinStep = () => {
    setStep(6)
    setTransactionsConfirmedHighlight(false)
    setBitcoinMinedHighlight(true)
  }

  const finalStep = () => {
    setStep(7)
    setBitcoinMinedHighlight(false)
  }

  const turnOnButton = () => {
    if (step === 0) {
      setStep(1)
      const time = 1 * 60 * 1000
      displayRandomNumbers(200, 0, 0, time)
      setTimeout(() => {
        setStep(2)
        setBlocks(1)
        setTransactionsConfirmed(3500)
        setBitcoinMined(0.0061)
      }, time)
    }

    if (step === 2) {
      setStep(3)
      const time = 1 * 30 * 1000
      displayRandomNumbers(200, 400, 1, time)
    }

    if (step === 3) {
      const time = 1 * 60 * 1000
      displayRandomNumbers(16000000, 1000, 3, time)
    }
  }

  return (
    <div className="mx-0 my-0 grid grid-cols-1 justify-center justify-items-center md:my-auto md:mx-80 md:flex md:flex-row">
      <div className="mt-8 flex w-full items-center px-6 md:mt-0 lg:w-1/2 lg:px-0">
        {step === 0 && (
          <div className="font-nunito text-white">
            <Title>{t('chapter_two.mining_one.heading_one')}</Title>
            <p className="mt-2 text-lg">
              {t('chapter_two.mining_one.paragraph_one')}
            </p>

            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_two')}
            </p>

            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_two_one')}
            </p>
          </div>
        )}
        {step === 1 && (
          <div className="font-nunito text-white">
            <Title>{t('chapter_two.mining_one.heading_two')}</Title>
            <p className="mt-2 text-lg">
              {t('chapter_two.mining_one.paragraph_three')}
            </p>

            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_four')}
            </p>

            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_five')}
            </p>
          </div>
        )}
        {step === 2 && (
          <div className="font-nunito text-white">
            <Title>{t('chapter_two.mining_one.heading_three')}</Title>
            <p className="mt-2 text-lg">
              {t('chapter_two.mining_one.paragraph_six')}
            </p>
            <p className="mt-2 border border-dashed border-white p-2.5 font-space-mono text-lg">
              {Intl.NumberFormat().format(nonce)}
            </p>
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_seven')}
            </p>
            <p className="mt-2 break-all border border-dashed border-white p-2.5 font-space-mono text-lg">
              0000 0000 00
              <span className="text-white text-opacity-50">
                72 947e 2f22 250f ac0d<br></br> dd88 2fcb f37c f6e2 340a 4112
                9b6r
              </span>
            </p>
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_eight')}
            </p>
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_eight_one')}
            </p>
          </div>
        )}
        {step === 3 && (
          <div className="font-nunito text-white">
            <Title>{t('chapter_two.mining_one.heading_four')}</Title>
            <p className="mt-2 text-lg">
              {t('chapter_two.mining_one.paragraph_nine')}
            </p>
          </div>
        )}
        {step === 4 && (
          <div className="font-nunito text-white">
            <Title>{t('chapter_two.mining_one.heading_five')}</Title>
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_ten')}
            </p>
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
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_eleven')}
            </p>
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
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_twelve')}
            </p>
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
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_thirteen')}
            </p>
            <p className="mt-8 text-lg">
              {t('chapter_two.mining_one.paragraph_fourteen')}
            </p>
            <Button
              onClick={finalStep}
              style="outline"
              classes="mt-10 max-md:w-full"
            >
              {t('shared.next')}
            </Button>
          </div>
        )}
      </div>

      <div className="my-8 ml-0 grid w-full grid-cols-1 items-center px-6 md:my-0 md:ml-8 lg:w-1/2 lg:px-0">
        <div
          className={clsx('relative mb-2.5 font-nunito text-lg font-semibold', {
            'text-white': blocks !== 0,
            'text-black/50': blocks === 0,
          })}
        >
          <span className={clsx({ 'text-[#EDA081]': blocks !== 0 })}>
            {t('chapter_two.mining_one.progress_bar_title')}
          </span>{' '}
          <span className="absolute right-0">{blocks} of 1,000</span>
        </div>
        <ProgressBar progress={blocks / 10} />
        <MiningStatisticNonce
          title={t('chapter_two.mining_one.progress_bar_one')}
          content={nonce}
          highlight={nonceHighlight}
          disabled={nonce === 0}
          step={step}
          finalHash={
            '000000000072947e2f22250fac0ddd882fcbf37cf6e2340a41129b6r23a2823a'
          }
        />
        <MiningStatisticHash
          title={t('chapter_two.mining_one.progress_bar_two')}
          highlight={hashPowerHighlight}
          disabled={nonce === 0}
          onButtonClick={turnOnButton}
          step={step}
        />
        <MiningStatistic
          titleTransaction={t('chapter_two.mining_one.progress_bar_three')}
          titleBitcoin={t('chapter_two.mining_one.progress_bar_four')}
          transaction={transactionsConfirmed}
          bitcoin={bitcoinMined}
          transactionHighlight={transactionsConfirmedHighlight}
          bitcoinHighlight={bitcoinMinedHighlight}
        />
      </div>
    </div>
  )
}
