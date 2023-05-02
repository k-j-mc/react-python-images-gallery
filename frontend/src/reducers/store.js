import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import imageSearchReducer from "./imageSearchSlice";
import imagesFetchReducer from "./imagesFetchSlice";
import imageSaveReducer from "./imageSaveSlice";
import imageDeleteReducer from "./imageDeleteSlice";
import notificationsReducer from "./notificationsSlice";

export default configureStore({
	reducer: {
		theme: themeReducer,
		imageSearch: imageSearchReducer,
		imagesFetch: imagesFetchReducer,
		imageSave: imageSaveReducer,
		imageDelete: imageDeleteReducer,
		notifications: notificationsReducer,
	},
});
