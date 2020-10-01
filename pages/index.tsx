import Head from "next/head"

import { useEffect } from "react"

import { GlobalStyles } from "theme/global-styles"
import { Root } from "modules/root"
import { ThemeProvider } from "styled-components"

import { ThemeModeProvider } from "theme/context"
import { useTheme } from "hooks/useTheme"
import { useLocalStorage } from "hooks/useLocalStorage"

// import { Box } from "components/box"

const Main = () => {
  const { getItem, setItem } = useLocalStorage()
  const theme = useTheme()

  useEffect(() => {
    document.documentElement.lang = "en"

    if (!getItem("mode")) setItem("mode", "dark")
  }, [])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(1)
  //   }

  //   window.addEventListener("scroll", handleScroll)

  //   return () => window.removeEventListener("scroll", handleScroll)
  // })

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
