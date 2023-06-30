import clsx from 'clsx'

export default function BlockCounter({
  blocks,
  total,
  onlyCount = false,
  className,
}: {
  blocks: number
  total?: number
  onlyCount?: boolean
  className?: string
}) {
  return (
    <span
      className={clsx('', className, {
        'fade-in text-white': blocks !== 0,
        'text-black/50': blocks === 0,
      })}
    >
      {Intl.NumberFormat().format(blocks)}
      {onlyCount !== true && <span> of {total}</span>}
    </span>
  )
}
