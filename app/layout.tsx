import 'styles/globals.css'
import Fonts from 'components/Fonts'
import {
  AuthProvider,
  ProgressProvider,
  DataProvider,
  ModalProvider,
  FeatureProvider,
} from 'providers'
import Layout from 'components/Layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head id="head"></head>
      <body className="font-cbrush">
        <Fonts />
        <FeatureProvider>
          <DataProvider>
            <AuthProvider>
              <ProgressProvider>
                <ModalProvider>
                  <Layout>{children}</Layout>
                </ModalProvider>
              </ProgressProvider>
            </AuthProvider>
          </DataProvider>
        </FeatureProvider>
      </body>
    </html>
  )
}
