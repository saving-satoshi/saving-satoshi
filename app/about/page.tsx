import { Footer } from "components/Footer";
import { Navbar } from "components/NavBar";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="2xl:w-1/2 lg:w-9/12 m-auto px-6">
        <div className="text-white flex justify-center flex-col">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-center pt-20 px-2.5">
            About
          </h1>
          <p className="text-3xl text-center mt-4">
            The year is 2139. The very last bitcoin is slated to be mined in two
            weeks. For months, a final countdown has been taking place in
            Satoshi Square for the last block when there will officially be no
            more bitcoin issued.
          </p>

          <p className="text-xl mt-8 font-nunito">
            And then suddenly, the network comes to a crawl. Instead of the normal
            ten-minute block interval, blocks are coming in just a few times a day,
            if not longer. Your mom's bitcoin node stops syncing. The media starts
            reporting on the situation. It's everywhere on social media.
            <br />
            <br />
            The price of bitcoin is falling. There is a knock at your door, and when
            you open it, a yellowed, age-weathered envelope has been left for you.
            There's no name or return address. What could be inside?
          </p>

          <h3 className="text-4xl mt-8">Built with love</h3>
          <p className="text-xl mt-2 font-nunito">
            Bitcoin is serious, but this game is designed to be fun. Saving
            Satoshi is a light-hearted first point of contact for developers of
            all ages curious about bitcoin development. Saving Satoshi has a mix
            of technical text and code-based challenges, but the challenges
            should be doable for anyone with basic coding skills.
          </p>

          <h3 className="text-4xl mt-8">How to contribute</h3>
          <p className="text-xl mt-2 font-nunito">
            Open an issue or a PR on <a target="_blank" rel="noreferrer nofollow" href="https://github.com/saving-satoshi/saving-satoshi">GitHub</a>. All suggestions are welcome,
            including content changes, game mechanics – really anything.
          </p>

          <h3 className="text-4xl mt-8">Enjoy!</h3>
          <p className="text-xl mt-2 font-nunito">
            Contributions by <a target="_blank" rel="noreferrer nofollow" href="https://twitter.com/GBKS">@gbks</a>
            , <a className="hover:underline" target="_blank" rel="noreferrer nofollow" href="https://twitter.com/adamcjonas">@adamcjonas</a>
            , <a className="hover:underline" target="_blank" rel="noreferrer nofollow" href="https://twitter.com/satsie">@satsie</a>
            , <a className="hover:underline" target="_blank" rel="noreferrer nofollow" href="https://github.com/ggwilin">@ggwilin</a>
            , <a className="hover:underline" target="_blank" rel="noreferrer nofollow" href="https://twitter.com/netrebelking">@netrebelking</a>
            , <a className="hover:underline" target="_blank" rel="noreferrer nofollow" href="https://github.com/aureleoules">@aureleoules</a>
            , and many more!
          </p>
        </div>

        <hr className="border-1 border-white/25 mt-12" />
        <div className="text-white justify-center text-center flex-col px-6 pb-12 mt-12">
          <p className="text-xl text-center pt-4 pb-8 font-nunito">
            Now be quick, Satoshi needs you.
          </p>
          <Link
            href="/chapters"
            className="py-2.5 px-12 w-1/2 text-center bg-white text-base-blue text-2xl hover:opacity-80 transition ease-in-out duration-150"
          >
            Start your journey
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
