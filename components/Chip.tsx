'use client'

import Image from 'next/image'
import clsx from 'clsx'

export default function Chip({
  children,
  className,
  onClick,
}: {
  children?: any
  className?: string
  onClick?: any
}) {
  return (
    <div
      className={clsx(
        'inline-flex h-min w-min cursor-pointer items-center justify-center rounded border transition ease-in-out',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
