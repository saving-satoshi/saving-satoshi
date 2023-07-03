'use client'

import clsx from 'clsx'
import { ReactNode, useRef, useEffect, useState } from 'react'

export default function ProfilesContainer({
  children,
  className,
  profiles,
  verticalProfiles,
}: {
  children?: ReactNode
  className?: string
  profiles: ReactNode
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
      <div
        className={clsx(
          'flex flex-col items-center gap-[30px] self-stretch',
          className
        )}
      >
        {children}
        <div
          ref={elementRef}
          className={clsx(
            'flex items-start gap-[30px] overflow-x-auto scroll-smooth whitespace-nowrap',
            {
              'w-full flex-col md:w-auto md:flex-row': verticalProfiles,
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
