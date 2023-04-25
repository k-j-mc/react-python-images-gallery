const ThemeStyling = {
	palette: {
		mode: "dark",
		primary: {
			main: "#42a5f5",
		},
		secondary: {
			main: "#ba68c8",
		},
		error: {
			main: "#ef5350",
		},
		warning: {
			main: "#ff9800",
		},
		info: {
			main: "#03a9f4",
		},
		success: {
			main: "#4caf50",
		},
	},
	typography: {
		allVariants: {
			fontFamily: "montserrat",
			textTransform: "none",
			color: "#FFFFFF",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 28,
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#111111",
				},
			},
		},
	},
};

export default ThemeStyling;
