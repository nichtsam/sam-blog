import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layouts/Layout'
import { ThemeProvider } from 'next-themes'

function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
