'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Button } from 'shared'
import sjcl from 'sjcl'

export default function Hasher({
  answer,
  label,
  onChange,
  auto,
  input,
}: {
  answer: string | number
  label: string
  onChange: any
  auto: boolean
  input: string
}) {
  const [hash, setHash] = useState('')
  const [clicked, setClicked] = useState(false)

  const handleAutoChange = () => {
    setHash(
      sjcl.codec.hex.fromBits(
        sjcl.hash.sha256.hash(Math.random() * 1000000000000000000)
      )
    )
  }

  const handleHash = (input) => {
    if (input) {
      const bitArray = sjcl.hash.sha256.hash(input)
      setHash(sjcl.codec.hex.fromBits(bitArray))
    } else {
      setHash('')
    }
  }

  function handleClick() {
    setClicked(!clicked)
  }

  useEffect(() => {
    handleHash(input)
    if (typeof answer === 'string') {
      console.log('checked', answer, hash)
      onChange(hash.substring(0, answer.length))
      const miner =
        clicked &&
        !hash.startsWith(answer) &&
        setInterval(() => {
          handleAutoChange()
        }, 50)
      return () => clearInterval(miner)
    } else {
      onChange(hash)
    }
  })

  return (
    <>
      {!auto && (
        <>
          <div className="flex flex-col">
            <h2 className="text-left text-[18px] font-bold md:text-center">
              {label}
            </h2>
            <p
              className={clsx(
                'top-0 left-0 h-full w-4/5 resize-none overflow-hidden break-words bg-transparent text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:w-3/5 md:text-[30px] md:tracking-[5px]',
                {
                  'overlay-complete':
                    (typeof answer === 'string' &&
                      hash.startsWith(answer) === true) ||
                    (typeof answer === 'number' && input.length >= answer),
                  'overlay-incomplete':
                    (typeof answer === 'string' &&
                      hash.startsWith(answer) === false) ||
                    (typeof answer === 'number' && input.length < answer),
                  underscore: !hash || !answer,
                }
              )}
            >
              {hash
                ? `${hash.substring(0, 4)} ${hash.substring(
                    4,
                    8
                  )} ${hash.substring(8, 12)} ${hash.substring(
                    12,
                    16
                  )} ${hash.substring(16, 20)} ${hash.substring(20, 24)}
                 ${hash.substring(24, 28)} ${hash.substring(
                    32,
                    36
                  )} ${hash.substring(40, 44)} ${hash.substring(
                    44,
                    48
                  )} ${hash.substring(52, 56)} ${hash.substring(60, 64)}`
                : '____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____'}
            </p>
          </div>
        </>
      )}
      {auto && typeof answer === 'string' && (
        <>
          <Button
            full
            size="small"
            style="outline"
            onClick={handleClick}
            disabled={hash.startsWith(answer)}
          >
            {(clicked && !hash.startsWith(answer) && 'Hashing...') ||
              (!clicked && !hash.startsWith(answer) && 'Click') ||
              (clicked && hash.startsWith(answer) && 'Found!')}
          </Button>
          <p
            className={clsx(
              'top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent text-center font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:text-[30px] md:tracking-[5px]',
              {
                'overlay-complete': hash.startsWith(answer) === true,
                'overlay-incomplete': hash.startsWith(answer) === false,
              }
            )}
          >
            {hash
              ? `${hash.substring(0, 4)} ${hash.substring(
                  4,
                  8
                )} ${hash.substring(8, 12)} ${hash.substring(
                  12,
                  16
                )} ${hash.substring(16, 20)} ${hash.substring(20, 24)}
                 ${hash.substring(24, 28)} ${hash.substring(
                  32,
                  36
                )} ${hash.substring(40, 44)} ${hash.substring(
                  44,
                  48
                )} ${hash.substring(52, 56)} ${hash.substring(60, 64)}`
              : '____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____'}
          </p>
        </>
      )}
    </>
  )
}

/*
'000'
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvccxcvxcvxcvxcvxcvxcvcvcvcvvbbbbbbbbbbbbbgggggggggggggggggggggggggggggggggggggggggggdddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdddddddsaaaaaaaaaaaaaaaaaaaaaaqqwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffggggggggggggggggggggggggggggggggggggtttttttttttreerwerwerwerwerwerwerwerwerwererererwewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewwwwwwwwwwwwwwwwwwwwwwwwwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
*/
