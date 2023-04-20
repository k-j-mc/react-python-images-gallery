import React, { useState } from "react";

import { AppBar, Box, IconButton, Toolbar } from "@mui/material/";

import NavMenu from "./NavMenu";

import Icons from "../Icons";


const NavBar = (props) => {

  const { theme, setTheme, title } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="appBar"
        sx={{ backgroundColor: "black" }}
      >
        <Toolbar>
          <h2>{title}</h2>
          <IconButton onClick={handleOpenMenu} style={{ marginLeft: "auto" }}>
            {openMenu === false ? <Icons.Menu /> : <Icons.CloseMenu />}
          </IconButton>
          <NavMenu
            theme={theme}
            setTheme={setTheme}
            openMenu={openMenu}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
        </Toolbar>
      </AppBar>
      <div className="appBarShadow" />
    </Box>
  );
};

export default NavBar;
