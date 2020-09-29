export type Color =
  | "paleGrey"
  | "lightGrey"
  | "silver"
  | "coolGrey"
  | "silverDark"
  | "gunmetal"
  | "charcoal"
  | "evergreen"
  | "iceBlue"
  | "ice"
  | "paleAqua"
  | "lightTeal"
  | "seafoamBlue"
  | "sandy"
  | "peach"
  | "salmon"
  | "lightSalmon"
  | "melrose"
  | "astralBlue"
  | "white"
  | "darkPrimary"
  | "darkSecondary"
  | "grey";

export type Palette = Record<Color, string>;

export const colors: Palette = {
  paleGrey: "#f9fdfd",
  lightGrey: "#fafafa",
  silver: "#d7dcda",
  coolGrey: "#979e9d",
  silverDark: "#77827e",
  gunmetal: "#586361",

  charcoal: "#2e3c3a",
  evergreen: "#032b24",

  iceBlue: "#f2fafa",
  ice: "#e3f5f2",
  paleAqua: "#c4ece4",
  lightTeal: "#a8d5cc",
  seafoamBlue: "#74c0b1",

  sandy: "#f0ed85",
  peach: "#ffb582",
  salmon: "#f5a495",
  lightSalmon: "#fef8f7",
  melrose: "#cfc6ff",
  astralBlue: "#337ab7",

  white: "#ffffff",
  darkPrimary: "#08132a",
  darkSecondary: "#1a1e3b",
  grey: "#a8a8a8"
};
