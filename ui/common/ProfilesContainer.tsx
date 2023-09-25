'use client'

import clsx from 'clsx'
import { useRef, useEffect, useState } from 'react'

export default function ProfilesContainer({
  children,
  className,
  profiles,
  verticalProfiles,
}: {
  children?: any
  className?: string
  profiles: any
  verticalProfiles?: boolean
}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  const checkOverflow = () => {
    const element = elementRef.current
    if (element) {
      setHasOverflow(element.scrollWidth > element.clientWidth)
    }
  }

  useEffect(() => {
    const element = elementRef.current
    const resizeObserver = new ResizeObserver(checkOverflow)

    if (element) {
      resizeObserver.observe(element)
      checkOverflow()
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element)
      }
    }
  }, [])

  return (
    <>
      <div className="flex flex-col items-center gap-[30px] self-stretch">
        {children}
        <div
          ref={elementRef}
          className={clsx(
            'auto-scroll flex items-start gap-[30px] overflow-x-auto scroll-smooth whitespace-nowrap',
            {
              'w-full flex-col md:flex-row': verticalProfiles,
              'md:w-full md:justify-center': !hasOverflow,
              'w-full justify-center': !hasOverflow && !verticalProfiles,
              'w-full': hasOverflow,
            }
          )}
        >
          {profiles}
        </div>
      </div>
    </>
  )
}
