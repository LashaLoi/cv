export type Color =
  | "font"
  | "primary"
  | "secondary"
  | "grey"
  | "pink"
  | "fontDark"
  | "primaryDark"
  | "secondaryDark"
  | "white"

export type Palette = Record<Color, string>

export const colors: Palette = {
  fontDark: "#ffffff",
  primaryDark: "#08132a",
  secondaryDark: "#1a1e3b",

  font: "#000000",
  primary: "#ffffff",
  secondary: "#08132a",

  grey: "#a8a8a8",
  pink: "#eb598e",

  white: "#ffffff"
}
