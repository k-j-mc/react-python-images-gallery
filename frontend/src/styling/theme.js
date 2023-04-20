import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "montserrat",
      textTransform: "none",
      fontSize: 16,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default theme;
