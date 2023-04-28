import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const imagesFetch = createAsyncThunk("imagesFetch", async () => {
	const response = await axios
		.get("http://127.0.0.1:5050/images")
		.then((response) => response.data)
		.catch((error) => error);

	return response;
});

export const imagesFetchSlice = createSlice({
	name: "imageFetch",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(imagesFetch.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(imagesFetch.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = "succeeded";
		});

		builder.addCase(imagesFetch.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default imagesFetchSlice.reducer;
