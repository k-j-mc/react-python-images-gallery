import React, { forwardRef } from "react";

import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DoneIcon from "@mui/icons-material/Done";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Icons = {
	Close: forwardRef((props, ref) => <CloseIcon {...props} ref={ref} />),
	DarkMode: forwardRef((props, ref) => <DarkModeIcon {...props} ref={ref} />),
	Down: forwardRef((props, ref) => (
		<KeyboardArrowDownIcon {...props} ref={ref} />
	)),
	Download: forwardRef((props, ref) => <DownloadIcon {...props} ref={ref} />),
	ExpandMore: forwardRef((props, ref) => (
		<ExpandMoreIcon {...props} ref={ref} />
	)),
	False: forwardRef((props, ref) => (
		<CloseIcon {...props} ref={ref} style={{ color: "#ef5350" }} />
	)),

	Favorite: forwardRef((props, ref) => <FavoriteIcon {...props} ref={ref} />),
	LightMode: forwardRef((props, ref) => <LightModeIcon {...props} />),
	Menu: forwardRef((props, ref) => <MenuIcon {...props} ref={ref} />),
	MoreVert: forwardRef((props, ref) => <MoreVertIcon {...props} ref={ref} />),
	Search: forwardRef((props, ref) => (
		<Search {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	Share: forwardRef((props, ref) => (
		<ShareIcon {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	True: forwardRef((props, ref) => (
		<DoneIcon {...props} ref={ref} style={{ color: "#4caf50" }} />
	)),
	Seen: forwardRef((props, ref) => <VisibilityIcon {...props} ref={ref} />),
	Up: forwardRef((props, ref) => (
		<KeyboardArrowUpIcon {...props} ref={ref} />
	)),
};

export default Icons;
