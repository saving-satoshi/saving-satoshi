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

  const theme =
    lessons[chapterId]?.[lessonId]?.metadata.secondaryTheme ??
    lessons[chapterId]?.[lessonId]?.metadata.theme ??
    chapters[chapterId]?.metadata.secondaryTheme ??
    chapters[chapterId]?.metadata.theme ??
    'bg-back'

  const Resources = chapterResources?.default[lessonId]?.default

  const isLoaded = !isAccountLoading && !isProgressLoading

  return (
    <Modal wide theme={theme} active={state.open} onRequestClose={onClose}>
      <div className="float-right flex justify-end px-5">
        <button onClick={onClose} aria-label="Close">
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>
      {!isLoaded && (
        <div className="px-5 sm:p-[30px]">
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}
      {isLoaded && (
        <div className="mt-12 grid h-[calc(100%-3rem)] w-full justify-center justify-items-center overflow-y-scroll md:mx-auto">
          <div className="mb-12 flex w-full max-w-screen-lg flex-col gap-8 px-6">
            {!!chapterResources?.default[lessonId]?.default && (
              <Resources lang={lang} />
            )}
          </div>
        </div>
      )}
    </Modal>
  )
}
