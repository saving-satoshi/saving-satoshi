'use client'

import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { useHasMounted } from 'hooks'

const DEFAULT_LOCALE = 'en-US'
const enMessages = {
  hello: 'hello',
}

const esMessages = {
  hello: 'hola',
}

const getMessages = (locale) => {
  const truncatedLocale = locale.toLowerCase().split(/[_-]+/)[0]

  switch (truncatedLocale) {
    case 'en':
      return enMessages
    case 'es':
      return esMessages
    default:
      return enMessages
  }
}

export const IntlProvider = ({ children }) => {
  const hasMounted = useHasMounted()
  const getLocale = () => {
    if (typeof navigator === 'undefined' || !hasMounted) {
      return DEFAULT_LOCALE
    }

    return (
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      DEFAULT_LOCALE
    )
  }
  const locale = getLocale()

  return (
    <ReactIntlProvider locale={locale} messages={getMessages(locale)}>
      {children}
    </ReactIntlProvider>
  )
}
