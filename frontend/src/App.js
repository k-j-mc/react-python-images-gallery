import { ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/NavBar";

import theme from "./styling/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar title="Images Gallery" />
    </ThemeProvider>
  );
}

export default App;
