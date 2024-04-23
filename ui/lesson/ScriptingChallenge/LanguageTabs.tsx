import clsx from 'clsx'
import { chapters } from 'content'
import { EditorLanguages, LessonView, PlainEditorLanguages } from 'types'
import { useLessonContext, Tooltip } from 'ui'
import { languageMeta } from './config'

export default function LanguageTabs({
  languages,
  value,
  onChange,
  noHide,
  languageLocked,
}: {
  languages: EditorLanguages | PlainEditorLanguages
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
          (languageLocked && meta.value !== value && (
            <button
              key={i}
              onClick={() => onChange(meta.value)}
              className={clsx(
                'flex h-full items-center justify-center border-r border-white border-opacity-30',
                {
                  'bg-black bg-opacity-20': meta.value === value,
                  'cursor-default': languageLocked && meta.value !== value,
                }
              )}
            >
              <Tooltip
                id={'Language Locked'}
                theme={chapters['chapter-6'].metadata.theme}
                className="flex h-full w-full justify-center no-underline"
                content={
                  <span>
                    Language disabled since you've started this chapter in{' '}
                    {value}
                  </span>
                }
              >
                <span
                  className={clsx('px-4 font-nunito text-xs text-white', {
                    'text-opacity-40': meta.value !== value,
                  })}
                >
                  {meta.label}
                </span>
              </Tooltip>
            </button>
          )) || (
            <button
              key={i}
              onClick={() => onChange(meta.value)}
              className={clsx(
                'flex h-full items-center justify-center border-r border-white border-opacity-30',
                {
                  'bg-black bg-opacity-20': meta.value === value,
                  'cursor-auto': languageLocked && meta.value !== value,
                }
              )}
            >
              <span
                className={clsx('px-4 font-nunito text-xs text-white', {
                  'text-opacity-40': meta.value !== value,
                })}
              >
                {meta.label}
              </span>
            </button>
          )
        )
      })}
    </div>
  )
}
