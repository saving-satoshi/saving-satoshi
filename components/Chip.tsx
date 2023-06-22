'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

export default function Chip({
  position,
  coins,
  img,
}: {
  position: number
  coins: number
  img: string
}) {
  const [isPosition, setIsPosition] = useState<boolean>(true)

  function handleClick() {
    setIsPosition(!isPosition)
  }

  const positonString = '#' + position
  const coinString = coins + ' bitcoin'

  return (
    <div
      className={clsx(
        'inline-flex h-min w-min cursor-pointer items-center justify-center rounded border transition ease-in-out',
        {
          'border-orange bg-[#532E5E]': isPosition,
          'border-green bg-green': !isPosition,
        }
      )}
      onClick={handleClick}
    >
      <div className="relative h-6 w-6">
        <Image
          src={img}
          fill
          className="h-full w-full rounded-l object-cover"
          alt="something"
        ></Image>
      </div>
      <div
        className={clsx('mx-1.5 whitespace-nowrap font-nunito text-sm', {
          'text-orange': isPosition,
          'text-white': !isPosition,
        })}
      >
        {isPosition ? positonString : coinString}
      </div>
    </div>
  )
}
