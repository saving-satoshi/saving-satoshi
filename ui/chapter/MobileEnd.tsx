'use client'

import { useState, useEffect } from 'react'
import { Button } from 'shared'
import { usePathData, useTranslations } from 'hooks'
import Image from 'next/image'
import { RELAY } from './End'
import { sleep } from 'utils'

import * as navigation from 'next/navigation'
// @ts-ignore
import { relayInit } from 'nostr-tools' // eslint-disable-line
import NostrIcon from 'shared/icons/Nostr'
import TwitterIcon from 'shared/icons/Twitter'
import { usePublish } from 'nostr-hooks'
import { useAtomValue } from 'jotai'
import { syncedCourseProgressAtom, isLastLesson } from 'state/progressState'

export default function MobileEnd({
  image,
  lang,
  children,
  theme,
  account,
  onClick,
  currentLessonKey,
  gradientTheme,
  sharing,
}: {
  children: any
  image: string
  lang: string
  theme: string
  account: any
  onClick: any
  currentLessonKey: any
  gradientTheme: string
  sharing: boolean
}) {
  const t = useTranslations(lang)
  const { chapterId, lessonId } = usePathData()
  const [content, setContent] = useState('')
  const [shared, setShared] = useState(false)
  const [shareText, setShareText] = useState(t('social.nostr_share'))
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const isThisLastLesson = isLastLesson(currentLessonKey, courseProgress)

  const nostrContent = `https://savingsatoshi.com/_next/image?url=%2Fassets%2Fimages%2Fnostr%2Fnostr-share-${chapterId}.jpg&w=1200&q=75 Code your way through the mysteries of bitcoin with nostr:npub1vy6wcgw6jhhtcmpawvlnsfx7g8qt8r40z7qlks9zwa4ed57vm5eqx527hr`
  const twitterContent = `I%20just%20finished%20chapter%20${
    chapterId.split('-')[1]
  }%20in%20%40savingsatoshi!%20Code%20your%20way%20through%20the%20mysteries%20of%20bitcoin%20at%20&url=https://savingsatoshi.com`

  const currentTime = new Date()

  const relay = relayInit(RELAY)

  const url = new URL(window.location.href)
  const eventParam = url.searchParams.get('event') ?? ''
  relay.on('connect', () => {
    console.log(`connected to ${relay.url}`)
  })
  relay.on('error', () => {
    console.error(`failed to connect to ${relay.url}`)
  })

  const handleAmberRequest = async () => {
    const jSONEvent = {
      id: '',
      pubkey: '',
      kind: 1,
      content: content,
      created_at: Math.floor(currentTime.getTime() / 1000),
      tags: [],
      sig: '',
    }

    const json = JSON.stringify(jSONEvent)

    const intent = `intent:${json}#Intent;scheme=nostrsigner;S.type=sign_event;S.callbackUrl=https://savingsatoshi.com/en/chapters/${chapterId}/${lessonId}?event=;end`

    window.location.href = intent
    handleShare(eventParam)
  }

  const publish = usePublish([RELAY])

  const handleShare = async (event: string) => {
    setShareText(t('social.sharing'))
    if (typeof window.nostr !== 'undefined') {
      try {
        await publish({
          kind: 1,
          content,
        })
        console.log(`sent via ${RELAY}`)
        setShareText(t('social.shared'))
        setShared(true)
      } catch (err) {
        if (err.message === 'event already published') {
          setShareText(t('social.shared'))
          setShared(true)
        } else {
          setShareText(t('social.share_error'))
        }
        console.error(err)
      }
    } else {
      await relay.connect()

      try {
        await relay.publish(JSON.parse(event))
        setShareText(t('social.shared'))
        setShared(true)
      } catch (err) {
        if (err.message === 'event already published') {
          setShareText(t('social.shared'))
          setShared(true)
        } else if (
          err.message !==
          'JSON.parse: unexpected end of data at line 1 column 1 of the JSON data'
        ) {
          setShareText(t('social.share_error'))
        }
        console.error(err)
        await sleep(2000)
        setShareText(t('social.nostr_share'))
      }
    }
  }

  useEffect(() => {
    setContent(nostrContent)
    if (eventParam) {
      handleShare(eventParam)
    }
  }, [])

  return (
    <div className={`-mt-[70px] min-h-screen ${theme}`}>
      <Image
        src={image}
        alt={t('chapter_two.title')}
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        loading="eager"
        priority
        className="h-[600px] w-auto object-cover"
      />
      <div
        className={`relative bottom-56 bg-gradient-to-t ${gradientTheme} pb-32`}
      />
      <div
        className={`absolute top-[500px] px-4 pb-12 md:p-16 ${theme} w-screen`}
      >
        <div className="max-w-[500px]">{children}</div>
        <div className="mt-4 flex w-full max-w-[500px] flex-col gap-4 xl:w-2/3">
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
          {sharing && (
            <>
              <Button
                onClick={handleAmberRequest}
                disabled={
                  shared ||
                  eventParam !== '' ||
                  shareText === t('social.sharing')
                }
                style="outline"
                size="small"
              >
                <div className="flex flex-row justify-center gap-4">
                  <NostrIcon className="h-7 w-7" fill="white" />
                  {shareText}
                </div>
              </Button>
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
