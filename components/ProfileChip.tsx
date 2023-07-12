'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Chip from './Chip'

export enum ProfileChipVariant {
  Ranking = 'ranking',
  Balance = 'balance',
}

export default function ProfileChip({
  className,
  image,
  variant,
  value,
}: {
  className?: string
  image?: string
  variant: ProfileChipVariant
  value: string | number
}) {
  const prefix = variant === ProfileChipVariant.Ranking ? '#' : ''
  const suffix = variant === ProfileChipVariant.Ranking ? '' : ' bitcoin'
  const label = `${prefix}${value}${suffix}`

  return (
    <Chip
      className={clsx(className, 'overflow-hidden', {
        'border-orange bg-[#532E5E]': variant === ProfileChipVariant.Ranking,
        'border-green bg-green': variant === ProfileChipVariant.Balance,
      })}
    >
      {image && (
        <div className="relative h-6 w-6">
          <Image
            src={image}
            fill
            className="h-full w-full object-cover"
            alt="something"
          />
        </div>
      )}
      <div
        className={clsx('mx-1.5 whitespace-nowrap font-nunito text-sm', {
          'text-orange': variant === ProfileChipVariant.Ranking,
          'text-white': variant === ProfileChipVariant.Balance,
        })}
      >
        {label}
      </div>
    </Chip>
  )
}
