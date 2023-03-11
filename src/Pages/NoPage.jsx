import { height } from "@mui/system";
import React from "react";
import error404 from "./../Assets/error404.svg";
<style>

.notfound{
    height
}
    </style>

const NoPage = () => {
  return (
    <div className="notfound">
      <img src={error404} alt="crdit rafiki" />
    </div>
  );
};

export default NoPage;
