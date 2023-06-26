'use client'

import clsx from 'clsx'
import sjcl from 'sjcl'
import { useState, useEffect } from 'react'
import formatHash from 'lib/formatHash'
import Icon from 'shared/Icon'

export default function MiningStatisticNonce({
  title,
  content,
  step,
  finalHash,
  blockFound,
  className,
}: {
  title: string
  content: number
  step: number
  finalHash: string
  blockFound: number
  className?: string
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
    <>
      <div
        className={clsx(
          'flex w-full items-center justify-between font-space-mono',
          className
        )}
      >
        <div className="flex-initial">
          <div
            className={clsx(`font-nunito font-bold`, {
              'fade-in text-[#EDA081]': content,
            })}
          >
            {title}
          </div>
          <div
            className={clsx('text-2xl font-normal', {
              'fade-in text-white': content,
            })}
          >
            {(content / 10 ** (content.toString().length - 2)).toFixed(2)}
            {content !== 0 && (
              <span className="fade-in text-white/50">
                *10<sup>{content.toString().length + 11}</sup>
              </span>
            )}
          </div>
        </div>
        {content !== 0 &&
          step !== 2 &&
          step < 4 &&
          (blockFound % 4 !== 0 || blockFound === 0) && (
            <div className="order-last flex items-center justify-center">
              <div className="flex w-[76px] overflow-hidden font-space-mono text-[6px] !text-[#EDA081]">
                {formatHash(hash, 4, 4, undefined, false, 'mr-0.5')}
              </div>
              <Icon
                icon="cross"
                title="Hash does not have 10 leading zeroes"
                className="h-8 w-8 py-2 text-[#E3941D]"
              />
            </div>
          )}
        {(step === 2 ||
          step >= 4 ||
          (blockFound % 4 === 0 && blockFound !== 0)) && (
          <div className="order-last flex items-center justify-center">
            <div className="flex w-full overflow-hidden font-space-mono text-[6px] text-[#5DBC59] sm:w-[76px]">
              {formatHash(finalHash, 4, 4, undefined, false, 'mr-0.5')}
            </div>
            <Icon icon="greenCheck" className="h-8 w-8 py-2 text-[#5DBC59]" />
          </div>
        )}
      </div>
    </>
  )
}
