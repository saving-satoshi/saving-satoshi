import clsx from 'clsx'

export default function Card({
  transparent,
  className,
  children,
}: {
  transparent?: boolean
  className?: string
  children?: any
}) {
  return (
    <div
      className={clsx(
        'rounded-[5px] px-1.5 py-1 font-space-mono text-sm leading-none',
        {
          'bg-green text-white': !transparent,
          'text-[#39C5E2]': transparent,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
