import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { searchImages } from "./reducers/imageSearchSlice";
import { imagesFetch } from "./reducers/imagesFetchSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ImageCard from "./components/ImageCard";
import LoadingCircle from "./components/LoadingCircle";
import NoResults from "./components/NoResults";

const App = () => {
	const dispatch = useDispatch();

	const themeData = useSelector((state) => state.theme.data);
	const searchData = useSelector((state) => state.imageSearch);
	const fetchedData = useSelector((state) => state.imagesFetch.data);

	const [searchQuery, setSearchQuery] = useState("");
	const [imageData, setImageData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(true);

	useEffect(() => {
		dispatch(getTheme());
		dispatch(imagesFetch());
	}, []);

	const theme = createTheme(themeData);

	const handleSearch = () => {
		setImageLoaded(false);
		dispatch(searchImages(searchQuery));
		setSearchQuery("");
	};

	const handleDeleteImage = (id) => {
		setImageData(imageData.filter((image) => image.id !== id));
	};

	useEffect(() => {
		setImageData(fetchedData);
		setTimeout(() => {
			setLoaded(true);
		}, [500]);
	}, [fetchedData]);

	useEffect(() => {
		if (searchData.status === "succeeded") {
			setImageData([searchData.data, ...imageData]);
			setImageLoaded(true);
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
			{loaded === false && <LoadingCircle />}
			<>
				{loaded === true && imageData.length > 0 ? (
					<ImageCard
						data={imageData}
						loaded={imageLoaded}
						setLoaded={setImageLoaded}
						handleDeleteImage={handleDeleteImage}
					/>
				) : (
					loaded === true && imageData.length === 0 && <NoResults />
				)}
			</>
		</ThemeProvider>
	);
};

export default App;
