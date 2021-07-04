import { createGlobalStyle } from "styled-components";
import { theme } from ".";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${theme.colors.lightOrange};
    height: 100vh;
    width: 100vw;
    font: 400 16px 'Roboto', sans-serif;
  }

  h1 {
    font-size: ${theme.fonts.sizes.xlarge};
    font-family: ${theme.fonts.families.poppins};
    @media(min-width: ${theme.screen.medium}) {
      font-size: ${theme.fonts.sizes.xxxlarge};
    }
  }

  p {
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.bold};
    font-family: ${theme.fonts.families.poppins};
    @media(min-width: ${theme.screen.medium}) {
      font-size: ${theme.fonts.sizes.large};
    }
  }
`;
