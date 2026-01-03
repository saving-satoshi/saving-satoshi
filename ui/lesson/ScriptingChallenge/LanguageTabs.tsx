import clsx from 'clsx'
import { chapters } from 'content'
import { useLang, usePathData, useTranslations } from 'hooks'
import Icon from 'shared/Icon'
import { EditorLanguages, LessonView, PlainEditorLanguages } from 'types'
import { useLessonContext, Tooltip } from 'ui'
import { languageMeta } from './config'
import { useEffect, useRef, useState } from 'react'

export default function LanguageTabs({
  languages,
  value,
  onChange,
  onRefresh,
  noHide,
  languageLocked,
  onDownload,
}: {
  languages: EditorLanguages | PlainEditorLanguages
  value: string
  onChange: (val: string) => void
  onRefresh?: () => void
  noHide?: boolean
  languageLocked?: boolean
  onDownload?: (format: string) => void
}) {
  const { activeView } = useLessonContext()
  const lang = useLang()
  const t = useTranslations(lang)
  const isActive = activeView === LessonView.Code
  const pathData = usePathData()
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClick = (value) => {
    onChange(value)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
      {onDownload && (
        <div
          ref={menuRef}
          className="relative flex h-full w-10 items-center justify-center border-l border-white border-opacity-30"
        >
          <Tooltip
            id={'Download Code'}
            theme={chapters[pathData.chapterId]?.metadata?.theme}
            className="flex h-full w-full justify-center no-underline"
            content={<span>Download Options</span>}
          >
            <div
              className="hover:cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={clsx(
                  'h-full w-full object-contain p-2.5 transition-colors',
                  {
                    'text-white text-opacity-100': showMenu,
                    'text-white text-opacity-40 hover:text-opacity-100':
                      !showMenu,
                  }
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 3v13.5M7.5 12l4.5 4.5 4.5-4.5"
                />{' '}
              </svg>
            </div>
          </Tooltip>

          {showMenu && (
            <div className="absolute right-0 top-10 z-50 w-48 rounded-md border border-white/20 bg-[#222] py-1 shadow-lg ring-1 ring-black ring-opacity-5">
              {[
                { label: 'Source File', value: 'source' },
                { label: 'Text File (.txt)', value: 'txt' },
                { label: 'Markdown (.md)', value: 'md' },
                { label: 'JSON (.json)', value: 'json' },
                { label: 'Base64 Encoded', value: 'base64' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    onDownload(opt.value)
                    setShowMenu(false)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
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
