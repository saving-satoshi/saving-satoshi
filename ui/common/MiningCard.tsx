'use client'

import clsx from 'clsx'

export default function MiningCard({
  children,
  className,
}: {
  children: any
  className: string
}) {
  return (
    <div
      className={clsx(
        'mt-5 flex flex-col items-center justify-center rounded-[5px] border-2 border-transparent bg-black/15 p-4 font-nunito font-semibold',
        className
      )}
    >
      {children}
    </div>
  )
}
