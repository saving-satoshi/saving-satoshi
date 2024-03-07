import TabMobile from './TabMobile'
import { chapters, lessons } from 'content'
import { useLang, useTranslations } from 'hooks'

import clsx from 'clsx'

export default function TabGroup({ isOpen, clicked, params }) {
  const { slug } = params

  const lang = useLang()
  const t = useTranslations(lang)

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const chapterMeta = chapter?.metadata
  const chapterId = chapter.metadata.slug

  const introsData = chapterMeta.intros.map((lessonId: string) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  const lessonsData = chapterMeta.lessons.map((lessonId: string) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  let groupedLessonData = {}

  lessonsData.forEach((lesson) => {
    const key = lesson.lessonId.split('-')[0]
    const value = lesson

    if (!groupedLessonData[key]) {
      groupedLessonData[key] = []
    }

    groupedLessonData[key].push(value)
  })

  const outrosData = chapterMeta.outros.map((lessonId: string) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="mx-4 flex h-full flex-col items-stretch">
      <div
        className={clsx(
          'py-2 text-[27px] text-white/50',
          'duration-800 transform transition ease-in-out',
          {
            '-translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        Chapter {chapterMeta.position + 1}.{' '}
        <span className="ml-1 text-white">{t(chapterMeta.title)}</span>
      </div>
      <ul
        className={clsx(
          'grid w-full items-start',
          'duration-800 transform transition ease-in-out',
          {
            '-translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        <h2 className="font-cbrush text-2xl text-white">Introductions</h2>
        {introsData.map((intro, index) => (
          <div
            key={index}
            className={clsx('duration-800 transform transition ease-in-out', {
              '-translate-x-[110%]': !isOpen,
              'translate-x-0': isOpen,
            })}
            style={{ transitionDelay: `${60 * (index + 1)}ms` }}
          >
            <TabMobile
              key={index}
              index={index}
              challenge={intro}
              params={params}
              clicked={clicked}
            />
          </div>
        ))}
        {Object.keys(groupedLessonData).map((title, index) => (
          <div
            key={title}
            className={clsx('duration-800 transform transition ease-in-out', {
              '-translate-x-[110%]': !isOpen,
              'translate-x-0': isOpen,
            })}
            style={{ transitionDelay: `${60 * (index + 1)}ms` }}
          >
            <h2 className="font-cbrush text-2xl text-white">
              {t(groupedLessonData[title][0].title)}
            </h2>
            <ul>
              {groupedLessonData[title].map((lesson, index) => (
                <div
                  key={index}
                  className={clsx(
                    'duration-800 transform transition ease-in-out',
                    {
                      '-translate-x-[110%]': !isOpen,
                      'translate-x-0': isOpen,
                    }
                  )}
                  style={{ transitionDelay: `${60 * (index + 1)}ms` }}
                >
                  <TabMobile
                    key={index + 1}
                    index={index}
                    challenge={lesson}
                    params={params}
                    clicked={clicked}
                    overrideTitle={
                      lesson.lessonId.charAt(0).toUpperCase() +
                      lesson.lessonId.slice(1)
                    }
                  />
                </div>
              ))}
            </ul>
          </div>
        ))}
        <h2 className="font-cbrush text-2xl text-white">Outros</h2>
        {outrosData.map((outro, index) => (
          <div
            key={index}
            className={clsx('duration-800 transform transition ease-in-out', {
              '-translate-x-[110%]': !isOpen,
              'translate-x-0': isOpen,
            })}
            style={{ transitionDelay: `${60 * (index + 1)}ms` }}
          >
            <TabMobile
              key={index}
              index={index}
              challenge={outro}
              params={params}
              clicked={clicked}
            />
          </div>
        ))}
      </ul>
    </div>
  )
}
