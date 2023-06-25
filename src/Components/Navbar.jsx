import { Search } from "@mui/icons-material";
import React from "react";
import "./Style/navbar.scss";
import Badge from "@mui/material/Badge";
import logo from "./../Assets/arwlogo.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-Container">
      <div className="navbar-Wrapper">
        <div className="navbar-Left">
          <div className="lang">EN</div>
          <div className="searchNav">
            <input type="text" className="navbar-txt" />

            <Search className="input" />
          </div>
        </div>
        <div className="navbar-Center">
          <div className="navbar-logo">
            <Link to="/">
              <img alt="arwardrobe" className="logo" src={logo} />
            </Link>
          </div>
        </div>
        <div className="navbar-Right">
          <button onClick={()=>window.open('./examples/index.html','_blank')}>Try Now</button>
          <Link to="/login" className="navbar-menu">
            Login
          </Link>
          <Link to="/register" className="navbar-menu">
            Register
          </Link>
          <Link to="/cart" className="navbar-menu">
            <Badge className="navbar-menu" badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
