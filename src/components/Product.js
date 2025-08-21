import React from "react";
import { RiStarFill } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { assets } from "@/assets/assets";
function Product({ src, text, category, price, offerPrice, id }) {
  const newPrice = 0.7 * price;
  return (
    <div >
      <div className="py-3 flex flex-col items-center justify-center gap-3 rounded border-2 p-2 border-gray-100">
       <Link className="w-full flex items-center justify-center" href={`/products/${category}/id/${id}`}> <img src={src} className="w-[70%] hover:scale-105" /></Link>
        <span className="w-full text-start text-gray-400">{category}</span>
        <span className="w-full text-start font-semibold">{text}</span>
        <div className="text-sm w-full md:text-lg flex items-center justify-start gap-1">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarLine />
          <span>(4)</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5">
            <span className="font-bold text-[#4fbf8b]">
              {offerPrice || newPrice}$
            </span>
            <span className="line-through text-gray-600">{price}$</span>
          </div>

          <button className="hover:cursor-pointer flex items-center justify-center gap-1 bg-[#4fbf8b21] rounded p-1 border-[1px] border-[#4fbf8b] text-[#4fbf8b]">
            <img src={assets.cart_icon.src} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
