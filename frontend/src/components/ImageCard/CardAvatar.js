import React from "react";
import { Avatar, Tooltip } from "@mui/material";

const CardAvatar = ({ user }) => {
	const stringToColor = (userName) => {
		let hash = 0;
		let i;
		if (userName !== undefined) {
			for (i = 0; i < userName.length; i += 1) {
				hash = userName.charCodeAt(i) + ((hash << 5) - hash);
			}

			let color = "#";

			for (i = 0; i < 3; i += 1) {
				const value = (hash >> (i * 8)) & 0xff;
				color += `00${value.toString(16)}`.slice(-2);
			}

			return color;
		} else {
			return "#FFFFFF";
		}
	};

	const stringAvatar = (userName) => {
		if (userName !== undefined && user.last_name !== null) {
			return {
				sx: {
					bgcolor: stringToColor(userName),
					fontSize: "14px",
				},
				children: `${userName.split(" ")[0][0]}${
					userName.split(" ")[1][0]
				}`,
			};
		} else {
			return {
				sx: {
					bgcolor: stringToColor(userName),
					fontSize: "14px",
				},
				children: userName[0],
			};
		}
	};

	return (
		<Tooltip title={user.name}>
			<Avatar {...stringAvatar(user.name.toUpperCase())} />
		</Tooltip>
	);
};

export default CardAvatar;
