import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import imageSearchReducer from "./imageSearchSlice";
import imagesFetchReducer from "./imagesFetchSlice";
import imageSaveReducer from "./imageSaveSlice";

export default configureStore({
	reducer: {
		theme: themeReducer,
		imageSearch: imageSearchReducer,
		imagesFetch: imagesFetchReducer,
		imageSave: imageSaveReducer,
	},
});
