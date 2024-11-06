'use client'

import Icon from 'shared/Icon'
import { i18n } from 'i18n/config'
import locales from 'i18n/locales'
import { useState, useRef, useEffect, use } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLang, usePathData, useTranslations } from 'hooks'
import clsx from 'clsx'
import Link from 'next/link'

function generateNewUrl(pathname, language) {
  const languageCodes = Object.keys(locales).join('|')
  const regexPattern = new RegExp(`^\\/${languageCodes}\\b`)
  const pathnameWithoutLanguage = pathname.replace(regexPattern, '')
  const newUrl = `/${language}${pathnameWithoutLanguage}`
  return newUrl
}

export default function LangSwitch() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      divRef.current &&
      !buttonRef.current.contains(event.target as Node) &&
      !divRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  const { lang } = usePathData()
  const t = useTranslations(lang)

  const handleLanguageClick = (language) => {
    setIsOpen(false)
    router.replace(generateNewUrl(pathname, language))
  }

  return (
    <div className="relative inline-block text-left">
      <div className="h-6 w-6">
        <button
          type="button"
          className="text-grey-300 cursor-pointer"
          aria-label="Choose language"
          aria-haspopup="true"
          aria-expanded={isOpen}
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon="language" className="h-6 w-6" />
        </button>
      </div>

      <div
        className={clsx(
          'absolute right-0 mt-2 w-auto origin-top-right  border border-white border-opacity-25 bg-back shadow-lg',
          {
            block: isOpen,
            hidden: !isOpen,
          }
        )}
        aria-orientation="vertical"
        ref={divRef}
        aria-labelledby="language-menu"
      >
        <div className="py-1">
          {i18n.locales.map((language, index) => (
            // eslint-disable-next-line jsx-a11y/role-supports-aria-props
            <button
              key={index}
              className={clsx(
                'px-5 py-2 text-left font-nunito text-lg font-bold',
                {
                  'text-white': lang == language.locale,
                  'text-white text-opacity-75': lang != language.locale,
                }
              )}
              onClick={() => handleLanguageClick(language.locale)}
              aria-selected={lang == language.locale ? true : false}
            >
              {language.label}
            </button>
          ))}
          <div className="pb-2">
            <Link
              className="whitespace-nowrap px-5 py-2 text-left font-nunito text-lg font-bold text-white text-opacity-75 underline"
              href={
                'https://github.com/saving-satoshi/saving-satoshi/tree/master/i18n'
              }
              target="_blank"
            >
              {t('navbar.your_language')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
