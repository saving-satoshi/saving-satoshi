'use client'

import clsx from 'clsx'
import { useLang, useTranslations } from 'hooks'
import React, { useEffect, useRef, useState } from 'react'

let mouse = { x: 0, y: 0 }

function Tooltip({
  children,
  className,
  content,
  position,
  offset,
  href,
}: {
  children: React.ReactNode
  className?: string
  content: any
  position?: string
  offset?: number
  href?: string
}) {
  const tooltipRef = useRef<HTMLDivElement>()
  const arrowRef = useRef<HTMLDivElement>()
  const [visible, setVisible] = useState(false)
  const [deactivateTimeout, setDeactivateTimeout] = useState(null)

  const lang = useLang()
  const t = useTranslations(lang)

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

  const handleMouseLeave = (duration = 500) => {
    if (deactivateTimeout) {
      clearTimeout(deactivateTimeout)
    }

    const timeout = setTimeout(() => {
      const tooltipEl = tooltipRef.current
      const tooltipRect = tooltipEl.getBoundingClientRect()

      if (!isWithinRect(mouse, tooltipRect)) {
        setVisible(false)
      }
    }, duration)

    setDeactivateTimeout(timeout)
  }

  const handleMouseMove = (e) => {
    if (!visible) {
      return
    }

    mouse = { x: e.clientX, y: e.clientY }
  }

  const isWithinRect = ({ x, y }: { x: number; y: number }, rect: DOMRect) => {
    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    )
  }

  const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(value, max))
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [visible])

  return (
    <>
      <span
        className={clsx(
          'absolute top-0 left-0 z-10 max-w-md border border-white bg-back px-5 py-2 text-center shadow-lg shadow-black/25 transition-opacity delay-150 ease-in-out',
          {
            'pointer-events-all opacity-100': visible,
            'pointer-events-none opacity-0': !visible,
          }
        )}
        ref={tooltipRef}
        onMouseLeave={() => handleMouseLeave(0)}
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
        <span className="font-nunitoleading-none text-white">{t(content)}</span>
      </span>

      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => handleMouseLeave()}
        className="font-bold"
      >
        {href && (
          <a href={href} className={className}>
            {children}
          </a>
        )}
        {!href && <span className={className}>{children}</span>}
      </span>
    </>
  )
}

Tooltip.defaultProps = {
  offset: 12,
  position: 'top',
}

export default Tooltip
