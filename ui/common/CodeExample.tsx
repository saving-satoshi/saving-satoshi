import { CopyButton } from 'ui'

export default function CodeExample({ code, language }) {
  return (
    <pre className="mt-2 border-2 border-dashed border-white p-2">
      <code
        className={`language-${language} flex items-center justify-between pl-2 pr-0`}
      >
        {code}
        <CopyButton compact content={code} />
      </code>
    </pre>
  )
}
