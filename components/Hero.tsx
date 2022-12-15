import { Navigate } from './ui/Link'

export const Hero = () => {
  return (
    <div className="homepage-img -mt-20 flex grow items-end justify-center bg-cover bg-fixed bg-[-10em] md:bg-[0]">
      <div className="flex w-screen flex-col justify-center bg-gradient-to-b from-base-blue/0 to-base-blue/100 p-10 font-cbrush text-white">
        <h1 className="text-center text-6xl sm:text-7xl lg:text-8xl">
          Saving Satoshi
        </h1>
        <p className="text-center text-2xl sm:text-3xl lg:text-4xl">
          Code your way through the mysteries of bitcoin.
        </p>
        <div className="flex grid grid-cols-1 justify-center pt-8  pb-2 sm:pb-10 md:grid-cols-2 md:space-x-5">
          <div className="flex items-center justify-center sm:justify-end">
            <Navigate href="/chapters" text="Start your journey" />
          </div>
          <div className="flex justify-center pt-4 sm:justify-start md:pt-0">
            <Navigate href="/about" text="Tell me more" />
          </div>
        </div>
      </div>
    </div>
  )
}
