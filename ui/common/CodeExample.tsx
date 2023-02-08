import { CopyButton } from 'ui'

export default function CodeExample({ code, language, copy }: {code: string; language: string; copy?: boolean | string}) {
  const copyElement = () => {
    if(copy === true) {
      return <CopyButton compact content={code} />
    } else if(typeof(copy) === 'string') {
      return <CopyButton compact content={copy} />
    } else {
      return null
    }
  }
  return (
    <pre className="mt-2 border-2 border-dashed border-white p-2">
      <span
        className={`language-${language} flex break-all whitespace-pre-line items-center justify-between pl-2 pr-0`}
      >
        {code}
        {copyElement()}
      </span>
    </pre>
  )
}
