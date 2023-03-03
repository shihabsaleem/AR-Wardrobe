import { Search } from "@mui/icons-material";
import React from "react";
import "./Style/navbar.scss";
import Badge from "@mui/material/Badge";
import logo from "./arwlogo.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar-Container">
      <div className="navbar-Wrapper">
        <div className="navbar-Left">
          <div className="lang">EN</div>
          <div className="searchNav">
            <input type="text" className="navbar-txt" />

            <Search className="input"/>
          </div>
        </div>
        <div className="navbar-Center">
          <div className="navbar-logo">
            <img alt="arwardrobe" className="logo" src={logo} />
          </div>
        </div>
        <div className="navbar-Right">
          <div className="navbar-menu">Sign In</div>
          <div className="navbar-menu">Register</div>
          <Badge className="navbar-menu" badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
