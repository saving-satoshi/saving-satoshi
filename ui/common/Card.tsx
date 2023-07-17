import clsx from 'clsx'

export default function Card({
  transparent,
  className,
  children,
  highlight,
}: {
  transparent?: boolean
  className?: string
  children?: any
  highlight?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative w-full items-center justify-between rounded-[5px] border-2 border-transparent font-nunito',
        className,
        {
          'bg-black/15': !transparent,
          'p-4': !transparent,
        }
      )}
    >
      {children}
      {highlight && (
        <div className="absolute inset-0 animate-pulse rounded-[5px] border-2 border-[#FBEBC6] shadow-3xl"></div>
      )}
    </div>
  )
}
