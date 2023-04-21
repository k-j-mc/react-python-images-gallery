import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { searchImages } from "./reducers/imageSearchSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  const dispatch = useDispatch();

  const themeData = useSelector((state) => state.theme.data);
  const searchData = useSelector((state) => state.imageSearch);

  const [searchQuery, setSearchQuery] = useState("");
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    dispatch(getTheme());

    if (searchData.status === "succeeded") {
      setImageData(searchData.data);
    }
  }, [dispatch]);

  const theme = createTheme(themeData);

  const handleSearch = () => {
    dispatch(searchImages(searchQuery));
    setSearchQuery("");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar title="Images Gallery" />
      <SearchBar
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </ThemeProvider>
  );
};

export default App;
