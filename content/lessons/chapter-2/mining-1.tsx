'use client'

import { useTranslations } from 'hooks'
import { Button, Title, InfoBox, ProgressBar } from 'ui'
import { use, useState } from 'react'

export default function Mining1({ lang }) {
  const t = useTranslations(lang)
  const [nonce, setNonce] = useState(0)
  const [hashPower, setHashPower] = useState(0)
  const [transactionsConfirmed, setTransactionsConfirmed] = useState(0)
  const [bitcoinMined, setBitcoinMined] = useState(0)
  const [blocks, setBlocks] = useState(0)
  const [step, setStep] = useState(0)
  const [hashPowerButton, setHashPowerButton] = useState(false)
  const [nonceHighlight, setNonceHighlight] = useState(false)
  const [hashPowerHighlight, setHashPowerHighlight] = useState(false)
  const [transactionsConfirmedHighlight, setTransactionsConfirmedHighlight] =
    useState(false)
  const [bitcoinMinedHighlight, setBitcoinMinedHighlight] = useState(false)

  function displayRandomNumbers(
    maxNonce: number,
    NonceStepSize: number,
    minHash: number,
    maxHash: number,
    maxTransaction: number,
    TransactionStepSize: number,
    maxBlock: number,
    BlockStepSize: number,
    maxBitcoin: number,
    BitcoinStepSize: number,
    time: number
  ): void {
    let currentNonce = nonce
    let currentTransaction = transactionsConfirmed
    let currentBlock = blocks
    let currentBitcoin = bitcoinMined
    const startTime = new Date().getTime()
    const endTime = startTime + time

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime()
      if (currentTime >= endTime) {
        clearInterval(intervalId)
        return
      }
      currentNonce = Math.min(
        currentNonce + Math.floor(Math.random() * NonceStepSize),
        maxNonce
      )
      currentTransaction = Math.min(
        currentTransaction + Math.floor(Math.random() * TransactionStepSize),
        maxTransaction
      )
      const randomHashPower = Math.floor(
        Math.random() * (maxHash - minHash + 1) + minHash
      )
      setNonce(currentNonce)
      setTransactionsConfirmed(currentTransaction)
      setHashPower(randomHashPower)

      if (maxBlock !== 0) {
        currentBlock = Math.min(
          currentBlock + Math.floor(Math.random() * BlockStepSize),
          maxBlock
        )
        setBlocks(currentBlock)
      }

      if (maxBitcoin !== 0) {
        currentBitcoin = Math.min(
          currentBitcoin + Math.floor(Math.random() * BitcoinStepSize),
          maxBitcoin
        )
        setBitcoinMined(currentBitcoin)
      }
    }, 500)
  }

  const startMining = () => {
    setStep(1)
    const time = 2 * 60 * 1000
    displayRandomNumbers(35265, 300, 30000, 50000, 2000, 15, 0, 0, 0, 0, time)
    setTimeout(() => {
      setStep(2)
      setNonce(35267)
      setBlocks(1)
      setBitcoinMined(3)
    }, time)
  }

  const start1000Mining = () => {
    setStep(3)
    const time = 1 * 30 * 1000
    displayRandomNumbers(
      3564365,
      10000,
      80000,
      120000,
      4280000,
      1000,
      400,
      2,
      2000,
      15,
      time
    )
    setTimeout(() => {
      setHashPowerButton(true)
    }, time)
  }

  const start10xMining = () => {
    setHashPowerButton(false)
    const time = 1 * 60 * 1000
    displayRandomNumbers(
      5465433257645971,
      20000000000,
      22287512,
      27287512,
      287836000,
      4000000,
      1000,
      17,
      80000,
      1000,
      time
    )
    setTimeout(() => {
      setStep(4)
      setBlocks(1000)
      setNonceHighlight(true)
      setHashPowerHighlight(true)
    }, time)
  }

  const stepOne = (
    <div className="font-nunito text-white">
      <Title>{t('chapter_two.mining_one.heading_one')}</Title>
      <p className="mt-2 text-lg">
        {t('chapter_two.mining_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_two')}
      </p>

      <Button onClick={startMining} classes="mt-10 max-md:w-full">
        {t('shared.start')}
      </Button>
    </div>
  )

  const stepTwo = (
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
  )

  const stepThree = (
    <div className="font-nunito text-white">
      <Title>{t('chapter_two.mining_one.heading_three')}</Title>
      <p className="mt-2 text-lg">
        {t('chapter_two.mining_one.paragraph_six')}
      </p>
      <p className="mt-2 border border-dashed border-white p-2.5 text-lg">
        {' '}
        35,267
      </p>
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_seven')}
      </p>
      <p className="mt-2 break-all border border-dashed border-white p-2.5 text-lg">
        0000000000
        <span className="text-white text-opacity-50">
          72947e2f22250fac0ddd882fcbf37cf6e2340a41129b6
        </span>
      </p>
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_eight')}
      </p>
      <Button onClick={start1000Mining} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </div>
  )

  const stepFour = (
    <div className="font-nunito text-white">
      <Title>{t('chapter_two.mining_one.heading_four')}</Title>
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_nine')}
      </p>
      {hashPowerButton && (
        <Button onClick={start10xMining} classes="mt-10 max-md:w-full">
          {t('chapter_two.mining_one.button_hash')}
        </Button>
      )}
    </div>
  )

  const transactionStep = () => {
    setStep(5)
    setNonceHighlight(false)
    setHashPowerHighlight(false)
    setTransactionsConfirmedHighlight(true)
  }

  const stepFive = (
    <div className="font-nunito text-white">
      <Title>{t('chapter_two.mining_one.heading_five')}</Title>
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_ten')}
      </p>
      <Button onClick={transactionStep} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </div>
  )

  const bitcoinStep = () => {
    setStep(6)
    setTransactionsConfirmedHighlight(false)
    setBitcoinMinedHighlight(true)
  }

  const stepSix = (
    <div className="font-nunito text-white">
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_eleven')}
      </p>
      <Button onClick={bitcoinStep} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </div>
  )

  const finalStep = () => {
    setStep(7)
    setBitcoinMinedHighlight(false)
  }

  const stepSeven = (
    <div className="font-nunito text-white">
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_twelve')}
      </p>
      <Button onClick={finalStep} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </div>
  )

  const stepEight = (
    <div className="font-nunito text-white">
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_thirteen')}
      </p>
      <p className="mt-8 text-lg">
        {t('chapter_two.mining_one.paragraph_fourteen')}
      </p>
      <Button onClick={finalStep} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </div>
  )

  return (
    <div className="mx-0 my-0 grid grid-cols-1 justify-center justify-items-center md:my-auto md:mx-80 md:flex md:flex-row">
      <div className="mt-8 flex w-full items-center px-6 md:mt-0 lg:w-1/2 lg:px-0">
        {step === 0 && stepOne}
        {step === 1 && stepTwo}
        {step === 2 && stepThree}
        {step === 3 && stepFour}
        {step === 4 && stepFive}
        {step === 5 && stepSix}
        {step === 6 && stepSeven}
        {step === 7 && stepEight}
      </div>

      <div className="my-8 ml-0 grid w-full grid-cols-1 items-center px-6 md:my-0 md:ml-8 lg:w-1/2 lg:px-0">
        <div className="relative mb-2.5 font-nunito text-lg font-semibold text-white">
          <span>{t('chapter_two.mining_one.progress_bar_title')}</span>{' '}
          <span className="absolute right-0">{blocks} of 1,000</span>
        </div>
        <ProgressBar avatar="1" progress={blocks / 10} />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_one')}
          content={nonce}
          highlight={nonceHighlight}
        />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_two')}
          content={hashPower}
          highlight={hashPowerHighlight}
        />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_three')}
          content={transactionsConfirmed}
          highlight={transactionsConfirmedHighlight}
        />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_four')}
          content={bitcoinMined}
          highlight={bitcoinMinedHighlight}
        />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'chapter_two.mining_one.title',
}
