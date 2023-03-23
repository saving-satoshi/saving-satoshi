'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Button } from 'shared'
import sjcl from 'sjcl'

export default function Hashing({}) {
  const [input, setInput] = useState('')
  const [autoInput, setAutoInput] = useState(
    '110000000000000000000000000000000000000000000000000000000000000000000000'
  )
  const [hash, setHash] = useState(
    '110000000000000000000000000000000000000000000000000000000000000000000000'
  )
  const [clicked, setClicked] = useState(false)
  const answer = '00'
  let nIntervId

  // sjcl.hash.sha256.prototype = {
  //   blocksize: 256
  // }

  const handleChange = (event) => {
    setInput(event.target.value)
    handleHash(event.target.value)
  }

  const handleAutoChange = () => {
    // const autoBitArray = sjcl.hash.sha256.hash(Math.random())
    // setAutoInput('')
    // console.log(randomNumber * 1000000000000000000)
    // setRandomNumber(Math.random())
    nIntervId = setInterval(() => {
      // if (!!clicked) {
      // if (!autoInput.startsWith(answer)) {
      setHash(
        sjcl.codec.hex.fromBits(
          sjcl.hash.sha256.hash(Math.random() * 1000000000000000000)
        )
      )
      console.log(nIntervId)
      // if (autoInput.startsWith(answer)) {
      // setClicked(false)
      // }
      // }
      // }
    }, 10)
    // console.log(autoInput, sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(Math.random())))
  }

  const handleHash = (input) => {
    if (!!input) {
      const bitArray = sjcl.hash.sha256.hash(input)
      setHash(sjcl.codec.hex.fromBits(bitArray))
      // console.log(
      //   new sjcl.hash.sha256()
      //     .update(input)
      //     .finalize()
      //     .join('')
      //     .replaceAll('-', '')
      // )
      // console.log(hash)
    } else {
      setHash('0000')
    }
  }

  function handleClick() {
    clearInterval(nIntervId)
    setClicked(!clicked)
    console.log(clicked)
  }

  const times = 10

  useEffect(() => {
    if (clicked && !hash.startsWith(answer)) {
      handleAutoChange()
    }

    // setClicked(!clicked)
    // while(!!clicked) {
    // setInterval(() => {
    //   handleAutoChange()
    //   setClicked(!clicked)
    // }, 1000)
    // }
  }, [clicked])

  return (
    <>
      <form>
        <input
          placeholder="________"
          className={clsx(
            'top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent text-center font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:text-[30px] md:tracking-[5px]',
            {
              'overlay-complete': hash.startsWith(answer) === true,
              'overlay-incomplete': hash.startsWith(answer) === false,
            }
          )}
          onChange={handleChange}
          value={input}
        />
      </form>
      <p
        className={clsx(
          'top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent text-center font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:text-[30px] md:tracking-[5px]',
          {
            'overlay-complete': hash.startsWith(answer) === true,
            'overlay-incomplete': hash.startsWith(answer) === false,
          }
        )}
      >
        {hash}
      </p>
      <Button full size="small" style="outline" onClick={handleClick}>
        Click
      </Button>
      <p
        className={clsx(
          'top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent text-center font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:text-[30px] md:tracking-[5px]',
          {
            'overlay-complete': hash.startsWith(answer) === true,
            'overlay-incomplete': hash.startsWith(answer) === false,
          }
        )}
        // className="top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent font-space-mono text-[18px] leading-[180%] tracking-[1px] outline-none md:text-[30px] md:tracking-[5px]"
        // onChange={handleAutoChange}
        // value={input}
      >
        {hash}
      </p>
    </>
  )
}

/*
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvccxcvxcvxcvxcvxcvxcvcvcvcvvbbbbbbbbbbbbbgggggggggggggggggggggggggggggggggggggggggggdddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdddddddsaaaaaaaaaaaaaaaaaaaaaaqqwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffggggggggggggggggggggggggggggggggggggtttttttttttreerwerwerwerwerwerwerwerwerwererererwewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewewwwwwwwwwwwwwwwwwwwwwwwwwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
*/
