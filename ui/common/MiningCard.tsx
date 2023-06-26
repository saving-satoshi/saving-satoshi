'use client'

import clsx from 'clsx'

export default function MiningCard({
  children,
  className,
  highlight,
  dual,
}: {
  children: any
  className?: string
  highlight?: boolean
  dual?: boolean
}) {
  return (
    <div className={clsx('relative', { 'w-1/2': dual })}>
      <div
        className={clsx(
          'mt-5 w-full rounded-[5px] border-2 border-transparent bg-black/15 font-space-mono text-[15px]',
          className
        )}
      >
        {children}
      </div>
      {highlight && (
        <div className="absolute inset-0 mt-5 animate-pulse rounded-[5px] border-2 border-[#FBEBC6] shadow-3xl"></div>
      )}
    </div>
  )
}
