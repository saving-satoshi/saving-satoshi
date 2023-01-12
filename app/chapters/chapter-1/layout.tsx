import { ChaptersNavbar } from 'components/chapters/ChaptersNavbar'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import chapters from '../chapters.json';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col blur">
        <ChaptersNavbar slug={params.slug} items={chapters[0].lessons} />
        {children}
      </div>
    </div>
  )
}
