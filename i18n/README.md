# Translating Saving Satoshi

We use [Transifex](https://www.transifex.com/joinmarket/jam/) for managing Saving Satoshi's translations.

## For Developers

Our source language, i.e. the language we develop in, is English.
Any missing translations will fall back to using the English translation.
If you add text to the app, make sure not to use plain language in source files.
Instead add any strings to the English translation file:

```
i18n/locales/en/translations.ts
```

### Example

Source File:

```jsx
// components/HelloWorld.tsx

import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HelloWorldComponent() {
  const { t } = useTranslation()

  return <h1>{t('hello_world.heading')}</h1>
}
```

Translation file:

```jsx
// i18n/locales/en/translation.ts

export const translations = {
    hello_world: {
        en: {
            heading: "Hello, world!"
        }
    }
}
```

### Background

Transifex [is connected with our GitHub repo](https://docs.transifex.com/transifex-github-integrations/github-tx-ui).
Whenever new translation strings land on `master` (e.g. when being added as part of a new feature in a PR), [Transifex]() will automatically add those new strings to the Transifex web app.
Whenever translations on Transifex are done and reviewed, Transifex will open a PR on GitHub to integrate newly translated texts into the app.

### Adding a new Language

To add a new language:

1. [Add it](https://docs.transifex.com/projects/adding-and-removing-project-languages) on [Transifex]().
1. Trigger a [manual sync](https://docs.transifex.com/transifex-github-integrations/github-tx-ui#manual-sync) from Transifex to GitHub.
1. Transifex will open a pull request. On this branch, add the new language in `i18n/config.ts`. For example, when adding `de`:

```js
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
} as const

export type Locale = typeof i18n['locales'][number]
```

## Translators

Let us know [on Slack]() or [GitHub](https://github.com/saving-satoshi/saving-satoshi/issues/new) if you would like to help out translating!

### Special Thanks

- Thanks to [joinmarket-webui/jam](https://github.com/joinmarket-webui/jam) for much of the work on this very README and their intellectual work on building a robust and accesibile contiribution method for internationalization.

- Contributors like you that are adding new languages and making Saving Satoshi what it is!
