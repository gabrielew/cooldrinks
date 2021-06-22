import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
