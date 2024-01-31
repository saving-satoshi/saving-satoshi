# Translating Saving Satoshi

We use [Github](https://github.com/saving-satoshi/saving-satoshi) for managing Saving Satoshi's translations.

## For Developers

Our source language, i.e. the language we develop in, is English.
Any missing translations will fall back to using the English translation.
If you add text to the app, make sure not to use plain language in source files.
Instead add any strings to the English translation file:

```
i18n/locales/en.ts
```

### Example

To begin you will need to add your choice of locale in the `i18n/config.ts` file, as below.

Config File:

```jsx
// i18n/config.ts
export const i18n = {
  defaultLocale: 'en',
  locales: [
    { locale: 'en', label: 'English' },
    { locale: 'nl', label: 'Dutch' },
    { locale: 'ko', label: '한국어'}
  ],
} as const
```

Then you may begin adding your own translations to test as you go.

Source File:

```jsx
// components/HelloWorld.tsx
import { useTranslation, useLang } from 'react-i18next'

export default function HelloWorldComponent() {
  const lang = useLang()
  const t = useTranslation(lang)

  return <h1>{t('hello_world.heading')}</h1>
}
```

Be sure to add your copy directly to the `/{your-locale}.ts` file and not the component when creating new components.

Translation file:

```jsx
// i18n/locales/ko.ts
const translations = {
  hello_world: {
    heading: '안녕 세상!',
  },
}
```

### Adding a new Language

To add a new language:

1. Look in the `i18n/locales/` folder to determine if there are any existing translations in your preferred language
1. If no translations in your language exist create an [issue](https://github.com/saving-satoshi/saving-satoshi/issues/new/choose) detailing the language and scope you wish to add to on Github.
1. Add the new locale to i18n/config.ts. and create a new folder in `i18n/locales/{your-locale}.ts`
1. Be sure to populate your new language in the `i18n/locales/index.ts` file for easy imports.
1. Open up `i18n/locales/{your-locale}.ts` and start translating.
1. [Submit a pull request](https://github.com/saving-satoshi/saving-satoshi/compare) on Github.
1. Invite reviews and get it merged!

## Translators

Let us know [in Discord](https://discord.gg/DC8Dys4G3h) or [GitHub](https://github.com/saving-satoshi/saving-satoshi/issues/new) if you would like to help out translating!

### Special Thanks

- Thanks to [joinmarket-webui/jam](https://github.com/joinmarket-webui/jam) for much of the work on this very README and their intellectual work on building a robust and accessible contribution method for internationalization.

- Contributors like you that are adding new languages and making Saving Satoshi what it is!
