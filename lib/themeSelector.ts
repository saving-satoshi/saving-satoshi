export const themeSelector = (lessons, lessonId, chapters, slug) => {
  const theme =
    lessons[slug]?.[lessonId]?.metadata.secondaryTheme ??
    lessons[slug]?.[lessonId]?.metadata.theme ??
    chapters[slug]?.metadata.secondaryTheme ??
    chapters[slug]?.metadata.theme ??
    'bg-back'

  return theme
}
