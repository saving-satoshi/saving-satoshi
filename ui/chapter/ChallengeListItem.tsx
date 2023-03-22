import clsx from 'clsx'
import Link from 'next/link'

import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'

import { useLang, useLocalizedRoutes, useStatus, useTranslations } from 'hooks'

export default function ChallengeItem({
  position,
  title,
  chapterId,
  lessonId,
}) {
  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)

  const status = useStatus(chapterId, lessonId)
  const href = `${routes.chaptersUrl}/${chapterId}/${lessonId}`
  const ComponentType = status && status.unlocked ? Link : 'p'

  return (
    <ComponentType
      href={href}
      className={clsx(
        'justify-left relative flex w-full px-[15px] py-[11px] font-cbrush text-xl transition duration-150 ease-in-out',
        {
          'border-t border-white/25': position !== 1,
          'bg-black/15': status && status.unlocked && !status.completed,
          'hover:bg-black/20': status && status.unlocked,
        }
      )}
    >
      <span className="pr-1 opacity-50">{position + '. '}</span>
      {t(title)}
      {status && !status.unlocked && (
        <LockIcon className="absolute right-[15px] top-1/2 -translate-y-1/2 opacity-25" />
      )}
      {status && status.completed && (
        <CheckIcon className="absolute right-[15px] top-1/2 h-[20px] w-[20px] -translate-y-1/2" />
      )}
    </ComponentType>
  )
}
