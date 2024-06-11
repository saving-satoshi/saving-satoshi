import clsx from 'clsx'
import { CopyButton } from 'shared'

export default function CodeExample({
  code,
  language,
  copy,
  text,
  className,
}: {
  code: string
  language: string
  copy?: boolean
  text?: boolean
  className?: string
}) {
  return (
    <pre className={clsx('bg-[#00000033] p-2', className)}>
      <span
        className={clsx(
          `language-${language} flex items-center justify-between pl-2 pr-0`,
          {
            'break-all': !text,
            'break-word': text,
          }
        )}
      >
        {code}
        {copy ? <CopyButton compact content={code} /> : null}
      </span>
    </pre>
  )
}
