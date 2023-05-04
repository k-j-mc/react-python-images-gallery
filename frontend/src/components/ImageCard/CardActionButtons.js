import React, { useEffect, useState } from "react";

import { Badge, CardActions, IconButton, Tooltip } from "@mui/material";

import ImageModal from "../ImageModal";

import Icons from "../Icons";

const CardActionButtons = (props) => {
	const { data, expanded, handleExpandClick, handleSaveImage } = props;

	const [tooltipText, setTooltipText] = useState("More");
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		if (expanded === true) {
			setTooltipText("Less");
		} else {
			setTooltipText("More");
		}
	}, [expanded]);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<>
			<CardActions disableSpacing>
				<Tooltip
					title={
						data.liked_by_user === true
							? `You and ${data.likes.toLocaleString()} others like this image`
							: `Liked ${data.likes.toLocaleString()} times by users`
					}
				>
					<IconButton
						aria-label="add to favorites"
						onClick={() => handleSaveImage(data.id)}
					>
						<Icons.Favorite
							color={data.liked_by_user === true ? "error" : ""}
						/>
						<Badge
							badgeContent={data.likes}
							color="error"
							style={{ bottom: 20 }}
							max={999}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip
					title={`Downloaded ${data.downloads.toLocaleString()} times`}
				>
					<IconButton aria-label="share" style={{ marginLeft: 20 }}>
						<Icons.Download />
						<Badge
							badgeContent={data.downloads}
							color="primary"
							style={{ bottom: 20 }}
							max={999}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip title={`Viewed ${data.views.toLocaleString()} times`}>
					<IconButton
						aria-label="seen"
						style={{ marginLeft: 20 }}
						onClick={handleOpenModal}
					>
						<Icons.Seen />
						<Badge
							badgeContent={data.views}
							color="primary"
							style={{ bottom: 20 }}
							max={999}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip title={`${tooltipText} information`}>
					<IconButton
						sx={{ marginLeft: "auto" }}
						onClick={() => handleExpandClick(data.id)}
					>
						{expanded === true ? <Icons.Up /> : <Icons.Down />}
					</IconButton>
				</Tooltip>
			</CardActions>
			<ImageModal
				open={openModal}
				handleClose={handleCloseModal}
				imageUrl={data.urls.full}
			/>
		</>
	);
};

export default CardActionButtons;
