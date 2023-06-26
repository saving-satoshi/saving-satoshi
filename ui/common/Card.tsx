import clsx from 'clsx'

export default function Card({
  transparent,
  inline,
  className,
  children,
}: {
  transparent?: boolean
  inline?: boolean
  className?: string
  children?: any
}) {
  return (
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
  )
}
