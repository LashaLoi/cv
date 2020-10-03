import Head from "next/head"

import { useEffect } from "react"

import { GlobalStyles } from "theme/global-styles"
import { Root } from "modules/root"
import { ThemeProvider } from "styled-components"

import { ThemeModeProvider } from "theme/context"
import { useTheme } from "hooks/useTheme"
import { useLocalStorage } from "hooks/useLocalStorage"

import { StoreContextProvider } from "store"

const Main = () => {
  const { getItem, setItem } = useLocalStorage()
  const theme = useTheme()

  useEffect(() => {
    document.documentElement.lang = "en"

    if (!getItem("mode")) setItem("mode", "dark")
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
    <StoreContextProvider>
      <Head>
        <title>aliaksei.loi.cv</title>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/apple-touch-icon.jpg"></link>
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/assets/favicon.ico"></link>
      </Head>
      <Main />
    </StoreContextProvider>
  </ThemeModeProvider>
)

export default IndexPage
