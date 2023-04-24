'use client'

import { useLocalizedRoutes, useTranslations, useLang } from 'hooks'
import Address from 'components/Navbar/Address'
import TabGroup from 'components/Navbar/NavbarDesktop/TabGroup'
import UserButton from '../UserButton'
import Link from 'next/link'
import HelpLink from '../HelpLink'
import Icon from 'shared/Icon'

export default function NavbarDesktop({ params }) {
  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className="left-0 top-0 hidden w-full md:block">
      <div className="flex h-[70px] items-stretch justify-between border-b border-white/80 text-white">
        <div className="flex">
          <Link
            title={t('shared.back')}
            className="group flex items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            href={routes.chaptersUrl}
          >
            <Icon
              icon="powerOff"
              className="h-[30px] w-[30px] opacity-75 transition duration-100 ease-in-out group-hover:opacity-100"
            />
          </Link>

          <Address />
        </div>
        <nav className="flex items-center">
          <TabGroup params={params} />
          <HelpLink params={params} />
          <UserButton />
        </nav>
      </div>
    </div>
  )
}
