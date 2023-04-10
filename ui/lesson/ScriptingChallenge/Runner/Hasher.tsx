import clsx from 'clsx'
import { useTranslations } from 'hooks'
import { EditorConfig, LessonView } from 'types'
import { useLessonContext } from 'ui'

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
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Execute

  const formatArgs = () => {
    return languageConfig.defaultFunction.args.join(', ')
  }

  const formatHash = (hash) => {
    const result = []
    const chunkSize = 4
    const numberOfRows = 2
    const matches = hash.match(/^0+/)
    const leadingZeros = matches && matches.length > 0 ? matches[0].length : 0
    let zeroCount = 0

    for (let i = 0; i < numberOfRows; i++) {
      const row = []

      for (let j = 0; j < hash.length / (chunkSize * numberOfRows); j++) {
        const startIndex = i * (hash.length / numberOfRows) + j * chunkSize
        const chunk = hash
          .slice(startIndex, startIndex + chunkSize)
          .split('')
          .map((char, idx) => {
            if (zeroCount < leadingZeros && char === '0') {
              zeroCount++
              return (
                <span key={idx} className="text-white">
                  {char}
                </span>
              )
            }
            return char
          })

        row.push(
          <span key={startIndex} className="text-white text-opacity-50">
            {chunk}
          </span>
        )
      }

      result.push(
        <div key={i} className="flex items-center justify-start gap-3">
          {row}
        </div>
      )
    }

    return result
  }

  console.log(LessonView, isActive, activeView)

  return (
    <div
      className={clsx(
        'flex h-60 flex-col gap-4 overflow-hidden border-t border-white border-opacity-30 p-4 font-mono text-white',
        {
          'bg-[#28B123] bg-opacity-25': state === HasherState.Success,
          'bg-[#253547]': state !== HasherState.Success,
        },
        {
          'hidden md:flex': !isActive,
          flex: isActive,
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
