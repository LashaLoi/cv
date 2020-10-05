import { useThemeModeContext } from "theme/context"
import { Color } from "theme/colors"
import { theme } from "theme"

export const getColorByThemeMode = (colorKey: Color, reverse = false) => {
  const { darkMode } = useThemeModeContext()

  const mode = reverse ? !darkMode : darkMode

  const key = mode ? `${colorKey}Dark` : colorKey

  return theme.colors[key as Color]
}
