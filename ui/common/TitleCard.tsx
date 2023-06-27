import clsx from 'clsx'

export default function Card({
  title,
  disabled,
}: {
  title: string
  disabled: boolean
}) {
  return (
    <div
      className={clsx('font-nunito text-[15px] font-bold', {
        'text-black/25': disabled,
        'fade-in text-[#EDA081]': !disabled,
      })}
    >
      {title}
    </div>
  )
}
