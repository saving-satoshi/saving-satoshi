import { Footer } from 'components/ui/Footer'
import { Navbar } from 'components/ui/NavBar'
import { sectionsConfig } from 'config/sections'
import { BoxButton } from 'components/ui/BoxButton'

export default function About() {
  return (
    <div className="w-screen">
      <Navbar items={sectionsConfig.mainNav} />
      <div className="m-auto px-6 lg:w-9/12 2xl:w-1/2">
        <div className="flex flex-col justify-center text-white">
          <h1 className="px-2.5 pt-20 text-center text-6xl sm:text-7xl lg:text-8xl">
            About
          </h1>
          <p className="mt-4 text-center text-3xl">
            The year is 2139. The very last bitcoin is slated to be mined in two
            weeks. For months, a final countdown has been taking place in
            Satoshi Square for the last block when there will officially be no
            more bitcoin issued.
          </p>

          <p className="mt-8 font-nunito text-xl">
            And then suddenly, the network comes to a crawl. Instead of the
            normal ten-minute block interval, blocks are coming in just a few
            times a day, if not longer. Your mom's bitcoin node stops syncing.
            The media starts reporting on the situation. It's everywhere on
            social media.
            <br />
            <br />
            The price of bitcoin is falling. There is a knock at your door, and
            when you open it, a yellowed, age-weathered envelope has been left
            for you. There's no name or return address. What could be inside?
          </p>

          <h3 className="mt-8 text-4xl">Built with love</h3>
          <p className="mt-2 font-nunito text-xl">
            Bitcoin is serious, but this game is designed to be fun. Saving
            Satoshi is a light-hearted first point of contact for developers of
            all ages curious about bitcoin development. Saving Satoshi has a mix
            of technical text and code-based challenges, but the challenges
            should be doable for anyone with basic coding skills.
          </p>

          <h3 className="mt-8 text-4xl">How to contribute</h3>
          <p className="mt-2 font-nunito text-xl">
            Open an issue or a PR on{' '}
            <a
              target="_blank"
              rel="noreferrer nofollow"
              href="https://github.com/saving-satoshi/saving-satoshi"
            >
              GitHub
            </a>
            . All suggestions are welcome, including content changes, game
            mechanics – really anything.
          </p>

          <h3 className="mt-8 text-4xl">Enjoy!</h3>
          <p className="mt-2 font-nunito text-xl">
            Contributions by{' '}
            <a
              target="_blank"
              rel="noreferrer nofollow"
              href="https://twitter.com/GBKS"
            >
              @gbks
            </a>
            ,{' '}
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer nofollow"
              href="https://twitter.com/adamcjonas"
            >
              @adamcjonas
            </a>
            ,{' '}
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer nofollow"
              href="https://twitter.com/satsie"
            >
              @satsie
            </a>
            ,{' '}
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer nofollow"
              href="https://github.com/ggwilin"
            >
              @ggwilin
            </a>
            ,{' '}
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer nofollow"
              href="https://twitter.com/netrebelking"
            >
              @netrebelking
            </a>
            ,{' '}
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer nofollow"
              href="https://github.com/aureleoules"
            >
              @aureleoules
            </a>
            , and many more!
          </p>
        </div>

        <hr className="border-1 mt-12 border-white/25" />
        <div className="mt-12 flex-col justify-center px-6 pb-12 text-center text-white">
          <p className="pt-4 pb-8 text-center font-nunito text-xl">
            Now be quick, Satoshi needs you.
          </p>
          <BoxButton
            text="Start your journey"
            href="/chapters"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
