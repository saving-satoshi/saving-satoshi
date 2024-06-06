import { useEffect, useState, useTransition } from 'react'
import { Button, Input, Loader } from 'shared'
import { useLocalizedRoutes, useTranslations } from 'hooks'
import clsx from 'clsx'
import { useAuthFunctions } from 'state/AuthFunctions'
import {
  accountAtom,
  DifficultyLevel,
  difficultyLevelAtom,
  Modal,
} from 'state/state'
import { useModalFunctions } from 'state/ModalFunctions'
import Avatar from './Avatar'
import { progressAtom } from 'state/state'
import { useAtom } from 'jotai'
import { getLessonPath } from 'lib/progress'
import { useRouter } from 'next/navigation'

export default function DifficultyChoice({
  lang,
  className,
  closeModal,
}: {
  lang: string
  className?: string
  closeModal: () => void
}) {
  const t = useTranslations(lang)
  const [difficulty, setDifficulty] = useAtom(difficultyLevelAtom)
  return (
    <div className={clsx(className, 'font-nunito text-white')}>
      <h2 className="mb-4 text-3xl font-bold">
        {t('modal_difficulty.heading')}
      </h2>
      <p className="mb-5">{t('modal_difficulty.paragraph_one')}</p>

      <div className="flex flex-col justify-between">
        <div className="mt-4 flex w-full">
          <Button
            full
            size="small"
            style="outline"
            onClick={() => {
              setDifficulty(DifficultyLevel.NORMAL)
              closeModal()
            }}
            classes={`border-white border-2 p-1 text-xl md:w-full`}
          >
            {t('modal_difficulty.normal')}
          </Button>
        </div>
        <div className="mt-4 flex w-full">
          <Button
            full
            size="small"
            style="outline"
            onClick={() => {
              setDifficulty(DifficultyLevel.HARD)
              closeModal()
            }}
            classes={`border-white border-2 p-1 text-xl md:w-full`}
          >
            {t('modal_difficulty.hard')}
          </Button>
        </div>
      </div>
    </div>
  )
}
