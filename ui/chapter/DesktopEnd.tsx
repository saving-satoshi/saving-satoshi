'use client'

import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { usePathData, useTranslations } from 'hooks'
import clsx from 'clsx'
import Image from 'next/image'
import { usePublish } from 'nostr-hooks'
import { RELAY } from './End'
import TwitterIcon from 'shared/icons/Twitter'
import NostrIcon from 'shared/icons/Nostr'
import { useAtomValue } from 'jotai'
import { syncedCourseProgressAtom, isLastLesson } from 'state/progressState'

declare global {
  interface Window {
    nostr: Object
  }
}

export default function DesktopEnd({
  image,
  lang,
  children,
  className,
  direction,
  theme,
  account,
  onClick,
  currentLessonKey,
  sharing,
}: {
  children: any
  className?: string
  image: string
  lang: string
  direction: 'left' | 'right'
  theme: string
  account: any
  onClick: any
  currentLessonKey: any
  sharing: boolean
}) {
  const t = useTranslations(lang)
  const { chapterId } = usePathData()
  const [content, setContent] = useState('')
  const [shared, setShared] = useState(false)
  const [shareText, setShareText] = useState(t('social.nostr_share'))
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const isThisLastLesson = isLastLesson(currentLessonKey, courseProgress)

  const nostrContent = `https://savingsatoshi.com/_next/image?url=%2Fassets%2Fimages%2Fnostr%2Fnostr-share-${chapterId}.jpg&w=1200&q=75 Code your way through the mysteries of bitcoin with nostr:npub1vy6wcgw6jhhtcmpawvlnsfx7g8qt8r40z7qlks9zwa4ed57vm5eqx527hr`
  const twitterContent = `I%20just%20finished%20chapter%20${
    chapterId.split('-')[1]
  }%20in%20%40savingsatoshi!%20Code%20your%20way%20through%20the%20mysteries%20of%20bitcoin%20at%20&url=https://savingsatoshi.com`

  const publish = usePublish([RELAY])

  const handleShare = async () => {
    setShareText(t('social.sharing'))
    try {
      await publish({
        kind: 1,
        content,
      })
      console.log(`sent via ${RELAY}`)
      setShared(true)
      setShareText(t('social.shared'))
    } catch (err) {
      if (err.message === 'event already published') {
        setShareText(t('social.shared'))
        setShared(true)
      } else {
        setShareText(t('social.share_error'))
      }
      console.error(err)
    }
  }

  useEffect(() => {
    setContent(nostrContent)
  }, [])

  return (
    <div className={`-mt-[70px] min-h-screen ${theme}`}>
      <Image
        src={image}
        alt={t('chapter_two.title')}
        fill
        quality={100}
        loading="eager"
        priority
        className="object-cover"
      />

      <div
        className={clsx(
          className,
          'absolute bottom-0 ml-auto w-full bg-gradient-to-t from-[#000000ff] from-0% via-[#00000060] via-85% to-transparent to-100% p-4 pb-12 text-left md:px-16 md:pb-16 md:pt-52'
        )}
      >
        <div
          className={clsx('max-w-[500px]', {
            'float-left': direction === 'left',
            'float-right': direction === 'right',
          })}
        >
          {children}
          <div className="mt-4 flex w-full flex-col gap-4 xl:w-2/3">
            <Button onClick={onClick} size="small">
              {(!account && t('chapter_one.end.save')) ||
                (account && t('shared.next'))}
            </Button>
            {isThisLastLesson && (
              <Button
                href="https://forms.gle/WhdJwcKKetB9sFL79"
                external
                style="outline"
                size="small"
              >
                {t('chapter_one.end.feedback')}
              </Button>
            )}
            {typeof window.nostr !== 'undefined' && sharing && (
              <Button
                onClick={handleShare}
                disabled={shared || shareText === t('social.sharing')}
                style="outline"
                size="small"
              >
                <div className="flex flex-row justify-center gap-4">
                  <NostrIcon className="h-7 w-7" fill="white" />
                  {shareText}
                </div>
              </Button>
            )}
            {sharing && (
              <Button
                style="outline"
                size="small"
                external
                href={`https://twitter.com/intent/post?original_referer=https%3A%2F%2Fsavingsatoshi.com%2F&text=${twitterContent}`}
              >
                <div className="flex flex-row justify-center gap-4">
                  <TwitterIcon className="h-6 w-6" />
                  {t('social.twitter_share')}
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
