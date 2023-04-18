import clsx from 'clsx'
import { CopyButton } from 'shared'

export default function CodeExample({
  code,
  language,
  copy,
  className,
}: {
  code: string
  language: string
  copy?: boolean
  className?: string
}) {
  return (
    <pre className={clsx('border-2 border-dashed border-white p-2', className)}>
      <span
        className={`language-${language} flex items-center justify-between whitespace-pre-line break-all pl-2 pr-0`}
      >
        {code}
        {copy ? <CopyButton compact content={code} /> : null}
      </span>
    </pre>
  )
}
