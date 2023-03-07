import Navbar from 'components/Navbar'
import { chapters } from 'content'

export default function Layout({ children, params }) {
  const isValidChapter = chapters[params.slug]

  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden bg-back/75 drop-shadow-3xl backdrop-blur-4xl">
        <Navbar params={params} />
        {children}
      </div>
    </div>
  )
}
