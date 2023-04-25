import React from "react";

import { Button, Grid, Typography } from "@mui/material";

import { ReactComponent as Logo } from "../../images/Images Gallery.svg";

const NoResults = () => {
	return (
		<Grid
			container
			spacing={2}
			style={{
				display: "flex",
				alignItems: "center",
				textAlign: "center",
			}}
		>
			<Grid item xs={2} />
			<Grid item xs={8}>
				<Logo />
				<Typography variant="h6" style={{ padding: "50px 0 50px 0" }}>
					Please proceed by searching for images
				</Typography>
				<Button>Unsplash</Button>
			</Grid>
			<Grid item xs={2} />
		</Grid>
	);
};

export default NoResults;
