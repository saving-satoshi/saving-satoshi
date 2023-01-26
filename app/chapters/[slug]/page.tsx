import ChapterIntroLayout from "components/templates/ChapterIntro/ChapterIntroLayout"

export default async function Page({ params }) {
  return (
    <ChapterIntroLayout 
      slug={params.slug}
      next="/chapters/chapter-1/genesis"
    />
  )
}
