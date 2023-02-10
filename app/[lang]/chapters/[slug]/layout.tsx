import Navbar from 'components/Navbar'
import { chapters } from 'content'

export default async function Layout({ children, params }) {
  const isValidChapter = chapters[params.slug]

  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col blur">
        {isValidChapter && <Navbar params={params} />}
        {children}
      </div>
    </div>
  )
}
