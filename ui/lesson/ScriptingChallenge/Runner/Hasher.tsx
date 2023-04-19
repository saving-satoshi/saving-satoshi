import clsx from 'clsx'
import { useTranslations } from 'hooks'
import { EditorConfig } from 'types'
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
  errorMessage,
  value,
}: {
  lang: string
  language: string
  state: HasherState
  config: EditorConfig
  successMessage: string
  errorMessage: string
  value: any
}) {
  const t = useTranslations(lang)
  const languageConfig = config.languages[language]

  const formatArgs = () => {
    return languageConfig.defaultFunction.args.join(', ')
  }

  return (
    <div
      className={clsx(
        'flex h-60 flex-col gap-4 overflow-y-auto border-t border-white border-opacity-30 p-4 font-mono text-white',
        {
          'bg-[#28B123] bg-opacity-25': state === HasherState.Success,
          'bg-[#253547]': state !== HasherState.Success,
        }
      )}
    >
      {state === HasherState.Waiting && (
        <div className="flex flex-col">
          <span className="text-sm font-bold">{t('runner.script_output')}</span>
          <span className="text-sm text-white text-opacity-50">
            {t('runner.waiting')}
          </span>
        </div>
      )}

      <div className="flex flex-col">
        <span className="text-sm font-bold">{t('runner.running')}</span>
        <span className="text-sm">
          {languageConfig.defaultFunction.name}({formatArgs()})
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-bold">{t('runner.result')}</span>
        {state === HasherState.Error && (
          <span className="text-sm text-[#F3241D]">Error</span>
        )}
        {state !== HasherState.Error && value && (
          <div className="flex flex-col gap-1">{formatHash(value)}</div>
        )}
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-bold">{t('runner.evaluation')}</span>
        {state === HasherState.Error && (
          <span className="text-sm">{errorMessage}</span>
        )}
        {state === HasherState.Success && (
          <span className="text-sm">{successMessage}</span>
        )}
        {state !== HasherState.Error && state !== HasherState.Success && (
          <span className="text-sm">Custom validation message</span>
        )}
      </div>
    </div>
  )
}
