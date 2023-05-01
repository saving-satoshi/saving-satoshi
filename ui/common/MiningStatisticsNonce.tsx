'use client'

import clsx from 'clsx'
import sjcl from 'sjcl'
import { useState, useEffect } from 'react'
import formatHash from 'lib/formatHash'
import Icon from 'shared/Icon'

export default function MiningStatisticNonce({
  title,
  content,
  highlight,
  disabled,
  step,
  finalHash,
}: {
  title: string
  content: number
  highlight: boolean
  disabled: boolean
  step: number
  finalHash: string
}) {
  const [hash, setHash] = useState('')

  useEffect(() => {
    if (content) {
      const bitArray = sjcl.hash.sha256.hash(content)
      setHash(sjcl.codec.hex.fromBits(bitArray))
    } else {
      setHash('')
    }
  }, [content])

  return (
    <div
      className={clsx(
        'mt-5 flex w-full items-center justify-between rounded-[5px] bg-black/15 p-4 font-space-mono',
        {
          'border-2 border-[#FBEBC6] drop-shadow-2xl': highlight === true,
        }
      )}
    >
      <div className="flex-initial">
        <div
          className={clsx('text-base font-bold', {
            'text-black/25': disabled,
            'text-[#EDA081]': !disabled,
          })}
        >
          {title}
        </div>
        <div
          className={clsx('text-2xl font-normal', {
            'text-black/25': disabled,
            'text-white': !disabled,
          })}
        >
          {Intl.NumberFormat().format(content)}
        </div>
      </div>
      {disabled && (
        <div className=" order-last flex h-8 w-8 flex-initial items-center justify-center rounded-full bg-black/25"></div>
      )}
      {!disabled && step !== 2 && step !== 4 && (
        <div className="order-last flex items-center justify-center">
          <div className="flex  w-[120px] overflow-hidden font-space-mono text-[6px] !text-[#EDA081]">
            {formatHash(hash, 4, 1, 64, 1)}
          </div>
          <div className="flex h-8 w-8 font-nunito text-[24px] font-bold text-[#E3941D]">
            X
          </div>
        </div>
      )}
      {step === 2 ||
        (step === 4 && (
          <div className="order-last flex items-center justify-center">
            <div className="flex  w-[110px] overflow-hidden font-space-mono text-[6px] !text-[#5DBC59]">
              {formatHash(finalHash, 4, 1, 64)}
            </div>
            <Icon icon="greenCheck" className="h-8 w-8 py-2" />
          </div>
        ))}
    </div>
  )
}
