import 'styles/globals.css'
import Fonts from 'components/Fonts'
import { ProgressProvider, ModalProvider, FeatureProvider } from 'contexts'
import Layout from 'components/Layout'
import dynamic from 'next/dynamic'

const DataProvider = dynamic(() => import('contexts/DataContext'), {
  ssr: false, // This is necessary since the data context utilises local storage
})

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
            <ProgressProvider>
              <ModalProvider>
                <Layout>{children}</Layout>
              </ModalProvider>
            </ProgressProvider>
          </DataProvider>
        </FeatureProvider>
      </body>
    </html>
  )
}
