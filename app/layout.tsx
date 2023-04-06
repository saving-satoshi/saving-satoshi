import 'styles/globals.css'
import Fonts from 'components/Fonts'
import { AuthProvider, ProgressProvider } from 'providers'

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
        <AuthProvider>
          <ProgressProvider>{children}</ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
