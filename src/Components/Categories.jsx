import React from "react";
import "./Style/categories.scss";
import { item } from "../data";
import ItemCat from "./ItemCat";

const Categories = () => {
  return (
    <div>
      {item.map((item) => (
        <ItemCat item={item} />
      ))}
    </div>
  );
};

export default Categories;
