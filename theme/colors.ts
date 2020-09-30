export type Color = "font" | "primary" | "secondary" | "grey" | "pink"

export type Palette = Record<Color, string>

export const darkColors: Palette = {
  font: "#ffffff",
  primary: "#08132a",
  secondary: "#1a1e3b",
  grey: "#a8a8a8",
  pink: "#eb598e"
}

export const lightColors: Palette = {
  font: "#000000",
  primary: "#ffffff",
  secondary: "#1a1e3b",
  grey: "#a8a8a8",
  pink: "#eb598e"
}
