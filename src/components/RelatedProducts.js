import React from "react";
import { dummyProducts } from "@/assets/assets";
import Product from "./Product";
function RelatedProducts({ category }) {
  console.log(dummyProducts);
  const currentCategoryItems = dummyProducts.filter((item) => {
    return item.category === category;
  });
  console.log(currentCategoryItems);
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
      {currentCategoryItems.map((item, index) => (
        <Product
          key={index}
          id={item._id}
          offerPrice={item.offerPrice}
          src={item.image[0].src}
          text={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default RelatedProducts;
