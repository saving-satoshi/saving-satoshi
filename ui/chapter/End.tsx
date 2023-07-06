'use client'

import { useSaveAndReturn, useTranslations, usePathData } from 'hooks'
import { Modal, useModalContext } from 'providers/ModalProvider'
import { useAuthContext } from 'providers/AuthProvider'
import { lessons } from 'content'
import { useEffect, useState } from 'react'
import DesktopEnd from './DesktopEnd'
import MobileEnd from './MobileEnd'

export default function End({
  image,
  lang,
  children,
  direction,
  className,
}: {
  children: any
  image: string
  lang: string
  direction: 'left' | 'right'
  className?: string
}) {
  const t = useTranslations(lang)
  const modals = useModalContext()
  const { account } = useAuthContext()
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
          className={className}
          account={account}
          onClick={handleClick}
          currentLessonKey={currentLessonKey}
        >
          {children}
        </DesktopEnd>
      )}
      {!isDesktop && (
        <MobileEnd
          image={image}
          lang={lang}
          className={className}
          account={account}
          onClick={handleClick}
          currentLessonKey={currentLessonKey}
        >
          {children}
        </MobileEnd>
      )}
    </>
  )
}
