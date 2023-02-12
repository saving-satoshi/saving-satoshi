import { CopyButton } from 'ui'

export default function CodeExample({ code, language, copy }: {code: string; language: string; copy?: boolean}) {
  return (
    <pre className="mt-2 border-2 border-dashed border-white p-2">
      <span
        className={`language-${language} flex break-all whitespace-pre-line items-center justify-between pl-2 pr-0`}
      >
        {code}
        {copy ? <CopyButton compact content={code} /> : null}
      </span>
    </pre>
  )
}
