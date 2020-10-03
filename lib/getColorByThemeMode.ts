import { theme } from "theme"
import { useThemeModeContext } from "theme/context"
import { Color } from "theme/colors"

export const getColorByThemeMode = (colorKey: string) => {
  const { darkMode } = useThemeModeContext()

  const key = darkMode ? `${colorKey}Dark` : colorKey

  return theme.colors[key as Color]
}
