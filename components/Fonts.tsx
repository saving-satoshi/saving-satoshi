import { Caveat_Brush as cBrush, Inter, Nunito } from '@next/font/google'

const cbrush = cBrush({
    weight: '400',
    variable: '--cbrush-font',
    preload: true,
    display: 'swap',
})

const inter = Inter({
    weight: ['400', '700'],
    variable: '--inter-font',
    preload: true,
    display: 'swap'
})

const nunito = Nunito({
    weight: ['400', '700'],
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
                  --inter-font: ${inter.style.fontFamily};
                  --nunito-font: ${nunito.style.fontFamily};
                }`
            }}>
        </style>
    )
}