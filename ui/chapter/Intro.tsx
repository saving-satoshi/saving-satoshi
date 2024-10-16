import clsx from 'clsx'

import { Title } from 'ui'

export default function Intro({
  children,
  heading,
  className,
}: {
  children: any
  heading?: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        'grid w-full grid-cols-1 justify-center justify-items-center md:my-auto md:py-8',
        className
      )}
    >
      <div className="flex w-full max-w-screen-lg justify-center px-6 text-white lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          {heading && <Title>{heading}</Title>}
          {children}
        </div>
      </div>
    </div>
  )
}
