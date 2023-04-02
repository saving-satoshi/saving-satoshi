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
  answer: string
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
    if (!!input) {
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
    hash && onChange(hash.substring(0, answer.length))
    const miner =
      clicked &&
      !hash.startsWith(answer) &&
      setInterval(() => {
        handleAutoChange()
      }, 50)
    return () => clearInterval(miner)
  })

  console.log(hash.startsWith(answer))

  return (
    <>
      {!auto && (
        <>
          <form className="flex">
            <div className="flex justify-center">
              {/* <input
                placeholder="Type here..."
                className={clsx(
                  'top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:text-[30px] md:tracking-[5px]',
                  {
                    'overlay-complete': hash.startsWith(answer) === true,
                    'overlay-incomplete': hash.startsWith(answer) === false,
                  }
                )}
                onChange={handleChange}
                value={input}
              /> */}
            </div>
          </form>

          {/* <hr className="border-1 invisible h-1 w-screen border-white/25 md:visible" /> */}

          <div>
            <h2 className="text-left text-xl font-bold md:text-center">
              {label}
            </h2>
            <p
              className={clsx(
                'top-0 left-0 h-full w-full resize-none overflow-hidden break-words bg-transparent text-center font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:text-[30px] md:tracking-[5px]',
                {
                  'overlay-complete':
                    input.length > 4 && hash.startsWith(answer) === true,
                  'overlay-incomplete': hash.startsWith(answer) === false,
                }
              )}
            >
              {hash
                ? hash
                : '____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____'}
            </p>
          </div>
        </>
      )}
      {auto && (
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
              ? hash
              : '________________________________________________________________'}
          </p>
        </>
      )}
    </>
  )
}

/*
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvccxcvxcvxcvxcvxcvxcvcvcvcvvbbbbbbbbbbbbbgggggggggggggggggggggggggggggggggggggggggggdddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdddddddsaaaaaaaaaaaaaaaaaaaaaaqqwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffggggggggggggggggggggggggggggggggggggtttttttttttreerwerwerwerwerwerwerwerwerwererererwewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewwwwwwwwwwwwwwwwwwwwwwwwwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
*/
