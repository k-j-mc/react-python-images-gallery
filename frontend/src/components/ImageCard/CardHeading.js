import React, { useState } from "react";
import {
	CardHeader,
	CardMedia,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";

import CardAvatar from "./CardAvatar";

import Icons from "../Icons";

const CardHeading = (props) => {
	const { data, handleImageLoading } = props;

	const menuItems = [
		{ name: "Full", link: data.urls.full },
		{ name: "Raw", link: data.urls.raw },
		{ name: "Regular", link: data.urls.regular },
	];

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<CardHeader
				avatar={<CardAvatar user={data.user} />}
				action={
					<>
						<IconButton aria-label="settings" onClick={handleClick}>
							<Icons.MoreVert />
						</IconButton>
						<Menu
							id="options-mennu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
						>
							{menuItems.map((d, i) => (
								<MenuItem
									key={i.toString()}
									onClick={handleClose}
								>
									View {d.name} resolution image
								</MenuItem>
							))}
						</Menu>
					</>
				}
				title={data.title}
				subheader={new Date(data.created_at).toLocaleDateString(
					undefined,
					{
						year: "numeric",
						month: "long",
						day: "numeric",
					}
				)}
			/>
			<CardMedia
				component="img"
				height="194"
				image={data.urls.small}
				alt={data.title}
				style={{ marginBottom: "30px" }}
				onLoad={() => handleImageLoading(data.id)}
			/>
		</div>
	);
};

export default CardHeading;
