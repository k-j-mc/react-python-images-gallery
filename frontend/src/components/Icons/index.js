import React, { forwardRef } from "react";

import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";


const Icons = {
  
  Close: forwardRef((props, ref) => <CloseIcon {...props} ref={ref} />),
  CloseMenu: forwardRef((props, ref) => <CloseIcon {...props} ref={ref} style={{ color: "#fff" }} />),
  DarkMode: forwardRef((props, ref) => <DarkModeIcon {...props} ref={ref} />),
  LightMode: forwardRef((props, ref) => <LightModeIcon {...props} />),
  Menu: forwardRef((props, ref) => <MenuIcon {...props} ref={ref} style={{ color: "#fff" }} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),

};


export default Icons;