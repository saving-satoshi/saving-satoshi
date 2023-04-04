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
  const hashString = (hash ? hash : '_'.repeat(64)).match(/.{1,4}/g).join(' ')
  const miner =
    clicked &&
    typeof answer === 'string' &&
    !hash.startsWith(answer) &&
    setInterval(() => {
      handleAutoChange()
    }, 10)

  const handleAutoChange = () => {
    const randomNum = (Math.random() * 1000000000000000000).toString()
    setHash(sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(randomNum)))
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
    !clicked && handleHash(input)
    if (typeof answer === 'string') {
      onChange(hash.substring(0, answer.length))
    } else {
      onChange(hash)
    }
    return () => {
      clearInterval(miner)
    }
  }, [answer, clicked, hash, input, onChange, miner])

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
                'h-full w-4/5 resize-none overflow-hidden break-words bg-transparent text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:w-full md:max-w-5xl md:text-center md:text-[30px] md:tracking-[5px]',
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
              {hashString}
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
              (hash.startsWith(answer) && 'Found!')}
          </Button>
          <p
            className={clsx(
              'h-full w-4/5 resize-none overflow-hidden break-words bg-transparent text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:w-full md:max-w-5xl md:text-center md:text-[30px] md:tracking-[5px]',
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
            {hashString}
          </p>
        </>
      )}
    </>
  )
}
