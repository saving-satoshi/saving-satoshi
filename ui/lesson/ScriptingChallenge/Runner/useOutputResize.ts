'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

import { DEFAULT_OUTPUT_HEIGHT, MIN_OUTPUT_HEIGHT } from './constants'

export default function useOutputResize({
  isSmallScreen,
  terminalHeight,
  setTerminalHeight,
  availableHeight,
}: {
  isSmallScreen: boolean
  availableHeight: number
  terminalHeight: number
  setTerminalHeight: Dispatch<SetStateAction<number>>
}) {
  const resizeStartY = useRef(0)
  const resizeStartHeight = useRef(DEFAULT_OUTPUT_HEIGHT)
  const resizeFrameRef = useRef<number | null>(null)
  const [isResizingOutput, setIsResizingOutput] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const restoredHeight = useRef(terminalHeight)

  const clampTerminalHeight = useCallback(
    (nextHeight: number) =>
      Math.min(availableHeight, Math.max(MIN_OUTPUT_HEIGHT, nextHeight)),
    [availableHeight]
  )

  const outputPanelHeight = clampTerminalHeight(terminalHeight)

  useEffect(() => {
    setTerminalHeight((height) =>
      isMaximized ? availableHeight : clampTerminalHeight(height)
    )
  }, [availableHeight, clampTerminalHeight, isMaximized, setTerminalHeight])

  const toggleOutput = useCallback(() => {
    if (isMaximized) {
      setTerminalHeight(clampTerminalHeight(restoredHeight.current))
    } else {
      restoredHeight.current = outputPanelHeight
      setTerminalHeight(availableHeight)
    }
    setIsMaximized(!isMaximized)
  }, [
    availableHeight,
    clampTerminalHeight,
    isMaximized,
    outputPanelHeight,
    setTerminalHeight,
  ])

  const handleResizeStart = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      if (isSmallScreen) {
        return
      }

      event.preventDefault()
      event.currentTarget.setPointerCapture?.(event.pointerId)
      resizeStartY.current = event.clientY
      resizeStartHeight.current = outputPanelHeight
      setIsResizingOutput(true)
      setIsMaximized(false)
    },
    [isSmallScreen, outputPanelHeight]
  )

  useEffect(() => {
    if (!isResizingOutput) {
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      const delta = resizeStartY.current - event.clientY
      const nextHeight = clampTerminalHeight(resizeStartHeight.current + delta)

      if (resizeFrameRef.current !== null) {
        window.cancelAnimationFrame(resizeFrameRef.current)
      }

      resizeFrameRef.current = window.requestAnimationFrame(() => {
        setTerminalHeight((currentHeight) =>
          currentHeight === nextHeight ? currentHeight : nextHeight
        )
        resizeFrameRef.current = null
      })
    }

    const stopResizing = () => {
      if (resizeFrameRef.current !== null) {
        window.cancelAnimationFrame(resizeFrameRef.current)
        resizeFrameRef.current = null
      }
      setIsResizingOutput(false)
    }

    document.body.style.cursor = 'row-resize'
    document.body.style.userSelect = 'none'

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerup', stopResizing)
    window.addEventListener('pointercancel', stopResizing)

    return () => {
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      if (resizeFrameRef.current !== null) {
        window.cancelAnimationFrame(resizeFrameRef.current)
        resizeFrameRef.current = null
      }
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', stopResizing)
      window.removeEventListener('pointercancel', stopResizing)
    }
  }, [clampTerminalHeight, isResizingOutput, setTerminalHeight])

  return {
    outputPanelHeight,
    isResizingOutput,
    handleResizeStart,
    isMaximized,
    toggleOutput,
  }
}
