import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { searchImages } from "./reducers/imageSearchSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ImageCard from "./components/ImageCard";
import NoResults from "./components/NoResults";

const App = () => {
	const dispatch = useDispatch();

	const themeData = useSelector((state) => state.theme.data);
	const searchData = useSelector((state) => state.imageSearch);

	const [searchQuery, setSearchQuery] = useState("");
	const [imageData, setImageData] = useState([]);
	const [loaded, setLoaded] = useState(true);

	useEffect(() => {
		dispatch(getTheme());
	}, [dispatch]);

	const theme = createTheme(themeData);

	const handleSearch = () => {
		setLoaded(false);
		dispatch(searchImages(searchQuery));
		setSearchQuery("");
	};

	const handleDeleteImage = (id) => {
		setImageData(imageData.filter((image) => image.id !== id));
	};

	useEffect(() => {
		if (searchData.status === "succeeded") {
			setImageData([searchData.data, ...imageData]);
		}
	}, [searchData]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar title="Images Gallery" />
			<SearchBar
				handleSearch={handleSearch}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			{imageData.length > 0 ? (
				<ImageCard
					data={imageData}
					loaded={loaded}
					setLoaded={setLoaded}
					handleDeleteImage={handleDeleteImage}
				/>
			) : (
				<NoResults />
			)}
		</ThemeProvider>
	);
};

export default App;
