import 'styles/globals.css'
import Fonts from 'components/Fonts'
import AuthProvider from 'providers/AuthProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-cbrush">
        <Fonts />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
