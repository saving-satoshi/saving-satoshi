import clsx from 'clsx'
import Link from "next/link"
import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'

export const ChallengeItem = ({ position, title, slug, path, status }) => {
  const href = path + '/' + slug
  const ComponentType = status.unlocked ? Link : 'p'
  return (
    <ComponentType
      href={href}
      className={clsx(
        'relative justify-left flex w-full px-[15px] py-[11px] font-cbrush text-xl transition duration-150 ease-in-out',
        {
          'border-t border-white/25': position !== 1,
          'bg-black/15': status.unlocked && !status.completed,
          'hover:bg-black/20': status.unlocked
        }
      )}
    >
      <span className="pr-1 opacity-50">{position + '. '}</span>
      {title}
      {!status.unlocked && <LockIcon
        className='
          absolute
          right-[15px]
          top-1/2
          -translate-y-1/2
          opacity-25
        '
      />}
      {status.completed && <CheckIcon
        className='
          absolute
          right-[15px]
          top-1/2
          -translate-y-1/2
          w-[20px]
          h-[20px]
        '
      />}
    </ComponentType>
  )
}
