'use-client'

import clsx from 'clsx'
import * as icons from './icons'

export default function Icon({
  className,
  icon,
  title,
  width,
}: {
  className?: string
  icon: string
  title?: string
  width?: string
}) {
  if (!(icon in icons)) {
    return null
  }

  const IconComponent = icons[icon]

  return (
    <div className={clsx(className, 'min-h-2 min-w-2')}>
      <IconComponent className="h-full w-full" title={title} width={width} />
    </div>
  )
}
