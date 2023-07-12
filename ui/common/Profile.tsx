import clsx from 'clsx'
import Avatar from 'components/Avatar'
import React from 'react'

export default function Profile({
  children,
  className,
  avatar,
  chip,
  username,
  description,
}: {
  children?: React.ReactNode
  className?: string
  avatar?: string
  chip?: React.ReactElement
  username: string
  description?: string
}) {
  return (
    <div className={clsx('flex w-full flex-col items-center', className)}>
      <div className={clsx('relative', { 'mb-5': chip, 'mb-2': !chip })}>
        <Avatar avatar={avatar} size={100} />
        {chip && (
          <div
            className="absolute flex w-full"
            style={{ top: 'calc(100% - 12px)' }}
          >
            {React.cloneElement(chip, {
              className: clsx(chip.props.className, 'mx-auto'),
            })}
          </div>
        )}
      </div>
      <div className="mb-[15px] flex flex-col gap-4">
        <span className="font-nunito text-2xl font-bold text-white">
          {username}
        </span>
        {description && (
          <span className="font-nunito text-xl font-bold text-white">
            {description}
          </span>
        )}
      </div>
      {children && (
        <div className="flex w-full flex-col gap-[15px] text-white">
          {children}
        </div>
      )}
    </div>
  )
}
