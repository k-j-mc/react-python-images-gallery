import React from "react";

import { Box, CardMedia, IconButton, Modal } from "@mui/material";

import Icons from "../Icons";

const ImageModal = (props) => {
	const { handleClose, imageUrl, open } = props;

	return (
		<Modal open={open} onClose={handleClose} className="imageModal">
			<Box
				style={{
					height: "80%",
					width: "80%",
					top: "10%",
					left: "10%",
					position: "absolute",
					backgroundColor: "inherit",
				}}
			>
				<IconButton
					style={{
						position: "absolute",
						right: "10px",
						margin: "-20px",
					}}
					onClick={handleClose}
				>
					<Icons.Close />
				</IconButton>
				<CardMedia
					component="img"
					image={imageUrl}
					alt="modalImage"
					style={{
						maxHeight: "90%",
						objectFit: "contain",
						margin: "auto",
					}}
				/>
			</Box>
		</Modal>
	);
};

export default ImageModal;
