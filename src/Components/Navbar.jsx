import React from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "./../Assets/arwlogo.svg";
import "./Style/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-Container">
      <div className="navbar-Wrapper">
        <div className="navbar-Left">
          <Link to="/login" className="navbar-menu">
            Login
          </Link>
          <Link to="/register" className="navbar-menu">
            Register
          </Link>
        </div>

        <div className="navbar-Center">
          <div className="navbar-logo">
            <Link to="/">
              <img alt="arwardrobe" className="logo" src={logo} />
            </Link>
          </div>
        </div>

        <div className="navbar-Right">
          <Link to="/cart" className="navbar-menu">
            <Badge className="navbar-badge" badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon className="navbar-icon" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
