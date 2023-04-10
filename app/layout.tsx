import 'styles/globals.css'
import Fonts from 'components/Fonts'
import { AuthProvider, ProgressProvider } from 'providers'
import ModalProvider from 'providers/ModalProvider'
import Layout from 'components/Layout'

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
          <ProgressProvider>
            <ModalProvider>
              <Layout>{children}</Layout>
            </ModalProvider>
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
