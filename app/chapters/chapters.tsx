import { ChapterOverview } from 'components/ChapterOverview'
import chapters from './chapters.json';

export async function Chapters() {
  return (
    <div>
      <ChapterOverview odd chapter={chapters[0]}>
        <p>
          The year is 2139. The very last bitcoin is slated to be mined in two weeks. For months, a final countdown has been taking place in Times Square for the last block when there will be officially no more bitcoin issued.
        </p>
        <p>
          And then suddenly, the network comes to a crawl. Instead of the normal ten-minute block interval, blocks are coming in just a few times a day, if not longer. Your mom’s bitcoin node stops syncing. The media starts reporting on the situation. It's everywhere on social media.
        </p>
        <p>
          The price of bitcoin is falling. There is a knock at your door, and when you open it, a yellowed, age-weathered envelope has been left for you. There’s no name or return address. What could be inside?
        </p>
      </ChapterOverview>
      <ChapterOverview even chapter={chapters[1]}>
        <p>
          The network outage has to be related to the block subsidy. There’s no way this is a coincidence.
        </p>
        <p>
          You hop on your computer to do some research on mining when you notice something unusual about the few blocks that are being mined. They all seem to be coming from the same place, possibly even the same mining pool. What happened to the rest of the miners?
        </p>
      </ChapterOverview>
      <ChapterOverview odd chapter={chapters[2]}>
        <p>
          Phew, that was close. You are still shaking from your battle against Amestris, yet relieved that a victory was possible.
        </p>
        <p>
          As you settle at your desk, you take a deep breath and drift off to replay the day’s events. Your hands keep themselves busy playing with the mysterious envelope, as you wonder who sent it. Who still uses envelopes anyways, it’s 2139 after all. Even more curious is that there is a stamp on it, from 2008...could this be another hint?
        </p>
        <p>
          Suddenly, you realize that you never claimed the block rewards from your competition with Amestris. Your bitcoin wallet is running low, so now’s a good time to top it up again.
        </p>
      </ChapterOverview>
    </div>
  )
}
