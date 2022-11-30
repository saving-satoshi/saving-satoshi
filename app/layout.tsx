import '../styles/globals.css'
import Fonts from "components/Fonts"

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Fonts />
        {children}
        </body>
    </html>
  )
}