'use client'

import clsx from 'clsx'
import { useMediaQuery, useTranslations } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import Convert from 'ansi-to-html'

import { Loader } from 'shared'
import Icon from 'shared/Icon'

import { EditorConfig, LessonView, StoredLessonData } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import { useDynamicHeight } from 'hooks'
import { Base64String } from 'types/classes'
import { HasherState } from 'ui/lesson/ScriptingChallenge/Runner/Hasher'
import { SuccessNumbers } from 'ui/common/StatusBar'

enum State {
  Idle = 'idle',
  Building = 'building',
  Running = 'running',
  Error = 'error',
  Complete = 'complete',
}

export default function OpCodeRunner({
  lang,
  handleRun,
  success,
}: {
  lang: string
  handleRun: () => void
  success: boolean | SuccessNumbers
}) {
  const t = useTranslations(lang)
  const [state, setState] = useState<State>(State.Idle)
  const { activeView } = useLessonContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const hasResult = useRef(false)
  const isActive = activeView !== LessonView.Info
  const [isTryAgain, setIsTryAgain] = useState<boolean | null>(null)
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
          disabled={loading || isRunning}
          className={clsx(
            'flex h-full items-center justify-start gap-3 p-0 px-4 font-mono text-white',
            {}
          )}
          onClick={handleRun}
        >
          {!isRunning && (
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
          {isRunning && (
            <>
              <Loader className="h-6 w-6 text-white" />
              <span>Running...</span>
            </>
          )}
        </button>
        <StatusBar
          handleTryAgain={() => {}}
          className="h-14 min-h-14 grow bg-transparent p-0 "
          textClass="text-lg !p-0"
          success={success}
        />
      </div>
    </div>
  )
}
