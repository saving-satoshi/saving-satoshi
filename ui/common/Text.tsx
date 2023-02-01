import clsx from 'clsx'

export default function Text({
  children,
  className,
  code,
}: {
  children: React.ReactNode
  className?: string
  code?: boolean
}) {
  return (
    <p
      className={clsx('text-white', className, {
        'font-nunito': !code,
        'code block overflow-y-auto rounded py-2 font-mono': code,
      })}
    >
      {children}
    </p>
  )
}
