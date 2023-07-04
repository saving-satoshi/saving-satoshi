'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Chip from './Chip'

export default function ProfileChip({
  ranking,
  balance,
  image,
}: {
  ranking: number
  balance: number
  image: string
}) {
  const [isRanking, setisRanking] = useState<boolean>(true)
  const [chipClass, setChipClass] = useState('')
  const [textColor, setTextColor] = useState('')
  const [text, setText] = useState('')

  function handleClick() {
    setisRanking(!isRanking)
  }

  useEffect(() => {
    if (isRanking) {
      setChipClass('border-orange bg-[#532E5E]')
      setTextColor('text-orange')
      setText('#' + ranking)
    } else {
      setChipClass('border-green bg-green')
      setTextColor('text-white')
      setText(balance + ' bitcoin')
    }
  }, [isRanking])

  return (
    <Chip className={chipClass} onClick={handleClick}>
      <div className="relative h-6 w-6">
        <Image
          src={image}
          fill
          className="h-full w-full rounded-l object-cover"
          alt="something"
        />
      </div>
      <div
        className={clsx(
          'mx-1.5 whitespace-nowrap font-nunito text-sm',
          textColor
        )}
      >
        {text}
      </div>
    </Chip>
  )
}
