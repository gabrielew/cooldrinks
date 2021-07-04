import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import { theme, GlobalStyle } from "./themes";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
