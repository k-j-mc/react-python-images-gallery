import React, { useEffect, useState } from "react";

import { Badge, CardActions, IconButton, Tooltip } from "@mui/material";

import Icons from "../Icons";

const CardActionButtons = (props) => {
	const { data, expanded, handleExpandClick } = props;

	const [tooltipText, setTooltipText] = useState("More");

	useEffect(() => {
		if (expanded === true) {
			setTooltipText("Less");
		} else {
			setTooltipText("More");
		}
	}, [expanded]);

	return (
		<CardActions disableSpacing>
			<Tooltip title={`Liked ${data.likes.toLocaleString()} times`}>
				<IconButton aria-label="add to favorites">
					<Icons.Favorite />
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
				<IconButton aria-label="seen" style={{ marginLeft: 20 }}>
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
	);
};

export default CardActionButtons;
