import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const searchImages = createAsyncThunk("searchImages", async (e) => {
	const response = await axios
		.get(`${API_URL}/new-image?query=${e}`)
		.then((response) => ({ ...response.data, title: e }))
		.catch((error) => error);

	return response;
});

export const searchImagesSlice = createSlice({
	name: "imageSearch",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(searchImages.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(searchImages.fulfilled, (state, action) => {
			if (action.payload.errors) {
				state.data = action.payload;
				state.status = "failed";
			} else {
				state.data = action.payload;
				state.status = "succeeded";
			}
		});

		builder.addCase(searchImages.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default searchImagesSlice.reducer;
