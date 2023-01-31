'use client'

import clsx from 'clsx'
import React, { useRef, useState } from 'react'

export default function Tooltip({
  children,
  content,
  href,
}: {
  children: React.ReactNode
  content: string
  href?: string
}) {
  const tooltipRef = useRef<HTMLDivElement>()
  const [visible, setVisible] = useState(false)

  const handleMouseEnter = (e) => {
    const target = e.target
    const tooltip = tooltipRef.current

    const targetRect = target.getBoundingClientRect()
    const tooltipRect = tooltip.getBoundingClientRect()
    const arrowHeight = 12

    const x = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
    const y = targetRect.top - tooltipRect.height - arrowHeight + window.scrollY

    tooltip.style.transform = `translate3d(${x}px, ${y}px, 0px)`

    setVisible(true)
  }

  const handleMouseLeave = (e) => {
    setVisible(false)
  }

  return (
    <>
      <span
        className={clsx(
          'pointer-events-none absolute top-0 left-0 max-w-md border border-white bg-back p-4 text-center shadow-lg shadow-black/25 transition-opacity delay-150 ease-in-out',
          {
            'opacity-100': visible,
            'pointer-events-none opacity-0': !visible,
          }
        )}
        ref={tooltipRef}
      >
        <span className="absolute left-1/2 bottom-[-12px] h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-t-[12px] border-x-transparent border-t-white shadow-lg shadow-black/25" />
        <span className="absolute left-1/2 bottom-[-10px] h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-t-[12px] border-x-transparent border-t-back" />
        <span className="font-nunitoleading-none text-white">{content}</span>
      </span>

      <a href={href} target="_blank" rel="noreferrer">
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={clsx('font-bold', { 'cursor-pointer': href })}
        >
          {' '}
          <span className="underline">{children}</span>{' '}
        </span>
      </a>
    </>
  )
}
