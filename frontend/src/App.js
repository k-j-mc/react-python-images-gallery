import React, { useState, useEffect } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";


const App = () => {

  const [theme, setTheme] = useState("Dark");

  const [searchQuery, setSearchQuery] = useState("");

  const styling = createTheme({
    palette: {
      mode: theme.toLowerCase(),
      primary: {
        main: "#1976d2",
      },
    },
    typography: {
      allVariants: {
        fontFamily: "montserrat",
        textTransform: "none",
        fontSize: 16,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
          },
        },
        },
    },
  });

  const handleSearch = () => {
    console.log(searchQuery)
  };


  return (
    <ThemeProvider theme={styling}>
      <CssBaseline />
      <NavBar title="Images Gallery" theme={theme} setTheme={setTheme} />
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </ThemeProvider>
  );
};

export default App;
