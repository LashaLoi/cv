import Head from "next/head"

import { useEffect } from "react"

import { GlobalStyles } from "theme/global-styles"
import { Root } from "modules/root"
import { ThemeProvider } from "styled-components"

import { ThemeModeProvider } from "theme/context"
import { useTheme } from "hooks/useTheme"
import { useLocalStorage } from "hooks/useLocalStorage"

const Main = () => {
  const { getItem, setItem } = useLocalStorage()
  const theme = useTheme()

  useEffect(() => {
    document.documentElement.lang = "en"
    const item = getItem("mode")

    if (!item) setItem("mode", "dark")
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Root />
    </ThemeProvider>
  )
}

const IndexPage = () => (
  <ThemeModeProvider>
    <Head>
      <title>aliasksei.loi.cv</title>
      <meta charSet="utf-8" />
    </Head>
    <Main />
  </ThemeModeProvider>
)

export default IndexPage
