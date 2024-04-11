'use client'

import { useSaveAndReturn, usePathData } from 'hooks'
import { Modal, useModalContext } from 'contexts/ModalContext'
import { lessons } from 'content'
import { useEffect, useState } from 'react'
import DesktopEnd from './DesktopEnd'
import MobileEnd from './MobileEnd'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'

declare global {
  interface Window {
    nostr: Object
  }
}

export const RELAY = 'wss://nostr.mutinywallet.com'

export default function End({
  image,
  lang,
  children,
  className,
  direction,
  theme,
  gradientTheme,
}: {
  children: any
  className?: string
  image: string
  lang: string
  direction: 'left' | 'right'
  theme: string
  gradientTheme: string
}) {
  const modals = useModalContext()
  const [account] = useAtom(accountAtom)
  const saveAndReturn = useSaveAndReturn()
  const { chapterId, lessonId } = usePathData()

  const [isDesktop, setDesktop] = useState(
    typeof window !== 'undefined' && window.innerWidth > 768
  )

  const chapterLessons = lessons?.[chapterId]
  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = lesson?.key ?? 'CH1INT1'

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  const handleClick = () => {
    if (!account) {
      modals.open(Modal.SignUp, { onSignUpComplete: true })
    } else {
      saveAndReturn()
    }
  }

  return (
    <>
      {isDesktop && (
        <DesktopEnd
          image={image}
          lang={lang}
          direction={direction}
          theme={theme}
          account={account}
          onClick={handleClick}
          currentLessonKey={currentLessonKey}
          className={className}
        >
          {children}
        </DesktopEnd>
      )}
      {!isDesktop && (
        <MobileEnd
          image={image}
          lang={lang}
          theme={theme}
          account={account}
          onClick={handleClick}
          currentLessonKey={currentLessonKey}
          gradientTheme={gradientTheme}
        >
          {children}
        </MobileEnd>
      )}
    </>
  )
}
