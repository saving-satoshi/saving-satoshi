import { BoxButton } from 'components/ui/BoxButton'

export const Overview = ({ chapter, children }: { chapter: any, children?: any }) => {
    return (
    <div className="mt-6 font-nunito">
      <div className="text-lg text-white">
        {children}
      </div>
      <div className="flex pt-8 md:w-full">
        <BoxButton
          href={chapter.slug}
          disabled={!chapter.lessons}
        >{chapter.lessons
          ? `Start chapter ${chapter.chapter}`
          : 'Coming soon'}
        </BoxButton>
      </div>
    </div>
  )
}
