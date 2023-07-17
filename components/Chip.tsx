'use client'

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
        'inline-flex h-6 w-min items-center justify-center rounded border transition ease-in-out',
        className,
        {
          'cursor-pointer': typeof onClick === 'function',
        }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
