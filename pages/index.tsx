import { useEffect } from "react"
import { GlobalStyles } from "theme/global-styles"
import { Root } from "modules/root"
import { ThemeProvider } from "styled-components"

import { Mode, ThemeModeProvider } from "theme/context"
import { useTheme } from "hooks/useTheme"
import { useLocalStorage } from "hooks/useLocalStorage"

const Main = () => {
  const { getItem, setItem } = useLocalStorage()
  const theme = useTheme()

  useEffect(() => {
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
    <Main />
  </ThemeModeProvider>
)

export default IndexPage
