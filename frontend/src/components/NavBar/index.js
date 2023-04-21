import React, { useState } from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material/";

import NavMenu from "./NavMenu";

import Icons from "../Icons";


const NavBar = (props) => {

  const { title } = props;

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
      >
        <Toolbar>
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={handleOpenMenu} style={{ marginLeft: "auto" }}>
            {openMenu === false ? <Icons.Menu /> : <Icons.Close />}
          </IconButton>
          <NavMenu
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
