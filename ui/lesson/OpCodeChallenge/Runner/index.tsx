'use client'

import clsx from 'clsx'
import { useMediaQuery, useTranslations } from 'hooks'
import { useRef, useState, useEffect } from 'react'
import { Loader } from 'shared'
import Icon from 'shared/Icon'
import { LessonView } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import { HasherState } from 'ui/lesson/ScriptingChallenge/Runner/Hasher'
import { StatusBarType, SuccessNumbers } from 'ui/common/StatusBar'

export interface OpCodeRunnerType extends StatusBarType {
  lang: string
  handleRun: () => void
}

export default function OpCodeRunner({
  lang,
  handleRun,
  handleTryAgain,
  success,
  nextStepMessage,
  errorMessage,
}: OpCodeRunnerType) {
  const t = useTranslations(lang)
  const { activeView, setActiveView } = useLessonContext()
  const isActive = activeView !== LessonView.Info
  const [hasherState, setHasherState] = useState<
    SuccessNumbers | boolean | null
  >(0)
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleRunClick = () => {
    setActiveView(LessonView.Execute)
    handleRun()
  }

  useEffect(() => {
    setHasherState(success)
  }, [success])

  return (
    <div className="flex ">
      <div
        className={clsx(
          'flex h-14 min-h-14 w-full items-start border-t border-white border-opacity-30 bg-black/20',
          {
            'hidden md:flex': activeView === LessonView.Info || !isActive,
            flex: isActive,
          }
        )}
      >
        <button
          disabled={
            hasherState === 1 || hasherState === 5 || hasherState == true
          }
          className={clsx(
            'flex h-full items-center justify-start gap-3 p-0 px-4 font-mono text-white',
            {
              hidden: hasherState === 5,
            }
          )}
          onClick={handleRunClick}
        >
          {((hasherState === 0 ||
            hasherState === 2 ||
            hasherState === 3 ||
            hasherState === 6) && (
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white px-2 py-1.5">
              <Icon
                icon="play"
                className="h-full w-full object-contain text-[#334454]"
              />
            </div>
          )) || (
            <div className="flex h-6 w-6 items-center justify-center rounded-sm">
              <Loader className="h-full w-full object-contain" />
            </div>
          )}
        </button>
        <StatusBar
          beginMessage={t('opcode.run')}
          handleTryAgain={handleTryAgain}
          errorMessage={errorMessage || ''}
          className={clsx('h-14 min-h-14 grow border-t-0', {
            '!bg-transparent': success !== true && success !== 5,
            'pl-4': success === true || success === 5,
          })}
          textClass="text-lg !p-0"
          success={success}
          hints
          nextStepMessage={nextStepMessage}
          nextStepButton={t('opcode.reset')}
        />
      </div>
    </div>
  )
}
