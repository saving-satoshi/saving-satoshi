'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { LessonView } from 'types'
import LineDash from 'shared/icons/LineDash'
import { HasherState } from './Hasher'
import Terminal from './Terminal'
import { OUTPUT_COPY } from './constants'

function StaticOutputState({
  title,
  message,
  height,
}: {
  title: string
  message: string
  height: number | undefined
}) {
  return (
    <div
      className="min-h-0 w-full flex-1 overflow-y-auto border-t border-white border-opacity-30 bg-black bg-opacity-20 p-4 md:flex-none"
      style={{ height }}
    >
      <div className="font-mono text-xs text-white">{title}</div>
      <div className="font-mono text-xs text-white text-opacity-60">
        {message}
      </div>
    </div>
  )
}

export default function OutputSection({
  isSmallScreen,
  activeView,
  hasherState,
  showIdlePanel,
  showBuildingPanel,
  outputPanelHeight,
  isResizingOutput,
  handleResizeStart,
  isMaximized,
  toggleOutput,
  terminalRef,
}: {
  isSmallScreen: boolean
  activeView: LessonView
  hasherState: HasherState
  showIdlePanel: boolean
  showBuildingPanel: boolean
  outputPanelHeight: number
  isResizingOutput: boolean
  handleResizeStart: (event: React.PointerEvent<HTMLButtonElement>) => void
  isMaximized: boolean
  toggleOutput: () => void
  terminalRef: React.RefObject<HTMLIFrameElement | null>
}) {
  const [isHidden, setIsHidden] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source !== terminalRef.current?.contentWindow) return
      try {
        const { action, payload } = JSON.parse(event.data)
        if (
          action === 'output-height' &&
          Number.isFinite(payload) &&
          payload >= 0
        ) {
          setContentHeight(payload)
        }
      } catch {}
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [terminalRef])

  const panelHeight = isSmallScreen ? undefined : outputPanelHeight

  return (
    <div
      className={clsx(
        'min-h-0 w-full shrink flex-col overflow-hidden md:flex-none',
        {
          'hidden md:flex md:flex-col':
            !isSmallScreen ||
            (activeView !== LessonView.Execute &&
              hasherState !== HasherState.Running),
          'flex flex-col':
            isSmallScreen &&
            (activeView === LessonView.Execute ||
              hasherState === HasherState.Running),
        }
      )}
      style={{ maxHeight: isSmallScreen ? '60%' : undefined }}
    >
      {isHidden && (
        <button
          type="button"
          aria-label="Show output panel"
          title="Show output panel"
          className="flex h-8 shrink-0 items-center justify-end gap-2 border-t border-white/30 px-4 font-mono text-xs text-white/80 hover:bg-white/10 hover:text-white"
          onClick={() => setIsHidden(false)}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              d="M5.5 5.5h7v7h-7z M3.5 10.5h-1v-8h8v1"
              stroke="currentColor"
            />
          </svg>
          Show results
        </button>
      )}
      <div
        className={clsx('min-h-0 w-full flex-1 flex-col md:flex-none', {
          hidden: isHidden,
          flex: !isHidden,
        })}
      >
        {showIdlePanel && (
          <StaticOutputState
            title={OUTPUT_COPY.idleTitle}
            message={OUTPUT_COPY.idleMessage}
            height={panelHeight}
          />
        )}

        {showBuildingPanel && (
          <StaticOutputState
            title={OUTPUT_COPY.buildingTitle}
            message={OUTPUT_COPY.buildingMessage}
            height={panelHeight}
          />
        )}

        <div
          className={clsx(
            'flex min-h-0 w-full flex-auto flex-col overflow-hidden md:flex-none',
            {
              hidden: showIdlePanel || showBuildingPanel,
            }
          )}
          style={{
            height: isSmallScreen ? contentHeight : panelHeight,
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
            <div className="absolute right-3 top-3 z-10 hidden items-center gap-1 md:flex">
              <button
                type="button"
                aria-label="Hide output panel"
                title="Hide output panel"
                className="flex h-6 w-6 items-center justify-center rounded-sm text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setIsHidden(true)}
              >
                <LineDash className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                title={
                  isMaximized ? 'Restore output panel' : 'Maximize output panel'
                }
                aria-label={
                  isMaximized ? 'Restore output panel' : 'Maximize output panel'
                }
                className="flex h-6 w-6 items-center justify-center rounded-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={toggleOutput}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d={
                      isMaximized
                        ? 'M5.5 5.5h7v7h-7z M3.5 10.5h-1v-8h8v1'
                        : 'M3.5 3.5h9v9h-9z'
                    }
                    stroke="currentColor"
                  />
                </svg>
              </button>
            </div>

            <Terminal
              ref={terminalRef}
              className={clsx('h-full min-h-0', {
                'pointer-events-none': isResizingOutput,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
