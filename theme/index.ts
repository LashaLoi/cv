import CSS from "csstype";

import { fonts, Fonts } from "./typography";
import { darkColors, lightColors, Palette } from "./colors";
import { useThemeModeContext } from "./context";

export * from "./colors";
export * from "./typography";

export type ColorProps = {
  color?: CSS.Property.Color;
  bg?: CSS.Property.Color;
};

export class BreakpointsArray extends Array<number> {
  xs: number;
  sm: number;
  md: number;
  lg: number;

  constructor() {
    const items = [0, 669, 948, 1220];

    super(...items);

    this.xs = items[0];
    this.sm = items[1];
    this.md = items[2];
    this.lg = items[3];
  }
}

type Layers =
  | "default"
  | "middle"
  | "top"
  | "navigation"
  | "menu"
  | "modalShim"
  | "modal";

export type Theme = {
  layers: Record<Layers, number>;
  breakpoints: BreakpointsArray;
  colors: Palette;
  fonts: Fonts;
  space: string[];
  reducedOpacity: number;
  maxWidths: number[];
};

export const theme = (darkMode: boolean): Theme => ({
  colors: darkMode ? darkColors : lightColors,
  fonts,
  layers: {
    default: 0,
    middle: 1,
    top: 2,
    navigation: 3,
    menu: 4,
    modalShim: 9998 /* the layer below a modal */,
    modal: 9999
  },
  breakpoints: new BreakpointsArray(),
  space: [
    // /////////////////////////////////
    /* DO NOT EVER MODIFY THIS ARRAY */
    // /////////////////////////////////
    "0", // 0: ~0px
    "0.296rem", // 1: ~5px
    "0.444rem", // 2: ~7px
    "0.667rem", // 3: ~11px
    "1rem", // 4: ~16px
    "1.5rem", // 5: ~24px
    "2.25rem", // 6: ~36px
    "3.375rem", // 7: ~54px
    "5.063rem", // 8: ~81px
    "7.594rem" // 9: ~122px
  ],
  reducedOpacity: 0.75,
  maxWidths: [320, 433, 947, 1219, 1439]
});

export const useTheme = () => {
  const { darkMode } = useThemeModeContext();

  return theme(darkMode);
};
