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
        'mt-5 flex w-full items-center justify-between rounded-[5px] border-2 border-transparent bg-black/15 p-4 font-space-mono',
        {
          'animate-duration-500 animate-pulse border-2 !border-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
            highlight === true,
        }
      )}
    >
      <div className="flex-initial">
        <div
          className={clsx('font-nunito text-[15px] font-bold', {
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
          {(content / 10 ** (content.toString().length - 2)).toFixed(2)}
          {!disabled && (
            <span className="text-white/50">
              *10<sup>{content.toString().length + 11}</sup>
            </span>
          )}
        </div>
      </div>
      {!disabled &&
        step !== 2 &&
        step < 4 &&
        (blockFound % 4 !== 0 || blockFound === 0) && (
          <div className="order-last flex items-center justify-center">
            <div className="flex  w-[76px] overflow-hidden font-space-mono text-[6px] !text-[#EDA081]">
              {formatHash(hash, 4, 4, 64, 1, true)}
            </div>
            <Icon
              icon="Cross"
              title="Hash does not have 10 leading zeroes"
              className="h-8 w-8 py-2"
            />
          </div>
        )}
      {(step === 2 ||
        step >= 4 ||
        (blockFound % 4 === 0 && blockFound !== 0)) && (
        <div className="order-last flex items-center justify-center">
          <div className="flex  w-[76px] overflow-hidden font-space-mono text-[6px] !text-[#5DBC59]">
            {formatHash(finalHash, 4, 4, 64, 0, true)}
          </div>
          <Icon icon="greenCheck" className="h-8 w-8 py-2" />
        </div>
      )}
    </div>
  )
}
