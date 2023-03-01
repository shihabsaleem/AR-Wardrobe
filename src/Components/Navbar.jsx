import { Search } from "@mui/icons-material";
import React from "react";
import "./Style/navbar.scss";

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          nostrum reprehenderit saepe ipsam cupiditate earum iure cumque, sequi
          quibusdam optio rem quo placeat mollitia ipsa necessitatibus
          temporibus repellat, sunt vitae.
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
