'use client'

import clsx from 'clsx'

import { LessonView } from 'types'
import { HasherState } from './Hasher'
import Terminal from './Terminal'
import { OUTPUT_COPY } from './constants'

function StaticOutputState({
  title,
  message,
}: {
  title: string
  message: string
}) {
  return (
    <div className="h-[204px] w-full border-t border-white border-opacity-30 bg-black bg-opacity-20 p-4">
      <div className="font-mono text-xs text-white">{title}</div>
      <div className="font-mono text-xs text-white text-opacity-60">
        {message}
      </div>
    </div>
  )
}

export default function OutputSection({
  isOutputCollapsed,
  isSmallScreen,
  activeView,
  hasherState,
  showIdlePanel,
  showBuildingPanel,
  showResultPanel,
  isErrorState,
  outputPanelHeight,
  defaultOutputHeight,
  isResizingOutput,
  handleResizeStart,
  closeOutput,
  terminalRef,
}: {
  isOutputCollapsed: boolean
  isSmallScreen: boolean
  activeView: LessonView
  hasherState: HasherState
  showIdlePanel: boolean
  showBuildingPanel: boolean
  showResultPanel: boolean
  isErrorState: boolean
  outputPanelHeight: number
  defaultOutputHeight: number
  isResizingOutput: boolean
  handleResizeStart: (event: React.PointerEvent<HTMLButtonElement>) => void
  closeOutput: () => void
  terminalRef: React.RefObject<HTMLIFrameElement | null>
}) {
  if (isOutputCollapsed) {
    return null
  }

  return (
    <div
      className={clsx('w-full shrink-0 flex-col overflow-hidden', {
        'hidden md:flex md:flex-col':
          !isSmallScreen ||
          (activeView !== LessonView.Execute &&
            hasherState !== HasherState.Running),
        'flex flex-col':
          isSmallScreen &&
          (activeView === LessonView.Execute ||
            hasherState === HasherState.Running),
      })}
    >
      {showIdlePanel && (
        <StaticOutputState
          title={OUTPUT_COPY.idleTitle}
          message={OUTPUT_COPY.idleMessage}
        />
      )}

      {showBuildingPanel && (
        <StaticOutputState
          title={OUTPUT_COPY.buildingTitle}
          message={OUTPUT_COPY.buildingMessage}
        />
      )}

      {showResultPanel && (
        <div
          className="flex w-full shrink-0 flex-col overflow-hidden"
          style={{
            height: isSmallScreen
              ? `${defaultOutputHeight}px`
              : `${outputPanelHeight}px`,
            maxHeight: `${defaultOutputHeight}px`,
            willChange:
              !isSmallScreen && isResizingOutput ? 'height' : undefined,
          }}
        >
          {!isSmallScreen && (
            <button
              type="button"
              aria-label="Resize output panel"
              title="Drag to resize output panel"
              className="flex h-3 w-full shrink-0 cursor-row-resize touch-none items-center justify-center bg-white/5"
              onPointerDown={handleResizeStart}
            >
              <span
                className={clsx(
                  'h-1 w-12 rounded-full bg-white/20 transition',
                  {
                    'bg-white/40': isResizingOutput,
                  }
                )}
              />
            </button>
          )}

          <div className="relative flex min-h-0 w-full grow flex-col">
            {isErrorState && (
              <button
                type="button"
                aria-label="Close error panel"
                className="absolute right-3 top-3 z-10 flex h-5 w-5 items-center justify-center rounded border border-white/20 bg-black/30 font-mono text-sm leading-none text-white/80 transition hover:text-white md:right-5"
                onClick={closeOutput}
              >
                ×
              </button>
            )}

            <Terminal
              ref={terminalRef}
              className={clsx('h-full min-h-0', {
                'pointer-events-none': isResizingOutput,
              })}
            />
          </div>
        </div>
      )}
    </div>
  )
}
