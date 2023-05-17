'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

/**
 * Use this component when you need to render something that is going to be
 * different than the initial hydration from the server. Examples are
 * when rendering things like times, which might be in a different timezone than the server
 */
export default function ClientOnly({ children }: PropsWithChildren<unknown>) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
