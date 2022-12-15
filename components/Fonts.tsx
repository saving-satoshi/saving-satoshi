import { Caveat_Brush, Space_Mono, Nunito } from '@next/font/google'

const cbrush = Caveat_Brush({
    weight: '400',
    variable: '--cbrush-font',
    preload: true,
    display: 'swap',
})

const smono = Space_Mono({
    weight: ['400', '700'],
    variable: '--space-mono-font',
    preload: true,
    display: 'swap'
})

const nunito = Nunito({
    weight: ['400', '700', '900'],
    variable: '--nunito-font',
    preload: true,
    display: 'swap'
})

export default function Fonts() {
    return (
        <style 
            jsx={true}
            global={true}
            dangerouslySetInnerHTML={{
                __html: `
                :root {
                  --cbrush-font: ${cbrush.style.fontFamily};
                  --space-mono-font: ${smono.style.fontFamily};
                  --nunito-font: ${nunito.style.fontFamily};
                }`
            }}>
        </style>
    )
}