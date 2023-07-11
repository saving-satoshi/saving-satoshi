import clsx from 'clsx'
import Avatar from 'components/Avatar'
import React from 'react'

export default function Profile({
  children,
  className,
  avatar,
  chip,
  name,
  description,
}: {
  children?: React.ReactNode
  className?: string
  avatar?: string
  chip?: React.ReactElement
  name: string
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
      <div className="flex flex-col gap-4">
        <span className="font-nunito text-2xl font-bold text-white">
          {name}
        </span>
        {description && (
          <span className="font-nunito text-xl font-bold text-white">
            {description}
          </span>
        )}
      </div>
      {children && <div className="w-full text-white">{children}</div>}
    </div>
  )
}
