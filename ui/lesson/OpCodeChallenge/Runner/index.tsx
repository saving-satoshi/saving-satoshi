'use client'

import clsx from 'clsx'
import { useMediaQuery, useTranslations } from 'hooks'
import { useRef, useState } from 'react'
import { Loader } from 'shared'
import Icon from 'shared/Icon'

import { LessonView } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import { HasherState } from 'ui/lesson/ScriptingChallenge/Runner/Hasher'
import { StatusBarType, SuccessNumbers } from 'ui/common/StatusBar'

enum State {
  Idle = 'idle',
  Building = 'building',
  Running = 'running',
  Error = 'error',
  Complete = 'complete',
}

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
  const [state, setState] = useState<State>(State.Idle)
  const { activeView } = useLessonContext()
  const [loading, setLoading] = useState<boolean>(false)
  const isActive = activeView !== LessonView.Info
  // const [isTryAgain, setIsTryAgain] = useState<boolean | null>(null)
  const [hasherState, setHasherState] = useState<HasherState>(
    HasherState.Waiting
  )
  const isSmallScreen = useMediaQuery({ width: 767 })

  return (
    <div className="flex ">
      <div
        className={clsx(
          'flex h-14 min-h-14 w-full items-start border-t border-white border-opacity-30',
          {
            'hidden md:flex':
              !isSmallScreen &&
              activeView !== LessonView.Execute &&
              hasherState !== HasherState.Success,
            hidden:
              hasherState === HasherState.Success ||
              loading ||
              activeView === 'info',
            flex: isActive,
          }
        )}
      >
        <button
          disabled={loading}
          className={clsx(
            'flex h-full items-center justify-start gap-3 p-0 px-4 font-mono text-white',
            {
              hidden: success == true || success === 5,
            }
          )}
          onClick={handleRun}
        >
          {success !== true && success !== 5 && (
            <>
              <div
                className={clsx(
                  'flex h-6 w-6 items-center justify-center rounded-sm px-2 py-1.5',
                  {
                    'bg-white': !loading,
                    'bg-white/50': loading,
                  }
                )}
              >
                <Icon
                  icon="play"
                  className="h-full w-full object-contain text-[#334454]"
                />
              </div>
            </>
          )}
        </button>
        <StatusBar
          handleTryAgain={handleTryAgain}
          errorMessage={errorMessage || ''}
          className={clsx('h-14 min-h-14 grow border-t-0  px-2', {
            '!bg-transparent': success !== true && success !== 5,
          })}
          textClass="text-lg !p-0"
          success={success}
          hints
          nextStepMessage={nextStepMessage}
          nextStepButton={nextStepMessage ? t('opcode.reset') : undefined}
        />
      </div>
    </div>
  )
}
