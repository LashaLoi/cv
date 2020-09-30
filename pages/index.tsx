import { useEffect } from "react"
import { GlobalStyles } from "theme/global-styles"
import { Root } from "modules/root"
import { ThemeProvider } from "styled-components"

import { ThemeModeProvider } from "theme/context"
import { useTheme } from "hooks/useTheme"

const Main = () => {
  const theme = useTheme()

  useEffect(() => {
    const item = localStorage.getItem("mode")

    !item && localStorage.setItem("mode", "dark")
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
    <Main />
  </ThemeModeProvider>
)

export default IndexPage
