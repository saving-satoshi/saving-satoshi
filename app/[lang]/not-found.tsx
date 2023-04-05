import '../../styles/globals.css'
import { Button } from 'shared'
import Topbar from 'components/Topbar'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex h-full grow items-end justify-center">
      <Image
        src="/assets/images/404.jpg"
        alt="page not found"
        fill
        quality={100}
        loading="eager"
        priority
        className="-z-20 h-full w-full object-cover"
      />
      <Topbar />

      <div className="absolute top-1/2 left-1/2 z-10 flex w-screen -translate-x-1/2 -translate-y-1/2 flex-col justify-center">
        <h1 className=" text-center font-cbrush text-6xl text-white">
          Hmm...where are we?
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          It’s not quite clear where or what this place is.
        </h1>
        <h1 className="text-center font-cbrush text-4xl text-white">
          We might have gotten lost in space (or time).
        </h1>

        <div className=" mt-8 text-center font-cbrush text-2xl">
          <Button href="/">Back to safety</Button>
        </div>
      </div>
    </div>
  )
}
