import { css } from "styled-components";

const sizes: any = {
  xl: "1440px",
  lg: "1220px",
  md: "948px",
  sm: "434px",
  xs: "320px"
};

export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (args: TemplateStringsArray) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(args)};
    }
  `;

  acc[`${label}Max`] = (args: TemplateStringsArray) => css`
    @media (max-width: ${sizes[label]}) {
      ${css(args)};
    }
  `;

  return acc;
}, {});
