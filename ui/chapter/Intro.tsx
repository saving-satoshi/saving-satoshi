import { Title } from 'ui'

export default function Intro({
  children,
  heading,
}: {
  children: any
  heading?: string
}) {
  return (
    <div className="my-auto grid w-full grid-cols-1 justify-center justify-items-center">
      <div className="flex w-full items-center px-6 text-white lg:w-1/2 lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          {heading && <Title>{heading}</Title>}
          {children}
        </div>
      </div>
    </div>
  )
}
