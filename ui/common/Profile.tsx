import clsx from 'clsx'
import Icon from 'shared/Icon'
import Avatar from 'components/Avatar'
import React from 'react'

export default function Profile({
  children,
  className,
  avatar,
  chip,
  username,
  description,
  avatarSize,
}: {
  children?: React.ReactNode
  className?: string
  avatar?: string
  chip?: React.ReactElement | null | undefined
  username: string
  description?: string
  avatarSize?: number
}) {
  return (
    <div
      className={clsx(
        'flex w-full max-w-none flex-col items-center md:max-w-[300px] 2xl:max-w-none',
        className
      )}
    >
      <div className="flex flex-row items-center justify-center gap-x-2.5 text-center sm:flex-col">
        <div
          className={clsx('flex justify-center', {
            'mb-2 flex-col items-center': chip,
            'mb-8': chip === null,
            'mb-2': !chip && chip !== null,
          })}
        >
          {avatar && <Avatar size={avatarSize} avatar={avatar} />}
          {!avatar && (
            <Icon
              icon="avatar"
              className="max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px] text-white md:h-[100px] md:max-h-[100px] md:min-h-[100px] md:min-w-[100px] md:max-w-[100px]"
            />
          )}
          {chip && (
            <>
              {React.cloneElement(chip, {
                className: clsx(chip.props.className, 'mx-auto'),
              })}
            </>
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
      </div>
      {children && (
        <div className="flex w-full flex-col gap-[15px] text-white">
          {children}
        </div>
      )}
    </div>
  )
}
