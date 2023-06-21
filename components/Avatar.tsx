import Icon from 'shared/Icon'
import Image from 'next/image'

export default function Avatar({
  avatar,
  size,
  className,
  onClick,
}: {
  avatar?: string
  size?: number
  id: number
  className?: string
  onClick?: () => void
}) {
  if (!avatar) {
    return <Icon icon="avatar" />
  }

  return (
    <Image
      src={`/assets/avatars/${avatar}.png`}
      alt="Avatar"
      width={size || 30}
      height={size || 30}
      className={`rounded-full ${className}`}
      onClick={onClick}
    />
  )
}
