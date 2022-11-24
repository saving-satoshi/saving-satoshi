import { cBrushFont as font } from "./font"
import '../styles/globals.css'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className }>
      <head />
      <body>{children}</body>
    </html>
  )
}