import clsx from 'clsx'
import { EditorLanguages, LessonView } from 'types'
import { useLessonContext } from 'ui'
import { languageMeta } from './config'

export default function LanguageTabs({
  languages,
  value,
  onChange,
  noHide,
  languageLocked,
}: {
  languages: EditorLanguages
  value: string
  onChange: (val: string) => void
  noHide?: boolean
  languageLocked?: boolean
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code

  return (
    <div
      className={clsx(
        'h-10 items-center justify-start border-b border-t border-white border-opacity-30 md:border-t-0',
        {
          'hidden md:flex': !noHide && !isActive,
          flex: noHide || isActive,
        }
      )}
    >
      {Object.keys(languages).map((l, i) => {
        const meta = languageMeta[l]

        return (
          <button
            key={i}
            onClick={() => onChange(meta.value)}
            className={clsx(
              'h-full border-r border-white border-opacity-30 px-4',
              {
                'bg-black bg-opacity-20': meta.value === value,
                hidden: languageLocked && meta.value !== value,
              }
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
