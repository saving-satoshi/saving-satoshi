export const themeSelector = (lessons, lessonId, chapters, slug) => {
  const theme =
    lessons[slug]?.[lessonId]?.metadata.secondaryTheme ??
    lessons[slug]?.[lessonId]?.metadata.theme ??
    chapters[slug]?.metadata.secondaryTheme ??
    chapters[slug]?.metadata.theme ??
    'bg-back'

  return theme
}

export const navbarThemeSelector = (lessons, lessonId, chapters, slug) => {
  const transparent =
    lessons[slug]?.[lessonId]?.metadata.theme?.startsWith('bg-transparent')

  const theme = transparent
    ? lessons[slug]?.[lessonId]?.metadata.theme ??
      chapters[slug]?.metadata.theme ??
      'bg-back'
    : 'bg-transparent'

  return theme
}
