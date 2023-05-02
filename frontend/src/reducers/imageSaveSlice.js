import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://127.0.0.1:5050";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const imageSave = createAsyncThunk("imageSave", async (e) => {
	const response = await axios
		.post(`${API_URL}/images`, e)
		.then((response) => response.data)
		.catch((error) => error);

	return response;
});

export const imageSaveSlice = createSlice({
	name: "imageSave",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(imageSave.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(imageSave.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = "succeeded";
		});

		builder.addCase(imageSave.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default imageSaveSlice.reducer;
