import clsx from 'clsx'
import { chapters } from 'content'
import { useLang, usePathData, useTranslations } from 'hooks'
import Icon from 'shared/Icon'
import { EditorLanguages, LessonView, PlainEditorLanguages } from 'types'
import { useLessonContext, Tooltip } from 'ui'
import { languageMeta } from './config'

export default function LanguageTabs({
  languages,
  value,
  onChange,
  onRefresh,
  onExport,
  noHide,
  languageLocked,
}: {
  languages: EditorLanguages | PlainEditorLanguages
  value: string
  onChange: (val: string) => void
  onRefresh?: () => void
  onExport?: () => void
  noHide?: boolean
  languageLocked?: boolean
}) {
  const { activeView } = useLessonContext()
  const lang = useLang()
  const t = useTranslations(lang)
  const isActive = activeView === LessonView.Code
  const pathData = usePathData()

  const handleClick = (value) => {
    onChange(value)
  }

  return (
    <div
      className={clsx(
        'h-10 items-center justify-between border-b border-t border-white border-opacity-30 md:border-t-0',
        {
          'hidden md:flex': !noHide && !isActive,
          flex: noHide || isActive,
        }
      )}
    >
      <div className="flex h-full flex-row">
        {Object.keys(languages).map((l, i) => {
          const meta = languageMeta[l]

          return (
            (languageLocked && meta.value !== value && (
              <button
                key={i}
                onMouseDown={() => handleClick(meta.value)}
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
                  theme={
                    !!chapters[pathData.chapterId]?.metadata?.secondaryTheme
                      ? chapters[pathData.chapterId]?.metadata?.secondaryTheme
                      : chapters[pathData.chapterId]?.metadata?.theme
                  }
                  className="flex h-full w-full justify-center no-underline"
                  content={
                    <span>
                      {t('runner.language_tabs.locked')} {value}
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
                onMouseDown={() => handleClick(meta.value)}
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
      {onExport && (
        <div className="flex h-full w-10 items-center justify-center border-l border-white border-opacity-30">
          <Tooltip
            id={'Export Gist'}
            theme={
              !!chapters[pathData.chapterId]?.metadata?.secondaryTheme
                ? chapters[pathData.chapterId]?.metadata?.secondaryTheme
                : chapters[pathData.chapterId]?.metadata?.theme
            }
            className="flex h-full w-full justify-center no-underline"
            content={<span>Export to Github</span>}
          >
            <div className="hover:cursor-pointer" onClick={onExport}>
              {/* Simple Upload Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-full w-full object-contain p-2.5 text-white text-opacity-40 hover:text-opacity-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
          </Tooltip>
        </div>
      )}

      {onRefresh && (
        <div className="flex h-full w-10 items-center justify-center border-l border-white border-opacity-30">
          <Tooltip
            id={'Terminal Reset'}
            theme={
              !!chapters[pathData.chapterId]?.metadata?.secondaryTheme
                ? chapters[pathData.chapterId]?.metadata?.secondaryTheme
                : chapters[pathData.chapterId]?.metadata?.theme
            }
            className="flex h-full w-full justify-center no-underline"
            content={<span>{t('runner.language_tabs.reset')}</span>}
          >
            <div className="hover:cursor-pointer" onClick={() => onRefresh()}>
              <Icon
                icon="refresh"
                className="h-full w-full object-contain p-2.5 text-white text-opacity-40"
              />
            </div>
          </Tooltip>
        </div>
      )}
    </div>
  )
}
