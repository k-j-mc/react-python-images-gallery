import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import imageSearchReducer from "./imageSearchSlice";

export default configureStore({
	reducer: {
		theme: themeReducer,
		imageSearch: imageSearchReducer,
	},
});
