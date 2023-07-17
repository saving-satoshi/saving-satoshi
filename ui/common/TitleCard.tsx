import clsx from 'clsx'

export default function TitleCard({
  title,
  disabled,
  className,
  size = 'standard',
}: {
  title: string
  disabled: boolean
  className?: string
  size?: string
}) {
  return (
    <div
      className={clsx(
        className,
        'whitespace-nowrap font-nunito text-[13px] font-bold',
        {
          'text-black/25': disabled,
          'fade-in text-[#EDA081]': !disabled,
          'text-[15px]': size === 'standard',
          'text-[13px]': size === 'small',
        }
      )}
    >
      {title}
    </div>
  )
}
