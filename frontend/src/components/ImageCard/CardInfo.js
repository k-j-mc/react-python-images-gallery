import React from "react";
import { CardContent, Grid, Typography } from "@mui/material";
import Icons from "../Icons";

import "semantic-ui-flag/flag.min.css";

const CardInfo = (props) => {
	const { data } = props;

	return (
		<CardContent>
			<Typography paragraph>
				{data.description && data.description}
			</Typography>
			<Typography paragraph>Artist Information</Typography>
			<Typography paragraph>
				{data.user.name && "Name: " + data.user.name}
			</Typography>
			<Typography paragraph>
				{data.user.bio && "About: " + data.user.bio}
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography paragraph>
						{data.user.username &&
							"Username: " + data.user.username}
					</Typography>
					<Typography paragraph>
						{data.user.instagram_username &&
							"Instagram: " + data.user.instagram_username}
					</Typography>
					<Typography paragraph>
						{data.user.for_hire !== null && (
							<>
								Hireable:
								{data.user.for_hire === true ? (
									<Icons.True sx={{ marginBottom: "-7px" }} />
								) : (
									<Icons.False
										sx={{ marginBottom: "-7px" }}
									/>
								)}
							</>
						)}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography paragraph>
						{data.user.location && (
							<>
								{"Location: " + data.user.location + " "}
								<i
									className={`${data.user.location.toLowerCase()} flag`}
								/>
							</>
						)}
					</Typography>
					<Typography paragraph>
						{data.user.total_photos &&
							"Total images: " +
								data.user.total_photos.toLocaleString()}
					</Typography>
					<Typography paragraph>
						{data.user.total_likes > 0 &&
							"Total likes: " +
								data.user.total_likes.toLocaleString()}
					</Typography>
				</Grid>
			</Grid>
			<Typography paragraph>
				{data.user.portfolio_url &&
					"Portfolio: " + data.user.portfolio_url}
			</Typography>
		</CardContent>
	);
};

export default CardInfo;
