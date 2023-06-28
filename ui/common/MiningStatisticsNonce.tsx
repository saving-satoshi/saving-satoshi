'use client'

import clsx from 'clsx'
import sjcl from 'sjcl'
import { useState, useEffect } from 'react'
import formatHash from 'lib/formatHash'
import Icon from 'shared/Icon'
import { sleep } from 'utils'

export default function MiningStatisticNonce({
  title,
  content,
  highlight,
  disabled,
  step,
  finalHash,
  blockFound,
}: {
  title: string
  content: number
  highlight: boolean
  disabled: boolean
  step: number
  finalHash: string
  blockFound: number
}) {
  const [hash, setHash] = useState('')
  const [displayCorrect, setDisplayCorrect] = useState(false)

  const displayCorrectFunction = async () => {
    setDisplayCorrect(true)
    await sleep(100)
    setDisplayCorrect(false)
  }

  useEffect(() => {
    if (content) {
      const bitArray = sjcl.hash.sha256.hash(content)
      setHash(sjcl.codec.hex.fromBits(bitArray))
    } else {
      setHash('')
    }
  }, [content])

  useEffect(() => {
    if (blockFound > 1) {
      displayCorrectFunction()
    }
  }, [blockFound])

  return (
    <div className="relative">
      <div className="mt-5 flex w-full items-center justify-between rounded-[5px] border-2 border-transparent bg-black/15 p-4 font-space-mono">
        <div className="flex-initial">
          <div
            className={clsx('font-nunito text-[15px] font-bold', {
              'text-black/25': disabled,
              'fade-in text-[#EDA081]': !disabled,
            })}
          >
            {title}
          </div>
          <div
            className={clsx('text-2xl font-normal', {
              'text-black/25': disabled,
              'fade-in text-white': !disabled,
            })}
          >
            {(content / 10 ** (content.toString().length - 2)).toFixed(2)}
            {!disabled && (
              <span className="fade-in text-white/50">
                *10<sup>{content.toString().length + 11}</sup>
              </span>
            )}
          </div>
        </div>
        {!disabled && !displayCorrect && step < 4 && step !== 2 && (
          <div className="order-last flex items-center justify-center">
            <div className="flex w-full overflow-hidden font-space-mono text-[6px] !text-[#EDA081] sm:w-[76px]">
              {formatHash(hash, 4, 4, undefined, false, 'mr-0.5')}
            </div>
            <Icon
              icon="cross"
              title="Hash does not have 10 leading zeroes"
              className="h-8 w-8 py-2 text-[#E3941D]"
            />
          </div>
        )}
        {(displayCorrect || step === 2 || step >= 4) && (
          <div className="order-last flex items-center justify-center">
            <div className="flex w-full overflow-hidden font-space-mono text-[6px] text-[#5DBC59] sm:w-[76px]">
              {formatHash(finalHash, 4, 4, undefined, false, 'mr-0.5')}
            </div>
            <Icon icon="greenCheck" className="h-8 w-8 py-2 text-[#5DBC59]" />
          </div>
        )}
      </div>
      {highlight && (
        <div className="absolute inset-0 mt-5 animate-pulse rounded-[5px] border-2 border-[#FBEBC6] shadow-3xl"></div>
      )}
    </div>
  )
}
