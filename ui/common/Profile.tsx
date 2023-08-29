import clsx from 'clsx'
import Icon from 'shared/Icon'
import Avatar from 'components/Avatar'
import React from 'react'
import { useMediaQuery } from 'hooks'

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
  const isSmallScreen = useMediaQuery({ width: 767 })

  return (
    <div
      className={clsx(
        'flex w-full  max-w-none flex-col items-center md:max-w-[220px] 2xl:max-w-none',
        className
      )}
    >
      <div
        className={clsx('flex justify-center gap-x-2.5 text-center', {
          'flex-col': !isSmallScreen,
          'flex-row items-center': isSmallScreen,
        })}
      >
        <div
          className={clsx('flex justify-center', {
            'mb-5': chip,
            'mb-2': !chip,
          })}
        >
          {avatar && <Avatar avatar={avatar} size={isSmallScreen ? 50 : 100} />}
          {!avatar && (
            <Icon
              icon="avatar"
              className="h-[50px] w-[50px] text-white md:h-[100px] md:w-[100px]"
            />
          )}
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
      </div>
      {children && (
        <div className="flex w-full flex-col gap-[15px] text-white">
          {children}
        </div>
      )}
    </div>
  )
}
