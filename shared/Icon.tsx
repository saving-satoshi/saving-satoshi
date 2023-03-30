import clsx from 'clsx'
import * as icons from './icons'

export default function Icon({
  className,
  icon,
}: {
  className?: string
  icon: string
}) {
  if (!(icon in icons)) {
    return null
  }

  const IconComponent = icons[icon]

  return (
    <div className={clsx(className, 'min-w-2 min-h-2')}>
      <IconComponent className="h-full w-full" />
    </div>
  )
}
