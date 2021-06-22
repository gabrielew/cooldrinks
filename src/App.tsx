import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { theme, GlobalStyle } from "./themes";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
