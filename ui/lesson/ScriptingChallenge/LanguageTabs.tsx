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
  noHide,
  languageLocked,
}: {
  languages: EditorLanguages | PlainEditorLanguages
  value: string
  onChange: (val: string) => void
  onRefresh?: () => void
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
