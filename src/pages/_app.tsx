import { ThemeProvider } from "next-themes"
import "../styles/globals.css"
import { TAppPropsWithLayout } from "@/types/layout"
import { GeneralLayout } from "@/components/layouts/GeneralLayout"

const App = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const Layout = Component.Layout || GeneralLayout

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
