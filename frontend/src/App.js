import React, { useState, useEffect } from "react";

import { SnackbarProvider } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./reducers/themeSlice";
import { searchImages } from "./reducers/imageSearchSlice";
import { imagesFetch } from "./reducers/imagesFetchSlice";
import { imageSave } from "./reducers/imageSaveSlice";
import { imageDelete } from "./reducers/imageDeleteSlice";

import { sendNotification } from "./reducers/notificationsSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ImageCard from "./components/ImageCard";
import LoadingCircle from "./components/LoadingCircle";
import NoResults from "./components/NoResults";
import Notifications from "./components/Notifications";

const App = () => {
	const dispatch = useDispatch();

	const themeData = useSelector((state) => state.theme.data);
	const searchData = useSelector((state) => state.imageSearch);
	const fetchedData = useSelector((state) => state.imagesFetch.data);
	const imageDeletion = useSelector((state) => state.imageDelete);

	const [searchQuery, setSearchQuery] = useState("");
	const [imageData, setImageData] = useState([]);
	const [singleImage, setSingleImage] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(true);

	useEffect(() => {
		dispatch(getTheme());
		dispatch(imagesFetch());
	}, []);

	useEffect(() => {
		setImageData(fetchedData);
		setTimeout(() => {
			if (fetchedData.length > 0) {
				handleNotification({
					message: "Images fetched from database!",
					variant: "success",
				});
			}
			setLoaded(true);
		}, [500]);
	}, [fetchedData]);

	const theme = createTheme(themeData);

	const handleSearch = () => {
		setImageLoaded(false);
		dispatch(searchImages(searchQuery));
		setSearchQuery("");
	};

	const handleSaveImage = (id) => {
		const imageToSave = imageData.find((image) => image.id === id);

		const imagePlusData = {
			...imageToSave,
			liked_by_user: true,
			likes: imageToSave.likes + 1,
		};

		if (imageToSave.liked_by_user === false) {
			dispatch(imageSave(imagePlusData));
			setImageData(
				imageData.map((image) =>
					image.id === id
						? {
								...image,
								liked_by_user: true,
								likes: image.likes + 1,
						  }
						: image
				)
			);
			handleNotification({
				message: `Liked ${imagePlusData.title}!`,
				variant: "success",
			});
		} else {
			handleDeleteImage(imagePlusData);
		}
	};

	const handleDeleteImage = (e) => {
		setSingleImage(e);
		dispatch(imageDelete(e.id));
	};

	useEffect(() => {
		if (imageDeletion.status === "succeeded") {
			setImageData(
				imageData.filter((image) => image.id !== singleImage.id)
			);
			handleNotification({
				message: `Unliked ${singleImage.title}!`,
				variant: "success",
			});
		}
		if (imageDeletion.status === "failed") {
			handleNotification({
				message: `Unable to unlike ${singleImage.title}!`,
				variant: "error",
			});
		}
	}, [imageDeletion]);

	useEffect(() => {
		if (searchData.status === "succeeded") {
			setImageData([searchData.data, ...imageData]);
			setImageLoaded(true);
		}
		if (searchData.status === "failed") {
			setImageLoaded(true);

			handleNotification({
				message: "Error: Image not found",
				variant: "error",
			});
		}
	}, [searchData]);

	const handleNotification = (e) => {
		dispatch(sendNotification(e));
	};

	return (
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{
				vertical: "top",
				horizontal: "center",
			}}
			autoHideDuration={2000}
		>
			<Notifications />

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
							handleSaveImage={handleSaveImage}
							handleDeleteImage={handleDeleteImage}
						/>
					) : (
						loaded === true &&
						imageData.length === 0 && <NoResults />
					)}
				</>
			</ThemeProvider>
		</SnackbarProvider>
	);
};

export default App;
