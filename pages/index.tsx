import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

import { useLocalStorage } from "lib/hooks/useLocalStorage"

import { GlobalStyles } from "theme/global-styles"

import { MotionProvider } from "lib/utils/motion-config"

import { Layout } from "lib/components/layout"

import { Home } from "modules/home"
import { Skills } from "modules/skills"
import { Info } from "modules/info"

import { ThemeModeProvider } from "lib/context/theme-mode"
import { theme } from "theme"

const Main = () => {
  const { getItem, setItem } = useLocalStorage()

  useEffect(() => {
    if (!getItem("mode")) setItem("mode", "dark")
  }, [])

  return (
    <MotionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Home />
          <Skills />
          <Info />
        </Layout>
      </ThemeProvider>
    </MotionProvider>
  )
}

const IndexPage = () => (
  <ThemeModeProvider>
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title>aliaksei.loi.cv</title>
      <meta charSet="UTF-8" />
      <meta property="og:title" content="Aliaksei Loi CV" />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content="https://aliaksei-loi-cv.vercel.app/" />
      <meta property="og:image" content="https://aliaksei-loi-cv.vercel.app/assets/images/main-photo.jpg" />
      <meta property="og:description" content="CV site for Aliaksei Loi" />
      <meta property="twitter:title" content="Aliaksei Loi CV" />
      <meta property="twitter:type" content="blog" />
      <meta property="twitter:url" content="https://aliaksei-loi-cv.vercel.app/" />
      <meta property="twitter:image" content="https://aliaksei-loi-cv.vercel.app/assets/images/main-photo.jpg" />
      <meta property="twitter:description" content="CV site for Aliaksei Loi" />
      <meta name="description" content="CV site for Aliaksei Loi" />
      <meta name="robots" content="index" />
      <meta name="keywords" content="HTML, next.js, react, CV, SEO"></meta>
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/apple-touch-icon.jpg"></link>
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/assets/favicon.ico"></link>
    </Helmet>
    <Main />
  </ThemeModeProvider>
)

export default IndexPage
