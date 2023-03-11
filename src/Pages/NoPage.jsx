import React from "react";
import error404 from "./../Assets/error404.svg";
import "./../Components/Style/error.scss";

const NoPage = () => {
  return (
    <div className="center">
      <div className="notfound">
        <img src={error404} height="500px" alt="crdit rafiki" />
        <p>The Page Not Found</p>
      </div>
    </div>
  );
};

export default NoPage;
