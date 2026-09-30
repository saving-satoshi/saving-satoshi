'use client'

import clsx from 'clsx'
import { useMediaQuery, useTranslations } from 'hooks'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Loader } from 'shared'
import Icon from 'shared/Icon'
import { HasherState } from './Hasher'
import { EditorConfig, LessonView, StoredLessonData } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import { useDynamicHeight } from 'hooks'
import OutputSection from './OutputSection'
import { RunnerState } from './constants'
import useOutputResize from './useOutputResize'
import useRunnerExecution from './useRunnerExecution'

export default function Runner({
  language,
  code,
  config,
  program,
  errors,
  onValidate,
  handleTryAgain,
  lang,
  poorMessage,
  goodMessage,
  setErrors,
  terminalHeight,
  availableOutputHeight,
  setTerminalHeight,
}: {
  language: string
  code?: string
  config: EditorConfig
  program: string
  errors: string[]
  onValidate: (data: StoredLessonData) => Promise<any[]>
  handleTryAgain: (pressed: boolean) => void
  lang: string
  poorMessage: string
  goodMessage: string
  setErrors: (errors: string[]) => void
  availableOutputHeight: number
  terminalHeight: number
  setTerminalHeight: React.Dispatch<React.SetStateAction<number>>
}) {
  const t = useTranslations(lang)
  const { activeView, setActiveView } = useLessonContext()
  const terminalRef = useRef<HTMLIFrameElement | null>(null)

  const [isTryAgain, setIsTryAgain] = useState<boolean | null>(null)

  const isSmallScreen = useMediaQuery({ width: 767 })
  const {
    outputPanelHeight,
    isResizingOutput,
    handleResizeStart,
    isMaximized,
    toggleOutput,
  } = useOutputResize({
    isSmallScreen,
    availableHeight: availableOutputHeight,
    terminalHeight,
    setTerminalHeight,
  })

  const {
    state,
    loading,
    isRunning,
    success,
    hasherState,
    handleRun,
    resetHasherState,
  } = useRunnerExecution({
    terminalRef,
    language,
    code,
    program,
    onValidate,
    setErrors,
    poorMessage,
    goodMessage,
    setActiveView,
    t,
  })

  useDynamicHeight([activeView])

  const handleRunKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if ((event.altKey || event.metaKey) && event.key === 'Enter') {
        handleRun()
      }
    },
    [handleRun]
  )

  const onTryAgain = () => {
    setIsTryAgain(true)
    handleTryAgain(true)
  }

  useEffect(() => {
    if (isTryAgain) {
      resetHasherState()
    }
    setIsTryAgain(false)
  }, [code, isTryAgain, resetHasherState])

  useEffect(() => {
    document.addEventListener('keydown', handleRunKeyPress)

    return () => {
      document.removeEventListener('keydown', handleRunKeyPress)
    }
  }, [handleRunKeyPress])

  return (
    <div
      className={clsx('flex min-h-0 w-full shrink-0 flex-col', {
        'flex-1 justify-between':
          isSmallScreen && activeView === LessonView.Execute,
      })}
    >
      {loading && (
        <div
          className={clsx(
            'h-60 overflow-y-auto border-t border-white border-opacity-30 p-4',
            {
              'hidden md:flex': activeView === LessonView.Info,
              flex: activeView !== LessonView.Info,
            }
          )}
        >
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}

      <OutputSection
        isSmallScreen={isSmallScreen}
        activeView={activeView}
        hasherState={hasherState}
        showIdlePanel={state === RunnerState.Idle}
        showBuildingPanel={state === RunnerState.Building}
        outputPanelHeight={outputPanelHeight}
        isResizingOutput={isResizingOutput}
        handleResizeStart={handleResizeStart}
        isMaximized={isMaximized}
        toggleOutput={toggleOutput}
        terminalRef={terminalRef}
      />

      <div
        className={clsx(
          'relative z-10 h-14 min-h-14 w-full shrink-0 items-start border-t border-white border-opacity-30 bg-black/10',
          {
            hidden:
              hasherState === HasherState.Success ||
              loading ||
              (isSmallScreen && activeView === LessonView.Info),
            flex: !(
              hasherState === HasherState.Success ||
              loading ||
              (isSmallScreen && activeView === LessonView.Info)
            ),
          }
        )}
      >
        <button
          disabled={loading || isRunning}
          className={clsx(
            'flex h-full items-center justify-start gap-3 px-4 font-mono text-white',
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
              <span>{t('runner.run')}</span>
            </>
          )}
          {isRunning && (
            <>
              <Loader className="h-6 w-6 text-white" />
              <span>{t('runner.computing')}</span>
            </>
          )}
        </button>
      </div>
      {hasherState === HasherState.Success && (
        <StatusBar
          handleTryAgain={onTryAgain}
          className="h-14 min-h-14"
          success={success}
          nextStepButton={t('status_bar.try_again')}
          tooltipDisabled
        />
      )}
    </div>
  )
}
