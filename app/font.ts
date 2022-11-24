import { Caveat_Brush as cBrush, Inter, Nunito } from '@next/font/google'

export const cBrushFont = cBrush({
    weight: '400',
    variable: '--font-caveat-brush',
    preload: true
})

export const interFont = Inter({
    weight: ['400', '700'],
    variable: '--font-inter',
    preload: true
})

export const nunitoFont = Nunito({
    weight: ['400', '700'],
    variable: '--font-nunito',
    preload: true
})

