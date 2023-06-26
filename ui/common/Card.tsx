import clsx from 'clsx'

export default function Card({
  transparent,
  inline,
  className,
  children,
  highlight,
}: {
  transparent?: boolean
  inline?: boolean
  className?: string
  children?: any
  highlight?: boolean
}) {
  return (
    <div className="relative">
      <div
        className={clsx(
          'mt-5 w-full items-center justify-between rounded-[5px] border-2 border-transparent font-nunito',
          className,
          {
            'bg-black/15 p-4': !transparent,
            'flex-inline': inline,
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
