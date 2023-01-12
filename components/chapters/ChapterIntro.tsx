import Image from 'next/image'
import { BoxButton } from 'components/ui/BoxButton'

export default function ChapterIntro({ image, start, children }: {image: string, start: string, children: React.ReactNode}) {
  return (
    <div className="flex w-screen grow">
      <div className="flex grow justify-center px-6 lg:px-0">
        <div className="flex w-full shrink basis-1/2 justify-start text-white ">
          <div className="flex flex-col content-center justify-items-start px-1 py-1 sm:p-10 sm:py-1">
            <div className="intro pt-8">
                {children}
            </div>
            <div className="mt-8">
              <BoxButton
                href={start}
              >Start</BoxButton>
            </div>
          </div>
        </div>
        <div className="flex shrink basis-1/2 justify-center border-l border-white/25">
          <Image
            src={image}
            alt={"Background image"}
            width={1440}
            height={715}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
