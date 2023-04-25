import React from "react";
import { Avatar, Box, Card, Skeleton } from "@mui/material/";

const CardSkeleton = () => {
	return (
		<div>
			<Card sx={{ marginTop: "50px" }}>
				<div>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Box sx={{ margin: 1 }}>
							<Skeleton variant="circular">
								<Avatar />
							</Skeleton>
						</Box>
						<Box sx={{ width: "80%" }}>
							<Skeleton width="100%" />
							<Skeleton width="100%" />
						</Box>
					</Box>

					<Skeleton variant="rectangular" width="100%">
						<div style={{ paddingTop: "60%" }} />
					</Skeleton>

					<Box sx={{ width: "100%" }}>
						<Skeleton width="100%" />
						<Skeleton width="100%" />
						<Skeleton width="100%" />
					</Box>
				</div>
			</Card>
		</div>
	);
};

export default CardSkeleton;
