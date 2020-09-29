import { createGlobalStyle } from "styled-components";

import { Theme } from "theme";

const NBInternationalLightWoff = "/static/fonts/NBInternationalLight.woff";
const NBInternationalLightWoff2 = "/static/fonts/NBInternationalLight.woff2";

const NBInternationalBoldWoff = "/static/fonts/NBInternationalBold.woff";
const NBInternationalBoldWoff2 = "/static/fonts/NBInternationalBold.woff2";

const NBInternationalMonoTTF = "/static/fonts/NBInternationalMono.ttf";

const CheltenhamStdEOT = "/static/fonts/CheltenhamStd.eot";
const CheltenhamStdWoff = "/static/fonts/CheltenhamStd.woff";
const CheltenhamStdWoff2 = "/static/fonts/CheltenhamStd.woff2";

const NBInternationalItalicOtf = "/static/fonts/NBInternationalItalic.otf";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @font-face {
    font-family: 'CheltenhamStd';
    src: url(${CheltenhamStdEOT}) format("embedded-opentype"), url(${CheltenhamStdWoff}) format("woff"), url(${CheltenhamStdWoff2}) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'NBInternational';
    src: url(${NBInternationalBoldWoff}) format("woff"), url(${NBInternationalBoldWoff2}) format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'NBInternational';
    src: url(${NBInternationalItalicOtf}) format("opentype");
    font-weight: normal;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: 'NBInternational';
    src: url(${NBInternationalLightWoff}) format("woff"), url(${NBInternationalLightWoff2}) format("woff2");
    font-weight: lighter;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'NBInternational-Mono';
    src: url(${NBInternationalMonoTTF}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  h1,h2,h3,h4,h5,h6,p {
    padding: 0;
    margin: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;

    color: ${props => props.theme.colors.evergreen};
    min-width: 375px; /* We lock at 375 min and zoom viewport to fit for smaller devices */
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
