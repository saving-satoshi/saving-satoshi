import Navbar, { NavbarMobile } from 'components/Navbar'
import { chapters } from 'content'

export default function Layout({ children, params }) {
  const isValidChapter = chapters[params.slug]

  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col bg-back/75 drop-shadow-3xl backdrop-blur-4xl">
        <div className="md:hidden">
          <NavbarMobile params={params} />
        </div>
        <div className="hidden md:block">
          <Navbar params={params} />
        </div>
        {children}
      </div>
    </div>
  )
}
