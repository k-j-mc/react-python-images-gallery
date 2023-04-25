import React, { useEffect, useState } from "react";

import { Card, Collapse, Grid } from "@mui/material";

import CardSkeleton from "./CardSkeleton";
import CardHeading from "./CardHeading";
import CardActionButtons from "./CardActionButtons";
import CardInfo from "./CardInfo";

const ImageCard = ({ data, loaded, setLoaded }) => {
	const [expanded, setExpanded] = useState({});
	const [imageLoaded, setImageLoaded] = useState({});

	const handleExpandClick = (id) => {
		setExpanded((expanded) => ({
			...expanded,
			[id]: !expanded[id],
		}));
	};

	const handleImageLoading = (id) => {
		setImageLoaded((imageLoaded) => ({
			...imageLoaded,
			[id]: !imageLoaded[id],
		}));
	};

	useEffect(() => {
		setLoaded(true);
	}, [imageLoaded]);

	return (
		<Grid container>
			{loaded === false && (
				<>
					<Grid item xs={1} />
					<Grid item xs={10} md={4} lg={2}>
						<CardSkeleton />
					</Grid>
					<Grid item xs={1} />
				</>
			)}
			{data.map((d, i) => (
				<React.Fragment key={d.id}>
					<Grid item xs={1} />
					<Grid item xs={10} md={4} lg={2}>
						<Card sx={{ marginTop: "50px" }}>
							<div>
								<CardHeading
									data={d}
									handleImageLoading={handleImageLoading}
								/>
								<CardActionButtons
									data={d}
									expanded={expanded[d.id]}
									handleExpandClick={handleExpandClick}
								/>
								<Collapse
									in={expanded[d.id]}
									timeout="auto"
									unmountOnExit
								>
									<CardInfo data={d} />
								</Collapse>
							</div>
						</Card>
					</Grid>
					<Grid item xs={1} />
				</React.Fragment>
			))}
		</Grid>
	);
};

export default ImageCard;
