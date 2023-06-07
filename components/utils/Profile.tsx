import Avatar from 'components/Avatar'

export default function Profile({
  avatar,
  name,
  description,
  children,
}: {
  avatar?: string
  name: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-center p-4">
      <Avatar avatar={avatar} />
      <div className="my-5 flex flex-col gap-4">
        <span className="text-xl font-bold text-white">{name}</span>
        {description && <span className="text-xl font-bold text-white">{description}</span>}
      </div>
      {children && <div className="text-xl font-bold text-white">{children}</div>}
      </div>
  )
}
