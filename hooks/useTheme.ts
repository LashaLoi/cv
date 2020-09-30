import { theme } from "theme"
import { useThemeModeContext } from "theme/context"

export const useTheme = () => {
  const { darkMode } = useThemeModeContext()

  return theme(darkMode)
}
