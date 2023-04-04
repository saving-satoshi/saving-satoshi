'use client'

import { useTranslations } from 'hooks'
import { Button, Title, InfoBox, ProgressBar } from 'ui'
import { useState } from 'react'

export default function Mining1({ lang }) {
  const t = useTranslations(lang)
  const [nonce, setNone] = useState(0)
  const [hashPower, setHashPower] = useState(0)
  const [transactionsConfirmed, setTransactionsConfirmed] = useState(0)
  const [bitcoinMined, setBitcoinMined] = useState(0)
  const [blocks, setBlocks] = useState(0)
  const [step, setStep] = useState(0)

  const startMining = () => {
    setStep(1)
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

  return (
    <div className="mx-0 my-0 grid grid-cols-1 justify-center justify-items-center md:my-auto md:mx-80 md:flex md:flex-row">
      <div className="mt-8 flex w-full items-center px-6 md:mt-0 lg:w-1/2 lg:px-0">
        {step === 0 && stepOne}
        {step === 1 && stepTwo}
      </div>

      <div className="my-8 ml-0 grid w-full grid-cols-1 items-center px-6 md:my-0 md:ml-8 lg:w-1/2 lg:px-0">
        <div className="font-nunito text-lg font-semibold text-white">
          <span>{t('chapter_two.mining_one.progress_bar_title')}</span>{' '}
          <span>{blocks} of 1,000</span>
        </div>
        <ProgressBar avatar="1" progress={blocks / 10} />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_one')}
          content={nonce}
        />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_two')}
          content={hashPower}
        />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_three')}
          content={transactionsConfirmed}
        />
        <InfoBox
          title={t('chapter_two.mining_one.progress_bar_four')}
          content={bitcoinMined}
        />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'chapter_two.mining_one.title',
}
