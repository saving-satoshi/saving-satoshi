import { Caveat_Brush, Space_Mono, Nunito } from '@next/font/google'

const cbrush = Caveat_Brush({
  weight: '400',
  variable: '--cbrush-font',
  preload: true,
  display: 'swap',
  subsets: ['latin'],
})

const smono = Space_Mono({
  weight: ['400', '700'],
  variable: '--space-mono-font',
  preload: true,
  display: 'swap',
  subsets: ['latin'],
})

const nunito = Nunito({
  weight: ['400', '700', '900'],
  variable: '--nunito-font',
  preload: true,
  display: 'swap',
  subsets: ['latin'],
})

export default function Fonts() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --cbrush-font: ${cbrush.style.fontFamily};
            --space-mono-font: ${smono.style.fontFamily};
            --nunito-font: ${nunito.style.fontFamily};
          }`,
      }}
    ></style>
  )
}
