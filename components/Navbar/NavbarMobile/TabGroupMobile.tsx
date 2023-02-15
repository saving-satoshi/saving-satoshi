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

  const challenges = chapter.metadata.challenges.map((lessonId) => {
    const { title } = lessons[lessonId].metadata

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

      {challenges.map((challenge, index) => (
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
            count={challenges.length}
            index={index}
            challenge={challenge}
            params={params}
            clicked={clicked}
          />
        </div>
      ))}
    </div>
  )
}
