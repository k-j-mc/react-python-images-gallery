import React from "react";

import { Link } from "react-router-dom";

import { Divider, Menu, MenuItem } from "@mui/material";

import Icons from "../Icons";

import "./navBar.css";


const NavMenu = (props) => {

  const { anchorEl, setAnchorEl, openMenu, theme, setTheme } = props;

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Menu 
      anchorEl={anchorEl}
      open={openMenu} 
      onClose={handleCloseMenu}
      className="menu"
      >
      <MenuItem
        onClick={() =>
          setTheme((prevMode) => (prevMode === "Light" ? "Dark" : "Light"))
        }
        className="menuItem"
      >
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
