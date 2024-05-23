'use client'

import Modal from 'components/Modals/Modal'
import Icon from 'shared/Icon'
import { Loader } from 'shared'
import { useLang, usePathData } from 'hooks'
import { useAtom } from 'jotai'
import { chapters, lessons, resources } from 'content'
import { isAuthLoadingAtom, isLoadingProgressAtom } from 'state/state'
import { Text } from 'ui'
import { BackArrow } from 'shared/icons'

export default function HelpModal({ onClose, state }) {
  const lang = useLang()
  const [isAccountLoading] = useAtom(isAuthLoadingAtom)
  const [isProgressLoading] = useAtom(isLoadingProgressAtom)
  const { chapterId, lessonId } = usePathData()

  const chapter = chapters[chapterId]
  const chapterResources = resources[chapterId]

  const challenges = chapter?.metadata.challenges.map((lessonId) => {
    const { title } = lessons[chapterId][lessonId].metadata

    return { lessonId, title }
  })

  const challengeId = challenges?.find(
    (challenge) =>
      lessonId.split(/\d+/)[0] === challenge.lessonId.split(/\d+/)[0]
  )

  const Resources = chapterResources?.default[lessonId]?.default

  const isLoaded = !isAccountLoading && !isProgressLoading

  return (
    <Modal wide active={state.open} onRequestClose={onClose}>
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>

      {!isLoaded && (
        <div className="sm:p-[30px]">
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}
      {isLoaded && (
        <div className="my-12 grid w-full grid-cols-1 justify-center justify-items-center md:mx-auto">
          <div className="flex w-full max-w-screen-lg flex-col gap-8 px-6">
            <div
              className="flex cursor-pointer flex-row items-center gap-5 border border-dashed border-white p-5 text-white"
              onClick={onClose}
            >
              <BackArrow />
              <div className="flex flex-col">
                <Text className="text-2xl font-bold opacity-50">
                  {chapterId?.substring(0, 1).toUpperCase() +
                    chapterId?.substring(1).replace('-', ' ')}
                  , Challenge {challenges?.indexOf(challengeId) + 1}
                </Text>
                <Text className="text-xl font-bold">
                  {challengeId?.lessonId
                    .split(/\d+/)[0]
                    .slice(0, -1)
                    .substring(0, 1)
                    .toUpperCase() +
                    challengeId?.lessonId
                      .split(/\d+/)[0]
                      .slice(0, -1)
                      .substring(1)
                      .replace('-', ' ')}
                </Text>
              </div>
            </div>
            {chapterResources && <Resources lang={lang} />}
          </div>
        </div>
      )}
    </Modal>
  )
}
