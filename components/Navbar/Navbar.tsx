'use client'

import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import NavbarMobile from './NavbarMobile/NavbarMobile'

export default function Navbar({ params }) {
  return (
    <div className="z-10 flex h-full">
      <NavbarDesktop params={params} />
      <NavbarMobile params={params} />
    </div>
  )
}
