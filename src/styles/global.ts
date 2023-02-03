import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  }

  *::before,
  *::after {
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    display: flex !important;
    flex-direction: column;
    min-height: 100vh;
  }
`;
