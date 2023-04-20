import React from "react";

import {
    AppBar,
    IconButton,
    Toolbar}
from "@mui/material/";

import Icons from "../Icons";


const NavBar = ({title}) => {


    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit">
                    <Icons.Menu />
                </IconButton>
                <h2>{title}</h2>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;