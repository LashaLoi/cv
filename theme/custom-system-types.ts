import { style } from "styled-system";

export const textTransform = style({
  prop: "textTransform",
  cssProperty: "textTransform"
});

export interface TextTransformProps {
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}

export const textDecoration = style({
  prop: "textDecoration",
  cssProperty: "textDecoration"
});

export interface TextDecorationProps {
  textDecoration?:
    | "none"
    | "underline"
    | "overline"
    | "line-through"
    | "initial"
    | "inherit";
}

export const whiteSpace = style({
  prop: "whiteSpace",
  cssProperty: "whiteSpace"
});

export interface WhiteSpaceProps {
  whiteSpace?:
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces"
    | "initial"
    | "inherit";
}

export const flexGrow = style({
  prop: "flexGrow",
  cssProperty: "flexGrow"
});
export interface FlexGrowProps {
  flexGrow?: number;
}
