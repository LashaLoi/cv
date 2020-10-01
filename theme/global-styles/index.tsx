import { createGlobalStyle } from "styled-components"

import { Theme } from "theme"

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @font-face {
    font-family: "Roboto"; 
    src: url("/fonts/Roboto-Regular.ttf") format('ttf'); 
    font-style: normal; 
    font-weight: normal;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Roboto"; 
    src: url("/fonts/Roboto-Bold.ttf") format('truetype'); 
    font-style: normal; 
    font-weight: bold; 
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Roboto"; 
    src: url("/fonts/Roboto-Italic.ttf") format('truetype');
    font-style: italic;  
    font-weight: normal;  
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
    font-family: "Roboto", sans-serif;

    color: ${props => props.theme.colors.font};
    background-color: ${props => props.theme.colors.primary};
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
`
