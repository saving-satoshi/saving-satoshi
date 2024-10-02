'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import sjcl from 'sjcl'
import formatHash from 'lib/formatHash'
import { useMediaQuery } from 'hooks'

export default function Hasher({
  answer,
  label,
  onChange,
  input,
}: {
  answer: string | number
  label: string
  onChange: any
  input: string
}) {
  const [success, setSuccess] = useState(false)
  const [hash, setHash] = useState('')

  const rows = useMediaQuery({ width: 767 })

  const handleHash = (input) => {
    if (input) {
      const bitArray = sjcl.hash.sha256.hash(input)
      setHash(sjcl.codec.hex.fromBits(bitArray))
      if (typeof answer === 'number') {
      } else if (
        typeof answer === 'string' &&
        hash &&
        hash.substring(0, answer.length) === answer
      ) {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    } else {
      setHash('')
    }
  }

  useEffect(() => {
    handleHash(input)
    if (typeof answer === 'string') {
      onChange(hash.substring(0, answer.length))
    } else {
      onChange(hash)
    }
  }, [answer, hash, input, onChange])

  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-left text-[18px] font-bold md:text-center">
          {label}
        </h2>
        <span
          className={clsx(
            'flex h-full w-full resize-none justify-center overflow-hidden bg-transparent text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:w-[758px] md:text-center md:text-[24px] md:tracking-[5px] lg:w-[858px] lg:text-[30px]',
            {
              'text-white': typeof answer === 'number' && input !== '',
              'text-white/50': input === '' || typeof answer === 'string',
            }
          )}
        >
          {formatHash(hash, 4, rows ? 4 : 2, undefined, success, 'mr-3')}
        </span>
      </div>
    </>
  )
}
