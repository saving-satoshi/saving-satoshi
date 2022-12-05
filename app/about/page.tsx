import { Footer } from "components/Footer";
import { Navbar } from "components/NavBar";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="2xl:w-1/2 lg:w-9/12 m-auto">
        <div className="text-white flex justify-center flex-col px-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-center pt-20 px-2.5">
            About
          </h1>
          <p className="text-3xl text-center pt-4 pb-20">
            The year is 2139. The very last bitcoin is slated to be mined in two
            weeks. For months, a final countdown has been taking place in
            Satoshi Square for the last block when there will officially be no
            more bitcoin issued.
          </p>

          <p className="text-xl text-justify pt-4 pb-20">
            And then suddenly, the network goes offline. Payments worldwide
            stop. In the midst of the crisis, someone senses an opportunity. The
            mysterious and world-renowned computer scientist Dr. B.S. Wrong
            steps into the spotlight. He claims that, lo and behold, he's been
            Satoshi Nakamoto all along, and until further notice, the 21 million
            cap has been lifted, and the network will issue 1 million bitcoin
            every day indefinately.
            <br />
            <br />
            There is a knock at your door, and when you open it, a yellowed
            age-weathered envelope has been left for you. Inside, you discover
            the first clue of the most important mission of your life. And so
            beings your journey to save satoshi.
          </p>

          <h3 className="text-4xl">Built with love</h3>
          <p className="text-xl text-justify pt-4 pb-20">
            Bitcoin is serious, but this game is designed to be fun. Saving
            Satoshi is a light-hearted first point of contact for developers of
            all ages curious about bitcoin development. Saving Satoshi has a mix
            of technical text and code-based challenges, but the challenges
            should be doable for anyone with basic coding skills.
          </p>

          <h3 className="text-4xl">How to contribute</h3>
          <p className="text-xl text-justify pt-4 pb-20">
            Open an issue or a PR on <a target="_blank" rel="noreferrer" href="https://github.com/saving-satoshi/saving-satoshi">GitHub</a>. All suggestions are welcome,
            including content changes, game mechanics – really anything.
          </p>

          <h3 className="text-4xl">Enjoy!</h3>
          <p className="text-xl text-justify pt-4 pb-20">
            Contributions by @satsie, @adamcjonas, @gbks, ... add other
            contributors ...
          </p>
        </div>

        <hr className="border-1 border-white w-1/2 m-auto" />
        <div className="text-white justify-center text-center flex-col px-6 mb-10">
          <p className="text-xl text-center pt-4 pb-5">
            Now be quick, Satoshi needs you.
          </p>
          <Link
            href="/chapters"
            className="py-2.5 px-12 w-1/2 text-center bg-white text-base-blue text-2xl"
          >
            Start your journey
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
