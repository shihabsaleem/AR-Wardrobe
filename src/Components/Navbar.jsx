import { Search } from "@mui/icons-material";
import React from "react";
import "./Style/navbar.scss";
import logo from "./../"

const Navbar = () => {
  return (
    <div className="navbar-Container">
      <div className="navbar-Wrapper">
        <div className="navbar-Left">
          <div className="lang">EN</div>
          <div className="searchNav">
            <input type="text" className="navbar-txt" />

            <Search />
          </div>
        </div>
        <div className="navbar-Center">
          <div className="navbar-logo">
           <img className="logo" src="./"
          </div>
        </div>
        <div className="navbar-Right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          molestias nesciunt dolorum, in deserunt eum accusamus consectetur
          corporis dolorem veniam possimus sapiente dignissimos commodi,
          distinctio officia, et magni rerum minus?
        </div>
      </div>
    </div>
  );
};

export default Navbar;
