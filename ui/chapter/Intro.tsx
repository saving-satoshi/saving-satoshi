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
      className={`${className} grid w-full grid-cols-1 justify-center justify-items-center md:my-auto`}
      /*{
          'my-auto': mobileCentered,
          'my-8': !mobileCentered,
        }*/
    >
      <div className="flex w-full justify-center px-6 text-white lg:w-1/2 lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          {heading && <Title>{heading}</Title>}
          {children}
        </div>
      </div>
    </div>
  )
}
