import clsx from 'clsx'
import { useTranslations } from 'hooks'
import { EditorConfig, LessonView } from 'types'
import { useLessonContext } from 'ui'
import formatHash from 'lib/formatHash'

export enum HasherState {
  Waiting = 0,
  Running = 1,
  Error = 2,
  Success = 3,
}

export default function Hasher({
  lang,
  language,
  state,
  config,
  successMessage,
  errors,
  value,
}: {
  lang: string
  language: string
  state: HasherState
  config: EditorConfig
  successMessage: string
  errors: string[]
  value: any
}) {
  const t = useTranslations(lang)
  const languageConfig = config.languages[language]
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Execute

  const formatArgs = () => {
    return languageConfig.defaultFunction.args.join(', ')
  }

  return (
    <div
      className={clsx(
        'terminal flex grow flex-col gap-4 overflow-y-auto border-t border-white border-opacity-30 p-4 font-mono text-white',
        {
          'bg-[#28B123] bg-opacity-25': state === HasherState.Success,
          'bg-black/15': state !== HasherState.Success,
        },
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      {state === HasherState.Waiting && (
        <div className="flex grow flex-col">
          <span className="text-sm font-bold">{t('runner.script_output')}</span>
          <span className="text-sm text-white text-opacity-50">
            {t('runner.waiting')}
          </span>
        </div>
      )}

      {state !== HasherState.Waiting && (
        <div className="flex flex-col">
          <span className="text-sm font-bold">{t('runner.running')}</span>
          <span className="text-sm">
            {languageConfig.defaultFunction.name}({formatArgs()})
          </span>
        </div>
      )}

      {state === HasherState.Error && (
        <div className="flex flex-col">
          <span className="text-sm font-bold">{t('runner.result')}</span>
          {value &&
          value.length === 64 &&
          formatHash(value, 4, 2).length > 0 ? (
            <div className="flex flex-col gap-1">{formatHash(value, 4, 2)}</div>
          ) : (
            <span className="text-sm text-[#f3241d]">Error</span>
          )}
        </div>
      )}

      {(state === HasherState.Success || state === HasherState.Running) && (
        <div className="flex flex-col">
          <span className="text-sm font-bold">{t('runner.result')}</span>
          {value && (
            <div className="flex flex-col gap-1">{formatHash(value, 4, 2)}</div>
          )}
        </div>
      )}

      {state !== HasherState.Waiting && (
        <div className="flex flex-col">
          <span className="text-sm font-bold">
            {state === HasherState.Error ? 'Error' : t('runner.evaluation')}
          </span>
          {state === HasherState.Error && (
            <span className="text-sm">
              Check the Console tab for more information
            </span>
          )}
          {state === HasherState.Success && (
            <span className="text-sm">{successMessage}</span>
          )}
          {state !== HasherState.Error && state !== HasherState.Success && (
            <span className="text-sm">
              Waiting for you to run the script...
            </span>
          )}
        </div>
      )}
    </div>
  )
}
