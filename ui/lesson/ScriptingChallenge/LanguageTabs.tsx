import clsx from 'clsx'
import { EditorLanguages } from 'types'
import { languageMeta } from './config'

export default function LanguageTabs({
  languages,
  value,
  onChange,
}: {
  languages: EditorLanguages
  value: string
  onChange: (val: string) => void
}) {
  return (
    <div className="flex h-10 items-center justify-start border-b border-white border-opacity-30 bg-[#432A43]">
      {Object.keys(languages).map((l, i) => {
        const meta = languageMeta[l]

        return (
          <button
            key={i}
            onClick={() => onChange(meta.value)}
            className={clsx(
              'h-full border-r border-white border-opacity-30 px-4',
              { 'bg-black bg-opacity-20': meta.value === value }
            )}
          >
            <span
              className={clsx('font-nunito text-xs text-white', {
                'text-opacity-40': meta.value !== value,
              })}
            >
              {meta.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
