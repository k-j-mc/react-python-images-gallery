import React, { useState } from "react";

import { Card, Collapse, Grid } from "@mui/material";

import CardSkeleton from "./CardSkeleton";
import CardHeading from "./CardHeading";
import CardActionButtons from "./CardActionButtons";
import CardInfo from "./CardInfo";

const ImageCard = ({ data, handleDeleteImage, loaded }) => {
	const [expanded, setExpanded] = useState({});

	const handleExpandClick = (id) => {
		setExpanded((expanded) => ({
			...expanded,
			[id]: !expanded[id],
		}));
	};

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
						<Card className="imageCard">
							<div>
								<CardHeading
									data={d}
									handleDeleteImage={handleDeleteImage}
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
