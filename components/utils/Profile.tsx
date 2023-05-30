import Avatar from 'components/Avatar'

export default function Profile({
  avatar,
  name,
  description,
  children,
}: {
  avatar: string
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div>
      <Avatar avatar={avatar} />
      <div>
        {name}
        {description}
      </div>
      <div>{children}</div>
    </div>
  )
}
