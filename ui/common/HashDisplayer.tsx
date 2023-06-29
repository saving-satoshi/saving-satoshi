'use client'

import Icon from 'shared/Icon'
import { useState, useEffect } from 'react'
import formatHash from 'lib/formatHash'
import sjcl from 'sjcl'

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
      {!disabled &&
        step !== 2 &&
        step < 4 &&
        (blockFound % 4 !== 0 || blockFound === 0) && (
          <div className="flex items-center justify-center">
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
