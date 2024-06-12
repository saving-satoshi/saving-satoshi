'use client'

import clsx from 'clsx'
import { useLang, useTranslations } from 'hooks'
import React, { useEffect, useRef, useState } from 'react'
import { clamp, isWithinRect, modifyRect } from 'utils'

function Tooltip({
  children,
  className,
  parentClassName,
  id,
  content,
  position = 'top',
  arrowPosition,
  href,
  theme,
  offset = 12,
  disabled,
  visibleOverride,
  zIndex = 10,
}: {
  children: React.ReactNode
  className?: string
  parentClassName?: string
  id: string
  content: any
  position?: string
  arrowPosition?: string
  href?: string
  offset?: number
  theme?: string
  disabled?: boolean
  visibleOverride?: boolean
  zIndex?: number
}) {
  const targetRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState<boolean>(visibleOverride || false)

  const lang = useLang()
  const t = useTranslations(lang)

  const handleMouseEnter = () => {
    updatePosition()
    ;(visibleOverride || !disabled) && setVisible(true)
  }

  const handleMouseMove = (e) => {
    if (!visible) {
      return
    }

    const mouse = { x: e.clientX, y: e.clientY }
    const targetEl = targetRef.current
    const tooltipEl = tooltipRef.current

    if (targetEl && tooltipEl) {
      const targetRect = targetEl.getBoundingClientRect()
      const tooltipRect = tooltipEl.getBoundingClientRect()
      const prop = position !== 'top' ? 'top' : 'bottom'

      if (
        !isWithinRect(mouse, targetRect) &&
        !isWithinRect(mouse, modifyRect(tooltipRect, { [prop]: offset }))
      ) {
        setVisible(false)
      }
    }
  }

  const updatePosition = () => {
    const target = targetRef.current
    const tooltip = tooltipRef.current
    const arrow = arrowRef.current

    if (target && tooltip) {
      const targetRect = target.getBoundingClientRect()
      const tooltipRect = tooltip.getBoundingClientRect()

      const tooltipX =
        targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
      const tooltipY =
        position === 'top'
          ? targetRect.top - tooltipRect.height - offset
          : targetRect.bottom + offset

      const resultX = clamp(tooltipX, 0, window.innerWidth - tooltipRect.width)
      const resultY = clamp(
        tooltipY,
        0,
        window.innerHeight - tooltipRect.height
      )

      tooltip.style.transform = `translate3d(${resultX}px, ${resultY}px, 0px)`

      if (arrow) {
        const arrowOffsetX = Math.ceil(Math.abs(resultX - tooltipX))
        const arrowX =
          arrowOffsetX !== 0 ? `calc(-50% + ${arrowOffsetX}px)` : '-50%'
        const arrowY = position === 'top' ? '50%' : '-50%'
        const arrowRotation = position === 'top' ? 225 : 45

        arrow.style.transform = `translate3d(${arrowX}, ${arrowY}, 0px) rotate(${arrowRotation}deg)`
      }
    }
  }

  useEffect(() => {
    visibleOverride && handleMouseEnter()
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [visible, visibleOverride])

  return (
    <>
      <span
        className={clsx(
          'tooltip absolute left-[-1px] top-0 max-w-fit border border-white text-center shadow-lg shadow-black/25 transition-opacity delay-150 ease-in-out',
          theme,
          `z-${zIndex.toString()}`,
          {
            'pointer-events-all opacity-100': visible && !disabled,
            'pointer-events-none opacity-0': !visible || disabled,
          }
        )}
        ref={tooltipRef}
        role="tooltip"
        id={id}
      >
        <span
          className={clsx(
            'absolute h-3 w-3 border-l border-t border-white',
            theme,
            arrowPosition,
            {
              'top-[-1px]': position !== 'top',
              'bottom-[-1px]': position === 'top',
              'left-1/2': !arrowPosition,
            }
          )}
          ref={arrowRef}
        />
        <span className="tooltip-height block overflow-y-auto px-2.5 py-3.5 font-nunito leading-none text-white">
          {typeof content === 'string' ? t(content) : content}
        </span>
      </span>

      <span
        onMouseEnter={handleMouseEnter}
        ref={targetRef}
        aria-describedby={id}
        className={parentClassName}
      >
        {href && (
          <a
            href={href}
            target="_blank"
            className={clsx('underline', className)}
          >
            {children}
          </a>
        )}
        {!href && (
          <span className={clsx('underline decoration-dashed', className)}>
            {children}
          </span>
        )}
      </span>
    </>
  )
}

export default Tooltip
