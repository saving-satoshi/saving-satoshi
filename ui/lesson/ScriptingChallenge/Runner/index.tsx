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
import { DEFAULT_OUTPUT_HEIGHT, RunnerState } from './constants'
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
  isOutputCollapsed,
  terminalHeight,
  setTerminalHeight,
  closeOutput,
  showOutput,
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
  isOutputCollapsed: boolean
  terminalHeight: number
  setTerminalHeight: React.Dispatch<React.SetStateAction<number>>
  closeOutput: () => void
  showOutput: () => void
}) {
  const t = useTranslations(lang)
  const { activeView, setActiveView } = useLessonContext()
  const terminalRef = useRef<HTMLIFrameElement | null>(null)

  const isActive = activeView !== LessonView.Info
  const [isTryAgain, setIsTryAgain] = useState<boolean | null>(null)

  const isSmallScreen = useMediaQuery({ width: 767 })
  const { outputPanelHeight, isResizingOutput, handleResizeStart } =
    useOutputResize({
      isSmallScreen,
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
    isOutputCollapsed,
    showOutput,
    setErrors,
    poorMessage,
    goodMessage,
    setActiveView,
    setTerminalHeight,
    t,
  })

  const canShowOutput = [
    RunnerState.Running,
    RunnerState.Error,
    RunnerState.Complete,
  ].includes(state)
  const isErrorState = state === RunnerState.Error

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

  const outputSection = (
    <OutputSection
      isOutputCollapsed={isOutputCollapsed}
      isSmallScreen={isSmallScreen}
      activeView={activeView}
      hasherState={hasherState}
      showIdlePanel={state === RunnerState.Idle}
      showBuildingPanel={state === RunnerState.Building}
      showResultPanel={canShowOutput}
      isErrorState={isErrorState}
      outputPanelHeight={outputPanelHeight}
      defaultOutputHeight={DEFAULT_OUTPUT_HEIGHT}
      isResizingOutput={isResizingOutput}
      handleResizeStart={handleResizeStart}
      closeOutput={closeOutput}
      terminalRef={terminalRef}
    />
  )

  return (
    <div className="flex min-h-0 w-full flex-col">
      {loading && (
        <div
          className={clsx(
            'h-60 overflow-y-auto border-t border-white border-opacity-30 p-4',
            {
              'hidden md:flex': !isActive,
              flex: isActive,
            }
          )}
        >
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}

      {outputSection}

      <div
        className={clsx(
          'sticky bottom-0 z-10 h-14 min-h-14 w-full shrink-0 items-start border-t border-white border-opacity-30 bg-black/10',
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
