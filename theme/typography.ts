import {
  compose,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  LetterSpacingProps,
  TextAlignProps,
  textAlign,
  space,
  SpaceProps,
  color
} from "styled-system";

import {
  TextTransformProps,
  TextDecorationProps,
  WhiteSpaceProps
} from "./custom-system-types";

export * from "./custom-system-types";

export interface Fonts {
  header: string;
  paragraph: string;
  mono: string;
}

export const fonts: Fonts = {
  header: "CheltenhamStd",
  paragraph: "NBInternational",
  mono: "NBInternational-Mono"
};

export type TypographyProps = FontFamilyProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  LetterSpacingProps &
  TextAlignProps &
  TextTransformProps &
  TextDecorationProps &
  WhiteSpaceProps &
  SpaceProps;

type TypographySchemes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "pLg"
  | "p"
  | "pSm"
  | "eyebrow"
  | "eyebrowSm";

type FontConfigurations = { [key in TypographySchemes]: TypographyProps };

export const FontConfigurations: FontConfigurations = {
  h1: {
    fontFamily: "header",
    fontSize: ["3.5rem", null, "5.25rem"],
    lineHeight: 0.93,
    letterSpacing: -3,
    fontWeight: "normal"
  },
  h2: {
    fontFamily: "header",
    fontSize: ["2.5rem", null, "4rem"],
    lineHeight: 1.125,
    letterSpacing: -2,
    fontWeight: "normal"
  },
  h3: {
    fontFamily: "header",
    fontSize: ["2rem", null, "2.8125rem"],
    letterSpacing: -2,
    lineHeight: 1.25,
    fontWeight: "normal"
  },
  h4: {
    fontFamily: "header",
    fontSize: ["1.625rem", null, "2.5rem"],
    lineHeight: 1.25,
    letterSpacing: -1,
    fontWeight: "normal"
  },
  h5: {
    fontFamily: "header",
    fontSize: ["1.25rem", null, "1.5rem"],
    lineHeight: ["1.563rem", null, "1.875rem"],
    letterSpacing: -1,
    fontWeight: "normal"
  },
  p: {
    fontFamily: "paragraph",
    fontSize: ["1rem", null, "1.125rem"],
    fontWeight: "lighter",
    lineHeight: 1.55
  },
  pLg: {
    fontFamily: "paragraph",
    fontSize: ["1.125rem", null, "1.5rem"],
    fontWeight: "lighter",
    lineHeight: 1.66,
    letterSpacing: -0.25
  },
  pSm: {
    fontFamily: "paragraph",
    fontSize: ["0.75rem", null, "0.875rem"],
    fontWeight: "lighter",
    lineHeight: 1.55,
    letterSpacing: -0.25
  },
  eyebrow: {
    fontFamily: "mono",
    fontSize: "0.875rem",
    lineHeight: 1,
    letterSpacing: 1.75,
    textTransform: "uppercase",
    fontWeight: "normal"
  },
  eyebrowSm: {
    fontFamily: "mono",
    fontSize: "0.75rem",
    lineHeight: 1,
    letterSpacing: 1.25,
    textTransform: "uppercase"
  }
};

export const typography = compose(
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  textAlign,
  color,
  space
);
