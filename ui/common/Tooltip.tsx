'use client'

import clsx from 'clsx'
import React, { useRef, useState } from 'react'

interface TooltipProps {
  children: React.ReactNode
  className?: string
  content: any
  position?: string
  offset?: number
  href?: string
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

function Tooltip({
  children,
  className,
  content,
  position,
  offset,
  href,
}: TooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>()
  const arrowRef = useRef<HTMLDivElement>()
  const [visible, setVisible] = useState(false)

  const ComponentType = href ? 'a' : 'span'

  const handleMouseEnter = (e) => {
    const target = e.target
    const tooltip = tooltipRef.current
    const arrow = arrowRef.current

    const targetRect = target.getBoundingClientRect()
    const tooltipRect = tooltip.getBoundingClientRect()

    const tooltipX =
      targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
    const tooltipY =
      position === 'top'
        ? targetRect.top - tooltipRect.height - offset
        : targetRect.bottom + offset

    const resultX = clamp(tooltipX, 0, window.innerWidth - tooltipRect.width)
    const resultY = clamp(tooltipY, 0, window.innerHeight - tooltipRect.height)

    tooltip.style.transform = `translate3d(${resultX}px, ${resultY}px, 0px)`

    const arrowOffsetX = Math.ceil(Math.abs(resultX - tooltipX))
    const arrowX =
      arrowOffsetX !== 0 ? `calc(-50% + ${arrowOffsetX}px)` : '-50%'
    const arrowY = position === 'top' ? '50%' : '-50%'
    const arrowRotation = position === 'top' ? 225 : 45

    arrow.style.transform = `translate3d(${arrowX}, ${arrowY}, 0px) rotate(${arrowRotation}deg)`

    setVisible(true)
  }

  const handleMouseLeave = (e) => {
    setVisible(false)
  }

  return (
    <>
      <span
        className={clsx(
          'pointer-events-none absolute top-0 left-0 z-10 max-w-md border border-white bg-back px-5 py-2 text-center shadow-lg shadow-black/25 transition-opacity delay-150 ease-in-out',
          {
            'opacity-100': visible,
            'pointer-events-none opacity-0': !visible,
          }
        )}
        ref={tooltipRef}
      >
        <span
          className={clsx(
            'absolute left-1/2 h-3 w-3 border-l border-t border-white bg-back',
            {
              'top-0': position !== 'top',
              'bottom-0': position === 'top',
            }
          )}
          ref={arrowRef}
        />
        <span className="font-nunitoleading-none text-white">{content}</span>
      </span>

      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="font-bold"
      >
        {href && (
          <a href={href} className={className}>
            {children}
          </a>
        )}
        {!href && <span className={className}> {children} </span>}
      </span>
    </>
  )
}

Tooltip.defaultProps = {
  offset: 12,
  position: 'top',
}

export default Tooltip
