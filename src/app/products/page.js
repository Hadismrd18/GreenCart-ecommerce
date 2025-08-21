import React from "react";
import { dummyProducts } from "@/assets/assets";
import Product from "@/components/Product";

function page() {    
       
  return (
    <div className="mt-24 px-14">
      <h1 className="font-semibold text-2xl md:text-4xl text-gray-600">All Products</h1>
      <div className=" gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {dummyProducts.map((item, index) => (
          <Product key={index} id={item._id} offerPrice={item.offerPrice} src={item.image[0].src} text={item.name} category={item.category} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default page;
