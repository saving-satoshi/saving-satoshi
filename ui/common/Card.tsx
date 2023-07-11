import clsx from 'clsx'

export default function Card({
  transparent,
  className,
  children,
  highlight,
  firstItem = false,
  dual = false,
}: {
  transparent?: boolean
  className?: string
  children?: any
  highlight?: boolean
  firstItem?: boolean
  dual?: boolean
}) {
  return (
    <div
      className={clsx('relative', {
        'w-1/2': dual,
      })}
    >
      <div
        className={clsx(
          className,
          'w-full items-center justify-between rounded-[5px] border-2 border-transparent font-nunito',
          {
            'bg-black/15': !transparent,
            'p-4': !(transparent || dual),
            'mt-0': firstItem,
            'mt-5': !firstItem,
          }
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
