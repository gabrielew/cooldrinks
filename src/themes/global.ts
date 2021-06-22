import { createGlobalStyle } from 'styled-components';
import { theme } from '.';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${theme.colors.background};
  }

  body, input, button {
    font: 400 16px 'Roboto', sans-serif;
  }
`;
