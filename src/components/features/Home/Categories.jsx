import React from "react";
import { item } from "../../../data";
import ProductCard from "../../common/ProductCard";

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {item.map((product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
