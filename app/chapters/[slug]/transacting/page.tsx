import { allLessons, Lesson } from 'contentlayer/generated'
import { BoxButton } from 'components/ui/BoxButton'

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
          <BoxButton
            text="Continue"
            href="/chapters/chapter-1/transacting/transacting-1"
            classes="mt-8"
          />
        </div>
      </div>
    </div>
  )
}
