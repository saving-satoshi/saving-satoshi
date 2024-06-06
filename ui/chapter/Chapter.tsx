'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useRouter, usePathname } from 'next/navigation'

import { Button } from 'shared'
import ChapterTabs from './Tabs'
import ChallengeList from './ChallengeList'
import { chapters } from 'content'
import Icon from 'shared/Icon'
import { ChapterContextType } from 'types'
import { useTranslations, useLocalizedRoutes } from 'hooks'
import useLessonStatus from 'hooks/useLessonStatus'
import { getLessonKey } from 'lib/progress'
import { keys, keysMeta } from 'lib/progress'
import useEnvironment from 'hooks/useEnvironment'
import { useAtom } from 'jotai'
import {
  accountAtom,
  isAuthLoadingAtom,
  isLoadingProgressAtom,
  Modal,
  progressAtom,
} from 'state/state'
import { useModalFunctions } from 'state/ModalFunctions'
import { useFeatureFunctions } from 'state/FeatureFunctions'

export default function Chapter({ children, metadata, lang }) {
  const { isDevelopment } = useEnvironment()
  const [progress] = useAtom(progressAtom)
  const [isLoading] = useAtom(isLoadingProgressAtom)
  const [account] = useAtom(accountAtom)
  const [isAccountLoading] = useAtom(isAuthLoadingAtom)
  const { open } = useModalFunctions()
  const { isFeatureEnabled } = useFeatureFunctions()
  const isEnabled = isFeatureEnabled(
    `${metadata.slug.replace('-', '_')}_enabled`
  )
  const { isUnlocked } = useLessonStatus(
    progress.progress,
    getLessonKey(metadata.slug, 'intro-1')
  )

  const display =
    metadata.slug === 'chapter-1' ||
    isDevelopment ||
    (isEnabled && isUnlocked && !isLoading)

  const [activeTab, setActiveTab] = useState('info')

  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)
  const chapter = chapters[metadata.slug]
  const position = metadata.position + 1
  const isEven = position % 2 == 0
  const chapterLessons = keys.filter((ele) =>
    ele.includes(progress.progress.substring(0, 3))
  )
  const isBetweenChapter =
    progress.progress !== chapterLessons[0] &&
    progress.progress !== keys[keys.length - 1] &&
    position === parseInt(progress.progress.substring(2, 3))
  const queryParams = isDevelopment ? '?dev=true' : ''
  const tabData = [
    {
      id: 'info',
      text: t('shared.info'),
    },
    {
      id: 'challenges',
      text: t('shared.challenges'),
    },
  ]

  const handleClick = (name: Modal) => {
    open(name)
  }

  useEffect(() => {
    if (window.location.href.split('#')[1]) {
      const element = document.getElementById(
        window.location.href.split('#')[1]
      )
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    }
  }, [])

  return (
    <div
      id={chapter.metadata.slug}
      className="grid grid-cols-1 justify-center lg:grid-cols-2 lg:px-0"
    >
      <div
        className={clsx(
          'order-2 mb-6 flex justify-start lg:mb-0 lg:px-[50px] lg:py-[112px]',
          {
            'lg:order-1': isEven,
            'lg:order-2': !isEven,
          }
        )}
      >
        <div className="ml-3.5 mr-3.5 w-full content-center justify-items-start px-1">
          <h2 className="mt-6 text-left font-nunito text-xl font-bold text-white text-opacity-75 md:text-3xl">
            {t('shared.chapter')} {position}
          </h2>

          <h3 className="mb-6 text-left text-3xl text-white md:text-5xl">
            {t(chapter.metadata.title)}
          </h3>

          <div>
            {(chapter.metadata.lessons.length > 0 &&
              display &&
              position === 1) ||
            (account && display) ? (
              <ChapterTabs
                items={tabData}
                activeId={activeTab}
                onChange={setActiveTab}
                classes="mt-8"
              />
            ) : null}
            <div className="flex grow py-2 lg:grow-0">
              <div
                aria-hidden={activeTab !== 'info' ? 'true' : 'false'}
                className={clsx('-mr-[100%] block w-full', {
                  visible: activeTab === 'info',
                  invisible: activeTab !== 'info',
                })}
              >
                <div className="font-nunito md:mt-6">
                  {(chapter.metadata.lessons.length > 0 &&
                    display &&
                    (position === 1 || (account && display)) && (
                      <div className="text-lg text-white">{children}</div>
                    )) ||
                    (isLoading && !display && (
                      <div className="flex font-nunito text-lg text-white">
                        <Icon
                          icon="lock"
                          className="my-auto mr-2 h-3 w-3 justify-center"
                        />
                        {t('shared.loading')}...
                      </div>
                    )) ||
                    (!isEnabled && !isLoading && !display && (
                      <div className="flex font-nunito text-lg text-white">
                        <Icon
                          icon="lock"
                          className="my-auto mr-2 h-3 w-3 justify-center"
                        />
                        {t('chapter.coming_soon')}
                      </div>
                    )) || (
                      <div className="flex font-nunito text-lg text-white">
                        <Icon
                          icon="lock"
                          className="my-auto mr-2 h-3 w-3 justify-center"
                        />
                        {t('chapter.chapter_locked_one')} {position - 1}{' '}
                        {t('chapter.chapter_locked_two')}&nbsp;
                        {!account && (
                          <button
                            onClick={() => handleClick(Modal.SignIn)}
                            className="underline"
                          >
                            {t('modal_signin.login')}
                          </button>
                        )}
                      </div>
                    )}
                  <div className="flex pt-8 md:w-full">
                    <Button
                      href={
                        (isBetweenChapter &&
                          `${
                            routes.chaptersUrl +
                            keysMeta[progress.progress].path
                          }${queryParams}`) ||
                        `${routes.chaptersUrl}/${chapter.metadata.slug}/${chapter.metadata.intros[0]}${queryParams}`
                      }
                      disabled={
                        chapter.metadata.lessons.length === 0 ||
                        isLoading ||
                        !display ||
                        (!isLoading &&
                          position !== 1 &&
                          !account &&
                          !isAccountLoading)
                      }
                      classes={clsx('w-full', {
                        hidden:
                          (isLoading && position !== 1) ||
                          (!isLoading && !display && !account) ||
                          (!!display && !account && position !== 1) ||
                          (account && !isLoading && !display && position !== 1),
                      })}
                    >
                      {(isLoading && `${t('shared.loading')}`) ||
                        (!!display &&
                          !isLoading &&
                          !account &&
                          !isAccountLoading &&
                          position !== 1 &&
                          `${t('chapter.chapter_locked_one')} ${
                            position - 1
                          } ${t('chapter.chapter_locked_two')}`) ||
                        (chapter.metadata.lessons.length > 0 &&
                          display &&
                          isBetweenChapter &&
                          `${t('shared.next')}`) ||
                        (!!display &&
                          `${t('shared.start_chapter')} ${position}`) ||
                        (!display &&
                          !isEnabled &&
                          `${t('shared.coming_soon')}`) ||
                        `${t('chapter.chapter_locked_one')} ${position - 1} ${t(
                          'chapter.chapter_locked_two'
                        )}`}
                    </Button>
                  </div>
                </div>
              </div>
              <div
                aria-hidden={activeTab !== 'challenges' ? 'true' : 'false'}
                className={clsx('-mr-[100%] block w-full', {
                  visible: activeTab === 'challenges',
                  invisible: activeTab !== 'challenges',
                })}
              >
                <ChallengeList
                  intros={chapter.metadata.intros}
                  lessonStrings={chapter.metadata.lessons}
                  outros={chapter.metadata.outros}
                  challenges={chapter.metadata.challenges}
                  chapterId={chapter.metadata.slug}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx('order-1 flex justify-center', {
          'lg:order-2': isEven,
          'lg:order-1': !isEven,
        })}
      >
        <Image
          src={chapter.metadata.image}
          alt={chapter.metadata.title}
          width={600}
          height={600}
          className="h-full w-full object-cover"
          loading={
            chapter.metadata.title === 'chapter_one.title' ? 'eager' : 'lazy'
          }
        />
      </div>
    </div>
  )
}
