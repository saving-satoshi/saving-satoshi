import Image from 'next/image'
import UserIcon from 'public/assets/icons/avatar.svg'

export default function Avatar({
  avatar,
  size,
  classes,
  onClick,
}: {
  avatar?: string
  size?: number
  classes?: string
  onClick?: () => void
}) {
  if (!avatar) {
    return <UserIcon />
  }

  return (
    <Image
      src={avatar}
      alt="Avatar"
      width={size || 30}
      height={size || 30}
      className={`rounded-full ${classes}`}
      onClick={onClick}
    />
  )
}
