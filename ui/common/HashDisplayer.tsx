'use client'

import Icon from 'shared/Icon'
import { useState, useEffect } from 'react'
import formatHash from 'lib/formatHash'
import sjcl from 'sjcl'
import { sleep } from 'utils'

export default function HashDisplayer({
  content,
  disabled,
  step,
  finalHash,
  blockFound,
}: {
  content: number
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
    <>
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
        <div className="flex items-center justify-center">
          <div className="flex w-full overflow-hidden font-space-mono text-[6px] text-[#5DBC59] sm:w-[76px]">
            {formatHash(finalHash, 4, 4, undefined, false, 'mr-0.5')}
          </div>
          <Icon icon="greenCheck" className="h-8 w-8 py-2 text-[#5DBC59]" />
        </div>
      )}
    </>
  )
}
