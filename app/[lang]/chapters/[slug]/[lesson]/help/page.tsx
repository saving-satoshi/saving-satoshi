'use client'

import { useLocalizedRoutes, usePathData, useTranslations } from 'hooks'
import { chapters, lessons, resources } from 'content'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Text } from 'ui'

import { useRouter } from 'next/navigation'
import { BackArrow } from 'shared/icons'

const Portal = ({ children, id }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(children, document.getElementById(id)) : null
}

export default function Help({ params }) {
  const t = useTranslations(params.lang)
  const { chaptersUrl } = useLocalizedRoutes()
  const { lessonId } = usePathData()
  const router = useRouter()

  const chapterId = params.slug
  const chapter = chapters[chapterId]
  const chapterLessons = lessons[chapterId]
  const chapterResources = resources[chapterId]

  const challenges = chapter.metadata.challenges.map((lessonId) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  const challengeId = challenges.find(
    (challenge) =>
      params.lesson.split(/\d+/)[0] === challenge.lessonId.split(/\d+/)[0]
  )

  const Resources =
    chapterResources.default[challengeId.lessonId.split(/\d+/)[0].slice(0, -1)]
      .default

  const Head = () => {
    const lesson = chapterLessons[params.lesson]
    const title = lesson ? t(lesson.metadata.title) : 'Page not found'

    return (
      <Portal id="head">
        <title>{`${title} - Saving Satoshi`}</title>
      </Portal>
    )
  }

  const handleBack = (e) => {
    e.preventDefault()
    router.push(`${chaptersUrl}/${chapterId}/${lessonId}`)
  }

  return (
    <>
      <Head />
      <div className="my-12 grid w-full grid-cols-1 justify-center justify-items-center md:mx-auto">
        <div className="flex w-full max-w-screen-lg flex-col gap-8 px-6">
          <div
            className="flex cursor-pointer flex-row items-center gap-5 border border-dashed border-white p-5 text-white"
            onClick={handleBack}
          >
            <BackArrow />
            <div className="flex flex-col">
              <Text className="text-2xl font-bold opacity-50">
                {params.slug.substring(0, 1).toUpperCase() +
                  params.slug.substring(1).replace('-', ' ')}
                , Challenge {challenges.indexOf(challengeId) + 1}
              </Text>
              <Text className="text-xl font-bold">
                {challengeId.lessonId
                  .split(/\d+/)[0]
                  .slice(0, -1)
                  .substring(0, 1)
                  .toUpperCase() +
                  challengeId.lessonId
                    .split(/\d+/)[0]
                    .slice(0, -1)
                    .substring(1)
                    .replace('-', ' ')}
              </Text>
            </div>
          </div>
          <Resources lang={params.lang} />
        </div>
      </div>
    </>
  )
}
