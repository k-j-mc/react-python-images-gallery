import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const searchImages = createAsyncThunk("searchImages", async (e) => {

  const response = await axios
    .get(
      `https://api.unsplash.com/photos/random/?query=${e}&client_id=${UNSPLASH_KEY}`
    )
    .then((response) => response)
    .catch((error) => error);

  return response.data;
});

export const searchImagesSlice = createSlice({
  name: "imageSearch",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(searchImages.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(searchImages.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });

    builder.addCase(searchImages.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default searchImagesSlice.reducer;
