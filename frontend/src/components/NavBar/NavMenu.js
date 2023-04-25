import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { getTheme } from "../../reducers/themeSlice";

import { Link } from "react-router-dom";

import { Divider, Menu, MenuItem } from "@mui/material";

import Icons from "../Icons";

import "./navBar.css";

const NavMenu = (props) => {
	const dispatch = useDispatch();

	const { anchorEl, setAnchorEl, openMenu } = props;

	const [theme, setTheme] = useState("Light");

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleTheme = () => {
		setTheme((prevMode) => (prevMode === "Light" ? "Dark" : "Light"));
		dispatch(getTheme(theme));
	};

	return (
		<Menu
			anchorEl={anchorEl}
			open={openMenu}
			onClose={handleCloseMenu}
			className="menu"
		>
			<MenuItem onClick={handleTheme} className="menuItem">
				{theme === "Dark" ? (
					<Icons.DarkMode className="menuIcon" />
				) : (
					<Icons.LightMode className="menuIcon" />
				)}
				{theme} theme
			</MenuItem>
		</Menu>
	);
};

export default NavMenu;
