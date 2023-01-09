import { BoxButton } from './ui/BoxButton'

export const Hero = () => {
  return (
    <div className="homepage-img -mt-20 flex grow items-end justify-center bg-cover bg-fixed bg-[-10em] md:bg-[0]">
      <div className="flex w-screen flex-col justify-center bg-gradient-to-b from-back/0 to-back/100 p-10 font-cbrush text-white">
        <h1 className="text-center text-6xl sm:text-7xl lg:text-8xl">
          Saving Satoshi
        </h1>
        <p className="text-center text-2xl sm:text-3xl lg:text-4xl">
          Code your way through the mysteries of bitcoin.
        </p>
        <div className="flex grid grid-cols-1 justify-center pt-8  pb-2 sm:pb-10 md:grid-cols-2 md:space-x-5">
          <div className="flex items-center justify-center sm:justify-end">
            <BoxButton href="/chapters">Start your journey</BoxButton>
          </div>
          <div className="flex justify-center pt-4 sm:justify-start md:pt-0">
            <BoxButton href="/about" style="outline">Tell me more</BoxButton>
          </div>
        </div>
      </div>
    </div>
  )
}
