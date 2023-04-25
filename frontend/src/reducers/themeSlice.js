import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ThemeStyling from "../styling/ThemeStyling";

const initialState = {
	data: ThemeStyling,
	status: "idle",
	error: null,
};

export const getTheme = createAsyncThunk("getTheme", async (e) => {
	const mode = e.toLowerCase();

	if (e !== undefined) {
		const theme = {
			...initialState.data,
			palette: { ...initialState.data.palette, mode: mode },
			typography: {
				allVariants: {
					...initialState.data.typography.allVariants,
					color: mode === "light" ? "#000000" : "#FFFFFF",
				},
			},
			components: {
				...initialState.data.components,
				MuiAppBar: {
					styleOverrides: {
						root: {
							backgroundColor:
								mode === "light" ? "#F7F7F7" : "#111111",
						},
					},
				},
			},
		};

		return theme;
	} else {
		return ThemeStyling;
	}
});

export const themeSlice = createSlice({
	name: "theme",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(getTheme.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(getTheme.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = "succeeded";
		});

		builder.addCase(getTheme.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default themeSlice.reducer;
