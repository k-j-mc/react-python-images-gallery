import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://127.0.0.1:5050";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const imageDelete = createAsyncThunk("imageDelete", async (e) => {
	const response = await axios
		.delete(`${API_URL}/images/${e}`)
		.then((response) => response.data)
		.catch((error) => error);

	return response;
});

export const imageDeleteSlice = createSlice({
	name: "imageDelete",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(imageDelete.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(imageDelete.fulfilled, (state, action) => {
			if (action.payload?.deleted_image_id) {
				state.data = action.payload;
				state.status = "succeeded";
			} else {
				state.data = action.payload;
				state.status = "failed";
			}
		});

		builder.addCase(imageDelete.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default imageDeleteSlice.reducer;
