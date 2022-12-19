import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'

//Am i going to to this boilerplate for every view?
// TODO make a factory (or other pattern) to populate component data
async function getTransacting() {
  const slug = 'transacting'
  const data = await allLessons.find(
    (challenge: Lesson) => challenge.slugAsParams === slug
  )
  return data
}

export default async function Transacting() {
  const transacting = await getTransacting()

  return (
    <div className="grid w-screen grid-cols-1 justify-center justify-items-center">
      <div className="flex w-screen items-center px-6 text-white lg:w-1/2 lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          <div
            className="genesis"
            dangerouslySetInnerHTML={{ __html: transacting.body.html }}
          ></div>
          <div className="pt-8">
            <Link
              href="/chapters/chapter-1/transacting/transacting-1"
              className="w-full justify-center bg-white py-2.5 px-12 font-nunito text-xl font-bold text-base-blue transition duration-150 ease-in-out hover:opacity-75 md:w-auto"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
