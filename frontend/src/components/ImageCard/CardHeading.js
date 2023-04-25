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
	const { data, handleDeleteImage, handleImageLoading } = props;

	const menuItems = [
		{ name: "View Full resolution", link: data.urls.full },
		{ name: "View Raw resolution", link: data.urls.raw },
		{ name: "View Regular resolution", link: data.urls.regular },
		{ name: "Remove ", link: data.urls.regular },
	];

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuClick = (e) => {
		if (e.actionId === 3) {
			handleDeleteImage(e.imageId);
		}
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
									onClick={() =>
										handleMenuClick({
											imageId: data.id,
											actionId: i,
										})
									}
								>
									{d.name} image
								</MenuItem>
							))}
						</Menu>
					</>
				}
				title={data.title.toUpperCase()}
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
				height="250"
				image={data.urls.small}
				alt={data.title}
				style={{ marginBottom: "30px" }}
				onLoad={() => handleImageLoading(data.id)}
			/>
		</div>
	);
};

export default CardHeading;
