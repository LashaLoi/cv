export type Color = "font" | "primary" | "secondary" | "grey" | "pink" | "fontDark" | "primaryDark" | "secondaryDark"
export type Palette = Record<Color, string>

export const colors: Palette = {
  fontDark: "#ffffff",
  primaryDark: "#08132a",
  secondaryDark: "#1a1e3b",

  font: "#000000",
  primary: "#ffffff",
  secondary: "#1a1e3b",

  grey: "#a8a8a8",
  pink: "#eb598e"
}
