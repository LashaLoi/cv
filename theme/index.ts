import { fonts, Fonts } from "./typography";
import { colors, Palette } from "./colors";
import { BreakpointsArray } from "./brackpoints";

export * from "./colors";
export * from "./typography";

export type Theme = {
  layers: Record<string, number>;
  breakpoints: BreakpointsArray;
  colors: Palette;
  fonts: Fonts;
  space: string[];
  reducedOpacity: number;
  maxWidths: number[];
};

export const theme: Theme = {
  colors,
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
  breakpoints: new BreakpointsArray([669, 948, 1220]),
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
};
