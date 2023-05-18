'use client'

import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import NavbarMobile from './NavbarMobile/NavbarMobile'

export default function Navbar({ params }) {
  return (
    <>
      <NavbarDesktop params={params} />
      <NavbarMobile params={params} />
    </>
  )
}
