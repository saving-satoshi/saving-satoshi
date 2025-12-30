'use client'

import { useState, useEffect } from 'react'
import { useLang, useTranslations } from 'hooks'
import Icon from 'shared/Icon'

const BANNER_STORAGE_KEY = 'deadline-banner-dismissed'

export default function DeadlineBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const lang = useLang()
  const t = useTranslations(lang)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(BANNER_STORAGE_KEY)
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem(BANNER_STORAGE_KEY, 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-0 z-50 h-[70px] w-full bg-gradient-to-b from-black/80 to-black/60 px-4 py-3 text-white backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center gap-4">
        <div className="flex flex-1 items-center justify-center gap-2 text-center">
          <span className="text-sm font-semibold sm:text-xl">
            {t('banner.deadline')}
          </span>
          <button
            onClick={handleDismiss}
            className="z-30 cursor-pointer"
            aria-label="Dismiss banner"
          >
            <Icon className="h-5 w-5 cursor-pointer" icon="close" />
          </button>
        </div>
      </div>
    </div>
  )
}
