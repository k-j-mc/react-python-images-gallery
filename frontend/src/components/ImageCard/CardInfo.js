import React from "react";
import { CardContent, Grid, Typography } from "@mui/material";
import Icons from "../Icons";

import "semantic-ui-flag/flag.min.css";

const CardInfo = (props) => {
	const { data } = props;

	const Description = () => {
		if (data.user.description !== null) {
			return <Typography paragraph>{data.description}</Typography>;
		}
	};

	const Biography = () => {
		if (data.user.bio !== null) {
			return <Typography paragraph>About: {data.user.bio}</Typography>;
		}
	};

	const Hireable = () => {
		if (data.user.for_hire !== null) {
			return (
				<Typography paragraph>
					Hireable:{" "}
					{data.user.for_hire === true ? (
						<Icons.True sx={{ marginBottom: "-7px" }} />
					) : (
						<Icons.False sx={{ marginBottom: "-7px" }} />
					)}
				</Typography>
			);
		}
	};

	const Images = () => {
		if (data.user.total_photos !== null) {
			return (
				<Typography paragraph>
					Total images: {data.user.total_photos.toLocaleString()}
				</Typography>
			);
		}
	};

	const Instagram = () => {
		if (data.user.instagram_username !== null) {
			return (
				<Typography paragraph>
					Instagram: {data.user.instagram_username}
				</Typography>
			);
		}
	};

	const Likes = () => {
		if (data.user.total_likes > 0) {
			return (
				<Typography paragraph>
					Total likes: {data.user.total_likes.toLocaleString()}
				</Typography>
			);
		}
	};

	const Location = () => {
		if (data.user.location !== null) {
			return (
				<Typography paragraph>
					Location: {data.user.location}{" "}
					<i className={`${data.user.location.toLowerCase()} flag`} />
				</Typography>
			);
		}
	};

	const Name = () => {
		if (data.user.name !== null) {
			return <Typography paragraph>Name: {data.user.name}</Typography>;
		}
	};

	const Portfolio = () => {
		if (data.user.portfolio_url !== null) {
			return (
				<Typography paragraph>
					Portfolio: {data.user.portfolio_url}
				</Typography>
			);
		}
	};

	const UserName = () => {
		if (data.user.username !== null) {
			return (
				<Typography paragraph>
					Username: {data.user.username}
				</Typography>
			);
		}
	};

	return (
		<CardContent>
			<Description />
			<Typography paragraph>Artist Information</Typography>
			<Name />
			<Biography />
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<UserName />
					<Instagram />
					<Hireable />
				</Grid>
				<Grid item xs={6}>
					<Location />
					<Images />
					<Likes />
				</Grid>
			</Grid>
			<Portfolio />
		</CardContent>
	);
};

export default CardInfo;
